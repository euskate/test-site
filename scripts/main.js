const myHeading = document.querySelector('h1')

let myImage = document.querySelector('img')
myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/thankyou.jpg') {
    myImage.setAttribute('src', '/images/thankyou2.jpeg')
  } else {
    myImage.setAttribute('src', 'images/thankyou.jpg')
  }
}

let myButton = document.querySelector('button')

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Euskates is Cool, ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Euskates is Cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}