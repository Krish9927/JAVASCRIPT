let ch=document.querySelector('.on')
let ru=document.querySelector('.off')
let p1=document.querySelector('.rotate')

ch.addEventListener('click',()=>{
p1.classList.remove('scale-75','bg-red-900')
p1.classList.add('scale-100','bg-black')
})
ru.addEventListener('click',()=>{
    p1.classList.add('scale-75','bg-red-900')
    p1.classList.remove('scale-100','bg-black')

})