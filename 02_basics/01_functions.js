//function addTwoNumbers(number1,number2){
    //console.log(number1+number2);
    
//}

 //const result= addTwoNumbers(3,4)
 //console.log("Result",result)

 function addTwoNumbers(number1,number2){
    //let result = number1+number2
    //return result
    //console.log("hitesh");//nothing prints after return
    return number1 +number2
    }
    const result= addTwoNumbers(3,4)
 //console.log("Result:",result)

 function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
 }

 //console.log(loginUserMessage("hitesh"))
 console.log(loginUserMessage()) //prints undefined