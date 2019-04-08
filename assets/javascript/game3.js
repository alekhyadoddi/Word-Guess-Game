

    var userGuess;
    var computerGuess;
    var binContent;
    var win = 0;
    var loss = 0;
    var lifes = 12;
    var dash;
    var cguessText;
    var animals = ["elephant", "monkey", "donkey", "dinousaur", "hippopotamus", "giraffe"];

  
    lifesinit();
    newword();

    

    function lifesinit() {
      lifes = 12;
      document.getElementById("lifeno").textContent = lifes;
      console.log(lifes);
    }

    function newword() {
      dash = "";
      computerGuess = animals[Math.floor(Math.random() * animals.length)];

      for (var i = 0; i < computerGuess.length; i++) {
        dash = dash + "_";

      }
      cguessText = document.getElementById("cguess-text");
      cguessText.textContent = dash;

    }
    function resetbin() {
      binContent = ""
      document.getElementById("dustbin").textContent = binContent;
    }

    function resettheme() {
      console.log("inside theme");
      if (computerGuess == "elephant") {

        document.getElementById("myvideo").setAttribute("src", "https://www.youtube.com/embed/Og6ykFRAdgA?autoplay=1");
      }
      else if (computerGuess == "monkey") {
        document.getElementById("myvideo").setAttribute("src", "https://www.youtube.com/embed/0j6AZhZFb7A?autoplay=1");
      }
      else if (computerGuess == "donkey") {
        document.getElementById("myvideo").setAttribute("src", "https://www.youtube.com/embed/sTBG6MjtNIs?autoplay=1");
      }
      else if (computerGuess == "dinousaur") {
        document.getElementById("myvideo").setAttribute("src", "https://www.youtube.com/embed/phNab4hX9AY?autoplay=1");
      }
      else if (computerGuess == "hippopotamus") {
        document.getElementById("myvideo").setAttribute("src", "https://www.youtube.com/embed/m5PyZP96QA8?autoplay=1");
      }
      else if (computerGuess == "giraffe") {
        document.getElementById("myvideo").setAttribute("src", "https://www.youtube.com/embed/0EdZZWkcm5Q?autoplay=1");
      }
    }

    
    document.onkeyup = function (event) {
      if (lifes > 0) {
        var userGuess = event.key;
        if (computerGuess.indexOf(userGuess) < 0) {
          binContent = document.getElementById("dustbin").textContent;
          if (binContent.indexOf(userGuess) < 0) {
            document.getElementById("dustbin").textContent = binContent + " " + userGuess;
            lifes = lifes - 1;
            document.getElementById("lifeno").textContent = lifes;
            if (lifes == 0) {
              resettheme();
              lifesinit();
              newword();
              resetbin();

            }
          }


        }
        else {

          for (var i = 0; i < computerGuess.length; i++) {
            if (computerGuess[i] == userGuess) {


              dash = dash.substring(0, i) + userGuess + dash.substring(i + 1);


              cguessText.textContent = dash;


            }
          }
          if (dash.indexOf("_") < 0) {
            win = win + 1;
            document.getElementById("winno").textContent = win;
            resettheme();
            lifesinit();
            newword();
            resetbin();

          }


        }
      }
      else {
        loss = loss + 1;
        resettheme();
        lifesinit();
        resetbin();
        newword();

      }

    }
