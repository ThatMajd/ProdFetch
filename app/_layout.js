import { Stack } from "expo-router";
import {useFonts} from "expo-font";

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
        Roboto_Black: require("../assets/fonts/Roboto/Roboto-Black.ttf"),
        Roboto_Bold: require("../assets/fonts/Roboto/Roboto-Bold.ttf")
    });

    if (!fontsLoaded) {
        return null;
    }
    return <Stack/>
}

export default Layout;