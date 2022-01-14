// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed
let myTitle = document.getElementById('myTitle');
myTitle.innerText = "This is my cool page!";
let changeP1 = document.getElementsByClassName('paragraph')[0];
changeP1.innerText = "I changed the text of this paragraph with JavaScript!";
let changeP2 = document.getElementsByClassName('second')[0];
changeP2.innerText = "I changed the text of this second paragraph with JavaScript!";
let changeText = changeP2.nextElementSibling;
changeText.innerText = "Lets have some fun!";
let lastDiv = document.querySelectorAll('div')[2];
let secondTitle = lastDiv.firstElementChild;
secondTitle.innerText = "Change this heading!";
let lastTitle = lastDiv.lastElementChild;
lastTitle.innerText = "And we are done!"

// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11);

let arrayOfNumbers = [2, 14, 18, 42, 198, 217];
let listOfNumbers = document.getElementById('listOfNumbers');

let arraySum = 0;
let arrayString = '';

for (let i = 0; i < arrayOfNumbers.length; i++) {
    listOfNumbers.innerHTML += `<li>${arrayOfNumbers[i]}</li>`;
    arraySum += arrayOfNumbers[i];
    if (i < arrayOfNumbers.length - 1) arrayString += `${arrayOfNumbers[i]} +`
    else arrayString += `${arrayOfNumbers[i]} = ${arraySum}`
}

let sumOfNumbers = document.getElementById('sumOfNumbers');
sumOfNumbers.innerHTML = `Sum of numbers in array is ${arrayString}`

// BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

let recipeTable = document.getElementById('recipeTable');

let recipeName = document.getElementById('recipeName');

let numberOfIngredients = document.getElementById("numberOfIngredients");
let submitButton = document.getElementById("submitButton");
let ingredients = document.getElementById("ingredients");
submitButton.addEventListener("click", function(){
    if(numberOfIngredients.value != "" && recipeName.value != ""){
        for (let i = 0; i <numberOfIngredients.value; i++)
        {
                let ing1 = document.createElement("input");
                ing1.setAttribute("type", "text");
                ingredients.appendChild(ing1);
        }
        let ingButton = document.createElement("button");
        ingButton.innerHTML = "Submit"
        ingredients.appendChild(ingButton);
        recipeTable.innerHTML = 
        `<tr>
            <th>Name of your recipe:</th>
            <th>${recipeName.value}</th>
        </tr>`
        ingButton.onclick = function(){
            for (let i = 0; i < ingredients.children.length -1; i++){
                recipeTable.innerHTML += 
                    `<tr>
                        <td> - ${ingredients.children[i].value}</td>
                    </tr>`
            }
            ingButton.disabled = true;
        }
        submitButton.disabled = true;
    }
    else alert("Please enter the recipe name and number of ingredients!");
})
