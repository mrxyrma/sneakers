/// <reference types="cypress" />
import { mount } from 'cypress/vue';
import { createPinia, setActivePinia } from 'pinia';
import router from '@/app/router';
import '@/app/main.css';

let pinia;

beforeEach(() => {
  // New Pinia
  pinia = createPinia();

  // Set current Pinia instance
  setActivePinia(pinia);
});

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {};
  options.global.stubs = options.global.stubs || {};
  options.global.stubs['transition'] = false;
  options.global.components = options.global.components || {};
  options.global.plugins = options.global.plugins || [];

  /* Add any global plugins */
  options.global.plugins.push(pinia);
  options.global.plugins.push(router);

  return mount(component, options);
});
