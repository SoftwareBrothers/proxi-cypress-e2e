import ListHeader from '../../pages/common/ListHeaderPO'

export function clickCreateNew(){
    cy.get(ListHeader.createrNewButton).click();
}

export function clickFilter(){
    const filterBtn = cy.get(ListHeader.filterButton).contains('Filter');
    filterBtn.click();
}
