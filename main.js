var gameData = {
    stuff: 0,
    stuffPerClick: 1,
    stuffPerClickCost: 10
}

function clickStuff() {
    gameData.stuff += gameData.stuffPerClick
    document.getElementById("stuffClicked").innerHTML = gameData.stuff + " Stuff Clicked"
}

function buyStuffPerClick() {
    if (gameData.stuff >= gameData.stuffPerClickCost) {
        gameData.stuff -= gameData.stuffPerClickCost
        gameData.stuffPerClick += 1
        gameData.stuffPerClickCost *= 3
        document.getElementById("stuffClicked").innerHTML = gameData.stuff + " Stuff Clicked"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Stuff (Currently Level " + gameData.stuffPerClick + ") Cost: " + gameData.stuffPerClickCost + " Stuff"
    }
}

var mainGameLoop = window.setInterval(function() {
    clickStuff()
}, 100)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("clickStuffSave", JSON.stringify(gameData))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("clickStuffSave"))
if (savegame !== null) {
  gameData = savegame
}

var update
if (typeof savegame.v0001 !== "undefined") gameData.v0001 = savegame.v0001;
