export default class MediaList{

    static mediaRecordByName = recordName => cy.get('tbody td').contains(recordName);

    static dotsMediaRecordButton = name => CourseList.courseRecordByName(name).find('[data-testid="actions-dropdown"]');
}
