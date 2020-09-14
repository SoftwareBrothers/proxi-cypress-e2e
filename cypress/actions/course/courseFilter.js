import FilterCourse from '../../pages/Course/FilterCourse';

/**
 * It enters course id in the Filter menu
 * @param {number} courseId course id to enter in the Filter
 */
export function typeIdFiler(courseId){
    cy.get(FilterCourse.idField).type(courseId);
}

/**
 * It enters course slug in the Filter menu
 * @param {string} courseSlug course slug to enter in the Filter
 */
export function typeSlugFilter(courseSlug){
    cy.get(FilterCourse.slugField).type(courseSlug);
}

/**
 * It enters course order in the Filter menu
 * @param {number} courseOrder course order to enter in the Filter
 */
export function typeOrderFilter(courseOrder){
    cy.get(FilterCourse.orderField).type(courseOrder);
}
