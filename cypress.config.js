const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.webdriveruniversity.com/",
    defaultCommandTimeout : 70000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
