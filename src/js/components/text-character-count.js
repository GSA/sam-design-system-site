
/*Calculates the Characters remaining for input and textarea based on maxlength attribute*/

function textCountdown () {
  var maxLengths = document.querySelectorAll('[maxlength]');
  for (var i = 0; i < maxLengths.length; i++) {
    maxLengths[i].addEventListener("keyup", function (e) {
      var limit = e.target.maxLength;
      var remainingChars = limit - e.target.value.length;
      if (remainingChars <= 0) {
        e.target.value.slice(0, limit);
      }
      e.target.nextElementSibling.innerText = "Characters Remaining: " + remainingChars + " of " + limit;
    });
  }
}
textCountdown();
