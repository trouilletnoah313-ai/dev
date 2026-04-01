let player = document.getElementById("player");
let obstacle = document.getElementById("obstacle");
let scoreDisplay = document.getElementById("score");

let isJumping = false;
let score = 0;

// saut
document.addEventListener("keydown", function(e) {
  if (e.code === "Space") {
    jump();
  }
});

function jump() {
  if (isJumping) return;
  isJumping = true;

  let position = 0;

  let up = setInterval(() => {
    if (position >= 100) {
      clearInterval(up);

      let down = setInterval(() => {
        if (position <= 0) {
          clearInterval(down);
          isJumping = false;
        }
        position -= 5;
        player.style.bottom = position + "px";
      }, 20);

    } else {
      position += 5;
      player.style.bottom = position + "px";
    }
  }, 20);
}

// déplacement obstacle
function moveObstacle() {
  let position = 600;

  let interval = setInterval(() => {
    if (position < -40) {
      position = 600;
      score++;
      scoreDisplay.innerText = "Score: " + score;
    }

    // collision
    let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));

    if (position < 90 && position > 40 && playerBottom < 40) {
      alert("GAME OVER 😭 Score: " + score);
      location.reload();
    }

    position -= 5;
    obstacle.style.right = (600 - position) + "px";
  }, 20);
}

moveObstacle();