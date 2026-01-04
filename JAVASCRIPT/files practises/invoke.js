//immediate invoked function expression(iife)
function chai(){
    console.log(`DB CONNECTIONS`);
    
}
(function chaiS(){
    console.log(`DB CONNECTIONS`);
    
})();
(function code(){//named iife
    console.log(`DB CONNECTIONS`);
    
})();
((nam)=>{//unnamed iife
    console.log(`DB CONNECTION TWO ${nam}`);
    
})('krishna');