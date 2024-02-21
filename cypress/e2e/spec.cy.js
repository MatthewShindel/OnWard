describe('template spec', () => {
  
 
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
    // cy.intercept({
    //   method: 'GET', // or 'POST' or any other HTTP method
    //   url: 'https://u-s-a-sales-taxes-per-zip-code.p.rapidapi.com/12345',
    //   // statusCode: 200,
    //   headers: {
    //     'X-RapidAPI-Key': '8e3c03a57bmshcf9c926514fc323p15ca95jsna29d71f8a66a',
    //     'X-RapidAPI-Host': 'u-s-a-sales-taxes-per-zip-code.p.rapidapi.com'
    //   }
    //   // fixture: 'example.json'
    // }).as('fetchRequest')
    // cy.intercept('GET', 'https://u-s-a-sales-taxes-per-zip-code.p.rapidapi.com/12345', {
		// 	statusCode: 200,
		// 	fixture: 'example.json'
		// });
    cy.intercept({
      method: 'GET',
      url: 'https://u-s-a-sales-taxes-per-zip-code.p.rapidapi.com/*', // Use wildcard for dynamic parts like zipcode
      headers: {
        'X-RapidAPI-Key': '8e3c03a57bmshcf9c926514fc323p15ca95jsna29d71f8a66a',
        'X-RapidAPI-Host': 'u-s-a-sales-taxes-per-zip-code.p.rapidapi.com'
      }
    }, (req) => {
      // Customize the response or stub the response data as needed
      req.reply({
        statusCode: 200,
        fixture: 'example.json'
      });
    })
    cy.visit('http://localhost:3000/')
    cy.get('input[name="salary"]').type("100000").should('have.value', '100000')
    cy.get('input[name="expenses"]').type("20000").should('have.value', '20000')
    cy.get('input[name="zipcode"]').type("12345").should('have.value', '12345')
    cy.get(".submitUserInput").click()// goes to result page, don't need to direct it

    // cy.visit('http://localhost:3000/result')
    cy.get(".header").contains("This is the ResultPage").should("be.visible");
    cy.get(".salary").contains("This is the salary, $100000").should("be.visible");
    cy.get(".salaryMinusTaxes").contains("This is the salary after taxes, $82947").should("be.visible");
    cy.get(".expenses").contains("This is the annual expenses, $20000").should("be.visible");
    cy.get(".expensesTax").contains("This is the tax on expenses, $1775").should("be.visible");
    cy.get(".zipcode").contains("This is the zipcode, 12345").should("be.visible");
    cy.get(".salaryTagline").contains("This is your final salary after all expenses and taxes:").should("be.visible");
    cy.get(".finalSalaryAmount").contains("$81172")
    cy.get('h3').contains('Click here to head back home!').click();
    cy.url().should('eq', 'http://localhost:3000/');
      });
    });

    // it("should show ResultPage with header, salary, salary after taxes, annual expenses, tax on expenses, zipcode, final salary, and take user home when link is clicked", () => {
    //   cy.intercept('GET', 'https://u-s-a-sales-taxes-per-zip-code.p.rapidapi.com/12345', {
    //     statusCode:  200,
    //     fixture: 'example.json'
    //   });
    //   cy.visit('http://localhost:3000/result')
    //   cy.get(".header").contains("This is the ResultPage").should("be.visible");
    //   cy.get(".salary", { timeout:  10000 }).contains("This is the salary, $100000").should("be.visible");
    //   // ... other assertions
    // });
    
  
// 			.get(".all-movies-container").find('.movie-card').should("have.length", 40)
// 			.get(".all-movies-container").find('.movie-card').first().should("have.id", 694919)
// 			.get(".all-movies-container").find('.movie-card').last().should("have.id", 585244)
// 			.url().should('eq', 'http://localhost:3000/')

// 	});
// 	it('Should be able to see the information of a specific movie', () => {
// 		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
// 			statusCode: 200,
// 			fixture: 'get-data.json'
// 		})
// 		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
// 			statusCode: 200,
// 			fixture: 'post-data.json'
// 		})
// 			.url().should('eq', 'http://localhost:3000/')
// 			.get(".all-movies-container").find('.movie-card').first().click()
// 			.url().should('eq', 'http://localhost:3000/movie/436270')
// 			.get('.movieInfo').should("have.id", 436270)
// 			.get('.rating').should("have.text", 'Rating: 4')
// 			.get('.poster').should("have.text", 'Black Adam')
// 			.get('.runTime').should("have.text", 'Runtime : 125')
// 			.get('.genres').should("have.text", 'Genres: Action, Fantasy, Science Fiction')
// 	});
// 	it('Should be able to go from home, to a specific movie, and then back to home page', () => {
// 		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
// 			statusCode: 200,
// 			fixture: 'get-data.json'

// 		})
// 		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
// 			statusCode: 200,
// 			fixture: 'post-data.json'

// 		})
// 			.get(".all-movies-container").find('.movie-card').eq(0).click()
// 			.url().should('eq', 'http://localhost:3000/movie/436270')
// 			.get('.movieInfo').should("have.id", 436270)
// 			.get(".exitButton").click()
// 			.get(".all-movies-container").find('.movie-card').eq(0).should("have.id", 436270)
// 			.url().should('eq', 'http://localhost:3000/')

// 	});

// 	it('Should be able to handle 500 level errors', () => {
// 		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
// 			statusCode: 200,
// 			fixture: 'get-data.json'
// 		})
// 		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
// 			statusCode: 500,
// 		})
// 			.get(".all-movies-container").find('.movie-card').eq(0).click()
// 			.get('.errorPage').should("have.text", 'Page not FoundClick here to head back home!')
// 			.url().should('eq', 'http://localhost:3000/movie/436270')
// 	});
// })