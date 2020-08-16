import RecordHeaderActions from '../../pages/common/RecordHeaderActions';

export function clickDelete(){
    cy.get(RecordHeaderActions.deleteButton).click();
}

export function clickEdit(){
    cy.get(RecordHeaderActions.editButton).click();
}
