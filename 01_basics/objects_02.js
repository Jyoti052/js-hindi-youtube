//singleton object made with the help of constructor--->
//const tinderUser = new Object()
//console.log(tinderUser)

const tinderUser = {}
tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

//console.log(tinderUser)


const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:'jyoti',
            lastname:'thakur'
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2} // will give obj1 and obj2 as two objects

const obj3 = Object.assign({},obj1,obj2)

console.log(obj3);

