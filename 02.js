//Symbol always return unique value
let a=Symbol(10)
console.log(a);
let b=Symbol(10)
console.log(b);
console.log(a === b); // === datatype and value both same so output true
console.log(a == b);   // == value both same so output true
console.log(typeof a);
console.log(typeof b);


let studs =["abc","def","ghi" , 1,"name"];
console.log(studs);
console.log(typeof studs);
console.table(studs);
console.log(studs[-1]); // negative indexing not allowed
console.log(studs[3]);

studs.push("Ram"); // add "Ram " at last index
console.log(studs);
studs.unshift("Shyam"); // add "Shyam " at first index
console.log(studs);
studs.pop();           //remove last element 
console.log(studs);
studs.shift();          //remove first element
console.log(studs);

console.log(studs.includes("abc"));  // return true if abc is present in studs

console.log(studs.indexOf("abc"));  // return index of abc

const abc = studs.join();      // converts  array to string 
console.log(abc);
console.log( typeof abc);






