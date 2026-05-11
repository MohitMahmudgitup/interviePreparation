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

//In JS everything is an object

// const p1 = {
//     fname : "Muhid",
//     lname : 'Mahmud',
//     getFullname(){
//         return `${this.fname}${this.lname}`
//     }
// }

// const p2 = Object.create(p1);
// console.log(p2)



// let data = [
//   "item1", "item2", "item3", "item4", "item5",
//   "item6", "item7", "item8", "item9", "item10",
//   "item11", "item12", "item13", "item14", "item15",
//   "item16", "item17", "item18", "item19", "item20",
//   "item21", "item22", "item23", "item24", "item25",
//   "item26", "item27", "item28", "item29", "item30",
//   "item31", "item32", "item33", "item34", "item35",
//   "item36", "item37", "item38", "item39", "item40",
//   "item41", "item42", "item43", "item44", "item45",
//   "item46", "item47", "item48", "item49", "item50"
// ];
// const search = 'this is me'

// const fn1 = () => {

//     if (!search) return;

//     setTimeout(() => {
//         const result = data.filter((item) =>
//             item.includes(search)
//         );
//         console.log(result);
//     }, 1000);
// }
// fn1()






// console.log(a)
// var a = 10;

// greet()
// function greet (){
//     console.log("hello world")
// }

// greet()
// var greet = function(){
//       console.log("hello world")
// }

// let arr = [0,1,2,3,4,"s", 5,6 ,"l",76,7];
// const num = arr.filter(item => typeof item === "number")
// const str = arr.filter(item => typeof item === "string")
// let newArr = [ num  , str  ]
// console.log(newArr)


// if(true){
//     var a = "a";
//     let b = "b";
//     const c = "c";
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
//   console.log(a)
//     console.log(b)
//     console.log(c)

// const object = {1 : NaN}
// console.log(object)


// let arr = [1, 2, 3, 4, 5];
// let result = arr.forEach(item => item)

// console.log(result)

// ``High Order Functions``

// 01
// function abc (a ,b , cb){
//     let result = a + b;
//     cb(result)
// }
// abc(2,3,function(val){
//     console.log(val)
// })

// 02
// function abc (a,b,defg){
//     defg(a+b)
// }
// abc(1,2,(v)=>{
//     console.log(v)
// })


// ``IIFE -> Immediately Inoked Function Expression

// (function name(a,b){
//     let result = a + b
//     console.log(result)
// })(1,2)

//``Closers``

// function outer (){
//     let count = 10;
//     function inner (){
//         console.log(count)
//     }
//     inner()
// }
// const store =  outer()
// store()



//Promise

// 01
// const data = {
//     mohit: "hello world"
// }

// function fetchData (){
//     return new Promise((res,rej)=> {
//         setTimeout(()=>{
//             res(data)
//         },5000)
//     })
// }
// fetchData()
// .then(data=> console.log(data))
// .catch(err => console.log(err))

// 02
// const fetchData = async () => {
//     try {
//          const response = await fetch("https://jsonplaceholder.typicode.com/users")

//         const data = await response.json()

//         console.log(data)
//     } catch (error) {
// console.log(error)
//     }

// }
// fetchData()


// let arr = [1, 23, 4, 5, 6, 100]

// function result(arr) {
//     const view = arr.sort((a, b) => b - a)
//     console.log(view)
// }
// result(arr)


let obj1 = {
    name : "mohit",
    age : 12
}

let obj2 = {
    name : "inzamam",
    country : "Bangladesh"
}

const merge = {...obj1,...obj2}
console.log(merge)
