//fundatmental of js
//array and object
//functions return 
//asyncjs coding
//foreach,map,filter,find,indexof

/* for each and map */

/* let arr1=[1,2,3,4,5];
arr1.forEach(function(val){
    console.log(val)
    // return val :-does not work in forEach
})
var arr = [1, 2, 3, 4, 5];
var newarr=arr.map(function(val) {
   
    return 12;
})
console.log(newarr); */

/* filter method :-doesnt chnage in arr calculate and 
give another array as map gives */

/* var arr = [1, 2, 3, 4, 5];
let a=arr.filter(function(val){
    if(val>3)
    {
        return true;
    }
    else
    {
        return false;
    }
})
console.log(a);


 */

/* find: to find the first element in the array that matches the condition */
var arr3 = [1, 2, 3, 4, 5];
var b=arr3.find(function(val){
    if(val==2)
    {
        return val;
    }
})
console.log(b);
