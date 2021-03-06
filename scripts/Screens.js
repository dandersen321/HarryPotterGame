﻿var showElem = function (elem) {
    elem.style.display = "";
}

var hideElem = function (elem) {
    elem.style.display = "none";
}

var GameMenuScreen = (function () {

    var menuScreen = document.getElementById("gameMenuScreen");
    var menuElem = document.getElementById("gameMenu");
    var menuItems = [];

    //specialClass is optional if the css should be one other than the generic menubutton class
    var newMenuItem = function (buttonText, functionToRun, showFunction, hideFunction, specialClass) {
        if (!specialClass)
            specialClass = "class-gameMenuOption";
        menuElem.innerHTML += ("<li onclick = '" + functionToRun + "' class = '" + specialClass + "' >" + buttonText + "</li>");
    }

    /* CONSTRUCTOR*/
    //var intializeMenu = function () {
    menuItems.push(newMenuItem("New Game", "GameMenuScreen.newGameClicked()"));
        menuItems.push(newMenuItem("High Scores", "ScreenManager.changeToScreen(ScreenNames.HighScores)"));
        menuItems.push(newMenuItem("Controls", "ScreenManager.changeToScreen(ScreenNames.Controls)"));
        menuItems.push(newMenuItem("Credits", "ScreenManager.changeToScreen(ScreenNames.Credits)"));
    //}

    var newGameClicked = function () {
        BookGame.Core.startGame();
        ScreenManager.changeToScreen(ScreenNames.GameQuestion);
    };
    

    var show = function () {
        showElem(menuScreen);
    }

    var hide = function () {
        hideElem(menuScreen);
    }

    return {
        //intializeMenu: intializeMenu,
        show: show,
        hide: hide,
        newGameClicked: newGameClicked
    };

}());

var GameQuestionScreen = function () {
    var questionScreenWrapperElem = document.getElementById("gameQuestionScreen");
    var playerTable = document.getElementById("playerTable");
    function updateTable() {
        playerTable.innerHTML = "<tr><th>Name</th><th>Score</th><th>Button</th></tr>";

        var listOfPlayers = BookGame.Core.getListOfPlayers();

        var playerButton;

        for (var i = 0; i < listOfPlayers.length; ++i) {
            playerButton = listOfPlayers[i].getButton();
            if (playerButton == -1)
                playerButton = "NA";
            else if (playerButton == -2)
                playerButton = "Press Key";

            playerTable.innerHTML += "<tr><th>" + listOfPlayers[i].getName() + "</th>" +
                "<th>" + listOfPlayers[i].getScore() + "</th>" +
                "<th><button onclick=\"BookGame.Core.changeButtonForUser(" + i + ")\">" + playerButton + "</button></th>";
        }



        
    }

    var show = function () {
        showElem(questionScreenWrapperElem);
        updateTable();
    };

    var hide = function () {
        hideElem(questionScreenWrapperElem);
    };

    return {
        show: show,
        hide: hide
    };
}();

var GameAnswerScreen = function () {
    var gameAnswerScreenWrapperElem = document.getElementById("gameAnswerScreen");
    var gameListOfChoicesElem = document.getElementById("listOfChoices");

    function newBookElem(name){
        return "<li onclick = \"BookGame.Core.guessBook('" + name + "')\">" + name + "</li>";
    }

    var listOfBooks = Books.listOfBooks;
    for (var i = 0; i < listOfBooks.length; ++i)
    {
        gameListOfChoicesElem.innerHTML += newBookElem(listOfBooks[i].name);
    }

    var show = function () {
        showElem(gameScreenWrapperElem);
    }

    var hide = function () {
        hideElem(gameScreenWrapperElem);
    }

    return {
        show: show,
        hide: hide
    };
}();

var HighScoresScreen = function () {
    var highScoresWrapperElem = document.getElementById("highScoresScreen");

    var show = function () {
        //angular.element(document.getElementById('highScoresScreen')).scope().updateScores();
        showElem(highScoresWrapperElem);
    };

    var hide = function () {
        hideElem(highScoresWrapperElem);
    };

    return {
        show: show,
        hide: hide
    };
}();

var ControlsScreen = function () {
    var controlsWrapperElem = document.getElementById("controlsScreen");
    var controlsListElem = document.getElementById("controlsList");

    var staticInnerHTMLElem = "<li> Menu: Esc </li>" +
        "<li><button onclick = \"KeyBoard.resetControls()\">Reset Controls</button></li>";

    var changeControlForFunction = function(functionToChange){

    }

    var updateControls = function () {
        var hardDropKeyCode = KeyBoard.getKeyCodeForFunction(TetrisGame.Core.currentPieceHardDrop);
        var softDropKeyCode = KeyBoard.getKeyCodeForFunction(TetrisGame.Core.currentPieceSoftDrop);
        var moveRightKeyCode = KeyBoard.getKeyCodeForFunction(TetrisGame.Core.currentPieceMoveRight);
        var moveLeftKeyCode = KeyBoard.getKeyCodeForFunction(TetrisGame.Core.currentPieceMoveLeft);
        var rotateRightKeyCode = KeyBoard.getKeyCodeForFunction(TetrisGame.Core.rotatePieceRight);
        var rotateLeftKeyCode = KeyBoard.getKeyCodeForFunction(TetrisGame.Core.rotatePieceLeft);

        //var hardDropKeyName = KeyBoard.getKeyNameFromKeyCode(hardDropKeyCode);

        var newInnerHTML = "<li>" + "Hard Drop: " + hardDropKeyCode +
            "   <button onclick = \"KeyBoard.changeKeyCodeForFunction(TetrisGame.Core.currentPieceHardDrop)\">" +
            "Change Key</button></li>";
        newInnerHTML += "<li>" + "Soft Drop: " + softDropKeyCode +
            "   <button onclick = \"KeyBoard.changeKeyCodeForFunction(TetrisGame.Core.currentPieceSoftDrop)\">" +
            "Change Key</button></li>";
        newInnerHTML += "<li>" + "Move Right: " + moveRightKeyCode +
            "   <button onclick = \"KeyBoard.changeKeyCodeForFunction(TetrisGame.Core.currentPieceMoveRight)\">" +
            "Change Key</button></li>";
        newInnerHTML += "<li>" + "Move Left: " + moveLeftKeyCode +
            "   <button onclick = \"KeyBoard.changeKeyCodeForFunction(TetrisGame.Core.currentPieceMoveLeft)\">" +
            "Change Key</button></li>";
        newInnerHTML += '<li>' + 'Rotate Right: ' + rotateRightKeyCode +
            '   <button onclick = "KeyBoard.changeKeyCodeForFunction(TetrisGame.Core.rotatePieceRight)">' +
            'Change Key</button></li>';

        newInnerHTML += '<li>' + 'Rotate Left: ' + rotateLeftKeyCode +
            '   <button onclick = "KeyBoard.changeKeyCodeForFunction(TetrisGame.Core.rotatePieceLeft)">' +
            'Change Key</button></li>';


        controlsListElem.innerHTML = newInnerHTML + staticInnerHTMLElem;
        //console.log(hardDropKeyCode);
    }

    var show = function () {
        updateControls();
        showElem(controlsWrapperElem);
    }

    var hide = function () {
        hideElem(controlsWrapperElem);
    }

    return {
        show: show,
        hide: hide
    };
}();

var CreditsScreen = function () {
    var creditsWrapperElem = document.getElementById("creditsScreen");

    var show = function () {
        showElem(creditsWrapperElem);
    }

    var hide = function () {
        hideElem(creditsWrapperElem);
    }

    return {
        show: show,
        hide: hide
    };
}();