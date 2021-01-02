var p=[11,21,3323,22,1323,432,324];function myFun(arr) {
var len=arr.length;
var max=-Infinity;
while(len--){
  if(arr[len]>max){
    max=arr[len]
  }
}
return max;
}
var months = ["January", "February", "March", "April", "May", 
"June", "July", "August", "September", "October", "November", "December"];
var mon=[1,2,3,4,5,6,7,8,9,10,11,12];
var d = new Date(2018, 11, 30);
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getMonth() + 1);
console.log(d);
console.log(d.getDate());
console.log(months[d.getMonth()]);
console.log(mon[d.getMonth()]);

