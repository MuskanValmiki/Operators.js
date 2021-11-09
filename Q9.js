// spread operators

var allCars={...mynewCar,...myOldCar}
console.log(allCars);
// combining object

let arr = [1,2,3];
let arr2 = [4,5];
arr = [...arr,...arr2];
console.log(arr);
// concate array 

let namesArray = ['kumar','shwetha','komal'];
let arr2 = [...namesArray]; // using spread operator
console.log(arr2); // [ 'kumar', 'shwetha', 'komal' ]
arr2.push("Kunal"); // adding a new name
console.log(arr2); //[ 'kumar', 'shwetha', 'komal', 'Kunal' ]
console.log(namesArray);
// copy

var place={name:"paris",country:"France"};
var duplicate ={...place};
console.log(duplicate);
// copy object

let arr1 = ['x','y'];
let arr2 = [...arr1,'c','d'];
console.log(arr2); // [ 'x','y','c','d' ]
// extend array

let array1 =[1,2,3];
let array2 =[4,5,6];
let array3 =[7,8,9];
array1 =[...array1,...array2,...array3];
console.log(array1)
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],merge array

let array1 = [1,2,3,4,4,4,4,2,3,3,4,6]
let mySet = new Set(array1)
myNewArray = [...mySet]
console.log(myNewArray)
//Cleaning up repeated elements from an array with a spread operator,remove 

function add(a,b,...c){
    console.log(a+b);
    console.log(c);
 } 
 add(3,5,3,4)
// rest spread operators

function myFunction(v, w, x, y, z) { 
    console.log(w)
}
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
// rest operators

var myName="Muskan"
var lettersOfMyName=[...myName]
console.log(lettersOfMyName);
// split

var myName="kumar"
console.log({...myName})
// with a spread operator
