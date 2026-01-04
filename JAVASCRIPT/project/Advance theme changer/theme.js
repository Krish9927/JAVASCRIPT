let rand = document.querySelector('.btn-rand');
let inputx = document.querySelector('#rang-name');
let apply = document.querySelector('.btn-apply');
let body=document.querySelector('body')
let curr=document.querySelector('.curr-rang')
let form=document.querySelector('form')
let Colors=['bg-red-400','bg-blue-400','bg-green-400','bg-yellow-400','bg-sky-600','bg-rose-400','bg-purple-600','bg-slate-900','bg-zinc-700','bg-lime-500']
var curcolor='bg-rose-900';
let curclr=curr.innerHTML
var inptext;



rand.addEventListener('click',()=>{
    let calc=Math.floor(Math.random()*10)
    console.log(calc);
    body.classList.remove(curcolor)
    body.classList.add(Colors[calc])
    curcolor=Colors[calc]
    let n=curcolor.length
    curr.innerHTML=curclr+' '+ curcolor.slice(3,n-4).toUpperCase()
})

 

form.addEventListener('submit',(e)=>{
e.preventDefault();
 console.log('working');
 let valcol=inputx.value
 if(!valcol){
     curr.innerHTML=curclr+' '+'Enter Valid Color'
    return null;
 }
 else{
  body.classList.remove(curcolor)
    body.classList.add(`bg-${valcol}-600`)
    curcolor=`bg-${valcol}-600`;
    curr.innerHTML=curclr+' '+valcol
 }
})