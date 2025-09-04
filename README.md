# Cypress Automation Project - Amazon Login

This project contains end-to-end (E2E) tests for Amazon’s login functionality using [Cypress](https://www.cypress.io/).  
It follows the Page Object Model (POM) pattern for better maintainability and readability.

---

## Requirements

Before running the tests, make sure you have:

- Node.js (>=16)
- npm (>=8)
- Cypress (installed via npm)
- Google Chrome (preferred browser for tests)

---

## Project Structure

cypress/
│── e2e/ # Test specs
│ └── amazon/ # Amazon-related test cases
│ └── login.cy.ts
│
│── fixtures/ # Test data
│ └── amazon/
│ └── login.json
│
│── pages/ # Page Object Model (POM) classes
│ └── amazon/
│ ├── loginPage.ts
│ ├── generalPage.ts
│ └── homePage.ts
│
│── support/ # Cypress custom commands & config
│ └── e2e.ts
│
├── cypress.config.ts # Cypress configuration file
├── package.json # Dependencies and scripts
└── README.md # Project documentation

---

## Setup

1. Clone the repository

```bash
git clone git@github.com:PazE1/capitolis.git
cd capitolis
```

2. Run Cypress in Interactive Mode (UI)
   npx cypress open

3. Run Cypress in Headless Mode
   npx cypress run

4. Run Cypress with Mochawesome Reporter
   npm run cypress:run

5. Generate HTML report
   npm run report:html

5. Open the Latest Mochawesome HTML Report
   open cypress/reports/html/mochawesome.html 
