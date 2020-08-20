import ListHeader from '../../pages/common/ListHeaderPO'

export function clickCreateNew(){
    cy.get(ListHeader.createrNewButton).click();
}

export function clickFilter(){
    cy.get(ListHeader.filterButton).click();
}
