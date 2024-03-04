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
          }, 1000);

        return response.data;
    } catch (error) {
        throw error;
    }
};

// export async function getAddedCart(id) {
//     await productData.get(`/product:${id}`)
//     let carts = await productData.getItem('/product');
//     let cart = carts.find(cart => cart.id === id);
//     return
// }

