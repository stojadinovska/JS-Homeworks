let input = prompt("Enter your birth year to calculate which Chinese Zodiac sign you are:");
let birthYear = (input - 4) % 12;
let message = "Yor Chinese Zodiac sign is: "

if(birthYear == 0){
    console.log(message + "Rat");
}
else if(birthYear == 1){
    console.log(message + "Ox");
}
else if(birthYear == 2){
    console.log(message + "Tiger");
}
else if(birthYear == 3){
    console.log(message + "Rabbit");
}
else if(birthYear == 4){
    console.log(message + "Dragon");
}
else if(birthYear == 5){
    console.log(message + "Snake");
}
else if(birthYear == 6){
    console.log(message + "Horse");
}
else if(birthYear == 7){
    console.log(message + "Goat");
}
else if(birthYear == 8){
    console.log(message + "Monkey");
}
else if(birthYear == 9){
    console.log(message + "Rooster");
}
else if(birthYear == 10){
    console.log(message + "Dog");
}
else if(birthYear == 11){
    console.log(message + "Pig");
}
else {
    console.log("Something went wrong, please try again")
}