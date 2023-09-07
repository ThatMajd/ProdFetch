import {View, Text, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import {COLORS, SIZES} from "../constants";
import Welcome from "../components/common/Welcome";
import {Stack} from "expo-router";

const Home = () => {
    const routes = ["By ID", "Free Search"]
    return (
        <View style={{flex: 1, backgroundColor: COLORS.main}}>
        <SafeAreaView style={{flex: 1}}>
        <Stack.Screen
            options={{
                headerShown: false,
            }}

        />
            <Welcome/>
        </SafeAreaView>
        </View>
    )
}

export default Home;