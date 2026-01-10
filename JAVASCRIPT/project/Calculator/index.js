let zero=document.querySelector('.one')
let one=document.querySelector('.one')
let two=document.querySelector('.two')
let three=document.querySelector('.three')
let four=document.querySelector('.four')
let five =document.querySelector('.five')
let six=document.querySelector('.six')
let seven=document.querySelector('.seven')
let eight=document.querySelector('.eight')
let nine=document.querySelector('.nine')
let dot=document.querySelector('.dot')
let eq=document.querySelector('.equalto')
let astick=document.querySelector('.asetick')
let plus=document.querySelector('.plus')
let minus=document.querySelector('.minus')
let divide=document.querySelector('.divide')
let clear=document.querySelector('.Clear')
let display=document.querySelector('.display')

function appendValue(text){
    console.log(text);
    if(display.innerText === 'Error' || display.innerText === 'Infinity'){
        displayClear();
    }
    display.innerText+=text;
}
function displayClear(){
    display.innerText=''
}
function calcAns(){
    try{
    let k=eval(display.innerText)
    display.innerText=k;
    }
    catch(error){
        display.innerText='Error';
    }
}