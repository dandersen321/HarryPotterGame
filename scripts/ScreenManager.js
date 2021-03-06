﻿var ScreenNames =
        {
            GameMenu: 0,
            GameQuestion: 1,
            GameAnswer: 5,
            HighScores: 2,
            Controls: 3,
            Credits: 4
        };

var ScreenManager = function () {

    var activeScreenIndex = -1;
    var listOfScreens = [];

    var newScreen = function (Screen, ScreenName) {

        if (!Screen.show || !Screen.hide) {
            console.error("Screen does not have the correct paramters");
            return;
        }

        listOfScreens[ScreenName] = Screen;
    }
    

    /*CONSTRUCTOR*/
    //requires screens.js to have been loaded
    //intialize screenManger
    //var intialize = function()
    //{
    newScreen(GameMenuScreen, ScreenNames.GameMenu);
    newScreen(GameQuestionScreen, ScreenNames.GameQuestion);
    newScreen(GameAnswerScreen, ScreenNames.GameAnswer);
    newScreen(HighScoresScreen, ScreenNames.HighScores);
    newScreen(ControlsScreen, ScreenNames.Controls);
    newScreen(CreditsScreen, ScreenNames.Credits);
    listOfScreens[ScreenNames.GameMenu].show();
    //}

    

    

    
    

    //listOfScreens.push(newScreen(ScreenNames.Menu, showMenu, hideMenu));
    //listOfScreens.push(newScreen(ScreenNames.CarGame, showGame, hideGame));
    //listOfScreens.push(newScreen(ScreenNames.HighScores, showHighScores, hideHighScores));
    //listOfScreens.push(newScreen(ScreenNames.Credits, showCredits, hideCredits));
    //listOfScreens.push(newScreen(ScreenNames.Help, showHelp, hideHelp));


    var changeToScreen = function (newScreenIndex)
    {
        if (activeScreenIndex == newScreenIndex)
        {
            //console.error("old and target screen in changeToScreen function are the same");
            return;
        }
        if(activeScreenIndex != -1)
            listOfScreens[activeScreenIndex].hide();
        listOfScreens[newScreenIndex].show();
        activeScreenIndex = newScreenIndex;
    }

    return {
       // intialize: intialize,
        ScreenNames: ScreenNames,
        changeToScreen: changeToScreen
    };

}();