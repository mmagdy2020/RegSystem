/* eslint-disable no-unused-vars */
/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";


class User {
    /**
     * Constructor for creating user object
     * 
     * @param {fName} fName the fName for this User
     *  @param {lName} lName the lName for this User
     *  @param {phone} phone the phoneNumber for this User
     *  @param {role} role the role for this User
     * 
     */
    constructor(fName, lName, phone, role = "user") { // password, and User ID will be enter uponCheck the availabity of UserID
        this.fName = fName;
        this.lName = lName;
        this.phone = phone;
        this.role = role;
        this.userID = this.fName + this.lName; // we have to check if the user excit or no .....
        this.password = this.fName.charAt(0) + this.lName.substr(0, 2) + 123;
        this.isAdmin = false;
        this.fullName = this.fName + " " + this.lName;

    }


    /**
     * @returns {string} representation of this User
     */

    toString() {
        return `Full name: ${this.fName} ${this.lName} \n Phone# ${this.phone} \n role: ${this.role} \n isAdmin:${this.isAdmin} \n UserId: ${this.userID}`;
    }
}
/**
 * Constructor for creating Admin object
 * 
 * @param {fName} fName the fName for this Admin
 *  @param {lName} lName the lName for this Admin
 *  @param {phone} phone the phoneNumber for this Admin
 *  @param {role} role the role for this Admin
 * 
 */
class Admin extends User {
    constructor(fName, lName, phone) {
        super(fName, lName, phone);
        this.role = "admin";
        this.isAdmin = true;
    }


}
/**
 * Constructor for creating RegularUser object
 * 
 * @param {fName} fName the fName for this RegularUser
 *  @param {lName} lName the lName for this RegularUser
 *  @param {phone} phone the phoneNumber for this RegularUser
 *  @param {role} role the role for this RegularUser
 * 
 */

class RegularUser extends User {
    constructor(fName, lName, phone) {
        super(fName, lName, phone);
        this.role = "regUser";
        this.userID = "Reg_" + this.fName.charAt(0) + this.lName;

    }
}
/**
 * Constructor for creating Student object
 * 
 * @param {fName} fName the fName for this Student 
 *  @param {lName} lName the lName for this Student 
 *  @param {phone} phone the phoneNumber for this Student 
 *  @param {role} role the role for this Student 
 * 
 */
class Student extends User {
    constructor(fName, lName, phone, entryYear = 2019, gpa = 4) {
            super(fName, lName, phone);
            this.role = "student";
            this.userID = "St_" + this.fName.charAt(0) + this.lName;
            this.entryYear = entryYear;
            this.gba = gpa;
            this.regestedCourse = [];
            this.fullName = this.fName + " " + this.lName;

        }
        /**
         * Setter for registred course code
         * 
         * @param {String} coursCode The courseCode 
         * @returns {undefined}
         */
    setRegestedCourses(coursCode) {
        this.regestedCourse.push(coursCode);
    }

}
/**
 * Constructor for creating Faculty object
 * 
 * @param {fName} fName the fName for this Faculty 
 *  @param {lName} lName the lName for this Faculty 
 *  @param {phone} phone the phoneNumber for this Faculty 
 *  @param {role} role the role for this Faculty 
 * 
 */
class Faculty extends User {
    constructor(fName, lName, phone, department) {
        super(fName, lName, phone);
        this.department = department;
        this.role = "faculty";
        this.userID = "fac_" + this.fName.charAt(0) + this.lName;
        this.fullName = this.fName + " " + this.lName;


    }
}
/**
 * Constructor for creating Courses object
 * 
 * @param {fName} fName the fName for this Courses 
 *  @param {lName} lName the lName for this Courses 
 *  @param {phone} phone the phoneNumber for this Courses 
 *  @param {role} role the role for this Courses 
 * 
 */

class Courses {
    constructor(courseName, courseID, courseCode) {
            this.courseName = courseName;
            this.courseID = courseID;
            this.courseCode = courseCode;
        }
        /**
         * Accessor for the 'courseName' Courses field
         * 
         * @returns {courseName} courseName for this Courses
         */
    getCourseName() {
            return this.courseName;
        }
        /**
         * Accessor for the 'CourseID' Courses field
         * 
         * @returns {CourseID} CourseID for this Courses
         */
    getCourseID() {
            return this.courseID;
        }
        /**
         * Accessor for the 'courseCode' Courses field
         * 
         * @returns {CourseID} courseCode for this Courses
         */
    getCoureCode() {
        return this.courseCode;
    }
}



const arrUsers = [];
const arrCourses = [];

const course1 = new Courses("Intro to Prog", 10001, "(IT 301)");
const course2 = new Courses("OOP", 10001, "(CS 302)");
const course3 = new Courses("Java ", 10003, "(CS 303)");
const course4 = new Courses("DBMS", 10004, "(IT 401)");

arrCourses.push(course1, course2, course3, course4);


const admin1 = new Admin("Mahmoud", "Magdy", "512-586-7332");
const admin2 = new Admin("tes", "abie", "512-897-7332");

admin1.userID = "admin";
admin1.password = "admin";

arrUsers.push(admin1, admin2);

const user1 = new RegularUser("user", "user", "512-333-2222");
const user2 = new RegularUser("Anthony", "Daniel", "512-222-2222");
const user3 = new RegularUser("Jacob", "Ethan", "512-444-1111");
user1.userID = "user";
user1.password = "user123";
arrUsers.push(user1, user2, user3);


const st1 = new Student("Ryan", "Michael", "782-334-2222", "2018", 3.2);
const st2 = new Student("Sara", "Caleb", "777-222-090", "2017", 3.2);
const st3 = new Student("Heba", "Hassan", "333-999-2232");
st1.userID = "student";
st1.password = "student";
st1.setRegestedCourses(course1);
st1.setRegestedCourses(course2);

arrUsers.push(st1, st2, st3);


const fac1 = new Faculty("Levi", "Keith", "838-999-2222", "Computer Science");
const fac2 = new Faculty("umur", "Tacettin", "898-222-333", "Computer Science");
const fac3 = new Faculty("Assad", "Saad", "323-8938-2232", "Accounting");
fac1.userID = "faculty";
fac1.password = "faculty";
arrUsers.push(fac1, fac2, fac3);

let userInfo = "";
let Pass = "";
/**
 * 
 * @param {string} loginCheckfunc that takes the username and password of user
 * 
 * @returns {undefined} no explicit return
 */

function loginCheck() {

    userInfo = document.getElementById("UserName").value; //get the userInfo from the user
    Pass = document.getElementById("password").value; //get the password from the user


    let selectedUser = arrUsers.find(x => x.userID === userInfo.toLowerCase() && x.password === Pass); // selectuser is my whole Object...
    sessionStorage.setItem("selectUser", JSON.stringify(selectedUser)); // its a way to catch the user information, when we move from page to another

    if (selectedUser == null)
        alert("wrong User or Password, please try again...");
    else {
        if (selectedUser.role == "regUser")
            window.location.href = "courses.html"; // redirect to another page...
        else if (selectedUser.role == "student") {
            window.location.href = "student.html"; // redirect

        } else if (selectedUser.role == "admin") {
            window.location.href = "admin.html"; // redirect
        } else if (selectedUser.role == "faculty") {
            window.location.href = "faculty.html"; // redirect
        }

    }

}
/**
 * 
 * @param {string} showCoursesfunc that takes courseName, courseID and courseCode
 * 
 * @returns {string} shows courses 
 */
function showCourses() {

    let result = `<center><h2>Courses</h2></center>
    <button type="button " onclick="sortCourses(arrCourses.courseName,arrUsers.courseName) ">sorting(Name)</button>
    <button type="button " onclick="sortCourses(arrCourses.courseCode,arrUsers.courseCode) ">sorting(Code)</button>
    
    <table class='table table-striped' border='2|2'  courseName >`;
    for (let i = 0; i < arrCourses.length; i++) {
        result += "<tr>";
        result += "<td>" + "    " + arrCourses[i].courseName + "</td>";
        result += "<td>" + "    " + arrCourses[i].courseID + "</td>";
        result += "<td>" + "    " + arrCourses[i].courseCode + "</td>";

        result += "</tr>";
    }
    result += "</table>";

    document.getElementById("coursesID").innerHTML = result;

}
/**
 * 
 * @param {string} showStudentListfunc that takes student information 
 * 
 * @returns {string} shows students list  
 */
function showStudentList() {
    let html1 = `<center><h2>Student list</h2></center>
    <button type="button " onclick="sortStudent(arrUsers.fName,arrUsers.fName) ">sorting(fName)</button>
    <button type="button " onclick="sortStudent(arrUsers.lName,arrUsers.lName) ">sorting(lName)</button>
    
    <table class='table table-striped' border='2|2'  student list >`;
    for (let i = 0; i < arrUsers.length; i++) {
        if (arrUsers[i].role == "student") {
            html1 += "<tr>";
            html1 += "<td>" + "    " + arrUsers[i].fullName + "</td>";
            html1 += "<td>" + "    " + arrUsers[i].phone + "</td>";
            html1 += "<td>" + "    " + arrUsers[i].userID + "</td>";
            //  html += "<td>" + "    " + arrUsers[i].regestedCourse + "</td>";
        }
        html1 += "</tr>";
    }
    html1 += "</table>";
    document.getElementById("showStudentListID").innerHTML = html1;
}
/**
 * 
 * @param {string} showFacultyListfunc that takes fuculty member information 
 * 
 * @returns {string} shows faculty list  
 */
function showFacultyList() {
    let html1 = `<center><h2>Faculty List </h2></center>
    <button type="button " onclick="sortFaculty(arrUsers.fName,arrUsers.fName) ">sorting(fName)</button>
    <button type="button " onclick="sortFaculty(arrUsers.lName,arrUsers.lName) ">sorting(lName)</button>

    <table class='table table-striped' border='2|2'  Faculty list > `;
    for (let i = 0; i < arrUsers.length; i++) {
        if (arrUsers[i].role == "faculty") {
            html1 += "<tr>";
            html1 += "<td>" + "    " + arrUsers[i].fullName + "</td>";
            html1 += "<td>" + "    " + arrUsers[i].phone + "</td>";
            html1 += "<td>" + "    " + arrUsers[i].userID + "</td>";
        }
        html1 += "</tr>";
    }
    html1 += "</table>";

    document.getElementById("showFacultyListID").innerHTML = html1;


}
/**
 * 
 * @param {string} sortFacultyfunc that takes fuculty member information 
 * 
 * @returns {undefined} no return since it sorts faculty list 
 */

function sortFaculty(x, y) {
    arrUsers.sort((a, b) => (x > y) ? 1 : -1);
    //arrUsers.sort((a, b) => (a.fName > b.fName) ? 1 : -1)

    showFacultyList();

}

function sortStudent(x, y) {
    arrUsers.sort((a, b) => (x > y) ? 1 : -1);

    showStudentList();

}

function sortCourses(x, y) {
    arrCourses.sort((a, b) => (x > y) ? 1 : -1);

    showCourses();

}

/**
 * 
 * @param {string} showUserCoursesfunc that takes course information 
 * 
 * @returns {string} shows course list  
 */

function showUserCourses() { // how to take the Login For the User

    let profile = JSON.parse(sessionStorage.getItem("selectUser")); // USerLogined Object, which I saved on sessionStorage

    let courses = "<center><h2> Registed Courses </h2></center>";
    let count = 1;
    profile.regestedCourse.forEach(element => {
        courses += count++ + " - Course Name: " + element.courseName + "<br>" + "&nbsp &nbsp &nbsp" + "Course Code: " + element.courseCode + "<br>" + "<br>";
    });
    document.getElementById("showUserCoursesID").innerHTML = courses;



}
/**
 * 
 * @param {string} showProfilefunc that takes profile information 
 * 
 * @returns {string} shows profile   
 */
function showProfile() { // we need to edit to be compatable will all of the user, by if statement for each role...
    let profile = JSON.parse(sessionStorage.getItem("selectUser")); // USerLogined Object
    let courses = "";


    document.getElementById("FullName").innerHTML = profile.fName + " " + profile.lName;
    document.getElementById("Phonenumber").innerHTML = profile.phone;
    document.getElementById("UserName").innerHTML = profile.userID;
    document.getElementById("role").innerHTML = profile.role;

    if (profile.role === "student") {
        document.getElementById("GPA").innerHTML = profile.gba;
        document.getElementById("EntryYear").innerHTML = profile.entryYear;
        profile.regestedCourse.forEach(element => {
            courses += element.courseName + " " + element.courseCode + "\n";
        });

        document.getElementById("RegisteredCourses").innerHTML = courses;
    }



}
/**
 * 
 * @param {string} editProfileRedirectfunc that takes profile information 
 * 
 * @returns {undefined} no return since it edit profile information    
 */
function editProfileRedirect() {
    let profile = JSON.parse(sessionStorage.getItem("selectUser")); // USerLogined Object

    window.location.href = "editProfile.html"; // redirect

    document.getElementById("fName").innerHTML = profile.fName;

}


// dublicate for code, trying to show profile in editProfile
/**
 * 
 * @param {string} showProfileEditablefunc that takes profile information 
 * 
 * @returns {string} shows updatedprofile   
 */
function showProfileEditable() { // we need to edit to be compatable will all of the user, by if statement for each role...
    let profile = JSON.parse(sessionStorage.getItem("selectUser")); // USerLogined Object


    document.getElementById("fName").value = profile.fName;
    document.getElementById("lName").value = profile.lName;
    document.getElementById("Phonenumber").value = profile.phone;
    document.getElementById("UserName").value = profile.userID;
    document.getElementById("UserName").readOnly = true;
    document.getElementById("role").value = profile.role;
    document.getElementById("role").readOnly = true;

    document.getElementById("password").value = profile.password;
    document.getElementById("password").readOnly = true;



    // document.getElementById("GPA").innerHTML = profile.gba;
    // document.getElementById("EntryYear").innerHTML = profile.entryYear;


}
/**
 * 
 * @param {string} sumbitChangefunc that takes profile information 
 * 
 * @returns {undefined} no return since it submit edited profile information    
 */
function sumbitChange() {
    let profile = JSON.parse(sessionStorage.getItem("selectUser")); // USerLogined Object

    profile.fName = document.getElementById("fName").value;
    profile.lName = document.getElementById("lName").value;
    profile.phone = document.getElementById("Phonenumber").value;
    profile.password = document.getElementById("password").value;

    alert("changed submitted successfully");

    sessionStorage.setItem("selectUser", JSON.stringify(profile)); //  need review
    //  window.location.href = "admin.html"; // redirect

}
/**
 * 
 * @returns {undefined} no return since it goback     
 */
function goBack() { // why I can't go back after submitting.
    let profile = JSON.parse(sessionStorage.getItem("selectUser")); // USerLogined Object

    window.history.back();


}
/**
 * 
 * @param {string} findCoursesfunc that takes course properties  
 * 
 * @returns {string} returns the course information     
 */
function findCourses() {

    let textValue = document.getElementById("stuID").value;


    let result = "";
    let searchedUser = arrUsers.find(x => x.userID === textValue && x.role === "student");

    if (searchedUser == null) {
        alert("please try a valid Student User ID");
    } else {
        searchedUser.regestedCourse.forEach(element => {
            result += element.courseName + " " + element.courseCode + " \n";

        });

    }

    if (searchedUser.regestedCourse.length <= 0) {
        document.getElementById("searchResult").innerHTML = "no assigned courses for this student";

    } else {
        document.getElementById("searchResult").innerHTML = result;
    }


}
/**
 * 
 * @param {string} assignCoursesfunc that takes course properties  
 * 
 * @returns {undefined} returns the course information that assigned     
 */
function assignCourses() {

    //search first for the UserID

    let userValue = document.getElementById("stuID2").value;
    let courseValue = document.getElementById("course").value;

    let searchedUser = arrUsers.find(x => x.userID === userValue && x.role === "student");
    let courseAssigned = arrCourses.find(x => x.courseCode === courseValue);

    if (searchedUser == null) {
        alert("please try a valid Student User ID");
    } else {
        alert(courseAssigned.courseName + " add to " + searchedUser.fName + " " + searchedUser.lName);
        searchedUser.setRegestedCourses(courseAssigned);
    }

}