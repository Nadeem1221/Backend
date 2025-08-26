//method to send data from one file to another in node.js
const sum=(a, b) => (a+b);   
const mul =(a,b)=> a*b;
const g = 9.8;  

// module.exports = "hello! from math.js";
//module.exports reture a special object to sscript.js

let obj ={
   sum:sum,
   mul:mul,
   g: 9.8

}
module.exports = obj;

/*other way of module export
     1)   module.exports = {
            sum: (a, b) => a + b,
            mul: (a, b) => a * b,
            g: 9.8

     2)module.exports.const sum=(a, b) => (a+b);   
        module.exports.const mul =(a,b)=> a*b;
        module.exports.const g = 9.8;  
 */