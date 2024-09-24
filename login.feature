Feature: login

# Scenario outline is used when we want to test with multiple test data

Scenario Outline: validate login for multiple users
Given open the browser and enter url

When enter username as <username>
And enter password as <password>

And click on submit
Then Login should be successful

# test data should be given in scenario outline
Examples:
|Admin|  |Admin123|
|admin|  |pass|
|Admin|  |admin123|
|admin|  |Admin123|


