var BookGame = new Object();
BookGame.Core = function () {

    var listOfPlayers = new Array();
    var currentQuestion = null;

    var getListOfPlayers = function () { return listOfPlayers; };

    var startGame = function () {

        function newPlayer(newName) {

            var name = newName;
            var score = 0;
            var keyCode = -1;

            var getName = function () { return name; };
            var getScore = function () { return score; };
            var setScore = function (newScore) { score = newScore; };
            var getButton = function () { return keyCode; };
            var setButton = function (newKeyCode) { keyCode = newKeyCode; };
            var buttonPressed = function () {
                console.log(name + "'s button was pressed");
            };

            return {
                getName: getName,
                getScore: getScore,
                setScore: setScore,
                getButton: getButton,
                setButton: setButton,
                buttonPressed: buttonPressed
            };
        }

        var playerName;

        do {
            playerName = prompt("Please enter player's name");
            if (playerName != null)
                listOfPlayers.push(newPlayer(playerName));
            else
                break;

        } while (playerName != null);
    }

    var newQuestion = function () {
        console.log("new question");
    };

    var repeatQuestion = function () {
        if (currentQuestion === null)
            newQuestion();
    }

    var changeButtonForUser = function (index) {
        listOfPlayers[index].setButton(-2);
        GameQuestionScreen.show();
        KeyBoard.changeKeyCodeForFunction(index, listOfPlayers[index].buttonPressed);
    }

    

    function update() {

    }

    function render() {

    }


    return {
        update: update,
        render: render,
        getListOfPlayers: getListOfPlayers,
        startGame: startGame,
        changeButtonForUser: changeButtonForUser,
        newQuestion: newQuestion,
        repeatQuestion: repeatQuestion
    };
}();