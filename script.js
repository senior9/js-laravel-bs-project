var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0'); 
var year = today.getFullYear();
var formattedDate = day + '-' + month + '-' + year;
console.log(formattedDate);
var querySelector= document.querySelectorAll('.today-date');
querySelector.forEach(function(element) {
    element.textContent= formattedDate
})