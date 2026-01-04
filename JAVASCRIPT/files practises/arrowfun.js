const user={
   username:"KRISHNA",
   price: 999,

   welcomemsg: function(){
    console.log(`${this.username},welcome to visit`);
    console.log(this);//{ username: 'KRISHNA', price: 999, welcomemsg: [Function: welcomemsg] }
    
   }

}
user.welcomemsg()//KRISHNA,welcome to visit
//this keyword used for current context
user.username="sam"
console.log(this);//{}
function chai(){
    console.log(this);
    
}
chai()
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]   
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]   
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],        
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/
function chai(){
    let username ="KRISHNA"
    console.log(this.username);//undefined
    
}
const chais= () =>{
    let username ="KRISHNA"
    console.log(this.username);//undefined
    
}
// const addtwo =(num1,num2)=>{
//     return num1+num2
// }//15
// const addtwo=(num1 ,num2)=> num1+num2//15
// const addtwo=(num1 ,num2)=> (num1+num2)//15
const addtwo=(num1 ,num2)=> ({uname:"KRISH"})//{ uname: 'KRISH' } 
console.log(addtwo(8,7));
