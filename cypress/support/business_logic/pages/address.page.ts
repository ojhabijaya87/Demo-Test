import AddressLocators from '../locators/address.locators';

class Address extends AddressLocators {
  public fillShippingAddress(
    email: string,
    firstName: string,
    lastName: string,
    city: string,
    address: string,
    country: string,
    phoneNumber: string
  ) {
    this.getEmail().clear().type(email);
    this.getFirstName().clear().type(firstName);
    this.getLastName().clear().type(lastName);
    this.getCountry().select(country);
    this.getCity().clear().type(city);
    this.getAddress().clear().type(address);
    this.getPhoneNumber().clear().type(phoneNumber);
    cy.wait(1000);
    this.getNext().click();
  }
}
export const address = new Address();
