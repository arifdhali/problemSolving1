"use strict";
/* 1. Write a JavaScript program to display the current day and time in the following format. */

/* 1. Sample Output : Today is : Tuesday.
   2. Current time is : 10 PM : 30 : 38
 */




// 1. Sample Output : Today is : Tuesday.========>
let time = new Date();
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDay = time.getDay();
let finalResult = dayList[currentDay];

// Create element here
let createTag = document.createElement("h1");
createTag.innerHTML = (`Today is : ${finalResult}`);
let body = document.querySelector("body").appendChild(createTag);

// 2. Current time is : 10 PM : 30 : 38 ========>
setInterval(getTime, 1000);
let bodyTime = document.querySelector("body");
let createElementTime = document.createElement("h2");

function getTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // using ternory operator
    hours > 12 && hours < 24 ? hours = `${hours} PM` : hours = `${hours} AM`;
    
    minutes = validated(minutes);
    seconds = validated(seconds);
    let currentTime = `${hours} : ${minutes} : ${seconds}`;
    createElementTime.innerHTML = `Current Time Is - ${currentTime}`;
    // create element    
    bodyTime.appendChild(createElementTime);
}

// check if minutes and seconds value is less than 10
function validated(recive) {
    if (recive < 10) {
        recive = `0 ${recive}`;
    }
    return recive;
}

