import OrderComplete from './order-complete.vue';

describe('OrderComplete', () => {
  it('Корректное отображение номера заказа', () => {
    cy.mount(<OrderComplete orderId={5} />);
    cy.get('p').should('contain.text', 'Ваш заказ #5');
  });
});
