import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1920,
  requestTimeout: 5000,
  defaultCommandTimeout: 8000,
  responseTimeout: 12000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    }
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  chromeWebSecurity: false,
  video: false,
  watchForFileChanges: false,
  e2e: {
    //If the base url is not set as env variable it takes a default value
    baseUrl: "http://localhost:4200",
    specPattern: "cypress/**/features/**",
    supportFile: "cypress/support/e2e.ts",
    excludeSpecPattern: ["*.js", "*.ts", "*.md"],
    experimentalSessionAndOrigin: true,
    slowTestThreshold: 15000,
    testIsolation: "off",
    screenshotOnRunFailure: false,
    setupNodeEvents
  }
});

//Configuration to support cucumber
async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  console.info("setupNodeEvents.\nCurrent reporter", config.reporter);

  if (config.reporter &&
    (config.reporter as string).includes("cypress-multi-reporters") &&
    config?.reporterOptions?.configFile &&
    (config.reporterOptions.configFile as string).includes("cypress-mochawesome-config")
  ) {
    console.info("Enabling the cypress-mochawesome-reporter plugin");
    require("cypress-mochawesome-reporter/plugin")(on);
  }

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}