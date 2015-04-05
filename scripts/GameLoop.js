//the gameloop of the game, mainly does stuff when game is in a waiting, playing, or lost state
BookGame.GameLoop = (function () {
    var lastTimeStamp = performance.now();
    var gameActive = false;

    var setGameActive = function (newGameActive)
    {
        gameActive = newGameActive;
    };
    var getGameActive = function () { return gameActive; };

    var intialize = function () {
        gameLoop();
    };

    var update = function (currentTimeStamp) {
        var elapsedTime = currentTimeStamp - lastTimeStamp;
        KeyBoard.update(elapsedTime);

        if(gameActive === true)
        {
            BookGame.Core.update(elapsedTime);
        }
    };


    var render = function () {

        if (gameActive === true) {
            BookGame.Core.render();
        }
    }

    var gameLoop = function () {
        var currentTimeStamp = performance.now();
        update(currentTimeStamp);
        render();
        lastTimeStamp = currentTimeStamp;
        requestAnimationFrame(gameLoop);
    };


    return {
        intialize: intialize,
        setGameActive: setGameActive,
        getGameActive: getGameActive
    };

})();