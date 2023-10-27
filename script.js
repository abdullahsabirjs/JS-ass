//! CHAP 38-42

// ? Q  1
// function power(a, b) {
//     if (b === 0) {
//       return 1;
//     } else if (b < 0) {
//       return 1 / (a ** Math.abs(b));
//     } else {
//       let result = 1;
//       for (let i = 0; i < b; i++) {
//         result *= a;
//       }
//       return result;
//     }
//   }
//   const base = parseFloat(prompt("Enter the base (a):"));
//   const exponent = parseInt(prompt("Enter the exponent (b):"));
  
//   if (!isNaN(base) && !isNaN(exponent)) {
//     const result = power(base, exponent);
//     alert(`Result: ${result}`);
//   } else {
//     alert("Please enter valid numbers.");
//   }
  


// ? Q 2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var inputYear = prompt("Enter a year:"); // Prompt the user for input
// var year = parseInt(inputYear);

// if (!isNaN(year)) {
//     if (isLeapYear(year)) {
//         document.write(year + " is a leap year.");
//     } else {
//         document.write(year + " is not a leap year.");
//     }
// } else {
//     document.write("Invalid input. Please enter a valid year.");
// }



// ?  Q 3
// function calculateArea(a, b, c) {
//     function calculateS(a, b, c) {
//         return (a + b + c) / 2;
//     }

//     var s = calculateS(a, b, c);
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// var sideA = parseFloat(prompt("Enter the length of side a:"));
// var sideB = parseFloat(prompt("Enter the length of side b:"));
// var sideC = parseFloat(prompt("Enter the length of side c:"));

// if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
//     var triangleArea = calculateArea(sideA, sideB, sideC);
//     document.write("The area of the triangle is: " + triangleArea);
// } else {
//     document.write("Invalid input. Please enter valid side lengths.");
// }



// ? Q 4
// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }

// function calculatePercentage(subject1, subject2, subject3) {
//     var totalMarks = subject1 + subject2 + subject3;
//     var maximumMarks = 300; // Assuming each subject is out of 100
//     return (totalMarks / maximumMarks) * 100;
// }

// function mainFunction() {
//     var subject1 = parseFloat(prompt("Enter marks for subject 1:"));
//     var subject2 = parseFloat(prompt("Enter marks for subject 2:"));
//     var subject3 = parseFloat(prompt("Enter marks for subject 3:"));

//     if (!isNaN(subject1) && !isNaN(subject2) && !isNaN(subject3)) {
//         var average = calculateAverage(subject1, subject2, subject3);
//         var percentage = calculatePercentage(subject1, subject2, subject3);

//         document.write("Average marks: " + average + "<br>");
//         document.write("Percentage: " + percentage + "%");
//     } else {
//         document.write("Invalid input. Please enter valid marks.");
//     }
// }

// mainFunction();



// ? Q 5
// function customIndexOf(inputString, searchChar) {
//     for (var i = 0; i < inputString.length; i++) {
//         if (inputString[i] === searchChar) {
//             return i;
//         }
//     }
//     return -1; // Character not found in the string
// }

// function searchForCharacter() {
//     var inputString = prompt("Enter a string:");
//     if (inputString === null) {
//         return; // Handle the case when the user cancels the input
//     }
    
//     var searchChar = prompt("Enter a character to search for:");
//     if (searchChar === null || searchChar.length !== 1) {
//         alert("Please enter a valid single character.");
//         return;
//     }

//     var result = customIndexOf(inputString, searchChar);

//     if (result !== -1) {
//         alert("Character found at index: " + result);
//     } else {
//         alert("Character not found in the string.");
//     }
// }

// searchForCharacter();



// ? Q 6
// function deleteVowels(sentence) {
//     // Regular expression to match vowels (both uppercase and lowercase)
//     var vowelRegex = /[aeiouAEIOU]/g;
    
//     // Use the replace method to replace all vowels with an empty string
//     var result = sentence.replace(vowelRegex, "");
    
//     return result;
// }

// function removeVowelsFromSentence() {
//     var inputSentence = prompt("Enter a sentence (not more than 25 characters):");
    
//     if (inputSentence === null) {
//         return; // Handle the case when the user cancels the input
//     }
    
//     if (inputSentence.length > 25) {
//         alert("The sentence is too long. Please enter a sentence with at most 25 characters.");
//         return;
//     }
    
//     var sentenceWithoutVowels = deleteVowels(inputSentence);
//     alert("Sentence without vowels:\n" + sentenceWithoutVowels);
// }

// removeVowelsFromSentence();




// ? Q 7
// function countSuccessiveVowels(text) {
//     text = text.toLowerCase(); // Convert the text to lowercase for case-insensitive matching
//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {
//         var currentChar = text[i];
//         var nextChar = text[i + 1];

//         switch (currentChar + nextChar) {
//             case 'ae':
//             case 'ai':
//             case 'ea':
//             case 'ei':
//             case 'ia':
//             case 'ie':
//             case 'io':
//             case 'iu':
//             case 'oa':
//             case 'oe':
//             case 'oi':
//             case 'ou':
//             case 'ua':
//             case 'ue':
//             case 'ui':
//             case 'uo':
//                 count++;
//                 break;
//             default:
//                 // Do nothing for other combinations
//                 break;
//         }
//     }

//     return count;
// }

// function getTextInput() {
//     var text = prompt("Enter a line of text:");
//     if (text === null) {
//         return null; // Handle the case when the user cancels the input
//     }
//     return text;
// }

// var text = getTextInput();
// if (text !== null) {
//     var result = countSuccessiveVowels(text);
//     alert("Number of occurrences of successive vowels: " + result);
// }



// ? Q 8
// function convertDistance(distanceKm) {
//     const meters = distanceKm * 1000;
//     const feet = distanceKm * 3280.84;
//     const inches = distanceKm * 39370.1;
//     const centimeters = distanceKm * 100000;

//     document.write(`Distance in meters: ${meters} meters<br>`);
//     document.write(`Distance in feet: ${feet} feet<br>`);
//     document.write(`Distance in inches: ${inches} inches<br>`);
//     document.write(`Distance in centimeters: ${centimeters} centimeters<br>`);
// }

// const distanceKm = parseFloat(prompt("Enter the distance in kilometers:"));
// convertDistance(distanceKm);



// ? Q 9
// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;

//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours;
//         const overtimePay = overtimeHours * overtimeRate;
//         return overtimePay;
//     } else {
//         return 0;
//     }
// }

// const hoursWorked = parseInt(prompt("Enter the total hours worked:"));
// const overtimePay = calculateOvertimePay(hoursWorked);
// document.write(`Overtime Pay: Rs. ${overtimePay.toFixed(2)}`);




// ? Q 10
// function calculateCurrencyNotes(amountHundreds) {
//     const denomination100 = 100;
//     const denomination50 = 50;
//     const denomination10 = 10;

//     const notes100 = Math.floor(amountHundreds);
//     const remainder = (amountHundreds - notes100) * 100;

//     const notes50 = Math.floor(remainder / denomination50);
//     const notes10 = Math.floor((remainder % denomination50) / denomination10);

//     document.write(`Number of 100 rupee notes: ${notes100}<br>`);
//     document.write(`Number of 50 rupee notes: ${notes50}<br>`);
//     document.write(`Number of 10 rupee notes: ${notes10}<br>`);
// }

// const amountHundreds = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));
// calculateCurrencyNotes(amountHundreds);





// TODO                                         XXXXXXXXXXXXXXXXXX