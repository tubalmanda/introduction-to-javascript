var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50; 

var totalMarks = mathematics + biology + chemistry + physics + bangla;
var average = totalMarks / 5; 

average = average.toFixed(2);
// average = parseFloat(average);

console.log(average);