var userGuess;
var computerGuess;
var binContent;
var win = 0;
var loss = 0;
var lifes = 12;
var dash;
var cguessText;
var theme;

var game = {
  name: "hangman",
  animals: {
    name: function (currentAnimal) {
      return currentAnimal.name
    },
    image: function (currentAnimal) {
      return currentAnimal.image
    },
    reveal: function (currentAnimal) {
      return currentAnimal.reveal
    },
    sound: function (currentAnimal) {
      return currentAnimal.sound
    }
  }
  ,

  settheme: function (id, value) {
    console.log(value+"inside theme");
    console.log(id+"inside theme");
     document.getElementById(id).setAttribute("src", value);
     
    //document.getElementById("myimage").setAttribute("src", game.animals.image(computerGuess));
  },

  resetgame: function (win, theme) {
    console.log(theme+"inside reste");
    game.settextcontent("winno", win);

    game.settheme("myimage", theme);
    game.settextcontent("lifeno", 12);
    game.getnextword();
    // game.setsound(playsound);
    game.settextcontent("dustbin", "");


  },
  settextcontent: function (id, value) {

    document.getElementById(id).textContent = value;
  },
  getnextword: function () {
    dash = "";
    var randx = Math.floor(Math.random() * game.animals.length);
    computerGuess = game.animals[randx].name;
    themeint = game.animals[randx].image;
    themeaft= game.animals[randx].reveal;
    playsound=game.animals[randx].sound;
    for (var i = 0; i < computerGuess.length; i++) {
      dash = dash + "_";

    }
    game.settextcontent("cguess-text", dash);

  },
  revealanimal: function(value){
    console.log("themeaft inside fn"+value);
    game.settheme("myimage",value);
  
  }

  // setsound: function(value)
  // {
  //   document.getElementById('sound').setAttribute("src",value);
  //   document.getElementById('sound').play(); 
  // }


}


// objet declaration
var elephant = {
  name: "elephant",
  image: "assets/images/elephant-footprint.jpg",
  reveal: "assets/images/elephant.jpg",
  sound: "assets/sounds/elephant.mp3"
}

var monkey = {
  name: "monkey",
  image: "assets/images/monkeyfootprint.jpg",
  reveal: "assets/images/monkey.jpg",
  sound: "assets/sounds/monkey.mp3"

}

var donkey = {
  name: "donkey",
  image: "assets/images/donkeyfootprint.png",
  
  reveal: "assets/images/donkey.jpg",

  sound: "assets/sounds/donkey.mp3"
}

var hippopotamus = {
  name: "hippopotamus",
  image: "assets/images/hippopotamus-footprint.jpg",
  reveal: "assets/images/hippo.jpg",
  sound: "assets/sounds/hippo.mp3"
}

var dinosaur = {
  name: "dinosaur",
  image: "assets/images/dinosaurfootprint.jpeg",
  reveal: "assets/images/dinosaur.jpg",
  sound: "assets/sounds/dino.mp3"

}

var giraffe = {
  name: "giraffe",
  image: "assets/images/giraffefootprint.jpg",
  reveal: "assets/images/giraffe.jpg",
  sound: "assets/sounds/giraffe.mp3"
}





game.animals = [elephant, monkey, donkey,hippopotamus,dinosaur,giraffe];

// function getTheme(currentAnimal) {
//   document.getElementById("animalname").textContent = (game.animals.name(currentAnimal));

//   document.getElementById("myimage").setAttribute("src", game.animals.image(currentAnimal));
// }

//initializing lifes
game.settextcontent("lifeno", 12);
// new word
game.getnextword();
game.settheme("myimage",themeint);

// console.log(computerGuess);

// console.log("afternextword" + computerGuess);








// function resettheme() {
//   console.log("inside theme");
//   if (computerGuess == "elephant") {
//     setTheme(computerGuess)
//   }
//   else if (computerGuess == "monkey") {
//     document.getElementById("myvideo").setAttribute("src", "https://www.youtube.com/embed/0j6AZhZFb7A?autoplay=1");
//   }
//   else if (computerGuess == "donkey") {
//     document.getElementById("myvideo").setAttribute("src", "https://www.youtube.com/embed/sTBG6MjtNIs?autoplay=1");
//   }
//   else if (computerGuess == "dinousaur") {
//     document.getElementById("myvideo").setAttribute("src", "https://www.youtube.com/embed/phNab4hX9AY?autoplay=1");
//   }
//   else if (computerGuess == "hippopotamus") {
//     document.getElementById("myvideo").setAttribute("src", "https://www.youtube.com/embed/m5PyZP96QA8?autoplay=1");
//   }
//   else if (computerGuess == "giraffe") {
//     document.getElementById("myvideo").setAttribute("src", "https://www.youtube.com/embed/0EdZZWkcm5Q?autoplay=1");
//   }
// }


document.onkeyup = function (event) {
 
  //has lifes
  console.log(themeaft);
    var userGuess = event.key;//get the key
    if (lifes > 0) {
      
        var audio = new Audio("assets/sounds/Tiny_Button.mp3");
        audio.play();
    
    //check if key exists
    if (computerGuess.indexOf(userGuess) < 0) {
      binContent = document.getElementById("dustbin").textContent;//get the bin content
      //check if key exists in bin ,not exist-->append to existing content
      if (binContent.indexOf(userGuess) < 0) {
        var value = binContent + " " + userGuess;
        game.settextcontent("dustbin", value);
        //reduce number of lifes
        lifes = lifes - 1;
        //set textcontent for lifes
        game.settextcontent("lifeno", lifes);
        // after reducing check if lifes
        if (lifes == 0) {
          console.log(themeaft);
game.revealanimal(themeaft);
setTimeout('',10000);
game.resetgame(win,themeaft);

        }
      }


    }
    else {
      // letter exists in word,check for match and update the _ in that position with userguess
      for (var i = 0; i < computerGuess.length; i++) {

        if (computerGuess[i] == userGuess) {

          dash = dash.substring(0, i) + userGuess + dash.substring(i + 1);
          game.settextcontent("cguess-text", dash);
          console.log("dash before "+dash);
        }
      } // if all the letters are guessed then update the win count by 1
      if (dash.indexOf("_") < 0) {
        console.log(dash);
        win = win + 1;
        console.log(themeaft);
        game.revealanimal(themeaft);
       setTimeout('',10000);
       game.resetgame(win,themeaft)

      }


    }
  }
  // else {
  //   loss = loss + 1;
  //   // game.resettheme();
  //   game.resetgame(win);
  // }

}
