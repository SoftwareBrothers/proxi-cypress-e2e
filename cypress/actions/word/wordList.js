import WordList from '../../pages/Word/WordList';


/**
 * It asserts if the word exists
 * @param {string} wordName name of the word to exist
 * @param {number} wordOrder order of the word to exist
 * @param {string} isPremium is premium of the word to exist
 * @param {number} wordId word id of the word to exist
 * @param {string} course course of the word to exist
 */
export function assertWordExists(wordName, wordOrder, isPremium, wordId, wordCourse){
    const word = WordList.wordRecordByName(wordName);
    const order = WordList.wordOrder(wordName, wordOrder);
    //const isPremiumWord = WordList.isPremium(wordName, isPremium);
    //const id = WordList.wordId(wordName, wordId);
    // const courseChapter = WordList.wordCourseChapter(wordName, courseAndChapter);
    //const course = WordList.wordOrder(wordName, wordOrder);
    //const wordChapter = WordList.wordOrder(wordName, wordOrder);


    word.should('exist');
    order.should('contain.text', wordOrder);
    WordList.isPremium(wordName, isPremium);
    WordList.wordId(wordName, wordId);
    WordList.wordCourse(wordName, wordCourse);
   // WordList.wordChapter(wordName, wordChapter);
    //course.should('contain.text', wordCourse);
    //WordList.wordCourseChapter(wordName, courseAndChapter);
}


/**
 * It asserts if the word is Deleted
 */
export function assertWordDeleted(wordName){
    const word = WordList.wordRecordByName(wordName);
   // TODO
}

/**
 * It asserts Id of the word
 */
export function assertWordID(wordName){
    const word = WordList.wordRecordByName(wordName);
   //TODO
}

/**
 * It asserts if the word is premium
 */
export function assertWordIsPremium(wordName){
    const word = WordList.wordRecordByName(wordName);
   //TODO
}

/**
 * It asserts order of the word
 */
export function assertWordOrder(wordName){
    const word = WordList.wordRecordByName(wordName);
   //TODO
}

/**
 * It asserts course and chapter of the word
 */
export function assertCourseAndChapter(wordName){
    const word = WordList.wordRecordByName(wordName);
   //TODO
}


/**
 * It goes to the specific word
 */
export function goToWord(wordName){
    const word = WordList.wordRecordByName(wordName);
    word.click();
}
