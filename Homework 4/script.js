//Exemple 1
console.log("Example 1");
let exampleNumber = 128452874852;
let numberAsString = exampleNumber.toString();
for (let i = 0; i < numberAsString.length; i++) {
    console.log(numberAsString[i]);
}
//Exemple 2
console.log("Example 2");
let example2NumberArray = [12, 14, 1, 7, 42, 175, 54, 33, 112, 215];
let largestNumber = example2NumberArray[0];
for (let i = 0; i < example2NumberArray.length; i++) {
    if (example2NumberArray[i] > largestNumber) {
        largestNumber = example2NumberArray[i];
    }
}
console.log(largestNumber);

//Homework Part 1 
console.log("Homework Part 1");
let tellStoryArray = ['Petar','happy','playing basketball'];
function tellStory(arrayParameter) {
    return `This is ${arrayParameter[0]}. ${arrayParameter[0]} is a nice person. Today he is ${arrayParameter[1]}. He is ${arrayParameter[2]} all day. The end.`
}
console.log(tellStory(tellStoryArray));

//Homework Part 2 
console.log("Homework Part 2");

let numberArray = [5, 14, 74, 145, 150];

function calculateSum(arrayParameter) {
    let sumOfNumbers = 0;
    for (let i = 0; i < arrayParameter.length; i++){
        if (validateNumber(numberArray[i])){
            sumOfNumbers += arrayParameter[i];
        }
        else return "ERROR"
    }
    return sumOfNumbers;
}

function validateNumber(number){
    if(typeof number == 'number'){
        return true;
    }
    else return false;
}

console.log(calculateSum(numberArray));