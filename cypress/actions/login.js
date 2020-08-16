import LoginPage from '../pages/LoginPage';

export function login(email, password){
    cy.visit('');
    cy.get(LoginPage.email).type(email);
    cy.get(LoginPage.password).type(password);
    cy.get(LoginPage.signIn).click();
}