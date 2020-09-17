export default class WordList {

    static wordRecordByName = recordName => cy.get('tbody td').contains(recordName);


    static wordId = ( recordName, id ) => {
        const word = WordList.wordRecordByName(recordName);
        return word.parentsUntil('tbody').find('[data-testid="property-list-id"]').contains(id).should('contain.text', id);
    };

    static wordName = ( recordName, order ) => {
        const word = WordList.wordRecordByName(recordName);
        return word.parentsUntil('tbody').find('[data-property-name="isPremium"]').contains(order);
    };

    static isPremium = ( recordName, isPremium ) => {
        const word = WordList.wordRecordByName(recordName);
        return word.parentsUntil('tbody').find('[data-testid="property-list-isPremium"] span').contains(isPremium).should('contain.text', isPremium);
    };

    static wordOrder = ( recordName, order ) => {
        const word = WordList.wordRecordByName(recordName);
        return word.parentsUntil('tbody').find('[data-testid="property-list-order"]').contains(order);
    };

    // static wordCourseChapter = ( recordName, courseAndChapter) => {
    //     const word = WordList.wordRecordByName(recordName);
    //     return word.parentsUntil('tbody').find('[data-testid="property-list-chapterId"]').contains(courseAndChapter).should('contain.text', courseAndChapter);
    // };

    static wordCourse = ( recordName, wordCourse) => {
        const word = WordList.wordRecordByName(recordName);
        return word.parentsUntil('tbody').find('[data-testid="property-list-chapterId"]').contains(wordCourse).should('contain.text', wordCourse);
    };

    static wordChapter = ( recordName, wordChapter) => {
        const word = WordList.wordRecordByName(recordName);
        return word.parentsUntil('tbody').find('[data-testid="property-list-chapterId"] a:nth-child(2)').contains(wordChapter).should('contain.text', wordChapter);
    };


    static dotsWordRecordButton = name => WordList.wordRecordByName(name).find('[data-testid="actions-dropdown"]');
}
