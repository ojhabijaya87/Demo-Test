class AddressLocators {
  getEmail() {
    return cy.get('#customer-email-fieldset #customer-email', {
      timeout: 30000
    });
  }
  getFirstName() {
    return cy.xpath('//input[@name="firstname"]');
  }
  getLastName() {
    return cy.xpath('//input[@name="lastname"]');
  }
  getCity() {
    return cy.xpath('//input[@name="city"]');
  }
  getAddress() {
    return cy.xpath('//input[@name="street[0]"]');
  }
  getCountry() {
    return cy.xpath('//select[@name="country_id"]');
  }
  getPhoneNumber() {
    return cy.xpath('//input[@name="telephone"]');
  }
  getNext() {
    return cy.get('.button');
  }
  getTotal() {
    return cy.get('strong > .price');
  }
  getDiscount() {
    return cy.get('.totals.discount > .amount > .price');
  }
}
export default AddressLocators;
