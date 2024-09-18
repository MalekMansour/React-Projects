const student = {
    name: "Joe Blow",
    age: 25,
    country: "Canada"
};

const { name, age } = student; 

console.log(name);  
console.log(age);  
console.log(`Hello! My name is ${name} and I am ${age} years old.`);

/*
 * Expected output:
 * Joe Blow
 * 25
 */