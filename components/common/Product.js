import {View, Text, Dimensions, FlatList, ScrollView, Image} from "react-native";
import styles from './Product.styles'
import {COLORS, SIZES} from "../../constants";
import Barcode from '@kichiyaki/react-native-barcode-generator';
import Specifics from "./Specifics";
import logos from "../../constants/logos";
import brandNumLogo from "../../util/maps";
import {useState} from "react";

// 356490 LG TV
// 356635 Samsung TV

const SCREEN_WIDTH = Dimensions.get('window').width;

const Product = ({id, data}) => {
    if (!data){
        console.log("Data is fked up", data)
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const prodData = JSON.parse(data.product)
    const carouselData = [
        {
            title: 'Product Information',
            points: [
                prodData.brand,
                prodData.brandCode,
                prodData.familyDescription,
                prodData.productDescription,
                prodData.productMessageForSeller,
                prodData.productCommentsInCatalog,
            ],
        },
        {
            title: 'Supplier Info',
            points: [
                prodData.supplierName,
                prodData.supplierNumber,
                prodData.inventoryMessage,
            ],
        },
    ];

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.bottomContainer}>
                <Specifics points={item.points} title={item.title} />
            </View>
        );
    };

    return (
        <View style={{flex: 1}}>
            <Text style={styles.header}>Product Data </Text>
            <View style={styles.topContainer}>
                <View style={styles.separatingContainer('40%')}>
                    <View style={{backgroundColor: '#657A98', borderRadius: 4, marginBottom: SIZES.small}}>
                        <Barcode value={id} width={1.4} height={80} style={{margin: 4}}/>
                    </View>
                    <View>
                        <Text style={styles.idText}>{id}</Text>
                    </View>
                </View>
                <View style={styles.separatingContainer('60%')}>
                    <Image source={brandNumLogo[`${prodData.brandCode}`]} style={styles.logoImage}/>
                    <Text style={styles.priceText}>Price {prodData.priceIncludingVAT}</Text>
                    <Text style={styles.priceText}>Red Price {prodData.redPrice}</Text>
                </View>
            </View>
            <FlatList
                data={carouselData}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                onScroll={(event) => {
                    const offsetX = event.nativeEvent.contentOffset.x;
                    const newIndex = Math.floor(offsetX / SCREEN_WIDTH);
                    setCurrentIndex(newIndex);
                }}
            />

            <View style={styles.paginationDots}>
                {carouselData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor: index === currentIndex ? COLORS.main : 'gray' },
                        ]}
                    />
                ))}
            </View>

        </View>
    )
}

export default Product