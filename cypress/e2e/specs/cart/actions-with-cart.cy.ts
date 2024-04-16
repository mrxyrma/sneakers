describe('Проверка работы корзины', () => {
  beforeEach(() => {
    cy.intercept('GET', '/products', { fixture: 'products.json' }).as('fetchProducts');
    cy.intercept('GET', '/favorites', { fixture: 'favorites.json' }).as('fetchFavorites');

    cy.visit('/');
  });

  it('Отображение добавленных в корзину товаров', () => {
    cy.intercept('GET', '/cart', { fixture: 'cart.json' }).as('fetchCart');

    cy.get('[data-cy=header-price-sum]').click();

    cy.get('[data-cy=empty-cart]').should('not.exist');
    cy.get('[data-cy=cart-product-list]').should('exist');
    cy.get('[data-cy=order-complete]').should('not.exist');

    cy.get('[data-cy=product-card-in-cart]').should('have.length', 3);
    cy.get('[data-cy=cart-price-sum]').should('have.text', '26799 руб.');
  });

  it('Удаление товаров из корзины', () => {
    cy.intercept('GET', '/cart', { fixture: 'cart.json' }).as('fetchCart');
    cy.intercept('DELETE', '/cart/*', { statusCode: 200 }).as('deleteFromCart');

    cy.get('[data-cy=header-price-sum]').click();

    cy.get('[data-cy=remove-from-cart]').first().click();
    cy.get('[data-cy=remove-from-cart]').first().click();

    cy.get('[data-cy=product-card-in-cart]').should('have.length', 1);
    cy.get('[data-cy=cart-price-sum]').should('have.text', '11500 руб.');

    cy.get('[data-cy=remove-from-cart]').click();

    cy.get('[data-cy=empty-cart]').should('exist');
    cy.get('[data-cy=cart-product-list]').should('not.exist');
    cy.get('[data-cy=order-complete]').should('not.exist');
  });

  it('Отображение пустой корзины и её закрытие', () => {
    cy.intercept('GET', '/cart', []).as('fetchCart');

    cy.get('[data-cy=header-price-sum]').click();

    cy.get('[data-cy=empty-cart]').should('exist');
    cy.get('[data-cy=cart-product-list]').should('not.exist');
    cy.get('[data-cy=order-complete]').should('not.exist');

    cy.get('[data-cy=close-cart]').click();
    cy.get('[data-cy=empty-cart]').should('not.exist');
  });

  it('Оформление заказа из корзины', () => {
    cy.intercept('GET', '/cart', { fixture: 'cart.json' }).as('fetchCart');
    cy.intercept('POST', '/orders', { fixture: 'order.json' }).as('makeOrder');
    cy.intercept('DELETE', '/cart/*', { statusCode: 200 }).as('deleteFromCart');

    cy.get('[data-cy=header-price-sum]').click();

    cy.get('[data-cy=make-order]').click();

    cy.get('@makeOrder')
      .its('request.body')
      .should('deep.equal', {
        order: [
          {
            id: 4,
            title: 'Кроссовки Puma X Aka Boku Future Rider',
            price: 7800,
            imageUrl: '/sneakers/sneakers-4.jpg',
            favId: null,
            cartId: 1,
          },
          {
            id: 7,
            title: 'Кроссовки Orange Boomb Edition',
            price: 7499,
            imageUrl: '/sneakers/sneakers-7.jpg',
            favId: null,
            cartId: 2,
          },
          {
            id: 10,
            title: 'Кроссовки Adidas Ultraboost',
            price: 11500,
            imageUrl: '/sneakers/sneakers-10.jpg',
            favId: null,
            cartId: 3,
          },
        ],
      });

    cy.get('[data-cy=empty-cart]').should('not.exist');
    cy.get('[data-cy=cart-product-list]').should('not.exist');
    cy.get('[data-cy=order-complete]').should('exist').and('contain', 'Ваш заказ #1');
    cy.get('[data-cy=header-price-sum]').should('have.text', '0 руб.');
  });
});
