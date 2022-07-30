var GameLevel ={
    _buttonStartRestart: document.querySelector("#start-restart-button"),
    _buttonStartRestart1: document.querySelector("#start-restart-button1"),
  
   
  
    
    

   

    
    

    ShowAllGameRessources()
    {
        var startOrRestartGameButtonText = "Start or Restart";
        GameLevel._buttonStartRestart.textContent = startOrRestartGameButtonText;
        GameLevel._buttonStartRestart1.textContent = startOrRestartGameButtonText;
    },

   
    HideAllRessourcesBeforeStartingGame()
    {
        GameLevel.HideBottomPlayerAction();
        GameLevel.HideTopPlayerAction();
        GameLevel.HideAllBoardCards();
        GameLevel.HideAllEndOfTurnButton();
    }
};