//if a given year is a leap year
year =window.prompt("Input a year :");
x =(year % 100 === 0) ? (year % 400 === 0) :(year % 4 === 0);
console.log(x);