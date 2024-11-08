const myArr = [3,6,7,8]

const myHeroes = ['shaktiman','hitman']

const myArr2 = new Array(3,4,6)//another way of declaring an array

//console.log(myArr[1])

//Array methods
//myArr.push(0)
//console.log(myArr);

//myArr.pop()
//console.log(myArr);

//myArr.unshift(2)
//console.log(myArr);

//myArr.shift()
//console.log(myArr);

//console.log(myArr.includes(8));
//console.log(myArr.indexOf(9));
//console.log(myArr.indexOf(7));


const newArr= myArr.join()
//console.log(myArr);
//console.log(newArr);

//console.log(typeof newArr);

//slice,splice

console.log('A',myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log('B',myArr); //slice doesnt make any change to the original array

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log('C',myArr);  // splice modifies the original array

