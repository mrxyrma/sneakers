import axios from 'axios';
import type { ProductItem, QueryParams } from '@/shared/types';

const http = axios.create({
  baseURL: 'https://5024b3477d260e64.mokky.dev',
});

export async function getProducts(params?: QueryParams): Promise<ProductItem[]> {
  return http.get('/products', { params }).then(res =>
    res.data.map((item: ProductItem) => ({
      ...item,
      favId: null,
      cartId: null,
    }))
  );
}

export async function getFavorites(): Promise<{ id: number; productId: number }[]> {
  return http.get('/favorites').then(res => res.data);
}

export async function addToFavorites(id: number): Promise<{ id: number; productId: number }> {
  return http.post('/favorites', { productId: id }).then(res => res.data);
}

export async function removeFromFavorites(id: number) {
  return http.delete(`/favorites/${id}`).then(res => res.data);
}

export async function getCart(): Promise<{ id: number; productId: number }[]> {
  return http.get('/cart').then(res => res.data);
}

export async function addToCart(id: number): Promise<{ id: number; productId: number }> {
  return http.post('/cart', { productId: id }).then(res => res.data);
}

export async function removeFromCart(id: number) {
  return http.delete(`/cart/${id}`).then(res => res.data);
}

export async function addOrder(order: ProductItem[]): Promise<{ id: number; order: ProductItem[] }> {
  return http.post('/orders', { order }).then(res => res.data);
}
