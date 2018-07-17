Feature: Yandex Disk base workflow
 I would like to check base workflow
 As a type of user that uses a pc-mouse
 I want to play around files
 So for that reason I am going to use webdriver's actions

 Background:
  Given I am on homepage after login action

 Scenario: check context menu bar 
   When I move mouse to main table with text "Files"
    And I click the left button of the mouse
   Then I see context menu 
    And I see in it 6 fields in the folowwing order :
| New folder |
|  Document  |
| Spreadsheet|
|Presentation|
|    Album   |
|Upload files|

Scenario: create new folder
   When I move mouse to main table with text "Files"
    And I click the left button of the mouse
    And I click the right button on the "New folder" refference
   Then I see the dialogue windows with text 'Create'
    And 1 field with typed text 'New folder'
    And "enable" button with text "Save"
   When I type nay name of folder 
    And push the button "Save"
   Then I see the created folder in the main table
 

   
 