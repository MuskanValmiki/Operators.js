var a,b;
[a,b]=[2,3]
console.log(a,b);
//here we are doing distructuring

var a=5;
var b=6;
[a,b] =[b,a]
console.log(a);
console.log(b);
//here we did distruturing and printing element

var actor = {name: 'Krish',realName: 'Hrithik Roshan'};
var name     = actor.name;
var realName = actor.realName;
console.log(name);     
console.log(realName); 
//her we did distuturing in object

var actor = {name: 'Krish',realName: 'Hrithik Roshan'};  
({name,realName} = actor);
console.log(name);     
console.log(realName); 
//here we use () because if we dont write () so it is see the curly braces so think it is a condition and gave us syntax error for remove this error we use ().

var actor = {name: 'Krish',realName: 'Hrithik Roshan'};  
const {name,realName} = actor;
console.log(name);    
console.log(realName); 
//if we dont want to use () so do like this 