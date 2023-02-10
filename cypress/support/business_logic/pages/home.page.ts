import HomeLocators from '../locators/home.locators';

class Home extends HomeLocators {
  public visit() {
    cy.visit('/');
  }

  public search(itemName: string) {
    this.getSearch().clear().type(itemName);
    this.getSearchButton().click();
  }
  public clickLogo() {
    this.getLogo().click();
  }
}
export const home = new Home();
