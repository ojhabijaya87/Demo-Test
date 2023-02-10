class SearchLocators {
  getItem(itemName: string) {
    return cy.xpath(`//strong[@class="product name product-item-name"]//a[contains(text(),'${itemName}')]`, {
      timeout: 30000
    });
  }
}
export default SearchLocators;
