import CourseList from '../../pages/Course/CourseList';


/**
 * It asserts if the course exists
 * @param {string} courseName name of the course to exist(in the app slug)
 * @param {number} order order of the course
 * @param {number} id id of the course
 */
export function assertCourseExists(courseName, order, id){
    const course = CourseList.courseRecordByName(courseName);
    const courseOrder = CourseList.courseOrder(courseName, order);
    const courseId = CourseList.courseId(courseName, id)

    course.should('exist');
    courseOrder.should('contain.text', order);
    courseId.should('contain.text', id);
}

/**
 * It asserts if the course does not exist
 */
export function assertCourseDoesnotExists(courseName){
    const course = CourseList.courseRecordByName(courseName);
    course.should('not.exist');
}


/**
 * It goes to the specific course
 */
export function goToCourse(courseName){
    const course = CourseList.courseRecordByName(courseName);
    course.click();
}
