 function sayMyName(){
 console.log('K');
 console.log('R');
 console.log('I');
 console.log('S');
 console.log('H');
 }
// sayMyName//refrence
 sayMyName()//execution
  function add2num(number1,number2){
  console.log(number1+number2);
}
add2num(11,21)//32
add2num(9,"0")//90
add2num(2,null)//2
add2num(3,"q")//3q
const result =add2num(3,6)
console.log(result);//undefined
 function add3num(num1,num2,num3){
    let results=num1+num2+num3
    return results
 }
 const results = add3num(2,5,8)
console.log(results);//15
function loginusermsg(username){
    if(username==undefined){
        console.log('pleae enter username');
        return
        
    }
    return `${username} just logged in`
}
console.log(loginusermsg("KRISHNA"));//KRISHNA just logged in
console.log(loginusermsg());//pleae enter username undefined






