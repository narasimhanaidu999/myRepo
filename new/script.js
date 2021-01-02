/*var text, i,price2,lan1;
//var price1 = {firstname:"narasimha" , color:"white", age:"22"};
 price2 = ["Blue","Red","Green","White"];
 len1= price2.length;

 text= "<ul>";
for(i= 0; i < len1; i++){
  text += "<li>" + price2[i] + "</li>";
}

text += "</ul>";
document.getElementById("demo").innerHTML=text;*/
var arr1=[
  {
    name:"narasiha",
    age:23
  },

  {
    name:"mark",
    age:12
  },

  {
    name:"alen",
    age:45
  }
];

var SortArr1= arr1.sort(function(a,b){
  return b.age - a.age;
});
 console.log(SortArr1);