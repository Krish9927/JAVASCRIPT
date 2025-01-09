function calculatecarprice(val1,val2,...num1){
    return num1;
}
console.log(calculatecarprice(200,400,500,900));//[ 500, 900 ]
const user ={
    username:"KRISH",
    price: 100
}
function handleobject(anyobject){
 console.log(`username is ${anyobject.username}and price is ${anyobject.price}`);    
}
   // handleobject(user)//username is KRISHand price is 100
    handleobject({
        username:"sam",
        price:"399"
    })//username is samand price is 399
    const myarr=[300,500,600,7000]
    function returnsecondaarray(getarray){
        return getarray
    }
    console.log(returnsecondaarray(myarr))//[ 300, 500, 600, 7000 ]
