Feature: simple form
Scenario: to verify the form is working for all mandatory fields
Given open browser enter simpleform url
When user enters firstname, lastname,email, contact
And user click on submit
Then Successful alert should be displayed with a message.