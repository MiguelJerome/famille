var GameLevel ={
    _buttonStartRestart: document.querySelector("#start-restart-button"),
  
   
  
    
    

   

    
    

    ShowAllGameRessources()
    {

         
         

        var startOrRestartGameButtonText = "Start or Restart";
        GameLevel._buttonStartRestart.textContent = startOrRestartGameButtonText;


       



       


      // end of turn button

   

        
       

    },

   
    HideAllRessourcesBeforeStartingGame()
    {
        GameLevel.HideBottomPlayerAction();
        GameLevel.HideTopPlayerAction();
        GameLevel.HideAllBoardCards();
        GameLevel.HideAllEndOfTurnButton();
    }
};