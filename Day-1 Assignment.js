
////********************************** ASSIGNMENT - 1 ******************************************* */

const button = document.getElementById('myBtn');
const button1 = document.getElementById('myBtn1');
const out = document.getElementById('output');
const outArea = document.getElementById('output1');

button.addEventListener('click', maximum);
button1.addEventListener('click', areaTriangle);

function compute(){
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);
    if(a === b){
        let c = 3*(a + b);
        out.innerHTML = c + ` <h3><code>is the trice of two Numbers</code></h3>`;
    }
    if(a != b ){
        sum = a + b;
        out.innerHTML = sum + ` <h3><code>is sum of ${a} & ${b} Number</code></h3>`;
    }
}

function sum50(){
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);
    if( a === 50 || b === 50 ){
        out.innerHTML = ` <h3><code> ${a} & ${b} both are same Numbers true</code></h3>`;
    }
    if( (a + b ) === 50){
        out.innerHTML =` <h3><code>${a} & ${b} Sum of both the Numbers is 50  </code></h3>`;
    }
}

function multiple37(){
    let a = parseInt(document.getElementById('first').value);
    if(a % 3 === 0){
        out.innerHTML = ` <h3><code> ${a} is multiple of 3 </code></h3>`;
    }else if(a % 7 === 0){
        out.innerHTML = ` <h3><code> ${a} is multiple of 7 </code></h3>`;
    }else{
        out.innerHTML = ` <h3><code> ${a} is not a multiple of 7 & 3 </code></h3>`;
    }
}

// Question 6.  Write the JavaScript program to Swap the numbers by 3 different method 
// 1. With Temp Variable
// 2. Without Temp Variable
// 3. With Destructuring

function swapping(){
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);
    let temp = 0;
    temp = a;
    a = b;
    b = temp;
    out.innerHTML = `Value of A:${a} & Value of B:${b} after swapping`;
}

function swap(){
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);
    a = a + b;
    b = a - b;
    a = a - b;

    out.innerHTML = `Value of A:${a} & Value of B:${b} after swapping`;
}

function destructuring(){
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);

    [b,a] = [a,b];
    out.innerHTML = `Value of A:${a} & Value of B:${b} after swapping`;

}

//Question7. Write the JavaScript program to find the maximum of 3 numbers from the below input.

function maximum(){
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);
    let c = parseInt(document.getElementById('third').value);
    if(a>b && a>c){
        out.innerHTML = a + ` <h3><code>is the Biggest Number</code></h3>`;
    }else if(b>c){
        out.innerHTML = b + ` <h3><code>is the Biggest Number</code></h3>`;
    }else{
        out.innerHTML = c + ` <h3><code>is the Biggest Number</code></h3>`;
    }
}


//Question8. Write the JavaScript program to find the area of a triangle with 3 sides having any input.

function areaTriangle(){
    let side1 = parseInt(document.getElementById('firstSide').value);
    let side2 = parseInt(document.getElementById('secondSide').value);
    let side3 = parseInt(document.getElementById('thirdSide').value);
    let sides = (side1 + side2 + side3) / 2;

    const areaValue = Math.sqrt(sides * (sides - side1) *(sides - side2) * (sides - side3));
    outArea.innerHTML = areaValue + ` <h3><code>is the Area of Triangle with sides ${side1} , ${side2} and ${side3}</code></h3>`;
}

// Question9.  Write JavaScript program to determine whether the given year in Gregorian Calender.

const button2 = document.getElementById('myBtn2');
button2.addEventListener('click',leapYear);

function leapYear(){
    const year = document.getElementById('year').value;
    const out2 = document.getElementById('output2');

    const date = new Date(year, 1, 29).getDate() === 29;
    if(date){
        out2.innerHTML = `${year} is Leap Year`;
    }else{
        out2.innerHTML = `${year} is Not Leap Year`;
    }
}

// Question 10. Write JavaScript program to Convert the temperature from Celsius, Fahrenheit.

const button3 = document.getElementById('myBtn3');
button3.addEventListener('click',CtoF);

function CtoF(){
    const Celcius = document.getElementById('Celcius').value;
    const out3 = document.getElementById('output3');

    const Cal_Fahrenheit = (9 * Celcius + (32 * 5)) / 5;
    out3.innerHTML = `${Celcius} \u00B0 C  Conversion to ${Cal_Fahrenheit} \u00B0 F`;
}

// Question 11. Write JavaScript program to find the absolute difference if the number is greater than 13
// double the absolute difference

const num1 = 12;
const num2 = 20;
const diff = Math.abs(num1 - num2);

if(diff > 13){
    const absolute = Math.abs(2 * diff);
    console.log(`Double the Absolute Difference ${absolute}`);
}else{
    console.log(`Absolute difference is ${diff}`);

}

// Question 12. Write JavaScript program to find the absolute difference if the number is greater than 19
// Triple the absolute difference

const number1 = 12;
const number2 = 20;
const difference = Math.abs(num1 - num2);

if(difference > 19){
    const absolute1 = Math.abs(3 * diff);
    console.log(`Double the Absolute Difference ${absolute1}`);
}else{
    console.log(`Absolute difference is ${difference}`);
}

// Question13 . Write JavaScript program to check whether given integer is within 20 anor 100 or It's exactly 400?

const newNumber = 200;

if (newNumber > 20 &&  newNumber < 100){
console.log(`Number ${newNumber} is between 20 & 100`);
}else if(newNumber === 400){
console.log(`Number ${newNumber} is exactly equal to 400`);
}else{
    console.log(`The Number didn't meet condition of between 20 & 100 or 400`);
}

//Question14. Write a program that checks if the number is positive, negative or zero input from the user ?

const number = 50;

if (number > 0) {
    console.log(` ${number} The number is positive`);
}else if (number == 0) {
    console.log(` ${number} The number is Zero`);
}else {
    console.log(` ${number} The number is Negative`);
}

//Question15. Write a program to check whether three given integer values are in range 50 and 99 ?

const numRange = 190;

if( numRange >= 50 && numRange <= 99 ){
    console.log(`${numRange} The number is between 50 & 99`);
}else{
    console.log(`${numRange} The number is Not in Range`);
}


////********************************** ASSIGNMENT - 2 ******************************************* */

//Question 1. Already completed in Assignment 1.
//Question 2. Write the Javascript Program to check whether a number is divisible by 5 and 11 or not.

let divNum = 555;

if( divNum % 5 === 0 && divNum % 11 === 0){
    console.log(`${divNum} is divisible by 5 and 11`);
}else{
    console.log(`${divNum} is Not divisible by 5 and 11`);
}

//Qustion 3. Write the Program to check vowel and consonent.


let button4 = document.getElementById('myBtn4');
button4.addEventListener('click', char);

function char(){
    let character = document.getElementById('char').value;
    let out4 = document.getElementById('output4');
    
    let vowel_String = "aeiouAEIOU";
    let numbers = "0123456789";
    let specialChar = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";

    if(character.length === 1){
        if(vowel_String.includes(character)){
            out4.innerHTML = `${character} is Vowel`;
        }else if(numbers.includes(character)){
            out4.innerHTML = `${character} is Number`;
        }else if(specialChar.includes(character)){
            out4.innerHTML = `${character} is Special Character`;
        }else{
            out4.innerHTML = `${character} is Consonent`;
        }
    }else{
        out4.innerHTML = `${character} is String (Provide Character)`;
    }
}


//Question 4. Write the Program to get the Numbers of Days in Month.

function DaysMonth(year,monthly){
    const today = new Date(year,monthly,0);
    const month = today.toLocaleString('default', {month: 'long'});
    const DaysInMonth = new Date(year,monthly,0).getDate();

    console.log(month,DaysInMonth);
} 

DaysMonth(2018,6);

// const today = new Date();
// console.log(today.toLocaleString('default', { month: 'long' }));

//Question 6.Write a Javascript Program to check whether triangle is valid or not if angles are given ?


function validTriangle(){
    let angle1 = 70;
    let angle2 = 40;
    let angle3 = 70;

    if((angle1 + angle2 + angle3 ) === 180 && angle1 != 0 && angle2 != 0 && angle3 != 0 ){
        console.log('Angle is valid for Triangle');
    }else{
        console.log('Angles are Not valid for Triangle');
    }
}

validTriangle();

//Question 7.Write a Javascript Program to check whether triangle is valid or not if sides are given ?

function validTriangleSide(){
    let side1 = 12;
    let side2 = 4;
    let side3 = 7;

    if((side1 + side2) > side3 || (side2 + side3) > side1 || (side1 + side3) > side2){
        console.log('Sides of the Triangle is valid as Sum of 2 sides are are greater than one side');
    }else{
        console.log('Sides of the Traingle is not Valid for the Triangle');
    }
}

validTriangleSide();

//Question 8.Write a Javascript Program to check whether triangle is equivalent, scalene or isosceles ?

let value1 = 15;
let value2 = 16;
let value3 = 17;

function traingle(){
    if((value1 === value2) && (value2 === value3)){
        console.log(`Triangle is equilateral Triangle`);
    }else if((value1 === value2) || (value2 === value3 ) || (value3 === value1 )){
        console.log('Triangle is Scalene Traingle');
    }else{
        console.log('Triangle is Isoseles Traingle');
    }
}

traingle();

//Question 9.Write a Javascript Program to determine in which quadrant the coordinate point lies ?

function coordinatePoint(x , y){
  if (x < 0 && y > 0){
      console.log(`${x} & ${y} is in IV Quadrant`);
  }else if( x > 0 && y > 0){
    console.log(`${x} & ${y} is in I Quadrant`);
  }else if(x > 0 && y < 0){
    console.log(`${x} & ${y} is in II Quadrant`);
  }else{
    console.log(`${x} & ${y} is in III Quadrant`);
  }
}

coordinatePoint(-20,30);

//Question 10. Write a Javascript Program to display day name in the word ?
 
let dayName = new Date(2018,3,0);
let day = dayName.toLocaleDateString('default', {weekday: 'long'});
let month = dayName.toLocaleDateString('default', {month: 'long'});
console.log(month,day);


//Question 11. Write a Javascript Program to display Month name in the word - completed Previously ?
//Question 12. Write a javascript Program to reverse the Number in array?

function reverse(num){
    let reversed = 0;
    let last;
    let number = Math.abs(num);

    while(number > 0){
        console.log(number);
        last = number % 10; 
        reversed = reversed * 10  + last;
        number = Math.floor(number / 10);
    }

    if(num < 0){
        return -1 * reversed;
    }

    return reversed;

}

console.log(reverse(-90113434));

// Question 12. White JavaScript program to find the number of notes in the given amount.

let amount = 12345;
console.log(`Amount is`,amount);

for(; amount > 0 ;){
    if(amount >= 2000){
        notes = Math.floor(amount / 2000);
        console.log(`Notes of 2000 :`,notes);
        amount = amount % 2000;
    }else if(amount >= 500){
        notes = Math.floor(amount / 500);
        console.log(`Notes of 500 :`,notes);
        amount = amount % 500;
    }else if(amount >= 200){
        notes = Math.floor(amount / 200);
        console.log(`Notes of 200 :`,notes);
        amount = amount % 200;
    }else if(amount >= 100){
        notes = Math.floor(amount / 100);
        console.log(`Notes of 100 :`,notes);
        amount = amount % 100;
    }else if(amount >= 50){
        notes = Math.floor(amount / 50);
        console.log(`Notes of 50 :`,notes);
        amount = amount % 50;
    }else if(amount >= 10){
        notes = Math.floor(amount / 10);
        console.log(`Notes of 10 :`,notes);
        amount = amount % 10;
    }else if(amount >= 5){
        notes = Math.floor(amount / 5);
        console.log(`Notes of 5 :`,notes);
        amount = amount % 5;
    }else if(amount >= 2){
        notes = Math.floor(amount / 2);
        console.log(`Notes of 2 :`,notes);
        amount = amount % 2;
    }else{
        console.log(`Notes of 2 :`,notes);
        amount = amount % 1;
    }
}