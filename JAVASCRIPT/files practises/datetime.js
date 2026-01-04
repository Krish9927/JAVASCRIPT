let mydate= new Date()
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(mydate.toTimeString());
console.log(mydate.toDateString());
let mycreateddate = new Date(2025,4,23)
console.log(mycreateddate.toLocaleDateString());
let mycreateddat = new Date("05-02-2025")
console.log(mycreateddat.toLocaleDateString());
let mytimestamp=Date.now();
console.log(mytimestamp);
console.log(mycreateddate.getTime());
let newdate = new Date()
console.log(newdate.getMonth());console.log('aa');

console.log(newdate.getDay());



