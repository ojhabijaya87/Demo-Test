import { items } from './../business_logic/pages/items.page';
import { search } from './../business_logic/pages/search.page';
import { DataTable, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { home } from '../business_logic/pages/home.page';
import { address } from '../business_logic/pages/address.page';

When(/^I navigate to application$/, () => {
  home.visit();
});

When(/^I search for "([^"]*)"$/, (itemName: string) => {
  home.search(itemName);
});

When(/^I select "([^"]*)" from search page$/, (itemName: string) => {
  search.selectItem(itemName);
});

Then(/^I verify "([^"]*)" page is displayed$/, (title: string) => {
  cy.title().should('contain', title);
});

Then(/^I verify the item name is "([^"]*)"$/, (itemName: string) => {
  items.getItemName().should('have.text', itemName);
});

When(/^I Add item to cart$/, (datatable: DataTable) => {
  datatable.hashes().forEach((element) => {
    items.addItem(element.size, element.color, element.quantity);
  });
});

When(/^I click on shopping cart$/, () => {
  items.clickShoppingCart();
});

Then(/^I verify "([^"]*)" items has been added to shopping cart$/, (itemSize: string) => {
  items.getItemsInShoppingCart().should('have.text', itemSize);
});

When(/^I proceed to check out$/, () => {
  items.clickProceedToCheckOut();
});

When(/^I fill in shipping address$/, (datatable: DataTable) => {
  datatable.hashes().forEach((element) => {
    address.fillShippingAddress(
      element.email,
      element.firstName,
      element.lastName,
      element.city,
      element.address,
      element.country,
      element.phoneNum
    );
  });
});

Then(/^I verify the applied discount is "([^"]*)"$/, (discount: string) => {
  address.getDiscount().should('have.text', discount);
});

Then(/^I verify the total amount is "([^"]*)"$/, (total: string) => {
  address.getTotal().should('have.text', total);
});

When(/^I click on logo$/, () => {
  home.clickLogo();
});

When(/^I Update the quantity of {2}"([^"]*)" to "([^"]*)"$/, (item: string, quantity: string) => {
  items.updateQuantity(quantity);
});
