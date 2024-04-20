import ProductCardTemplate from './product-card-template.vue';
import img from '/sneakers/sneakers-1.jpg';

describe('ProductCardTemplate', () => {
  it('Отображение в списке товаров', () => {
    cy.mount(ProductCardTemplate, {
      props: {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        imageUrl: img,
        placement: 'list',
      },
    });
    cy.get('[data-cy=price]').should('exist');
    cy.get('[data-cy=product-card]').should('not.have.class', 'two-columns');
  });

  it('Отображение в корзине', () => {
    cy.mount(ProductCardTemplate, {
      props: {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        imageUrl: img,
        placement: 'cart',
      },
    });
    cy.get('[data-cy=price]').should('not.exist');
    cy.get('[data-cy=product-card]').should('have.class', 'two-columns');
  });
});
