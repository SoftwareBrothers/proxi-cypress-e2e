import Navigation from '../../pages/common/NavigationPO'

export function navigateToCourses(){
    cy.get(Navigation.course).click();
}

export function navigateToChapters(){
    cy.get(Navigation.chapter).click();
}

export function navigateToUsers(){
    cy.get(Navigation.user).click();
}

export function navigateToWords(){
    cy.get(Navigation.word).click();
}
