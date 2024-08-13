function helloworld(){
    return "hello world"
}

let returnfive=()=>5//declaration fonction 
returnfive()//invocation fonction
function helloworldagain(){
    return "hello world Again"
}
helloworldagain()
function returnparametre(parameter){
    return parameter

}
// let returnparametre=(name)=>name
returnparametre("hi")
function add (a,b){
    return a+b
}
add(6,7)
function starct(a,b){
    return a-b
}
starct(6,7)

//1.Write a function called perimeterOfACircle that takes the numerical radius of a circle as a parameter and returns the perimeter. HINT: Use “Math.PI” in your function.
let perimetercircle=(radius)=>{
    2*radius*Math.PI
}
//5.Write a function called 5.Write a function called totalSecondsConverter which takes three numerical parameters “hours” “minutes” “seconds” and returns the total number in seconds. Note: If it is greater than 60 minutes, do not worry about converting it to hours.r which takes three numerical parameters “hours” “minutes” “seconds” and returns the total number in seconds. Note: If it is greater than 60 minutes, do not worry about converting it to hours.
let  totalSecondsConverter=(hours,minutes,secondes)=>hours*3600+minutes*60+secondes
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);



function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}