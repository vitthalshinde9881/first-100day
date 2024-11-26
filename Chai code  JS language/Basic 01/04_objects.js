//  const tinderUser = new object()
const tinderUser = {}

tinderUser.tinderUser = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b" }

// const obje3 = {obj1, obj2}
// const obj3 = Object.assign({}, obje1, obje2)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// console.log(object.value(tinderUser));
// console.log(object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor } = course  // Object destructure 

// console.log(courseInstructor);
console.log(instructor);







