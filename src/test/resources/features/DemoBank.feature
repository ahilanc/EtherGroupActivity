
Feature: Demo Bank site
	
  Background: 
    Given User login into Demo Bank site
    
  Scenario: To validate if user see the warning message in Account PIN page when entering invalid Password
    When user enter the accountNumber and invalid Password
    And Click the Login button
    Then User Should display the warning message when invalid password is given
	
  Scenario: To validate if user can navigate to home page with valid credentials
    When user enter the valid accountNumber and Password
    And Click the Login button
    And User navigate to account pin field
    When User enter the valid pin and click on validate button
    Then User should navigate to Home Page
	
  Scenario: To validate if user see the warning message when any of mandatory field is missing
    When user enter the valid accountNumber and Password
    And Click the Login button
    When User enter the valid pin and click on validate button
    Then User should navigate to Home Page
    And User click on Fund Transfer Tab
    And User clicks the FundTransfer button
    Then User see the warning message when mandatory field is missing
  @web @DemoTest
  Scenario Outline: To validate whether user see the successful transaction message and reference number generated
    When user enter the valid accountNumber and Password
    And Click the Login button
    When User enter the valid pin and click on validate button
    Then User should navigate to Home Page
    And User click on Fund Transfer Tab
    And User inputs the fields with <rowQuery> to complete the fund transfer
    And User clicks the FundTransfer button
    And user enter authentication code as <AuthorizationCode> and click validate button
    Then User see success message and reference no will be generated

    Examples: 
    | rowQuery | AuthorizationCode |
    | rowQuery1| 123456 		   |
    | rowQuery2| 123456 		   |
    | rowQuery3| 123456 		   |
    | rowQuery4| 123456 		   |
    | rowQuery5| 123456 		   |
 			
  Scenario: To validate whether user can see the account statement
    When user enter the valid accountNumber and Password
    And Click the Login button
    When User enter the valid pin and click on validate button
    Then User should navigate to Home Page
    And user click Account Summary button
    Then User see the account statement in account summary
	
  Scenario: To validate whether user can see the account details
    When user enter the valid accountNumber and Password
    And Click the Login button
    When User enter the valid pin and click on validate button
    Then User should navigate to Home Page
    And user click the account details button
    Then user should display all the account details
                