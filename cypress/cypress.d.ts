import { mount } from 'cypress/vue';

declare namespace Cypress {
  interface Chainable {
    mount: typeof mount;
  }
}
