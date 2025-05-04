
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd


df = pd.read_excel("products.xlsx")

hebrew_to_english_map = {
    'מק\'ט': 'productID',
    'תאור מוצר': 'productDescription',
    'משפחה': 'family',
    'תאור משפחה': 'familyDescription',
    'קוד מותג': 'brandCode',
    'מותג': 'brand',
    'מחיר כולל מע\'מ': 'priceIncludingVAT',
    'מחיר ללא מע\'מ': 'priceExcludingVAT',
    'מחיר אדום': 'redPrice',
    'מחיר תצוגה למוכרן': 'displayPriceForSeller',
    'הודעת מוצר למוכרן': 'productMessageForSeller',
    'הודעת מלאי': 'inventoryMessage',
    'הערות למוצר במחירון': 'productCommentsInCatalog',
    'ת. חתימה': 'signatureDate',
    'יצא מגיוון?': 'outOfStock',
    'שם ספק': 'supplierName',
    'מס\' ספק': 'supplierNumber'
}

df.rename(columns=hebrew_to_english_map, inplace=True)
df.set_index('productID', inplace=True)
df.fillna(0)
df["signatureDate"] = df["signatureDate"].astype(str)


app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def prod_by_id(num):
    return str(df.loc[num].to_json(force_ascii=False))

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/get_product/{num}")
async def say_hello(num: str):
    return {"product": prod_by_id(num)}


@app.get("/search")
async def search_products(
    brandCode: int = Query(None, description="Brand code"),
    endPrice: int = Query(None, description="End price"),
    family: int = Query(None, description="Family ID"),
    startPrice: int = Query(None, description="Start price"),
    freeText: str = Query(None, description="Free-text search"),
):
    params = locals().items()

    mask = pd.Series(True, index=df.index)
    for column, entry in params:
        if entry is None: continue
        if column == "family":
            mask &= (df["family"] == str(entry))
        elif column == "brandCode":
            mask &= (df["brandCode"] == brandCode)
        elif column == 'startPrice':
            mask &= (df["priceIncludingVAT"] >= entry)
        elif column == 'endPrice':
            mask &= (df["priceIncludingVAT"] <= entry)
        elif column == "freeText":
            mask &= df["productDescription"].str.contains(entry, case=False)
    return {"results": str(df[mask].sort_values("priceIncludingVAT").reset_index()
                           .to_json(orient='records', force_ascii=False, ))}
