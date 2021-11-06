// rest operators
function fun(a,...b){
    console.log(a,b);
    console.log(typeof a);
    console.log(typeof b);
}
fun(1,2,3);
fun(1,2,3,4,5);

// spread operators
var arr1=[1,2,3]
var arr2=["a","b","c"]
var newList=[]
for(i of arr1){
  newList.push(i)
  if (i==2){
    for(j of arr2){
        newList.push(j)
    }
  }
}
console.log(newList);