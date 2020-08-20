# qa

# Installation
1. in project folder, run: ```npm install```
2. to run tests run ```npm run e2e```

### Page Objects
Actual Pages are coded as `<DescriptiveName>Page`.

When a Page has many sections in it, it can be broken up into smaller Page Objects (PO).
Or in situations where a part of the page is reused on other pages, a common Page Object can be created.
Page Objects (PO) are named as `<DescriptiveName>PO`.


### Actions

`click<Action>()` methods are very singular and only do what they say, ie click.
Higher order functions such as `createNewCourse()` will perform multiple actions.
Actions beginning with assert, eg `assertCourseExists()` performs an actual assert.

### Specs
1. Should never reference css selectors eg. `cy.get('.sign_in_button').click()`
2. Should never reference Page Object items eg. `cy.get(LoginPage.password);`
3. Should call actions eg. `assertCourseExists(courseSlug)`
