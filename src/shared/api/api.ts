import axios from 'axios';
import type { ProductItem, QueryParams } from '@/shared/types';

const http = axios.create({
  baseURL: 'https://5024b3477d260e64.mokky.dev',
});

export async function getItems(params: QueryParams): Promise<ProductItem[]> {
  return http.get('/items', { params }).then(res => res.data);
}
