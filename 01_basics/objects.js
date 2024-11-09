// object made of constructor ---> singleton.example---
//object.create

//object literals-->

const mySym = Symbol('key1')

const JsUser = {
    name:'hitesh',
    'full name':'Hitesh Choudhary',
    [mySym]:'myKey1',
    age:18,
    location:'jaipur',
    email:'hitesh@google.com',
    isLoggedIn:false,
    lastLoginDays:['Monday','Saturday']
}
//console.log(JsUser.email)
//console.log(JsUser['email']);

//console.log(JsUser.full name);// will throw an error

//console.log(JsUser['full name']);

JsUser.email='hitesh@chatgpt.com'

//Object.freeze(JsUser) // cant make any changes in the object

JsUser.email='dotcom'

//console.log(JsUser);

JsUser.greeting = function () {
    console.log('Hello Js User')
}
JsUser.greetingTwo = function () {
    console.log(`Hello Js User,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



