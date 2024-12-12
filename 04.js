// OBJECTS 

const stud ={
    "full name" : "ramesh Sharma",
    gender : "male",
    email : "ramesh@gmail.com",
    age : 18,
    location:"Ghaziabad",
    loginday: ["sat","sun","tues"],
    islogin:true,

    //using function
    login:()=>{

}
};


console.log(stud);
console.log( typeof stud);
stud.name = "Ramesh Sharma";

console.log(stud);
console.table(stud);
console.log(stud.age);
// if key is more the one word like full name then " " double quotes is required
console.log(stud["full name"]);
console.log(stud["email"]);
console.log(stud.islogin);
console.log(stud.name);
//console.log(stud["name"]);
console.log(stud["full name"]);


if (stud.islogin) {
   console.log(stud.loginday);
   
}

if (stud.email) {
   console.log(stud.loginday);
   
}
if (stud) {
   console.log(stud.loginday);
   
}
let t1={};
if(t1){
    console.log(t1);
    
}
if (1=='1') {
    console.log(1==='1'); // address
    console.log(1=='1'); // value
    
}

// in anything except false , null is true in java script




// using function 
stud.greeting=()=>console.log("hello");
stud.greeting()