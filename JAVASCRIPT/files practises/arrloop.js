//for of
// ["","",""]
// [{},{},{}]
const arr=[1,23,4,5,6,7]
for (const num of arr) {
    console.log(num);
    
}
const  greet ="HELLO WORLDS!"
for (const k of greet) {
    console.log(k);
    
}
//map
const map =new Map()
map.set('IN',"INDIA")
map.set('US',"AMERICA")
map.set('IN',"Asa")
console.log(map);

const myObject={
    game1: 'NFS',
    game2:'spiderman'
}
for (const key in myObject) {
    console.log(`${key} shorrtcut is for ${myObject[key]}`);
    
    }
    const programming=['js','ruby','py','cpp']
for (const key in programming) {
    console.log(key);
    
}
const prog=['js','ruby','py','cpp']
prog.forEach( function(val){
    console.log(val);
    
})
prog.forEach((item)=> {
    console.log(item);
    
});
const mya=[
    {
        languagename:"c",
        fathernsme:"dennis"
    },
    {
        languagename:"python",
        fathernsme:"guido van rossum"
    },
    {
        languagename:"java",
        fathernsme:"james gosling"
    }
]
mya.forEach((item) => {
console.log(item.languagename);

})
