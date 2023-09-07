import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    RefreshControl,
    ActivityIndicator,
    TouchableOpacity,
    TextInput, Keyboard
} from "react-native";
import {Stack} from "expo-router";
import {COLORS, SIZES} from "../constants";
import Product from "../components/common/Product";
import styles from "./query.styles"
import SelectDropdown from 'react-native-select-dropdown'
import {brands, prodFamily} from '../assets/Metadata'
import DropdownRow from "../components/common/dropdownRow";

const FreeSearch = () => {
    const attributes = [
        {
            "title": "Brand",
            "options": brands
        },
        {
            "title": "Family",
            "options": prodFamily
        }
    ]
    const dropdownRowRender = (item) => {
        return (
            <View style={{alignItems: "center"}}>
                {item ? (item.map((text, index) => (
                        <Text key={index} numberOfLines={1} adjustsFontSizeToFit>
                            {text}
                        </Text>
                    ))) :
                    <Text style={{color: COLORS.gray}}>
                        Tap to choose
                    </Text>}
            </View>
        )
    }

    const columns = [
        {
            name: "brandFamily",
            component: (
                <View style={{flex: 1, flexDirection: "row"}}>
                    {attributes.map((att) => (
                        <View style={styles.innerContainer} key={att.title}>
                            <Text style={styles.promptText}>
                                {att.title}:
                            </Text>
                            <SelectDropdown data={Object.entries(att.options)}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem)
                                    return selectedItem
                                }}
                                renderCustomizedButtonChild={(item, index) => {
                                    return dropdownRowRender(item);
                                }}
                                renderCustomizedRowChild={(item, index) => {
                                    return dropdownRowRender(item);
                                }}
                                search
                                dropdownStyle={{ borderRadius: SIZES.medium}}
                                buttonStyle={styles.dropdownButton}
                            />
                        </View>

                    ))}
                </View>
            )
        },
        {
            name: "price",
            component: (
                <View style={styles.priceContainer}>
                    <Text style={styles.promptText}>
                        Price:
                    </Text>
                    <TextInput
                        placeholder={"Start"}
                        textAlign={"center"}
                        placeholderTextColor={COLORS.gray}
                        keyboardType={"numeric"}
                        style={{backgroundColor: COLORS.input_gray, flex: 1, borderRadius: SIZES.medium, margin: SIZES.small}}
                    />
                    <Text style={styles.promptText}>
                        to
                    </Text>
                    <TextInput
                        placeholder={"End"}
                        textAlign={"center"}
                        placeholderTextColor={COLORS.gray}
                        keyboardType={"numeric"}
                        style={{backgroundColor: COLORS.input_gray, flex: 1, borderRadius: SIZES.medium, margin: SIZES.small}}
                    />
                </View>
            )
        },
        {
            name: "freeText",
            component: (
                <View style={styles.priceContainer}>
                    <Text style={{textAlign: "center", alignSelf: "center", flex: 0.25, fontWeight: "bold"}}>Free {"\n"}Text</Text>
                    <TextInput
                        placeholder={"Text in product description"}
                        textAlign={"center"}
                        placeholderTextColor={COLORS.gray}
                        style={{backgroundColor: COLORS.input_gray, flex: 1, borderRadius: SIZES.medium, margin: SIZES.small}}
                    />
                </View>
            )
        },
        {
            name: "searchButton",
            component: (
                <View style={{flex: 1}}>
                    <TouchableOpacity style={styles.searchButton}>
                        <Text style={styles.searchTxt}>
                            Search
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }
    ]


    return <SafeAreaView style={{flex: 1, backgroundColor: COLORS.main}}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.main },
                headerShadowVisible: false,
            }}
        />
        <View style={styles.queryContainer}>
            <Text style={styles.title}>Find Products {"\n"}by attributes </Text>
            <View style={styles.table}>
                {columns.map((col) => {
                    return <View style={styles.columnContainer} key={col.name}>
                        {col.component}
                    </View>
                })}
            </View>
        </View>
    </SafeAreaView>
}
export default FreeSearch;