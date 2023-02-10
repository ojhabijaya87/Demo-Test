class HomeLocators {
  getSearch() {
    return cy.get('#search');
  }
  getSearchButton() {
    return cy.xpath('//button[@title="Search"]');
  }
  getLogo() {
    return cy.get('.logo > img');
  }
}
export default HomeLocators;
