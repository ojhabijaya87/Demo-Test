import ItemsLocators from '../locators/items.locators';

class Items extends ItemsLocators {
  public addItem(size: string, color: string, qty: string) {
    cy.wait(2000);
    switch (size) {
      case 'Medium':
        this.getMediumSize().should('be.visible').click();
        break;
      case 'Small':
        this.getSmallSize().click();
        break;
      default:
        break;
    }

    switch (color) {
      case 'Green':
        this.getGreenColor().click();
        break;
      case 'Yellow':
        this.getYellowColor().click();
        break;
      default:
        break;
    }

    this.getQuantity().clear().type(qty);
    this.getAddToCart().click();
  }
  public clickShoppingCart() {
    cy.wait(2000);
    this.getShoppingCart().click({ force: true });
  }
  public clickProceedToCheckOut() {
    this.getProceedToCheckOut().click();
  }
  public updateQuantity(quantity: string) {
    this.getEditQuantity().clear().type(quantity);
    this.getUpdateQuantity().click();
  }
}
export const items = new Items();
