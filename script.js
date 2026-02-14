/*function sayHi(){
    alert("hello ,thsi is external approach");
}
//varaiables
let a=10;
var age=20;
const name="masiha";
console.log(a);
console.log(age);
console.log(name);
//operators
let b=20;
let c=40;
let d=30;
console.log(b+c+d);
console.log(b-c-d);
console.log(b*c*d);
//conditional statements
/*let marks=6;
if(marks>=70){
    console.log("u are pass");
}
else{
    console.log("u are failed")
}
let results = 43;

if (results >= 50) {
    console.log("student has passed");
} 
else if (results > 40 && results < 50) {
    console.log("one more chance");
} 
else {
    // This executes if results is 40 or lower
    console.log("failed");
}
//loops
for(let i=0;i <10;i++){
    console.log("javascript")
};
let i =1;
while(i<10){
    console.log("programming");
    i++;
}
//function
function add(a,b){
    return a+b;
}
const res =add(2,3);
const add= (a,b)=> a + b;//arrow function
console.log(add(2,4));
//Arrays
let fruits=["apple","banana","grapes"];
console.log(fruits);
fruits.push("jackfruits");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits[1]);
fruits.forEach((fruits =>{//lising each item
    console.log(fruits);
}))
//array objects
//map
//returns a new array
// does not modify the orginal
const upperfruits =fruits.map((fruits) => fruits.toUpperCase());
console.log(upperfruits);
//filter-filter the items based on some conditions
//the new array will have the data ehich satisfied the condition

const number=[10,20,30,40,50,60,70,80];
const greaterthan30=number.filter(num=>num>30);
console.log(greaterthan30);
//reduce-reduces an array to a single value
//used fro sum,product etc
const arr=[1,2,3,4,5];
const sum=arr.reduce((acc,num)=>acc+num,0);
//object is a collection of data in key:value format
const person={
    name:"masiha",
    age:20,
    desigmation:"developer",
}
console.log(person);
console.log(person.age);//dot notation
console.log(person['age']);//square notation
console.log(Object.keys(person));
console.log(Object.values(person));
 // Accessing
const heading =document.getElementById("title");
heading.innerText ="hello";*/
const api_key = "73cdae9619803020f9b91678fe723bc3";

const button = document.querySelector("#btn");
const windspeedEl = document.querySelector(".windspeed");
const descEl = document.querySelector(".desc");
const tempEl = document.querySelector(".temp");

function getWeather() {
    const city = document.querySelector("#inputvalue").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => {
            const description = data.weather[0].description;
            const temperature = data.main.temp;
            const windSpeed = data.wind.speed;

            descEl.innerHTML = `Description: ${description}`;
            tempEl.innerHTML = `Temperature: ${Math.floor(temperature - 273.15)}°C`;
            windspeedEl.innerHTML = `Wind Speed: ${windSpeed} m/s`;
        })
        .catch(err => {
            console.error("Error fetching weather:", err);
        });
}

button.addEventListener("click", getWeather);

