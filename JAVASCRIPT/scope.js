var z=909
if(true){
let x=10
const y=20
z=22
console.log(z);//22
}
//console.log(x);
//console.log(y);
console.log(z);//22
//closure technique to mainupulate basic html page
function one(){
    const username="KRISHNA"
    function two(){
        const website="youtube"
        console.log(username);
    }
  //  console.log(website);
    two()
}
one()
if(true){
    const uname="papa"
if(uname=="papa"){
    const web="yt"
console.log(uname + web);
}
//console.log(web);

}
//console.log(uname);
//++++++++++++++++++++++++++intersting++++++++++++++++
console.log(addone(5));
function addone(num){
    return num+1
}


const num1=function(num){
return num+2
}
console.log(num1(5));















