# OnWard:
![Onward Logo](/public/default.png)

OnWard is a simplified all in one finance calculator, allowing users to input their yearly salary, their monthly expenses, and their expected zipcode, to get their expected salary after all taxes and expenses. The calculator does all of the calculations internally, using a API to get information about a specific zipcode's taxes.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Using This application:

This application is deployed at this URL:
https://matthewshindel.github.io/OnWard/

Additionally, if you wish you use this application locally, you can for this do the following:

1. clone down this repo using 'git clone'
2. cd into that repo
3. run 'npm install' to install the needed packages
4. run 'npm start' to start the application.

The application with run in your broswer at
[http://localhost:3000](http://localhost:3000)

### Learning Goals:

Choose, teach ourselves, and implement a new technology in a React App we design and build. We created and held ourselves to our own MVP for the project, which was designed to be a multi-page React App using Router for a single user. The App manipulates data provided by the user and by an API in order to provide the user with estimates of taxes and salary after taxes and expenses. These estimates are provided according to the zipcode that the user provides. 

### Wins and Challenges:

Teaching ourselves and implementing a new testing library, in this case the React Testing Library. We used this in addition to Cypress. Stubbing data with params was a new challenge for us and did present some difficulties when we were implementing Cypress testing with intercepts for our fetch calls. Being able to implement the React Testing Library in our App gave us a way to test individual components with their javascript logic performing data manipulation within each component. This gave us a tool reminiscent of Mocha and Chai that was a good complement to Cypress testing.
