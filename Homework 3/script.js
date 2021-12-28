//Homework Part 1
console.log("Homework Part 1");

function typeOfInput(parameter) {
   return typeof(parameter);
}
let aaa;
console.log(typeOfInput(books = ['book1', 'book2', 'book3']));
console.log(typeOfInput(true));
console.log(typeOfInput("Ivana"));
console.log(typeOfInput(1458));
console.log(typeOfInput(aaa));

//Homework Part 2
console.log("Homework Part 2");

function humanToDogYears(years) {
console.log(`${years} in human years is ${years * 7} in dog years`);
console.log(`${years} in dog years is ${years / 7} in human years`);
}
humanToDogYears(5);

//Homework Part 3
console.log("Homework Part 3");

let withdrawAmount = parseInt(prompt("How much would you like to withdraw" ));
let availableAmount = 3000;
atmFunction(withdrawAmount);

function atmFunction(amount)
{
   if (amount > availableAmount) {
      console.log("You don't have enough money to withdraw");
   }
   else 
   {
      console.log(`The amount you like to withdraw is $${amount},
    you have $${availableAmount - amount} left on your account.`);
   }
}

