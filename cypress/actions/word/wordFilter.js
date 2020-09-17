import WordFilter from '../../pages/Word/WordFilter';

/**
 * It enters word id in the Filter menu
 * @param {number} wordId word id to enter in the Filter
 */
export function typeIdFilter(wordId){
    cy.get(WordFilter.id).type(wordId);
}

/**
 * It enters is_Premium  in the Filter menu
 * @param {string} isPremium isPremium to enter in the Filter
 */
export function typeIsPremium(isPremium){
    cy.get(WordFilter.isPremium).click().type(isPremium).type('{enter}');
}

/**
 * It enters word order in the Filter menu
 * @param {number} wordOrder word order to enter in the Filter
 */
export function typeOrderFilter(wordOrder){
    cy.get(WordFilter.order).type(wordOrder);
}
