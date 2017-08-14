var moment = require('moment');
const chalk = require('chalk');
console.log("It is " + chalk.blue(moment().format('dddd LL LTS')) + ".");


console.log("It is the " + chalk.magenta(moment().dayOfYear()) + chalk.magenta("th") + " day of the year.");


let currentTime = moment().format('LTS');
let hours = moment().hours();
let minutes = moment().minutes();
let seconds = moment().seconds();


console.log("It is " + chalk.cyan(((hours*60*60)+(minutes*60)+(seconds))) + " seconds into the day");

// Daylight Savings Time
// needs to be formatted to say is

let year = moment().year();
let month = moment().month();
let day = moment().format('D');
let dst= moment([year, month, day]).isDST();
// console.log(year);
// console.log(month);
// console.log(day);

if (dst === true){
  console.log("It " + chalk.green("is") + " during Daylight Savings Time");
} else {
  console.log("It is not during Daylight Savings Time")
}

// console.log(moment([year, month, day]).isDST());


let leapYear = moment([year]).isLeapYear();

if (leapYear === true){
  console.log("It is a leap year");
} else {
  console.log("It " + chalk.red("is not ") + "a leap year")
}

// console.log( moment([year]).isLeapYear());
