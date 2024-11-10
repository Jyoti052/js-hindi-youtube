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
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1,obj2} // will give obj1 and obj2 as two objects

//const obj3 = Object.assign({},obj1,obj2,obj4)//will combine these objects into a single object

const obj3 = {...obj1, ...obj2} // another way of combining 

//console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"j@gmail.com"
    },
    {
        id:3,
        email:"y@gmail.com"
    }
]

//console.log(users[0].email)

console.log(tinderUser)
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedOf'));// to check if this property exists or not



