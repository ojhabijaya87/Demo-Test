// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';
require('cypress-xpath');
import 'cypress-wait-until';
import 'cypress-file-upload';
import 'cypress-mochawesome-reporter/register';
import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exception', (err, runnable) => {
  cy.task('log', `uncaught:exception ${err}`);
  cy.task('log', `uncaught:exception ${runnable}`);
  return false;
});


