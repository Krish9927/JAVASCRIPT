
let f=document.querySelector('#first')
let l=document.querySelector('#last')
let b=document.querySelector('.btn')
let form=document.querySelector('form')
console.log(f);
console.log(l);
console.log(b);
form.addEventListener('submit',(e)=>{
    var k1='';
    e.preventDefault();
    let you=f.value;
    let me=l.value;
    k1="";
    if(!you || !me){
         k1=document.createElement('p')
        k1.setAttribute('class','text-red-400')
        k1.innerText='All fields are required'
        b.after(k1)
        return null;
    }
    console.log(you);
    console.log(me);
    let div1=document.createElement('div')
    div1.innerText='your sweet name is ='+you+" "+me
    b.after(div1)
    
})
