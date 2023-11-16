// Clock Through Basic Code👇👇👇👇

// function updateClock() {
//     // Select the HTML element with the class 'myClock'
//     let clockElement = document.querySelector('.myClock');

//     // Get the current date and time
//     let date = new Date();

//     // Get hours in 12-hour format
//     let hours = date.getHours() % 12;
//     if (hours === 0) {
//         hours = 12;
//     }

//     // Add leading zero if minutes is a single digit
//     let minutes = addZero(date.getMinutes());

//     // Add leading zero if seconds is a single digit
//     let seconds = addZero(date.getSeconds());

//     // Determine AM/PM
//     let period;
//     if (date.getHours() >= 12) {
//         period = 'PM';
//     } else {
//         period = 'AM';
//     }

//     // Format the time as a string
//     let time = hours + ':' + minutes + ':' + seconds + ' ' + period;

//     // Update the content of the clock element
//     clockElement.textContent = time;
// }

// // Helper function to add a leading zero if needed
// function addZero(value) {
//     let result = value;
//     if (value < 10) {
//         result = '0' + value;
//     }
//     return result;
// }

// // Call the updateClock function every second
// setInterval(updateClock, 1000);

// Clock Using Operator's 👇👇👇👇

// function updateClock() {
//     const clockElement = document.querySelector('.myClock');
//     const date = new Date();

//     const hours = date.getHours() % 12 || 12;
//     const minutes = addZero(date.getMinutes());
//     const seconds = addZero(date.getSeconds());
//     const period = (date.getHours() >= 12) ? 'PM' : 'AM';

//     const time = `${hours}:${minutes}:${seconds} ${period}`;

//     clockElement.textContent = time;
// }

// function addZero(value) {
//     return (value < 10) ? `0${value}` : value;
// }

// setInterval(updateClock, 1000);


// Short-Hand Version 👇👇👇👇
// In this version:

// I've used toLocaleTimeString to simplify the time formatting. The 'en-US' locale ensures that the time is formatted in a way familiar to English speakers, and { hour12: true } ensures a 12-hour clock format.

// Function to update the clock
function updateClock() {
    // Select the HTML element with the class 'myClock'
    const clockElement = document.querySelector('.myClock');

    // Get the current time in a 12-hour format
    const time = new Date().toLocaleTimeString('en-US', { hour12: true });

    // Update the content of the clock element
    clockElement.textContent = time;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

