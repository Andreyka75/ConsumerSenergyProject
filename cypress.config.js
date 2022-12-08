const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://consumersenergymanagement.ca/',
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

