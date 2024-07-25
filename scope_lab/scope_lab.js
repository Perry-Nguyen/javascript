// //global scope

// var globalVar = "i'm a global variable"
// let globallet = "i'm also global, but scoped with let";
// const globalconst = "i'm a global constant";


// {
//     //block scope
//     var blockvar = "blockvar";
//     let blocklet = "blocklet";
//     const blockconst= "blockconst";
// }
// // Global scope
// console.log(globalVar); // Output: "I'm a global variable"
// console.log(globallet); // Output: "I'm also global, but scoped with let"
// console.log(globalconst); // Output: "I'm a global constant"
// //Block Scope
// console.log(blockvar);
// console.log(blocklet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

// console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError