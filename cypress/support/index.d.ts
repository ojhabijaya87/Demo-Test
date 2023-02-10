/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    loginToLAP(username: string, password: string, client: string): Chainable<any>;
    loginToTEP(username: string, password: string, client: string): Chainable<any>;
  }
}
