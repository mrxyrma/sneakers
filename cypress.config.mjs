import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    fixturesFolder: 'cypress/fixtures',
    supportFile: 'cypress/e2e/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'cypress/e2e/specs/**/*.cy.{js,jsx,ts,tsx}',
    videosFolder: 'cypress/e2e/videos',
    screenshotsFolder: 'cypress/e2e/screenshots',
    baseUrl: 'http://localhost:5173',
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    indexHtmlFile: 'cypress/component/support/component-index.html',
    supportFile: 'cypress/component/support/component.{js,jsx,ts,tsx}',
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});
