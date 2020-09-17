import faker from 'faker';
import { login } from '../actions/login';
import { navigateToCourses, navigateToWords } from '../actions/common/navigation';
import { clickEdit } from '../actions/common/recordHeaderActions';
import { clickFilter } from '../actions/common/listHeader';
import { typeIdFilter, typeIsPremium, typeOrderFilter } from '../actions/word/wordFilter';
import { clickApply } from '../actions/common/filterActions';
import { assertWordExists } from '../actions/word/wordList';

describe('Courses tests', () => {

    beforeEach(() => {
        const email = Cypress.env('email');
        const password = Cypress.env('password');
        login(email, password);
   });

    it('Should create new word and check if it exists', () => {
        // const word = faker.random.word();
        navigateToWords();
        clickFilter();

        // assertWordExists('visible', 7, 3);

    });

    it('Should check if admin can edit created word', () => {

        assertWordExists('normal', 1, 1);

    });

    it('Should check if admin can filter words by id', () => {
        navigateToWords();
        clickFilter();
        typeIdFilter(1);
        clickApply();
    });

    it.only('Should check if admin can filter words by is_premiun', () => {
        navigateToWords();
        clickFilter();
        typeIsPremium('Yes');
        clickApply();
        assertWordExists('Laborum beatae et de', 1, 'Yes', 8, 'building-and-construction');
    });

    /// 'building-and-construction', 'building-materials'
    it('Should check if admin can filter words by order', () => {
        navigateToWords();
        clickFilter();
        typeOrderFilter(2);
        clickApply();
    });

    it('Should check if admin can filter words by all possible filters', () => {
        const wordId = 1;
        const wordOrder = 1;
        const isPremium = 'Yes';

        navigateToWords();
        clickFilter();
        typeIdFilter(wordId);
        typeIsPremium(wordOrder);
        typeOrderFilter(isPremium);
        clickApply();
    });

  })
