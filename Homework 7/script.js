// HOMEWORK
// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :)
let rows = document.getElementById('rows');
let columns = document.getElementById('columns');
let submitButton = document.getElementById('submitButton');
let table = document.getElementById('table');

submitButton.addEventListener("click", function(){
    if(rows.value != "" && columns.value != ""){
        for (let i = 0; i < rows.value; i++){
            let row = table.insertRow();
            for (let j = 0; j < columns.value; j++){
                let col = row.insertCell();
                col.style.border = "1px solid black"
                col.innerHTML = `Row - ${i+1} Column - ${j+1}`;
            }
        }
        submitButton.disabled = true; 
    }
    else alert("Please enter row and column value!");
})