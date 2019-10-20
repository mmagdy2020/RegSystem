"use strict";
//* global describe */
//* global it */
/* global assert */
/* global User */
/* global Admin */
/* global Student */
/* global Faculty */
/* global Courses */




describe("User class", () => {
    let user = undefined;
    describe("constructor(fName, phone, lName, role)", () => {
        it("takes a role which becomes the user", () => {
            user = new User("john", "smith", "123445", "user");
            assert.equal(user.constructor, User);
            assert.equal(user.fName, "john");
            assert.equal(user.lName, "smith");
            assert.equal(user.phone, "123445");
            assert.equal(user.role, "user");
        });
    });




});


describe("Admin class", () => {
    let admin = undefined;
    describe("constructor(fName, lName, phone, role)", () => {
        it("takes a role which becomes the Admin", () => {
            admin = new Admin("MM", "XYZ", "1234499", "admin");
            assert.equal(admin.constructor, Admin);
            assert.equal(admin.role, "admin");
            assert.equal(admin.userID, "MMXYZ");
            assert.equal(admin.password, "MXY123");
            assert.equal(admin.fName, "MM");
            assert.equal(admin.lName, "XYZ");
            assert.equal(admin.phone, "1234499");
        });
    });
});

describe("Faculty class", () => {
    let faculty = undefined;
    describe("constructor(fName, lName, phone, role)", () => {
        it("takes a role which becomes the Faculty", () => {
            faculty = new Faculty("levi", "Keith", "100000", "CS");
            assert.equal(faculty.constructor, Faculty);
            assert.equal(faculty.role, "faculty");
            assert.equal(faculty.userID, "fac_lKeith");
            assert.equal(faculty.password, "lKe123");
            assert.equal(faculty.fName, "levi");
            assert.equal(faculty.lName, "Keith");
            assert.equal(faculty.phone, "100000");
            assert.equal(faculty.department, "CS");


        });
    });
});

describe("Courses class", () => {
    let course = undefined;
    describe("constructor(courseName, courseID, courseCode)", () => {
        it("takes a role which becomes the Course", () => {
            course = new Courses("CS303", "10001", "CS 301");
            assert.equal(course.constructor, Courses);
            assert.equal(course.courseName, "CS303");
            assert.equal(course.courseID, "10001");
            assert.equal(course.courseCode, "CS 301");



        });
    });
});

describe("Student class", () => {
    let student = undefined;
    describe("constructor(fName, lName, phone, entryYear = 2019, gpa = 4)", () => {
        it("takes a role which becomes the Student", () => {
            student = new Student("Mahmoud", "Magdy", "106543", "2019");
            assert.equal(student.constructor, Student);
            assert.equal(student.role, "student");
            assert.equal(student.userID, "St_MMagdy");
            assert.equal(student.password, "MMa123");
            assert.equal(student.fName, "Mahmoud");
            assert.equal(student.lName, "Magdy");
            assert.equal(student.phone, "106543");
            assert.equal(student.entryYear, "2019");


        });
    });
});