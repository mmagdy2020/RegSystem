/* eslint-disable no-unused-vars */
/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";

class User {
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
    getfName() {
        return this.fName;
    }

    getlName() {
        return this.lName;
    }
    getPhone() {
        return this.phone;
    }

    getrole() {
        return this.role;
    }




    toString() {
        return `Full name: ${this.fName} ${this.lName} \n Phone# ${this.phone} \n role: ${this.role} \n isAdmin:${this.isAdmin} \n UserId: ${this.userID}`;
    }
}

class Admin extends User {
    constructor(fName, lName, phone) {
        super(fName, lName, phone);
        this.role = "admin";
        this.isAdmin = true;
    }


}





class RegularUser extends User {
    constructor(fName, lName, phone) {
        super(fName, lName, phone);
        this.role = "regUser";
        this.userID = "Reg_" + this.fName.charAt(0) + this.lName;

    }
}

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
    setRegestedCourses(coursCode) {
        this.regestedCourse.push(coursCode);
    }
}

class Faculty extends User {
    constructor(fName, lName, phone, department) {
        super(fName, lName, phone);
        this.department = department;
        this.role = "faculty";
        this.userID = "fac_" + this.fName.charAt(0) + this.lName;
        this.fullName = this.fName + " " + this.lName;


    }
}

class Courses {
    constructor(courseName, courseID, courseCode) {
        this.courseName = courseName;
        this.courseID = courseID;
        this.courseCode = courseCode;
    }

    getCourseName() {
        return this.courseName;
    }
    getCourseID() {
        return this.courseID;
    }
    getCoureCode() {
        return this.courseName;
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



console.log(JSON.stringify());





let userInfo = "";
let Pass = "";



function loginCheck() {

    userInfo = document.getElementById("UserName").value; //get the userInfo from the user
    Pass = document.getElementById("password").value; //get the password from the user


    let selectedUser = arrUsers.find(x => x.userID === userInfo && x.password === Pass); // selectuser is my whole Object...
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

function showCourses() {

    let result = `<center><h2>Courses</h2></center>
    <button type="button " onclick="sortCourses(arrCourses.courseName,arrCourses.courseName) ">sorting(Name)</button>
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


function sortFaculty(x, y) {
    arrUsers.sort((a, b) => (x > y) ? 1 : -1);

    showFacultyList();

}

function sortStudent(x, y) {
    arrUsers.sort((a, b) => (x > y) ? 1 : -1);

    showStudentList();

}

function sortCourses(x, y) {
    arrCourses.sort((a, b) => (x > y) ? 1 : -1)

    showCourses();

}




function showUserCourses() { // how to take the Login For the User

    let profile = JSON.parse(sessionStorage.getItem("selectUser")); // USerLogined Object, which I saved on sessionStorage

    let courses = "<center><h2> Registed Courses </h2></center>";
    let count = 1;
    profile.regestedCourse.forEach(element => {
        courses += count++ + " - Course Name: " + element.courseName + "<br>" + "&nbsp &nbsp &nbsp" + "Course Code: " + element.courseCode + "<br>" + "<br>";
    });
    document.getElementById("showUserCoursesID").innerHTML = courses;



}

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

function editProfileRedirect() {
    let profile = JSON.parse(sessionStorage.getItem("selectUser")); // USerLogined Object

    window.location.href = "editProfile.html"; // redirect

    document.getElementById("fName").innerHTML = profile.fName;

}


// dublicate for code, trying to show profile in editProfile

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

function goBack() { // why I can't go back after submitting.
    let profile = JSON.parse(sessionStorage.getItem("selectUser")); // USerLogined Object

    window.history.back();


}

function findCourses() {

    let textValue = document.getElementById("stuID").value;


    let result = "";
    let searchedUser = arrUsers.find(x => x.userID === textValue && x.role === "student");

    if (searchedUser == null) {
        alert("please try with a valid Student User ID");
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

function assignCourses() {

    //search first for the UserID

    let userValue = document.getElementById("stuID2").value;
    let courseValue = document.getElementById("course").value;

    let searchedUser = arrUsers.find(x => x.userID === userValue && x.role === "student");
    let courseAssigned = arrCourses.find(x => x.courseCode === courseValue);

    if (searchedUser == null) {
        alert("please try a walid valid Student User ID");
    } else {
        alert(`The course "${courseAssigned.courseName.toUpperCase()}" has been added to "${searchedUser.fullName}" sucessfully`);
        searchedUser.setRegestedCourses(courseAssigned);
    }

}
// new coding for ExtraCredit...avatar

function adminControl() {

    window.location.href = "adminControl.html"; // redirect

}