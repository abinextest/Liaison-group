Feature: Liaison Page functionality
   As a user I want to see Liaison gropu wep page functionality


  Background:
    Given I am on the home page
  
  @Regression
  Scenario: Verify Liaison Workforce Page
   When I navigate to the workforce page
   Then I should see the workforce page successfully

   Scenario: Verify ICS Regions on Map
   When I navigate to the Integrated care system page
   And  I click on London region on the Map
   And I click on the SouthEast region
   Then I should see the southeast region message

   @Validation
   Scenario: Verify Pay Gap Report'
   When I navigate to the Gender pay gap page
   Then  I click on the PDF link
   # Then I should see the gender pay gap pdf report
   
   @Validation
   Scenario: Verify Failed fill form'
   When I fill the upto date form with incorrect data
   And  I click on the submit button
   Then I should see error message