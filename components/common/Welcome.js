import React from "react";
import {useRouter} from "expo-router";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    Image,
    TouchableNativeFeedback,
    Keyboard
} from "react-native";
import {COLORS, SIZES, icons} from "../../constants";
import {useState} from "react";
import styles from "./Welcome.style"
import BarcodeScannerScreen from "../../util/BarcodeScannerScreen";
import useFetch from "../../util/useFetch";

const Welcome = () => {
    const router = useRouter()
    const [productId, setProductId] = useState('');
    const [scanBtnScanned, setScanBtn] = useState(false)

    const handleSearch = () => {
        // Perform search logic with the productId
        console.log(`Searching for product with ID: ${productId}`);
        router.push(`/product/${productId}`)
    };
    const handleFreeSearch = () => {
        console.log("Free Search!");
        router.push('/query')
    }
    const handleScanBtn = () => {
        setScanBtn(true)
        Keyboard.dismiss()
    }
    const handleScanQR = (data) => {
        // TODO check that the QR code is of the supported formats
        setScanBtn(false)
        setProductId(data)
        console.log("Scanned:", productId)
        handleSearch()
    }
    return (
        <TouchableNativeFeedback onPress={() => {
            setScanBtn(false)
            Keyboard.dismiss()
        }}>
        <View style={{flex: 1}}>
            <Text style={{textAlign: "center", fontSize: SIZES.large, fontWeight: "bold", marginTop: SIZES.large}}>
                Find a Product
            </Text>
            <View style={styles.searchContainer}>
                <TouchableOpacity style={styles.qrBtn} onPress={handleScanBtn}>
                    <Image
                        source={icons.qrCode}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={productId}
                        onChangeText={(text) => setProductId(text)}
                        placeholder='Insert Product ID here'
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, alignItems: "center", marginTop: SIZES.medium}}>
                <TouchableOpacity style={styles.freeSearchBtn} onPress={handleFreeSearch}>
                    <Text style={{color: COLORS.lightWhite, fontSize: SIZES.xLarge}}>Free Search</Text>
                </TouchableOpacity>
            </View>
            {scanBtnScanned ? <BarcodeScannerScreen onScanned={handleScanQR}/> : <View/>}
        </View>
        </TouchableNativeFeedback>
    );
};


export default Welcome;