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
  for (i = 0; i < 15; i++) {
    $(".main button").eq(i).text(_number[i]);
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
  foundNullLocation()
  var move = 0;
  $(".main button").click(function () {
    if (this.innerHTML != "") {      
      foundNullLocation()
      switch ($(this).index()) {
        case _top: {
          $(".main button").eq(nullLoc).text($(".main button").eq(_top).text());
          $(".main button").eq(_top).text("");
          move = parseInt($(".move span").text()) + 1;
        }
        break
        case _bottom: {
          $(".main button").eq(nullLoc).text($(".main button").eq(_bottom).text());
          $(".main button").eq(_bottom).text("");
          move = parseInt($(".move span").text()) + 1;
        }
        break
        case _left: {
          $(".main button").eq(nullLoc).text($(".main button").eq(_left).text());
          $(".main button").eq(_left).text("");
          move = parseInt($(".move span").text()) + 1;
        }
        break
        case _right: {
          $(".main button").eq(nullLoc).text($(".main button").eq(_right).text());
          $(".main button").eq(_right).text("");
          move = parseInt($(".move span").text()) + 1;
        }
        break
      }
      $(".move span").text(move);
    }
  });

  //buttons around of null
  (_left = null), (_top = null), (_bottom = null), (_right = null);
  function foundNullLocation(){
    for (nullLocation = 0; nullLocation <= 15; nullLocation++) {
        if ($(".main button").eq(nullLocation).text() == "") {
          nullLoc = nullLocation;
          if (nullLocation % 4 != 0) {
            _left = nullLocation - 1;
          }
          if (nullLocation > 3) {
            _top = nullLocation - 4;
          }
          if (nullLocation < 12) {
            _bottom = nullLocation + 4;
          }
          if (nullLocation % 4 != 3) {
            _right = nullLocation + 1;
          }
        }
      }
  }
});
