import axios from 'axios';
import {useEffect, useState} from "react";

// const useFetch1 = async (endpoint, params = {}) => {
//
//
//     const url = `http://127.0.0.1:8000/${endpoint}`;
//
//     try {
//         const response = await axios.get(url, { params });
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };
//
// const fetchProduct = async (id) => {
//     [isLoading, setIsLoading] = useState(false)
//     try {
//         return await callLocalApi(`get_product/${id}`)
//     } catch (error) {
//         console.error('Error fetching product data:', error);
//     }
// };

const useFetch = (endpoint, query) => {
    const [data, setData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    let temp_data = {}

    const url = `http://127.0.0.1:8000/${endpoint}`;

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get(url);
            setData(response.data)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
    }, [data])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };
    return { value: data, isLoading, error, refetch };
};


export default useFetch;