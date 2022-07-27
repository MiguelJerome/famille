var GameLevel ={
    _buttonStartRestart: document.querySelector("#start-restart-button"),
    _buttonDiscardTopPlayerCard1: document.querySelector("#discard-top-player-card1"),
    _buttonDiscardTopPlayerCard2: document.querySelector("#discard-top-player-card2"),
    _buttonDiscardTopPlayerCard3: document.querySelector("#discard-top-player-card3"),
    _buttonDiscardTopPlayerCard4: document.querySelector("#discard-top-player-card4"),
    _buttonPickUpTopPlayerCard1: document.querySelector("#pick-up-top-player-card1"),
    _buttonPickUpTopPlayerCard2: document.querySelector("#pick-up-top-player-card2"),
    _buttonPickUpTopPlayerCard3: document.querySelector("#pick-up-top-player-card3"),
    _buttonPickUpTopPlayerCard4: document.querySelector("#pick-up-top-player-card4"),
    _buttonDiscardBottomPlayerCard1: document.querySelector("#discard-bottom-player-card1"),
    _buttonDiscardBottomPlayerCard2: document.querySelector("#discard-bottom-player-card2"),
    _buttonDiscardBottomPlayerCard3: document.querySelector("#discard-bottom-player-card3"),
    _buttonDiscardBottomPlayerCard4: document.querySelector("#discard-bottom-player-card4"),
    _buttonPickUpBottomPlayerCard1: document.querySelector("#pick-up-bottom-player-card1"),
    _buttonPickUpBottomPlayerCard2: document.querySelector("#pick-up-bottom-player-card2"),
    _buttonPickUpBottomPlayerCard3: document.querySelector("#pick-up-bottom-player-card3"),
    _buttonPickUpBottomPlayerCard4: document.querySelector("#pick-up-bottom-player-card4"),
    

   

    
    

    ShowAllGameRessources()
    {

          /* Board Card*/
          var boardCard1 = "K♠";
         
  
          var boardCard2 = "K❤";
         
  
          var boardCard3 = "K♦";
         
  
          var boardCard4 = "K♣";
         

        var startOrRestartGameButtonText = "Start or Restart";
        GameLevel._buttonStartRestart.textContent = startOrRestartGameButtonText;
/* Top player*/
        var buttonDiscardTopPlayerCard1Text = "Discard 5♦";
        GameLevel._buttonDiscardTopPlayerCard1.textContent = buttonDiscardTopPlayerCard1Text;

        var buttonDiscardTopPlayerCard2Text = "Discard 4❤";
        GameLevel._buttonDiscardTopPlayerCard2.textContent = buttonDiscardTopPlayerCard2Text;

        var buttonDiscardTopPlayerCard3Text = "Discard 9♦";
        GameLevel._buttonDiscardTopPlayerCard3.textContent = buttonDiscardTopPlayerCard3Text;

        var buttonDiscardTopPlayerCard4Text = "Discard 9♣";
        GameLevel._buttonDiscardTopPlayerCard4.textContent = buttonDiscardTopPlayerCard4Text;

        var buttonPickUpTopPlayerCard1Text = "Pick-up " + boardCard1;
        GameLevel._buttonPickUpTopPlayerCard1.textContent = buttonPickUpTopPlayerCard1Text;

        var buttonPickUpTopPlayerCard2Text = "Pick-up " + boardCard2;
        GameLevel._buttonPickUpTopPlayerCard2.textContent = buttonPickUpTopPlayerCard2Text;

        var buttonPickUpTopPlayerCard3Text = "Pick-up " + boardCard3 ;
        GameLevel._buttonPickUpTopPlayerCard3.textContent = buttonPickUpTopPlayerCard3Text;

        var buttonPickUpTopPlayerCard4Text = "Pick-up " + boardCard4;
        GameLevel._buttonPickUpTopPlayerCard4.textContent = buttonPickUpTopPlayerCard4Text;

/* Bottom player*/
        var buttonDiscardBottomPlayerCard1Text = "Discard T♠";
        GameLevel._buttonDiscardBottomPlayerCard1.textContent = buttonDiscardBottomPlayerCard1Text;

        var buttonDiscardBottomPlayerCard2Text = "Discard J❤";
        GameLevel._buttonDiscardBottomPlayerCard2.textContent = buttonDiscardBottomPlayerCard2Text;

        var buttonDiscardBottomPlayerCard3Text = "Discard Q♦";
        GameLevel._buttonDiscardBottomPlayerCard3.textContent = buttonDiscardBottomPlayerCard3Text;

        var buttonDiscardBottomPlayerCard4Text = "Discard 7♣";
        GameLevel._buttonDiscardBottomPlayerCard4.textContent = buttonDiscardBottomPlayerCard4Text;

        var buttonPickUpBottomPlayerCard1Text = "Pick-up " + boardCard1;
        GameLevel._buttonPickUpBottomPlayerCard1.textContent = buttonPickUpBottomPlayerCard1Text;

        var buttonPickUpBottomPlayerCard2Text = "Pick-up " + boardCard2;
        GameLevel._buttonPickUpBottomPlayerCard2.textContent = buttonPickUpBottomPlayerCard2Text;

        var buttonPickUpBottomPlayerCard3Text = "Pick-up " + boardCard3;
        GameLevel._buttonPickUpBottomPlayerCard3.textContent = buttonPickUpBottomPlayerCard3Text;

        var buttonPickUpBottomPlayerCard4Text = "Pick-up " + boardCard4;
        GameLevel._buttonPickUpBottomPlayerCard4.textContent = buttonPickUpBottomPlayerCard4Text;

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