 let dm=document.querySelector('body')

 let btnlight=document.querySelector('.lg')
 let btndark=document.querySelector('.dk')

 dm.setAttribute('class','bg-white')
 btnlight.addEventListener('click',()=>{
     dm.classList.remove('bg-black')
    dm.classList.add('bg-white')
 })
 btndark.addEventListener('click',()=>{
    dm.classList.remove('bg-white')
    dm.classList.add('bg-black')
 })