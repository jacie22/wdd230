//Responsive Hamburger Menu
function toggleMenu() {
    document.getElementsByClassName('primaryNav')[0].classList.toggle('responsive');
    
  }
  


// Set the Days 
let date = new Date();
let year = date.getFullYear();
let dayNumber = date.getDate();

let days = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
  ];

let month = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June',
    'July', 
    'August',
    'September', 
    'October', 
    'November', 
    'December'
    ];

// Join Us Banner 
let invite = "";
if (days[date.getDay()] == 'Monday' || days[date.getDay()] == 'Tuesday') {
    invite = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else {
    invite = "";
}
document.querySelector('#banner').innerHTML = invite;

// Current Date
let full_date = days[date.getDay()] + ', ' + dayNumber + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();
document.querySelector('.currentdate').innerHTML = full_date;

//Last Modified
document.querySelector('#lm').innerHTML = `Last Modified: ${document.lastModified}`;

//Copyright Year
document.querySelector('#yr').innerHTML = year; 
