<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
  <!--📌 No need to remove ../ as it can't leave public_html but is useful when on localhost -->
  <link rel="stylesheet" href="../style/layout/root.css" />
  <link rel="stylesheet" href="../style/layout/header&nav.css" />
  <link rel="stylesheet" href="../style/layout/snake.css" />
  <link rel="stylesheet" href="../style/layout/footer.css" />
  <link rel="icon" type="image/png" href="../Resources/logoDark.png">

</head>

<body>
  <?php include("../global/header&nav.html") ?>
  <main>
    <h2 id="infoBox"></h2>
    <div id="canvasDiv">
      <canvas id="myCanvas" width="400" height="400"></canvas>
    </div>
    <script>
      //📌 Canvas prep
      const cellSize = 20;
      const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");
      const rows = canvas.height / cellSize;
      const columns = canvas.width / cellSize;

      //📌 Global var
      let level; // We'll need that for our #infoBox
      let gameActive = false;
      let direction, gameInterval;
      let gameArea = [];
      for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
          gameArea.push({ x, y });
        }
      }
      let snake = [];
      let food = foodPosition();

      //📌 We set the interval via button and start the game
      function gameOn(interval) {
        if (gameActive === false) {
          gameActive = true;
          level = interval; // Here we assign the interval value to the level we'll be using to determine #infoBox output
          direction = "right";
          snake = [
            { x: 2, y: 0, d: "right" },
            { x: 1, y: 0, d: "right" },
            { x: 0, y: 0, d: "right" },
          ];
          food = foodPosition();
          gameInterval = setInterval(updateGame, interval);
        }
      }

      //📌 We change direction of the snake via this function, we removeEventListner to prevent suicide, example: direction = "down" input direction = "right" + input direction = "up" would = suicide
      function changeDirection(event) {
        const key = event.keyCode;
        if ((key == 87 || key == 38) && direction !== "down") {
          direction = "up";
          document.removeEventListener("keydown", changeDirection);
        } else if ((key == 83 || key == 40) && direction !== "up") {
          direction = "down";
          document.removeEventListener("keydown", changeDirection);
        } else if ((key == 65 || key == 37) && direction !== "right") {
          direction = "left";
          document.removeEventListener("keydown", changeDirection);
        } else if ((key == 68 || key == 39) && direction !== "left") {
          direction = "right";
          document.removeEventListener("keydown", changeDirection);
        }
      }

      //📌 We restore addEventListner, find new position of the head based on the direction, refer to the checkCollision function, if no collision is determined we add a new head position, if no food is found on the new head position we delete the last object, at the end we draw the snake
      function updateGame() {
        let head = { x: snake[0].x, y: snake[0].y };
        document.addEventListener("keydown", changeDirection);
        switch (direction) {
          case "left":
            head.x--;
            head.d = "left";
            break;
          case "right":
            head.x++;
            head.d = "right";
            break;
          case "up":
            head.y--;
            head.d = "up";
            break;
          case "down":
            head.y++;
            head.d = "down";
            break;
        }

        if (checkCollision(head)) {
          gameOver();
          return;
        }

        snake.unshift(head);

        if (head.x == food.x && head.y == food.y) {
          food = foodPosition();
        } else {
          snake.pop();
        }
        drawCanvas();
      }

      //📌 Here we redraw food for our snake and the snake itself
      function drawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Food for our snake
        ctx.fillStyle = "red";
        ctx.fillRect(
          food.x * cellSize,
          food.y * cellSize,
          cellSize,
          cellSize
        );

        ctx.fillStyle = "green";

        snake.forEach((segment, index) => {
          // Snake head up
          if (index === 0 && direction === "up") {
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize / 2
            ); // Center
            ctx.lineTo(
              segment.x * cellSize + cellSize,
              segment.y * cellSize + cellSize
            ); // Bottom right
            ctx.lineTo(segment.x * cellSize, segment.y * cellSize + cellSize); // Bottom left
            ctx.closePath();
            ctx.fill();

            // Tongue up
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize / 2
            ); // Center
            ctx.lineTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize / 4
            ); // Half tongue up
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize / 4
            ); // Half tongue up
            ctx.lineTo(
              segment.x * cellSize + (cellSize * 3) / 4,
              segment.y * cellSize
            ); // Up-right tongue part
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize / 4
            ); // Half tongue up
            ctx.lineTo(
              segment.x * cellSize + cellSize / 4,
              segment.y * cellSize
            ); // Down-left tongue part
            ctx.stroke();
          }

          // Snake head down
          else if (index === 0 && direction === "down") {
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize / 2
            ); // Center
            ctx.lineTo(segment.x * cellSize, segment.y * cellSize); // Top left
            ctx.lineTo(segment.x * cellSize + cellSize, segment.y * cellSize);
            // Top right
            ctx.closePath();
            ctx.fill();

            // Tongue down
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize / 2
            ); // Center
            ctx.lineTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + (cellSize * 3) / 4
            ); // Half tongue down
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + (cellSize * 3) / 4
            ); // Half tongue down
            ctx.lineTo(
              segment.x * cellSize + cellSize / 4,
              segment.y * cellSize + cellSize
            ); // Down-right tongue part
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + (cellSize * 3) / 4
            ); // Half tongue down
            ctx.lineTo(
              segment.x * cellSize + (cellSize * 3) / 4,
              segment.y * cellSize + cellSize
            ); // Down-left tongue part
            ctx.stroke();
          }

          // Snake head left
          else if (index === 0 && direction === "left") {
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize / 2
            ); // Center
            ctx.lineTo(
              segment.x * cellSize + cellSize,
              segment.y * cellSize + cellSize
            ); // Bottom right
            ctx.lineTo(segment.x * cellSize + cellSize, segment.y * cellSize); // Top right
            ctx.closePath();
            ctx.fill();

            // Tongue left
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize / 2
            ); // Center
            ctx.lineTo(
              segment.x * cellSize + cellSize / 4,
              segment.y * cellSize + cellSize / 2
            ); // Half tongue left
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 4,
              segment.y * cellSize + cellSize / 2
            ); // Half tongue left
            ctx.lineTo(
              segment.x * cellSize,
              segment.y * cellSize + cellSize / 4
            ); // Left-right tongue part
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 4,
              segment.y * cellSize + cellSize / 2
            ); // Half tongue left
            ctx.lineTo(
              segment.x * cellSize,
              segment.y * cellSize + (cellSize * 3) / 4
            ); // Left-left tongue part
            ctx.stroke();
          }

          // Snake head right
          else if (index === 0 && direction === "right") {
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize / 2
            ); // Center
            ctx.lineTo(segment.x * cellSize, segment.y * cellSize); // Top left
            ctx.lineTo(segment.x * cellSize, segment.y * cellSize + cellSize);
            // Bottom left
            ctx.closePath();
            ctx.fill();

            // Tongue right
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize / 2
            ); // Center
            ctx.lineTo(
              segment.x * cellSize + (cellSize * 3) / 4,
              segment.y * cellSize + cellSize / 2
            ); // Half tongue right
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + (cellSize * 3) / 4,
              segment.y * cellSize + cellSize / 2
            ); // Half tongue right
            ctx.lineTo(
              segment.x * cellSize + cellSize,
              segment.y * cellSize + (cellSize * 3) / 4
            ); // Right-right tongue part
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + (cellSize * 3) / 4,
              segment.y * cellSize + cellSize / 2
            ); // Half tongue right
            ctx.lineTo(
              segment.x * cellSize + cellSize,
              segment.y * cellSize + cellSize / 4
            ); // Right-left tongue part
            ctx.stroke();
          }

          // Snake body
          else if (index < snake.length - 1) {
            ctx.fillRect(
              segment.x * cellSize,
              segment.y * cellSize,
              cellSize,
              cellSize
            );
          }

          // Snake tail up
          else if (
            index === snake.length - 1 &&
            snake[index - 1].d === "up"
          ) {
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize + cellSize
            ); // Top center
            ctx.lineTo(segment.x * cellSize + cellSize, segment.y * cellSize); // Bottom right
            ctx.lineTo(segment.x * cellSize, segment.y * cellSize); // Bottom left
            ctx.closePath();
            ctx.fill();
          }
          // Snake tail down
          else if (
            index === snake.length - 1 &&
            snake[index - 1].d === "down"
          ) {
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize / 2,
              segment.y * cellSize
            ); // Top center
            ctx.lineTo(
              segment.x * cellSize + cellSize,
              segment.y * cellSize + cellSize
            ); // Bottom right
            ctx.lineTo(segment.x * cellSize, segment.y * cellSize + cellSize); // Bottom left
            ctx.closePath();
            ctx.fill();
          }
          // Snake tail left
          else if (
            index === snake.length - 1 &&
            snake[index - 1].d === "left"
          ) {
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize + cellSize,
              segment.y * cellSize + cellSize / 2
            ); // Top center
            ctx.lineTo(segment.x * cellSize, segment.y * cellSize + cellSize); // Bottom right
            ctx.lineTo(segment.x * cellSize, segment.y * cellSize); // Bottom left
            ctx.closePath();
            ctx.fill();
          }
          // Snake tail right
          else if (
            index === snake.length - 1 &&
            snake[index - 1].d === "right"
          ) {
            ctx.beginPath();
            ctx.moveTo(
              segment.x * cellSize,
              segment.y * cellSize + cellSize / 2
            ); // Top center
            ctx.lineTo(segment.x * cellSize + cellSize, segment.y * cellSize); // Bottom right
            ctx.lineTo(
              segment.x * cellSize + cellSize,
              segment.y * cellSize + cellSize
            ); // Bottom left
            ctx.closePath();
            ctx.fill();
          }
        });
      }

      //📌 Here we display chosen mode, score and determine food position
      function foodPosition() {
        let score = snake.length - 3;
        switch (level) {
          case "200":
            if (settings.language == "en") {
              document.getElementById("infoBox").innerHTML =
                "Easy mode <p>Score: " + score + "</p>";
            } else if (settings.language == "pl") {
              document.getElementById("infoBox").innerHTML =
                "Łatwy poziom <p>Wynik: " + score + "</p>";
            }
            break;
          case "150":
            if (settings.language == "en") {
              document.getElementById("infoBox").innerHTML =
                "Medium mode <p>Score: " + score + "</p>";
            } else if (settings.language == "pl") {
              document.getElementById("infoBox").innerHTML =
                "Średni poziom <p>Wynik: " + score + "</p>";
            }
            break;
          case "100":
            if (settings.language == "en") {
              document.getElementById("infoBox").innerHTML =
                "Hard mode <p>Score: " + score + "</p>";
            } else if (settings.language == "pl") {
              document.getElementById("infoBox").innerHTML =
                "Trudny poziom <p>Wynik: " + score + "</p>";
            }
            break;
        }

        // Here we get the space that is not occupied by the snake and spawn
        let freeSpace = gameArea.filter((cell) => {
          return !snake.some(
            (segment) => segment.x === cell.x && segment.y === cell.y
          );
        });
        let spawn = Math.floor(Math.random() * freeSpace.length);
        return freeSpace[spawn];
      }

      //📌 Here we end the game and display score
      function gameOver() {
        // We need that so that our intervals don't stack
        clearInterval(gameInterval);

        let score = snake.length - 3;
        if (settings.language == "en") {
          document.getElementById("infoBox").innerHTML =
            "Game over! <p>Score: " + score + "</p> ";
        } else if (settings.language == "pl") {
          document.getElementById("infoBox").innerHTML =
            "Koniec gry! <p>Wynik: " + score + "</p>";
        }
        gameActive = false;
      }

      //📌 Here we check for collisions with the borders and snake itself
      function checkCollision(head) {
        if (head.x >= columns || head.x < 0 || head.y >= rows || head.y < 0) {
          return true;
        }
        for (let i = 0; i < snake.length; i++) {
          if (head.x == snake[i].x && head.y == snake[i].y) {
            return true;
          }
        }
        return false;
      }
    </script>
    <div class="buttons">
      <button class="easy" onclick="gameOn('200')"></button>
      <button class="medium" onclick="gameOn('150')"></button>
      <button class="hard" onclick="gameOn('100')"></button>
    </div>
  </main>
  <?php include("../global/footer.html") ?>
</body>

</html>