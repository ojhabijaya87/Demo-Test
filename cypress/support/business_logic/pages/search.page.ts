import SearchLocators from '../locators/search.locators';

class Search extends SearchLocators {
  selectItem(itemName: string) {
    this.getItem(itemName).click();
  }
}

export const search = new Search();
