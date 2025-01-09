const arr=[0,1,2,3,4,5]
const arr1= new Array(3,4,2,1,4)
console.log(arr1[2]);
 //array methods
 arr1.push(8)
 console.log(arr1);
 arr.pop()
 console.log(arr);
 arr1.unshift(8)
 console.log(arr1);//[ 8, 3, 4, 2, 1, 4, 8]
arr.shift()
console.log(arr);//[ 1, 2, 3, 4 ]
console.log(arr1.includes(4));//true
console.log(arr.indexOf(2));//1
const newar= arr.join()
console.log(newar);//1,2,3,4
console.log(arr);//[ 1, 2, 3, 4 ]
console.log(typeof arr);//object
console.log(typeof newar);//string
//slice vs splice
console.log("K",arr);//K [ 1, 2, 3, 4 ]
const myn1= arr.slice(1,3)
console.log(myn1);// 2, 3 ]
const myn2= arr.splice(1,3)
console.log(myn2);//[ 2, 3, 4 ]
console.log(arr);//[ 1 ]





 
 
 