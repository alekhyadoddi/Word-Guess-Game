

var userGuess;
var computerGuess;
var binContent;
var win = 0;
var loss = 0;
var lifes = 12;
var dash;
var cguessText;


var animal = {
  name: function (currentAnimal) {
    return currentAnimal.name
  },
  image: function (currentAnimal) {
    return currentAnimal.image
  }
}

var elephant = {
  name: "elephant",
  image: "https://www.youtube.com/embed/Og6ykFRAdgA?autoplay=1"
}

var monkey = {
  name: "monkey",
  image: "https://www.youtube.com/embed/0j6AZhZFb7A?autoplay=1"
}

var animals = [elephant, monkey];

function setTheme(currentAnimal) {
  document.getElementById("animalname").textContent = (animal.name(currentAnimal));
  document.getElementById("myvideo").setAttribute("src", animal.image(currentAnimal));
}

setTheme(animals[0]);