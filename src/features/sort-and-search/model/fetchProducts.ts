import type { ProductItem, QueryParams } from '@/shared/types';
import { getCart, getFavorites, getProducts } from '@/shared/api';
import { useProductsStore } from '@/shared/stores';
import { storeToRefs } from 'pinia';

export const fetchProducts = async () => {
  const productsStore = useProductsStore();
  const { filters, products } = storeToRefs(productsStore);

  const params: QueryParams = {};

  if (filters.value.sortBy) {
    params.sortBy = filters.value.sortBy;
  }

  if (filters.value.query) {
    params.title = `*${filters.value.query}*`;
  }

  try {
    let prods: ProductItem[] = await getProducts(params);

    prods = await getFavorites().then(res =>
      prods.map(item => {
        const fav = res.find(i => i.productId === item.id);

        return fav ? { ...item, favId: fav.id } : item;
      })
    );

    products.value = await getCart().then(res =>
      prods.map(item => {
        const cart = res.find(i => i.productId === item.id);

        return cart ? { ...item, cartId: cart.id } : item;
      })
    );
  } catch (e) {
    console.error(e);
  }
};
