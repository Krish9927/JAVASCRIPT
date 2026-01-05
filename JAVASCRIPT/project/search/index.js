let Users=[
    {
      profileUrl:'img/profile.png',
      name:'Krishna',
      email:'Krishna.2024CA050@mnnit.ac.in',   
    },
    {
      profileUrl:'img/profile1.png',
      name:'Lokesh Kashyap',
      email:'Lokesh@gmail.com',   
    },
    {
      profileUrl:'img/prrofile2.png',
      name:'Rahul Dravid',
      email:'Rahuldravid.@gmial.com',   
    }
]
 let IS=document.querySelector('#ip')
 let profile=document.querySelector('.ProfileUrl')
//  console.log(profile);
 let userContainer=document.querySelector('.package')
 let err=document.querySelector('.jivan')
 var  msg=document.createElement('p')
 Users.map(function(obj){
     let {profileUrl,name,email}=obj;
    //  console.log(profileUrl,name,email)
     let divele=document.createElement('div')
    divele.className='m-1 flex flex-col'
    divele.innerHTML=`
         <div class="package w-[90%] mx-6 bg-gray-400/20 h-[24%]  flex flex-row">
           <div class="img w-[20%] h-[90%] text-center p-1 flex flex-row justify-center my-2">
               <img src=${profileUrl} class="ProfileUrl border-box w-[70%] h-[90%] rounded-[50%] " alt="" srcset="">
            </div>
            <div class="intro my-4">
                <div class="name font-bold font-sans">
                    ${name}
                </div>
                <div class="email font-thin">
                   ${email}
                </div>
            </div>
        </div>
    `
    userContainer.append(divele)
})
function renderUser(arr){
     userContainer.innerHTML=''
     msg.innerText=''
    arr.map(function(obj){
        let {profileUrl,name,email}=obj;
       //  console.log(profileUrl,name,email)
        let divele=document.createElement('div')
       divele.className='m-1 flex flex-col'
       divele.innerHTML=`
            <div class="package w-[90%] mx-6 bg-gray-400/20 h-[24%]  flex flex-row">
              <div class="img w-[20%] h-[90%] text-center p-1 flex flex-row justify-center my-2">
                  <img src=${profileUrl} class="ProfileUrl border-box w-[70%] h-[90%] rounded-[50%] " alt="" srcset="">
               </div>
               <div class="intro my-4">
                   <div class="name font-bold font-sans">
                       ${name}
                   </div>
                   <div class="email font-thin">
                      ${email}
                   </div>
               </div>
           </div>
       `
      
       userContainer.append(divele)
   })
     if(userContainer.innerHTML == ''){
         msg.innerText=''
   msg.className='text-red-400 text-center'
   msg.innerText='Please Enter Valid Text'
   err.append(msg)
   console.log('Empty hu me');

  }
}
renderUser(Users)
function handleSearch(e){
  let searchvalue=e.target.value;
  let filteredUser= Users.filter(obj=>{
    // obj.name.includes(searchvalue)
    return obj.name.toLowerCase().includes(searchvalue.toLowerCase())||obj.email.toLowerCase().includes(searchvalue.toLowerCase())
    
  })
  renderUser(filteredUser)

}
IS.addEventListener('input',handleSearch)