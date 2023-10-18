// Ask user their name, surname and favorite color

// Available info
const passwordNumber = 21;

// Declare other info
// 1. Ask Name
// 1.1. Wait for the user to type their name
const userName = prompt("I'm Password Generator. What's your name?");
// 1.2 Confirm name
console.log(userName, typeof userName);

// 2. Ask Surname
// 2.1. Wait for the user to type their surname
const userSurname = prompt(`Hi ${userName}. What's your surname?`);
// 2.2 Confirm surname
console.log(userSurname, typeof userSurname);

// 3. Ask Favorite Color
// 3.1. Wait for the user to type their favorite color
const userColor = prompt(`Ok ${userName} ${userSurname}, last question. What's your favorite color?`);
// 3.2 Confirm favorite color
console.log(userColor, typeof userColor);

// 4. Generate message containing password
const userPassword = userName + userSurname + userColor + 21;
// 4.1. Confirm password
console.log(userPassword, typeof userPassword);
// 4.2. Print password
alert(`Congratulations! Your new password is ${userPassword}`);

// 5. Add password to HTML;
// 5.1. Find HTML section where to put the password;
document.getElementById("password").innerHTML = userPassword;

// 6. End.

