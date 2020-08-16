import { clickCreateNew } from '../common/listHeader';
import CreateNewCourse from '../../pages/Course/CreateNewCourse';

/**
 * It creates new Course
 * @param {string} slug slug of the course
 * @param {number} order order of the course
 */
export function createNewCourse(slug, order){
    clickCreateNew();
    typeSlug(slug);
    typeOrder(order);
    clickSave();
}


/**
 * It types slug in the Create New Course
 * @param {string} slug slug of the course
 */
export function typeSlug(slug){
    cy.get(CreateNewCourse.slugField).clear().type(slug);
}

/**
 * It types order in the Create New Course
 * @param {number} order order of the courses
 */
export function typeOrder(order){
    cy.get(CreateNewCourse.orderField).clear().type(order);
}


/**
 * It clicks on the Save button in Create New Course
 */
export function clickSave(){
    cy.get(CreateNewCourse.saveButton).click();
}
