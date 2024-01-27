
// setInterval(() => {
//     console.log("Hello");

// }, 3000 );
// setInterval(() => {
//     console.log("Hai");
    
// }, 4000 );

// setTimeout(() => {
//     console.log("Hai,");
// },1000 );
// setTimeout(() => {
//     console.log("Hello,");
// }, 2000);
// setTimeout(() => {
//     console.log("Good ");
// }, 3000);
// setTimeout(() => {
//     console.log("Morning,");
// }, 4000);
// setTimeout(() => {
//     console.log("Smile");
// }, 5000);

// callback
// var btn=document.getElementById("btn1")
// btn.addEventListener("click",()=>{
//     alert("Button Clicked")
// })

// function addition(a,b){
   
//     var result=a+b;
//     return result;

// }
// function display(val){
//     document.getElementById("textc").innerText=`The sum is ${val}`
// }
// var result=addition(10,5);
// display(result)


// // synchronous
// function multiplication(a,b){
   
//     var result=a*b;
//     return result;

// }
// function display(val){
//     document.getElementById("textc").innerText=`The product is ${val}`
// }
// var result=multiplication(123,5);
// display(result)

// //using callback function
// function add1(a,b,callback) {
//     var sum=a+b;
//     callback(sum)
// }
// function display(val) {
//     document.getElementById("textc").innerText=`The sum is ${val}`
// }
// add1(10,35,display);


// function add1(a,b) {
//     let promise = new Promise((resolve,reject)=>{
//         var sum=a+b;
//         if (sum>10) {
//             resolve(sum);
//         } else {
//             reject("Sum is not greater than 10");
//         }
//     })
//     console.log(promise);
// }
// add1(2,6)



// function add1(a,b) {
//     let promise = new Promise((resolve,reject)=>{
//         var sum=a+b;
//         if (sum>10) {
//             resolve(sum);
//         } else {
//             reject("Sum is not greater than 10");
//         }
//     })
//     promise.then((val)=>{
//         document.getElementById("textc").innerText=`The sum is ${val}`
//     })
//     .catch((err)=>{
//         document.getElementById("textc").innerText= `The error message is ${err}`
//     })
// }
// add1(2,3)


// function add1(a,b) {
//     return promise = new Promise((resolve,reject)=>{
//         var sum=a+b;
//         if (sum>10) {
//             resolve(sum);
//         } else {
//             reject("Sum is not greater than 10");
//         }
//     })
// }
//     add1(2,3)
//     promise.then((val)=>{
//         document.getElementById("textc").innerText=`The sum is ${val}`
//     })
//     .catch((err)=>{
//         document.getElementById("textc").innerText= `The error message is ${err}`
//     })


// function subtraction1(a,b) {
//     let promise1 = new Promise((resolve,reject)=>{
//         var sub=a-b;
//         if (sub>10) {
//             resolve(sub);
//         } else {
//             reject("Difference is not greater than 10");
//         }
//     })
//     promise1.then((val)=>{
//         document.getElementById("textd").innerText=`The subtraction is ${val}`
//     })
//     .catch((err)=>{
//         document.getElementById("textd").innerText= `The error message is ${err}`
//     })
// }
// subtraction1(2,3)


// function multiplication1(a,b) {
//     let promise2 = new Promise((resolve,reject)=>{
//         var mul=a*b;
//         if (mul>10) {
//             resolve(sum);
//         } else {
//             reject("Product is not greater than 10");
//         }
//     })
//     promise2.then((val)=>{
//         document.getElementById("texte").innerText=`The product is ${val}`
//     })
//     .catch((err)=>{
//         document.getElementById("texte").innerText= `The error message is ${err}`
//     })
// }
// multiplication1(2,3)


// function division1(a,b) {
//     let promise3 = new Promise((resolve,reject)=>{
//         var div=a/b;
//         if (div>10) {
//             resolve(div);
//         } else {
//             reject("division is not greater than 10");
//         }
//     })
//     promise3.then((val)=>{
//         document.getElementById("textf").innerText=`The division is ${val}`
//     })
//     .catch((err)=>{
//         document.getElementById("textf").innerText= `The error message is ${err}`
//     })
// }
// division1(50,3)



// async await
// await excecute only after async
// async function add1(a,b){
//     let promise=new Promise((resolve,reject)=>{
//         var sum=a+b
//         if (sum>10){
//              resolve(sum);
//             } else {
//              reject("Error");
//         }
//     })
//     var ans= await promise
//     document.getElementById("textc").innerHTML=`The sum is ${ans}`
// }
// add1(10,2)

// async function subt1(a,b){
//     let promise=new Promise((resolve,reject)=>{
//         var sub=a-b;
//         if (sub>10){
//              resolve(sub);
//             } else {
//              reject("Error");
//         }
//     })
//     var ans= await promise
//     document.getElementById("textd").innerHTML=`The sub is ${ans}`
// }
// subt1(29,4)


// async function mul1(a,b){
//     let promise2=new Promise((resolve,reject)=>{
//         var mult=a*b;
//         if (mult>10){
//              resolve(mult);
//             } else {
//              reject("Error");
//         }
//     })
//     var ans= await promise2
//     document.getElementById("texte").innerHTML=`The product is ${ans}`
// }
// mul1(16,2)

// async function div1(a,b){
//     let promise2=new Promise((resolve,reject)=>{
//         var sub=a/b;
//         if (sub>10){
//              resolve(sub);
//             } else {
//              reject("Error");
//         }
//     })
//     var ans= await promise3
//     document.getElementById("textf").innerHTML=`The division  is ${ans}`
// }
// div1(30,2)




function ajaxcall(){
   var xhttp= new XMLHttpRequest()
   xhttp.open('GET','https://dummyjson.com/products',true)
   xhttp.send()
   xhttp.onreadystatechange = function(){
    let promise = new Promise((resolve,reject)=>{
        if(this.readyState==4 && this.status==200){
            resolve("It is done")
        }
    })
    promise.then((val)=>{
        document.getElementById("textc").innerHTML=`The result is ${val}`
    })
   }
}
ajaxcall()