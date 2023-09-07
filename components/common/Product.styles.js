import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: "row",
        backgroundColor: '#253F65',
        marginHorizontal: SIZES.small,
        marginTop: SIZES.small,
        height: 200,
        borderRadius: 10
    },
    separatingContainer: (width) => ({
        flex: 1,
        flexDirection: "column",
        width: width,
        alignItems: "center",
        alignSelf: "center",
    }),
    innerContainer: {

    },
    bottomContainer: {
        backgroundColor: '#648BC3',
        marginHorizontal: SIZES.small,
        marginTop: SIZES.large,
        height: 350,
        width: 366,
        borderRadius: 10,
        resizeMode: "cover"
    },
    header: {
        marginTop: SIZES.small,
        marginBottom: SIZES.medium,
        fontWeight: "bold",
        fontSize: SIZES.xLarge,
        textAlign: "center"
    },
    idText:{
        color: COLORS.lightWhite,
        fontWeight: "500",
        fontSize: SIZES.large
    },
    priceText:{
        color: COLORS.lightWhite,
        textAlign: "center",
        fontSize: SIZES.large,
        fontWeight: "500",
        margin: 10
    },
    logoImage: {
        width: "50%",
        height: "20%",
        marginTop: 20,
        backgroundColor: COLORS.white,
        borderRadius: 6
    },
    paginationDots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.medium
    },
    dot: {
        width: 12,
        height: 5,
        margin: 5,
    },
})

export default styles;