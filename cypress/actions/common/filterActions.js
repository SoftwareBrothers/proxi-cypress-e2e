import FilterActionsPO from '../../pages/common/FilterActionsPO';

/**
 * It applies changes for the Filter menu
 */
export function clickApply(){
    cy.get(FilterActionsPO.applyButton).click();
}

/**
 * It resets changes for the Filter menu
 */
export function clickReset(){
    cy.get(FilterActionsPO.resetButton).click();
}

/**
 * It opens or closes Filter menu
 */
export function openCloseFilterMenu(){
    cy.get(FilterActionsPO.closeOpenFilter).click();
}
