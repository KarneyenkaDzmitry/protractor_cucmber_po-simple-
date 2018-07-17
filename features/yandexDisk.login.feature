Feature: Yandex Disk login form and function

 Scenario: Is login form correct?
  Given I am on "https://disk.yandex.com" page
   When I click on the 'Sing in' button
    And I wait for until login page is loaded
   Then I see the login form 
    And I see the Login field with typed text "Login or phone number"
    And I see the Password field with typed text "Password"
    And "unselected" checkbox with text "Don't remember me"
    And "enable" button with text "Sign in"

Scenario: Can existing user login?
  Given I am on "https://disk.yandex.com" page
   When I click on the 'Sing in' button
    And I wait for until login page is loaded
    And Log in with the following data:
|username|dzmitry.karneyenka|
|password|   testpassword   |
|remember|       false      |
   Then The title of page is "Yandex.Disk"
    And URL is "https://disk.yandex.com/client/disk" 
    And I see the component with text "Files"
   
       
  