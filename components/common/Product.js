import {View, Text, Dimensions, FlatList, ScrollView} from "react-native";
import styles from './Product.styles'
import {COLORS, SIZES} from "../../constants";
import Barcode from '@kichiyaki/react-native-barcode-generator';
import Carousel from './Carousel'

const Product = ({id, data}) => {
    if (!data){
        console.log("Data is fked up", data)
    }
    const prodData = JSON.parse(data.product)
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
                    <Text style={styles.priceText}>Price {prodData.priceIncludingVAT}</Text>
                    <Text style={styles.priceText}>Red Price {prodData.redPrice}</Text>
                </View>
            </View>
            <ScrollView
                pagingEnabled
                horizontal
                contentContainerStyle={{marginTop: SIZES.large}}
            >
                <View style={styles.bottomContainer}>
                    <Text>{}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Text>Bottom </Text>
                </View>
            </ScrollView>

        </View>
    )
}

export default Product