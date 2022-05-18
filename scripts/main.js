var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bashta-jpg.jpg') {
      myImage.setAttribute ('src','images/bashta2-jpg.jpg');
    } else {
      myImage.setAttribute ('src','images/bashta-jpg.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Башта вітає тебе,' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Башта вітає тебе, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}