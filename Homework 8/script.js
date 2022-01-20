// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt or from HTML inputs.
function Animal(name, kind){
    this.animalName = name;
    this.animalKind = kind;
    
    this.animalSpeak = function(){
        return `${this.animalName} the ${this.animalKind} says: Welcome to JavaScript!!!`;
    }
}
let addAnimalName = document.getElementById("addName");
let addAnimalKind = document.getElementById("addKind");
let submitBtn1 = document.getElementById("submitButton1");

submitBtn1.addEventListener("click", function(){
    if(addAnimalName.value != "" && addAnimalKind.value != ""){
        let myAnimal = new Animal(addAnimalName.value, addAnimalKind.value);
        alert(myAnimal.animalSpeak());
    }
})

// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book.
// The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

function Book(title, author, readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.isBookRead = function(){
        if(this.readingStatus) return `Already read ${this.title} by ${this.author}.`
        else return `You still need to read ${this.title} by ${this.author}.`;
    }
}

let bookTitle = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let alreadyRead = document.getElementById("alreadyRead");
let bookButton = document.getElementById("bookButton");
let answer = document.getElementById("answer");

bookButton.addEventListener("click", function(){
    function isItChecked(radioButton){
        return radioButton.checked
    }
    if(bookTitle.value != "" && bookAuthor.value != ""){
    let someBook = new Book(bookTitle.value, bookAuthor.value, isItChecked(alreadyRead))
    answer.innerHTML = someBook.isBookRead()
    }
})