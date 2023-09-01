import {View, Text, ActivityIndicator, SafeAreaView, ScrollView, RefreshControl} from "react-native";
import {useRouter, useLocalSearchParams, Stack} from "expo-router";
import {COLORS} from "../../constants";
import Product from "../../components/common/Product"
import useFetch from "../../util/useFetch";
import {useCallback, useEffect, useState} from "react";

const product = () => {

    const params = useLocalSearchParams();
    // TODO: not found protocol
    const isFound = true

    const {value: prodData, isLoading, error, refetch } = useFetch(`get_product/${params.id}`)

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,

                }}
            />
            <>
                <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/> }
                >
                    {isLoading || !prodData ? (
                            <ActivityIndicator size="large" color='black'/>
                        ) :
                        isFound ? (
                            <Product id={params.id} data={prodData}/>
                        ): (
                            <Text>Not found!</Text>
                        )}

                </ScrollView>
            </>
        </SafeAreaView>
    )

}
export default product;