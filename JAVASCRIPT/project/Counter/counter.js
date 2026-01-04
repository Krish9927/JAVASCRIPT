let d=document.querySelector('.dec')
let i=document.querySelector('.inc')
let box=document.querySelector('.val')
// console.log(d);
// console.log(i);
console.log(box);
d.addEventListener('click',()=>{
//  box.innerText=Number()
// let x=box.innerText
let val=Number(box.innerText)
if(val <= 1){
    return null;
}
box.innerText=val-1

})
i.addEventListener('click',()=>{
//  box.innerText=Number()
// let x=box.innerText
let val=Number(box.innerText)
box.innerText=val+1

})
