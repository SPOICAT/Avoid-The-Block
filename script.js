var player = document.getElementById("player");
var block = document.getElementById("block");
var score = 0;
var highScore = 0;
var isPlayerDead;
var restartButton = document.getElementById("restartButton");

scoreDisplayer.value = "SCORE:" + score;

setInterval(function(){
  var rect1 = player.getBoundingClientRect();
  var rect2 = block.getBoundingClientRect();
  
  if (rect1.x < rect2.x + rect2.width && //if block collides with player
      rect2.x < rect1.x + rect1.width &&
      rect1.y < rect2.y + rect2.height &&
      rect2.y < rect1.y + rect1.height) {;
    player.style.display="none"; 
    isPlayerDead = "true";     
  }
})


addEventListener("keypress",function(){  
  var pressedKey = event.which || event.keyCode();
   if(block.classList.contains("blockStartMoving") == false) {
     block.classList.add("blockStartMoving");
   } else {
      if (pressedKey == 32) { //if user presses SPACE
    if (player.classList.contains("playerJumping") == false) {
      player.classList.add("playerJumping");
    setTimeout(function(){
      player.classList.remove("playerJumping");
      if (isPlayerDead == "true") {} else {
        scoreDisplayer.value = "SCORE:" + score++;
      }
    },750) 
    }
     document.getElementById("ingameText").style.opacity="0";
      }
   }
  
})

restartButton.addEventListener("click",function(){
  location.reload();
})
