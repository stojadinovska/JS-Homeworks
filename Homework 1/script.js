//Solution 1

var numberOfItems = 30;
var itemPrice = 119.95;
var taxRate = 5/100;
var eachItemWithTax = itemPrice + itemPrice * taxRate;
var eachItemTax = itemPrice * taxRate;
var itemsTotal = itemPrice * numberOfItems;
var taxTotal = taxRate * itemsTotal;
var finalPrice = itemsTotal + taxTotal;

console.log(`Phone price: $${itemPrice}. Tax for one phone:$${eachItemTax}. Price for one phone with tax: $${eachItemWithTax}`);
console.log(`Total price without tax: $${itemsTotal}. Total tax: $${taxTotal}. Total price with tax: $${finalPrice}`)

//Solution 2

var phonePrice = 119.95;
console.log(`Total price of 30 phones, including tax: ${30 * (phonePrice + phonePrice * 0.05)}`)