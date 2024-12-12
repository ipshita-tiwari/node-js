const sayhi=()=>
    console.log("Ipshita Tiwari"); 
    


//  const sum=(a=0 ,b=0)=>{
//     ((a+b)-(a*b)) // returns values between curly brackets 
//     (a+b)
//  }

const sum=(a=0 ,b=0)=>
    ((a+b)-(a*b))
// if we use curly bracket the return keyword will be used


const sum1 =(a=10, b=50)=>{
    console.log(a+b);
    
}

const sum2 = (...num)=>{
    console.log(num);
    
}


sayhi()
sum(5,5)
sum1(2,2)
sum2(1,2,3,4,5,6,7,8,9,10)  



// IIFE --> immediately invoke function expression
(() => {
console.log("i am iife");
    
})();

((uname) =>{
    console.log('$(uname) is logged in');
    
})("john");
