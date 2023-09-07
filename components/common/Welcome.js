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
import FreeSearch from "../../app/query";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



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
        }}
                                 style={{flex: 1}}
        >
        <View style={{flex: 1, backgroundColor: COLORS.main}}>
            <Text style={{textAlign: "center", fontSize: SIZES.large, fontWeight: "bold", marginTop: SIZES.large, color: COLORS.lightWhite}}>
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
                        placeholderTextColor={COLORS.gray}
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
            <Text style={{textAlign: "center", fontSize: SIZES.large, fontWeight: "bold", color: COLORS.lightWhite}}>
                - or -
            </Text>

            <FreeSearch/>
            {scanBtnScanned ? <BarcodeScannerScreen onScanned={handleScanQR}/> : <View/>}

        </View>
        </TouchableNativeFeedback>
    );
};


export default Welcome;