//if
if(2!=="2"){
console.log('true');

}
const balance=1000
if(balance>500)console.log('more than one line excute without curly bracket by usinh comma instead of semicolon'),
console.log('next statement');
//falsy value
//false,0,-0,"",null,undefined,NaN
//TRUTHY VALUE
//"0",'FALSE'," ".[],{},FUNCTION()[]
const useremail=[]
if(useremail.length===0){
    console.log("array is empty")//array is empty
    
}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log('object is empty');//object is empty
    
}
// nullish coalescing operator (??)
let val1;
val1= 15??10
val2= null??88
val3=undefined??33
val4 =null??10??44
console.log(val1);//15
console.log(val2);//88
console.log(val3);//33
console.log(val4);//10







