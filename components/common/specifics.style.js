import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: SIZES.medium,
    },
    title: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        direction: "rtl"
    },
    pointsContainer: {
        marginVertical: SIZES.small,
        direction: "rtl"
    },
    pointWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginVertical: SIZES.small / 1.25,
    },
    pointDot: {
        width: 6,
        height: 6,
        borderRadius: 6,
        backgroundColor: COLORS.gray2,
        marginTop: 6,
    },
    pointText: {
        fontSize: SIZES.medium - 2,
        color: 'black',
        marginLeft: SIZES.small,
    },
});

export default styles;