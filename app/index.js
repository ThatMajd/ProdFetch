import {View, Text, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import {SIZES} from "../constants";
import Welcome from "../components/common/Welcome";

const Home = () => {
    const routes = ["By ID", "Free Search"]
    return (
        <SafeAreaView style={{flex: 1}}>
            <Welcome/>
        </SafeAreaView>
    )
}

export default Home;