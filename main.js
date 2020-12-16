var gameData = {
    stuff: 0,
    stuffPerClick: 1
}

function clickStuff() {
    gameData.stuff += gameData.stuffPerClick
    document.getElementById("stuffClicked").innerHTML = gameData.stuff + " Stuff Clicked"
}