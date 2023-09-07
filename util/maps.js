import logos from "../constants/logos";


const hebrewToEnglishMap = {
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
    'מס\' ספק': 'supplierNumber',
};

const brandNumLogo = {
    "92": logos.lg,
    "61": logos.samsung,
}

export default brandNumLogo;