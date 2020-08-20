import faker from 'faker';
import { login } from '../actions/login';
import { assertCourseExists, goToCourse, assertCourseDoesnotExists } from '../actions/course/coursesList';
import { createNewCourse, typeOrder, typeSlug, clickSave } from '../actions/course/createNewCourse';
import { navigateToCourses } from '../actions/common/navigation';
import { clickEdit } from '../actions/common/recordHeaderActions';

describe('Courses tests', () => {

    beforeEach(() => {
        const email = Cypress.env('email');
        const password = Cypress.env('password');
        login(email, password);
   });

    it('Should create new course and check if it exists', () => {
        const courseSlug = faker.random.word();
        navigateToCourses();
        createNewCourse(courseSlug, 1);
        assertCourseExists(courseSlug, 1 );
    });

    it('Should check if admin can edit created course', () => {
        const courseSlug = faker.random.word();
        const editedSlug = faker.random.word();
        const editedOrder = 2;

        navigateToCourses();
        createNewCourse(courseSlug, 1);
        assertCourseExists(courseSlug, 1);
        goToCourse(courseSlug);
        clickEdit();

        typeSlug(editedSlug);
        typeOrder(editedOrder);
        clickSave();

        assertCourseDoesnotExists(courseSlug);
        assertCourseExists(editedSlug, editedOrder);
    });

  })
