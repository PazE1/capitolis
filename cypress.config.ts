import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.amazon.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1920,
    viewportHeight: 1080,
    execTimeout: 60000,
    taskTimeout: 600000,
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: true,
    videosFolder: 'cypress/reports/videos',
    screenshotsFolder: 'cypress/reports/screenshots',
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2,  // retries in headless mode
      openMode: 0  // retries in interactive mode
    },
    setupNodeEvents(on, config) {
      const mochawesome = require('cypress-mochawesome-reporter/plugin')
      mochawesome(on)
      return config
    },
  }
})
