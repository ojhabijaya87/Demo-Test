import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';
import pg from 'pg';
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  require('cypress-mochawesome-reporter/plugin')(on);
  allureWriter(on, config);

  on('before:browser:launch', (browser, launchOptions) => {
    launchOptions.args.push('--proxy-bypass-list=<-loopback>');
    launchOptions.args.push('--incognito');
    return launchOptions;
  });
  on(
    'file:preprocessor',
    browserify(config, {
      typescript: require.resolve('typescript')
    })
  );
  on('before:run', async (details) => {
    console.log('override before:run');
    await beforeRunHook(details);
  });

  on('after:run', async () => {
    console.log('override after:run');
    await afterRunHook();
  });
  on('task', {
    log(message) {
      console.log(message);

      return null;
    },
    DATABASE({ dbConfig, sql, values }) {
      const pool = new pg.Pool(dbConfig);
      try {
        return pool.query(sql, values);
      } catch (e) {
        cy.log(e.message);
      }
    }
  });
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    specPattern: '**/review/**/*.feature',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents,
    baseUrl: 'https://loss-adjuster.integ.tractable.io',
    chromeWebSecurity: false,
    numTestsKeptInMemory: 10,
    fixturesFolder: 'cypress/e2e/fixtures/review',
    viewportHeight: 1080,
    viewportWidth: 1920
  },
  env: {
    allureReuseAfterSpec: true,
    ENV: 'prod',
    api: 'api url',
    PG_DATABASE: 'integrations_api_gateway',
    PG_HOST: 'postgres.us.tractable.io',
    PG_PORT: '5432'
  }
});
