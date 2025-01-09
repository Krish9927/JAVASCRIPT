//const tinderuser = new Object()
const tinderuser={}
console.log(tinderuser);
const userinfo={
email: "kusyapk@gmail.com",
username:{
    firstname:"krishna",
    lastname:"kashyap"
}
}
console.log(userinfo.username.firstname);//krishna
const obj1={1: "a",2:"b",3:"c"}
const obj2 ={4:"d",5:"f"}
//const obj3={obj1,obj2}
const obj3 =Object.assign({},obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'f' }
console.log(obj3);
const obj4={...obj1,...obj2}
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'f' }
console.log(userinfo);//{ email: 'kusyapk@gmail.com',username: { firstname: 'krishna', lastname: 'kashyap' }}
console.log(Object.keys(userinfo));//[ 'email', 'username' ]
console.log(Object.values(userinfo));//[ 'kusyapk@gmail.com', { firstname: 'krishna', lastname: 'kashyap' } ]
console.log(Object.entries(userinfo));// [ 'email', 'kusyapk@gmail.com' ], [ 'username', { firstname: 'krishna', lastname: 'kashyap' } ]]






