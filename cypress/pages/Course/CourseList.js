export default class CourseList {

    static courseRecordByName = recordName => cy.get('tbody td').contains(recordName);

    static courseOrder = ( recordName, order) => {
        const course = CourseList.courseRecordByName(recordName);
        return course.parentsUntil('tbody').find('[data-testid="property-list-order"]').contains(order);
    };

    static dotsCourseRecordButton = name => CourseList.courseRecordByName(name).find('[data-testid="actions-dropdown"]');
}
