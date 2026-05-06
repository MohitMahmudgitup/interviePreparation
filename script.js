// -------------------01----------------
// Globle Execution , Call Stack , Event loop , Queue

// -------------------02----------------
//Function Constructors || Class Constructors

// ``Function Constructors``
// function User (name,email,password){
//     this.User = User,
//     this.email = email,
//     this.password = password,
//     this.getFunc = ()=> console.log(User , email, password)
// }

// const u1 = new User('Mohit' , "mohit@gmail.com" , "Mohit12345Pas");
// console.log(u1.email)

// ``Class Constructors``
// class User {
//     constructor(User ,email, password ) {
//         this.User = User,
//         this.email = email,
//         this.password = password,
//         this.getFunc = () => console.log(User, email, password)
//     }
// }

// const u1 = new User('Mohit' , "mohit@gmail.com" , "Mohit12345Pas");
// console.log(u1)


// -------------------03----------------

// 01
// let arr = [10, 15, 30,"c", "e", 75, 40 ,"q", 41, 23]
// let elementN = arr.filter(item => typeof(item) === "number")
// let elementS = arr.filter(item => typeof(item) === "string")
// const NewArr = [elementN , elementS]
// console.log(NewArr)

// 02
// let arr = [10, 15, 30,"c", "e", 75, 40 ,"q", 41, 23];
// let num = []
// let str = []
// for (let i = 0 ; i < arr.length ; i ++ ){
//     if(typeof(arr[i]) === "number"){
//         num.push(arr[i])
//     }else{
//         str.push(arr[i])
//     }
// }
// console.log([num,str])

//03 ``Reduce method``

// let num = [1,2,3,4];
// let result = num.reduce((total , num)=> total + num , 0 );
// console.log(result)


