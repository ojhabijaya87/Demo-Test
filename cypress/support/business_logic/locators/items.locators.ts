class ItemsLocators {
  getMediumSize() {
    return cy.get('#option-label-size-143-item-168', { timeout: 10000 }).should('be.visible');
  }
  getSmallSize() {
    return cy.get('#option-label-size-143-item-167');
  }
  getGreenColor() {
    return cy.get('#option-label-color-93-item-53', { timeout: 10000 });
  }
  getYellowColor() {
    return cy.get('#option-label-color-93-item-60');
  }
  getQuantity() {
    return cy.get('#qty');
  }
  getAddToCart() {
    return cy.get('#product-addtocart-button');
  }
  getItemName() {
    return cy.xpath('//span[@data-ui-id="page-title-wrapper"]');
  }
  getShoppingCart() {
    return cy.get('.showcart');
  }
  getItemsInShoppingCart() {
    return cy.get('.showcart > .counter > .counter-number');
  }
  getProceedToCheckOut() {
    return cy.get('#top-cart-btn-checkout');
  }
  getEditQuantity() {
    return cy.xpath('//li[@data-role="product-item"]//input', { timeout: 10000 }).should('be.visible');
  }
  getUpdateQuantity() {
    return cy.xpath('//li[@data-role="product-item"]//button');
  }
}
export default ItemsLocators;
