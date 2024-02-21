describe('testing page functionality', () => {
  
	it('Should see the form with inputs and submit button', () => {
		cy.intercept('GET', 'https://u-s-a-sales-taxes-per-zip-code.p.rapidapi.com/${zipcode}', {
			statusCode: 200,
			fixture: 'example.json'
		});
    cy.visit('http://localhost:3000/')
      cy.get('input[name="salary"]').should('have.attr', 'placeholder', 'Salary').should("be.visible");
      cy.get('input[name="expenses"]').should('have.attr', 'placeholder', 'Expenses').should("be.visible");
      cy.get('input[name="zipcode"]').should('have.attr', 'placeholder', 'Zipcode').should("be.visible");
      cy.get("button").contains("SUBMIT").should("be.visible");
  })

  it("should hold the value in the form input when data is entered and navigate to /result after button click", () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name="salary"]').type("100000").should('have.value', '100000')
    cy.get('input[name="expenses"]').type("20000").should('have.value', '20000')
    cy.get('input[name="zipcode"]').type("12345").should('have.value', '12345')
    cy.get(".submitUserInput").click()
    cy.url().should('eq', 'http://localhost:3000/result')
  })

  it("should show ResultPage with header, salary, salary after taxes, annual expenses, tax on expenses, zipcode, final salary, and take user home when link is clicked", () => {

    cy.intercept({
      method: 'GET',
      url: 'https://u-s-a-sales-taxes-per-zip-code.p.rapidapi.com/*', 
      headers: {
        'X-RapidAPI-Key': '8e3c03a57bmshcf9c926514fc323p15ca95jsna29d71f8a66a',
        'X-RapidAPI-Host': 'u-s-a-sales-taxes-per-zip-code.p.rapidapi.com'
      }
    }, (req) => {
      req.reply({
        statusCode: 200,
        fixture: 'example.json'
      });
    })
    
    cy.visit('http://localhost:3000/')
    cy.get('input[name="salary"]').type("100000").should('have.value', '100000')
    cy.get('input[name="expenses"]').type("20000").should('have.value', '20000')
    cy.get('input[name="zipcode"]').type("12345").should('have.value', '12345')
    cy.get(".submitUserInput").click()

    cy.get(".header").contains("Here's Your Results").should("be.visible");
    cy.get(".salary").contains("Base Salary: $100,000").should("be.visible");
    cy.get(".salaryMinusTaxes").contains("Salary after income Tax: $82,947").should("be.visible");
    cy.get(".expenses").contains("Expenses: -$20,000").should("be.visible");
    cy.get(".expensesTax").contains("Expenses Taxes: -$1,775").should("be.visible");
    cy.get(".salaryTagline").contains("Final Salary: $81,172").should("be.visible");
    cy.get('h3').contains('Click here to head back home!').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
