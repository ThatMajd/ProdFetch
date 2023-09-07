import {StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "../constants";

const styles = StyleSheet.create({
    title: {
        margin: SIZES.small,
        fontWeight: "bold",
        fontSize: SIZES.xLarge,
        textAlign: "center"
    },
    queryContainer: {
        flex: 0.92,
        backgroundColor: COLORS.lightWhite,
        margin: SIZES.small,
        borderRadius: 10,
        padding: SIZES.xSmall,
        flexDirection: "column",
    },

    searchTxt: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: SIZES.large,
        textAlign: "center",
        letterSpacing: 2,
    },
    table: {
        flex: 1,
    },
    columnContainer: {
        flex: 1,
        marginVertical: SIZES.small,
        justifyContent: "center",
    },
    inputText: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: SIZES.medium,
        margin: SIZES.small
    },
    promptText:{
        flex: 1,
        fontWeight: "bold",
        fontSize: SIZES.medium,
        textAlign: "center",
        alignSelf: "center",
    },
    innerContainer:{
        flex: 1,
        margin: 2,
        flexDirection: "row",
        alignItems: "center",
    },
    priceContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    dropdownButton: {
        flex: 1,
        borderRadius: SIZES.medium,
        marginHorizontal: SIZES.small,
    },
    searchButton: {
        flex: 1,
        backgroundColor: COLORS.main,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: COLORS.gray,
        marginVertical: SIZES.small,
        marginHorizontal: SIZES.medium,
        justifyContent: "center",
    }
})

export default styles;