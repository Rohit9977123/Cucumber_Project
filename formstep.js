import { before,Given,Then,When,And} from "cypress-cucumber-preprocessor/steps";
// given block in a step defination
Given('open browser enter simpleform url',()=>{
// cypress code
cy.visit('https://v1.training-support.net/selenium/simple-form');

});

// when bloxk in a step defination
When('user enters firstname, lastname,email, contact',()=>{
    cy.get('#firstName').type('Rohit');
    cy.get('#lastName').type('Chouhan');
    cy.get('#email').type('rohitchouhankgn11@gmail.com');
    cy.get('#number').type('9977840383');

});
 // And block in a step defination
And('user click on submit',()=>{

    cy.get('[value="submit"]').click()
});
// then block in a step defination
Then('Successful alert should be displayed with a message.',()=>{
    cy.on("window:alert", (msg) => {
        expect(msg).to.eq("Thank You for reaching out to us, Rohit Chouhan");
        return true; // this will make the alert click on ok
      });

});