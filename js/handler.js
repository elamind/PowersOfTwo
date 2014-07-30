var MAX = 16;

function checkAnswer() {
   var input = $("#userInput").val();
   var exp = $("#exponent").html();

   if (input === Math.pow(2, exp)) {
      $("#answer").html("Correct!")
         .css("background-color", "#44AA44")
         .show().fadeOut(1500);
      $("#submit").button("disable");
   }   
   else {
      $("#answer").html("Wrong. Try again.")
         .css("background-color", "#AA4444")
         .show().fadeOut(1000, "easeInSine"); 
   }
}

function reset() {
   $("#exponent").html(getNewExp());
   $("#userInput").val("");
   console.log("Here!");
   $("#submit").button("enable");
}

function getNewExp() {
   return Math.floor(Math.random()*(MAX+1));
}

function setup() {
   $("#userInput").keydown(function(e) {
      if (e.which === 13)
         checkAnswer();
      if (e.which === 39)
         reset();
   });

   $("#submit").button().click(checkAnswer);
   $("#next").button().click(reset);
   $("#exponent").html(getNewExp());
}
