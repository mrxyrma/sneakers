/// <reference types="cypress" />
import { mount } from 'cypress/vue';
import { createPinia } from 'pinia';
import router from '@/app/router';
import '@/app/main.css';

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {};
  options.global.stubs = options.global.stubs || {};
  options.global.stubs['transition'] = false;
  options.global.components = options.global.components || {};
  options.global.plugins = options.global.plugins || [];

  const pinia = createPinia();

  /* Add any global plugins */
  options.global.plugins.push({
    install(app) {
      app.use(router).use(pinia);
    },
  });

  return mount(component, options);
});
