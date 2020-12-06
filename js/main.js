var game = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var aiSign = "";
var playerSign = "";
var on = false;
var count = 0;

var startTurn = prompt("Сhoose Your Hero (Man choose Х): ","Write  - Х or О");
switch(startTurn.toUpperCase()) {
  case "X":
    aiSign = "O";
    playerSign = "X";
    $("#message").html("Your choice is " + playerSign + ". nice try");
    break;
  case "O":
    aiSign = "X";
    playerSign = "O";
    $("#message").html("Your choice is " + playerSign + ". Are you serious?");
    break;
  case null:
    alert("Hey, are u stupid, i said press Х, либо О");
    window.location.reload(true);
    break;
  default:
    alert("Hey, are u stupid, i said press Х, либо О");
    window.location.reload(true);
}

function computerTurn() {
    var done = false;
    while (done === false && count != 5) {
      var computeX = Math.floor(Math.random() * 3);
      var computeY = Math.floor(Math.random() * 3);
      var move = $("#" + computeX + "" + computeY).text();
      if (move === "") {
        $("#" + computeX + "" + computeY).text(aiSign);
        done = true;
        game[computeX][computeY] = aiSign; 
      }
    }
}

function playerTurn(playerSign, id) {
  var spot = $("#" + id).text();
  var x = id.charAt(0);
  var y = id.charAt(1);
  if (spot === ""){
    count++;
    game[x][y] = playerSign;
    $("#" + x + "" + y).text(playerSign);
    winCondition(game, playerSign);
    if (on === false) {
      setTimeout(function () {
          computerTurn();
        }, 200);
      $("#message").html("Your turn: " + playerSign);
      setTimeout(function () {
          winCondition(game, aiSign);
        }, 400);
    }
  }
}

function winCondition(tracker, sign) {
  if (tracker[0][0] == sign && tracker[0][1] == sign && tracker[0][2] == sign) {
    on = true;
    reset();
    $("#message").html("Congrutulation, this game win " + sign);
  }
  else if (tracker[0][0] == sign && tracker[1][0] == sign && tracker[2][0] == sign) {
    on = true;
    reset();
    $("#message").html("Congrutulation, this game win " + sign);
  }
  else if (tracker[0][0] == sign && tracker[1][1] == sign && tracker[2][2] == sign){
    on = true;
    reset();
    $("#message").html("Congrutulation, this game win " + sign);
  }
  else if (tracker[0][1] == sign && tracker[1][1] == sign && tracker[2][1] == sign) {
    on = true;
    reset();
    $("#message").html("Congrutulation, this game win " + sign);
  }
  else if (tracker[1][0] == sign && tracker[1][1] == sign && tracker[1][2] == sign) {
    on = true;
    reset();
    $("#message").html("Congrutulation, this game win " + sign);
  }
  else if (tracker[2][0] == sign && tracker[2][1] == sign && tracker[2][2] == sign) {
    on = true;
    reset();
    $("#message").html("Congrutulation, this game win " + sign);
  }
  else if (tracker[0][2] == sign && tracker[1][2] == sign && tracker[2][2] == sign) {
    on = true;
    reset();
    $("#message").html("Congrutulation, this game win " + sign);
  }
  else if (tracker[2][0] == sign && tracker[1][1] == sign && tracker[0][2] == sign) {
    on = true;
    reset();
    $("#message").html("Опа-на, выиграл " + sign);
  }
  else if (!(tracker[0].includes(0))&&(!(tracker[1].includes(0)))&&(!(tracker[2].includes(0)))){
    on = true;
    reset();
    $("#message").html("It's draw!");
  }
  else {
    on = false;
  }

}

$(".tic").click(function(){
  var slot = $(this).attr('id');
  playerTurn(playerSign, slot);
});

function reset() {
  game[0][0] = 0;
  game[0][1] = 0;
  game[0][2] = 0;
  game[1][0] = 0;
  game[1][1] = 0;
  game[1][2] = 0;
  game[2][0] = 0;
  game[2][1] = 0;
  game[2][2] = 0;
  count = 0;
  $(".tic").text("");
  on = true;
}

$("#reset").click(function(){
  reset();
});