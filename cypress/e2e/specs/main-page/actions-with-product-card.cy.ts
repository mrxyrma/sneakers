describe('Действия с карточкой товара', () => {
  beforeEach(() => {
    cy.intercept('GET', '/products', { fixture: 'products.json' }).as('fetchProducts');
    cy.intercept('GET', '/cart', { fixture: 'cart.json' }).as('fetchCart');
    cy.intercept('GET', '/favorites', { fixture: 'favorites.json' }).as('fetchFavorites');
    
    cy.visit('/');
  });

  it('Добавление товара в избранное', () => {
    cy.intercept('POST', '/favorites', { id: 1, productId: 2 }).as('addToFav');

    cy.get('[data-cy=add-to-fav-2]').should('have.attr', 'src', '/like-1.svg');

    cy.get('[data-cy=add-to-fav-2]').click();
    cy.get('@addToFav').its('request.body').should('deep.equal', { productId: 2 });

    cy.get('[data-cy=add-to-fav-2]').should('have.attr', 'src', '/like-2.svg');
  });

  it('Удаление товара из избранного', () => {
    cy.intercept('DELETE', '/favorites/*', { statusCode: 200 }).as('deleteFromFav');

    cy.get('[data-cy=add-to-fav-1]').should('have.attr', 'src', '/like-2.svg');

    cy.get('[data-cy=add-to-fav-1]').click();
    cy.get('@deleteFromFav').its('request.url').should('contain', '/favorites/2');

    cy.get('[data-cy=add-to-fav-1]').should('have.attr', 'src', '/like-1.svg');
  });

  it('Добавление товара в корзину', () => {
    cy.intercept('POST', '/cart', { id: 1, productId: 1 }).as('addToCart');

    cy.get('[data-cy=add-to-cart-1]').should('have.attr', 'src', '/plus.svg');
    cy.get('[data-cy=header-price-sum]').should('have.text', '26799 руб.');

    cy.get('[data-cy=add-to-cart-1]').click();
    cy.get('@addToCart').its('request.body').should('deep.equal', { productId: 1 });

    cy.get('[data-cy=add-to-cart-1]').should('have.attr', 'src', '/checked.svg');
    cy.get('[data-cy=header-price-sum]').should('have.text', '39798 руб.');
  });

  it('Удаление товара из корзины', () => {
    cy.intercept('DELETE', '/cart/*', { statusCode: 200 }).as('deleteFromCart');

    cy.get('[data-cy=add-to-cart-4]').should('have.attr', 'src', '/checked.svg');
    cy.get('[data-cy=header-price-sum]').should('have.text', '26799 руб.');

    cy.get('[data-cy=add-to-cart-4]').click();
    cy.get('@deleteFromCart').its('request.url').should('contain', '/cart/1');

    cy.get('[data-cy=add-to-cart-4]').should('have.attr', 'src', '/plus.svg');
    cy.get('[data-cy=header-price-sum]').should('have.text', '18999 руб.');
  });
});
