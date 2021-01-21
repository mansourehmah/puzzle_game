$(document).ready(function () {
  //set random numbers
  var _number = [];
  for (i = 0; i < 15; i++) {
    _number[i] = Math.floor(Math.random() * 15 + 1);
    function checkNumber() {
      for (j = 0; j < i; j++) {
        if (_number[i] == _number[j]) {
          _number[i] = Math.floor(Math.random() * 15 + 1);
          checkNumber();
        }
      }
    }
    checkNumber();
  }
  //set random number in the buttons
  for(i=0 ; i<15 ; i++){
      $('.main button').eq(i).text(_number[i])
  }

  //timer function
  setInterval(timeUpdate, 1000);
  function timeUpdate() {
    minute = $("#clock-minute").text();
    second = $("#clock-second").text();

    if (parseInt(second) === 59) {
      var newMin = (parseInt(minute) + 1).toString();
      if (newMin < 10) newMin = "0" + newMin;
      $("#clock-minute").text(newMin);
      $("#clock-second").text("00");
    } else {
      newSec = (parseInt(second) + 1).toString();
      if (newSec < 10) newSec = "0" + newSec;
      $("#clock-second").text(newSec);
    }
  }

  //move counter function
  var move = 0;
  $(".main button").click(function () {
    if (this.innerHTML != "") {
      move = parseInt($(".move span").text()) + 1;
      $(".move span").text(move);
    }
  });
});
