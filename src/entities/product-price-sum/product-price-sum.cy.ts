import ProductPriceSum from './product-price-sum.vue';
import { useProductsStore } from '@/shared/stores';

describe('ProductPriceSum', () => {
  it('Отображение при наличии товаров в корзине', () => {
    const productsStore = useProductsStore();

    productsStore.products = [
      {
        price: 100,
      },
      {
        price: 200,
        cartId: 1,
      },
      {
        price: 300,
      },
    ];

    cy.mount(ProductPriceSum);

    cy.get('[data-cy=cart-price-sum]').should('have.text', '200 руб.');
  });

  it('Отображение при отсутствии товаров в корзине', () => {
    const productsStore = useProductsStore();

    productsStore.products = [];

    cy.mount(ProductPriceSum);

    cy.get('[data-cy=cart-price-sum]').should('have.text', '0 руб.');
  });
});
