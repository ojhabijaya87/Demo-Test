Feature: Demo Tests


    Background: Navigate to application
        When I navigate to application

    @test
    Scenario: Add Items To Shopping Cart
        When I search for "Gwyn Endurance Tee"
        When I select "Gwyn Endurance Tee" from search page
        Then I verify "Gwyn Endurance Tee" page is displayed
        Then I verify the item name is "Gwyn Endurance Tee"
        When I Add item to cart
            | size   | color | quantity |
            | Medium | Green | 4        |
        Then I verify "4" items has been added to shopping cart
        When I click on shopping cart
        When I proceed to check out
        When I fill in shipping address
            | email                  | firstName | lastName | city   | address  | country        | phoneNum |
            | ojhabijaya87@gmail.com | Bijaya    | Ojha     | London | Hounslow | United Kingdom | 123456   |
        Then I verify the applied discount is "-$24.00"
        Then I verify the total amount is "$92.00"
        When I click on logo
        Then I verify "4" items has been added to shopping cart
        When I click on shopping cart
        When I Update the quantity of  "Gwyn Endurance Tee" to "3"
        Then I verify "3" items has been added to shopping cart
        When I search for "Gwyn Endurance Tee"
        When I select "Gwyn Endurance Tee" from search page
        Then I verify "Gwyn Endurance Tee" page is displayed
        Then I verify the item name is "Gwyn Endurance Tee"
        When I Add item to cart
            | size  | color  | quantity |
            | Small | Yellow | 1        |
        Then I verify "4" items has been added to shopping cart
        When I search for "Quest Lumaflex™ Band"
        When I select "Quest Lumaflex™ Band" from search page
        Then I verify "Quest Lumaflex™ Band" page is displayed
        Then I verify the item name is "Quest Lumaflex™ Band"
        When I Add item to cart
            | size | color | quantity |
            | NA   | NA    | 1        |
        Then I verify "5" items has been added to shopping cart
        When I click on shopping cart
        When I proceed to check out
        When I fill in shipping address
            | email                  | firstName | lastName | city   | address  | country        | phoneNum |
            | ojhabijaya87@gmail.com | Bijaya    | Ojha     | London | Hounslow | United Kingdom | 123456   |
        Then I verify the total amount is "$116.00"