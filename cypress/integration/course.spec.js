import faker from 'faker';
import { login } from '../actions/login';
import { assertCourseExists, goToCourse, assertCourseDoesnotExists } from '../actions/course/coursesList';
import { createNewCourse, typeOrder, typeSlug, clickSave } from '../actions/course/createNewCourse';
import { navigateToCourses } from '../actions/common/navigation';
import { clickEdit } from '../actions/common/recordHeaderActions';
import { clickFilter } from '../actions/common/listHeader';
import { typeIdFiler, typeOrderFilter, typeSlugFilter } from '../actions/course/courseFilter';
import { clickApply } from '../actions/common/filterActions';

describe('Courses tests', () => {

    beforeEach(() => {
        const email = Cypress.env('email');
        const password = Cypress.env('password');
        login(email, password);
   });

    // Creating and editing courses tests are skipped because now admin do not have possibility to do this actions, and i am not sure when he will do this again
    it.skip('Should create new course and check if it exists', () => {
        const courseSlug = faker.random.word();
        navigateToCourses();
        createNewCourse(courseSlug, 1);
        assertCourseExists(courseSlug, 1, '6' );
    });

    it.skip('Should check if admin can edit created course', () => {
        const courseSlug = faker.random.word();
        const editedSlug = faker.random.word();
        const editedOrder = 2;

        navigateToCourses();
        createNewCourse(courseSlug, 1);
        assertCourseExists(courseSlug, 1, '7');
        goToCourse(courseSlug);
        clickEdit();

        typeSlug(editedSlug);
        typeOrder(editedOrder);
        clickSave();

        assertCourseDoesnotExists(courseSlug);
        assertCourseExists(editedSlug, editedOrder, '7');
    });

    it('Should check if admin can filter courses by slug', () => {
        const courseSlug = 'building-and-construction';
        const courseId = '1';
        const courseOrder = '1';
        navigateToCourses();
        clickFilter();
        typeSlugFilter(courseSlug);
        clickApply();
        assertCourseExists(courseSlug, courseOrder, courseId);
    });

    it('Should check if admin can filter courses by id', () => {
        const courseId = 2;
        const courseSlug = 'restaurant-and-food';
        const courseOrder = '2';
        navigateToCourses();
        clickFilter();
        typeIdFiler(courseId);
        clickApply();
        assertCourseExists(courseSlug, courseOrder, courseId);
    });

    it('Should check if admin can filter courses by order', () => {
        const courseOrder = 3;
        const courseSlug = 'technical-production';
        const courseId = 3;
        navigateToCourses();
        clickFilter();
        typeOrderFilter(courseOrder);
        clickApply();
        assertCourseExists(courseSlug, courseOrder, courseId);
    });

    it('Should check if admin can filter courses by all possible filters', () => {
        const courseId = 4;
        const courseOrder = 4;
        const courseSlug = 'health-and-youth';
        navigateToCourses();
        clickFilter();
        typeSlugFilter(courseSlug);
        typeOrderFilter(courseOrder);
        typeIdFiler(courseId);
        clickApply();
        assertCourseExists(courseSlug, courseOrder, courseId);
    });

  })
