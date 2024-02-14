import axios from 'axios';
import {showLoading } from 'react-global-loading';
const API_BASE_URL = 'https://fakestoreapi.com';

const productData = axios.create({
    baseURL: API_BASE_URL,
});

export const fetchProduct = async () => {
    try {
        showLoading(true);
        const response = await productData.get('/products');
        setTimeout(() => {
            showLoading(false);
          }, 2000);

        return response.data;
    } catch (error) {
        throw error;
    }
};

