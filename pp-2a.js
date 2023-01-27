var fruits = ['Apple', 'Banana', 'Orange'];

// console.log(fruits[1]);

// To find index of 'Banana'
var positionBanana = fruits.indexOf('Banana');
console.log(positionBanana);

//A - Now replace 'Banana' with 'Mango'
fruits[1] = 'Mango';
console.log(fruits);


// B - Remove 'Orange' and add 'Watermelon'
var removeAdd = fruits[2];
fruits[2] = 'Watermelon';
console.log(fruits);