var MAX = 16;

function check(e) {
   if(e.keyCode === 13 && !document.getElementById("submit").disabled) {
      checkAnswer();
   }
   if(e.keyCode === 39) {
      reset();
   }
}

function checkAnswer() {
   var input = document.getElementById("userInput").value;
   var exp = document.getElementById("exponent").innerHTML;
   if(input==Math.pow(2, exp)) {
      document.getElementById("answer").innerHTML = "Correct!";
      document.getElementById("submit").disabled = true;      
   }   
   else {
      document.getElementById("answer").innerHTML = "Wrong. Try Again.";
   }
}

function reset() {
   document.getElementById("exponent").innerHTML = getNewExp();
   document.getElementById("userInput").value = "";
   document.getElementById("answer").innerHTML = "";
   document.getElementById("submit").disabled = false;
}

function getNewExp() {
   return Math.floor(Math.random()*(MAX+1));
}
