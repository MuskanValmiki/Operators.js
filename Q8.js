let namesArray = ['muskan','somi','samridhhi','ruchi'];
let arr2 = [...namesArray];
console.log(arr2); 
//copy in arr another array by using spread operators(copying array)

var arr1 = ['x','y'];
var arr2_ = [...arr1,'c','d'];
console.log(arr2_); 
//here also we are adding some element(expanding array)

var arr = [1,2,3];
var arr2_ = [4,5];
arr = [...arr,...arr2];
console.log(arr); 
// spread operator doing the concat job

var myName="kumar"
var lettersOfMyName=[...myName]
console.log(lettersOfMyName); 
// With a spread operator split 

var array1 = [1,2,3,4,4,4,4,2,3,3,4,6]
var mySet = new Set(array1)
myNewArray = [...mySet]
console.log(myNewArray)
//remove duplicate element by using spread operators

var myName="muskan"
console.log({...myName})
//split over a string

var place={name:"paris",country:"France"}
var duplicate=Object.assign({},place);
console.log(duplicate)
//copy object without spread

var duplicate ={...place}
console.log(duplicate);
//by using spread copy the object

var mynewCar={newCarName:"ROlls Royce",newCarColour:"brown"}
var myOldCar={oldCarName:"Lamborghini",oldCarColour:"grey"}
var allCars=Object.assign({},mynewCar,myOldCar)
console.log(allCars)
//combining object without spread 

var allCars={...mynewCar,...myOldCar}
console.log(allCars);
//combining object with spread 

function add(a,b,...c){
    console.log(a+b);
    console.log(c);
}
add(3,5,3,4)
//by using spread 

