
export class GeneralPage {
    open(path: string = '/') {
        cy.log(`Opening page: ${path}`);
        cy.visit(path)
    }

    clickOnElement(
        elementPath: string,
        force = true,
    ): void {
        const timeout = 15000;
        cy.log(`Clicking on "${elementPath}"`);
        cy.get(elementPath, { timeout }).click({ force });
        cy.log(`Click action completed on "${elementPath} "`);

    }

    setInput(elementPath: string, data: string): void {
        cy.log(`set input : ${data}`);
        cy.get(elementPath, { timeout: 3000 }).clear();
        cy.get(elementPath, { timeout: 3000 }).type(data);
        cy.log('set text by typing in the modal done');
    }

    isElementExist(elementToBeFound: string, wantToFind: boolean, contain?: string): void {
        cy.log('Checking if element exists');

        const timeout = 5 * 60 * 1000; // 5 minutes

        if (wantToFind) {
            if (contain !== undefined) {
                cy.get(elementToBeFound, { timeout })
                    .contains(contain)
                    .should('exist')
                    .then(() => cy.log(`Element "${elementToBeFound}" containing "${contain}" exists.`));
            } else {
                cy.get(elementToBeFound, { timeout })
                    .should('exist')
                    .then(() => cy.log(`Element "${elementToBeFound}" exists.`));
            }
        } else {
            if (contain !== undefined) {
                cy.get(elementToBeFound)
                    .contains(contain)
                    .should('not.exist')
                    .then(() => cy.log(`Element "${elementToBeFound}" containing "${contain}" does NOT exist.`));
            } else {
                cy.get(elementToBeFound)
                    .should('not.exist')
                    .then(() => cy.log(`Element "${elementToBeFound}" does NOT exist.`));
            }
        }
    }
}