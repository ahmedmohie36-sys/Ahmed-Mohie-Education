var noButton = document.getElementById("no-button");

  noButton.addEventListener("click", moveButton);

  function moveButton() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var buttonWidth = noButton.offsetWidth;
    var buttonHeight = noButton.offsetHeight;

    var maxX = screenWidth - buttonWidth;
    var maxY = screenHeight - buttonHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
  }