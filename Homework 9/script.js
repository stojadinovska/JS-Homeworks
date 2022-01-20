$(document).ready(function() {

    // HOMEWORK PART 1
    // CREATE A GREETING APP WITH JQUERY
    // Create an input
    // Create a button
    // When clicked the button should print a greet message in an h1 header
    // Ex: input: Petko output message: Hello there Petko!

    let name = $('#name');
    let submitButton = $('#submitButton');
    let message = $('#message');
    
    submitButton.click(function(){
       $(message).text(`Hello there ${name.val()}`) 
    })



    // HOMEWORK PART 2
    // Create a header generator

    // Create two inputs, one for text and one for color
    // Create a button that says: generate h1
    // Create an h3 element for messages
    // When the button is clicked create a new header below the inputs and button
    // The new header should have the text and color from the inputs
    // If the person enters an invalid color or an empty text show an error message to the message element

    let textInput = $('#textInput');
    let colorInput = $('#colorInput');
    let generateH1 = $('#generateH1');
    let generateMessage = $('#generateMessage');

    generateH1.click(function(){
      if(textInput.val() != ""){
        generateMessage.text(textInput.val()).css('color', colorInput.val())
      }
      else generateMessage.text("Please enter your text to continue...")
     });
     
});