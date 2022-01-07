//Homework 1
console.log("Homework 1");
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

let arrayOfStrings = ['Hello', 'there', 'students', 'of', 'SEDC', '!'];

function createBigString(array) {
    let string = []
    for(let i = 0; i < array.length; i++) {
        if(i < array.length - 2){
            string += array[i] + ' ';
        }
        else string += array[i];
    }
    return string
}
console.log(createBigString(arrayOfStrings));

//Homework 2
console.log("Homework 2");
// Title: Looping structures
// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number,
// and will add the "\n" new line after every even number otherwise it will add " " empty space.

let arrayEven = [];
let arrayOdd = [];
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        arrayEven += i + "\n";
    }
    else arrayOdd += i + " ";
}

console.log(arrayEven);
console.log(arrayOdd);

//Homework 3
console.log("Homework 3");
//Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it.

arrayHomework3 = ['', 12 , 15 , 42, NaN, -27, 185, -11, 258, 1, 349, "585", 97, null];

function homework3Function(homeworkArray) {
    let minNum = Infinity;
    let maxNum = -Infinity;
    for (let i = 0; i < homeworkArray.length; i++){
        if(typeof homeworkArray[i] == 'number'){
            if (homeworkArray[i] < minNum){
                minNum = homeworkArray[i];
            }
            if (homeworkArray[i] > maxNum){
                maxNum = homeworkArray[i];
            }
        }
    }
    return `Max: ${maxNum}, Min: ${minNum}, Sum: ${maxNum + minNum}`;
}
console.log(homework3Function(arrayHomework3));

//Homework 4
console.log("Homework 4");

//Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let studentsNames = ["Ivana", "Katerina", "George", "Marjan"];
let studentsSurnames = ["Stojadinovska", "Donevska", "Stefanovski", "Petrovski"];
console.log(studentsNames);

function studentsFullNames(){
    let result = [];
    for (let i = 0; i < studentsNames.length; i++){
        result.push(`${i+1}. ${studentsNames[i]} ${studentsSurnames[i]}`)
    }
    return result;
}
console.log(studentsFullNames());


