
require('dotenv').config()
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    modifyObstructiveCode:false,
    chromeWebSecurity: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: 'https://demo.automationtesting.in/',
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});