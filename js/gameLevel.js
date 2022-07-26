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
    _boardCard1: document.querySelector("#board-card1"),
    _boardCard2: document.querySelector("#board-card2"),
    _boardCard3: document.querySelector("#board-card3"),
    _boardCard4: document.querySelector("#board-card4"),

    _buttonEndOfTurnTop: document.querySelector("#end-of-turn-top-button"),
    _buttonEndOfTurnBottom: document.querySelector("#end-of-turn-bottom-button"),
    

    ShowAllGameRessources()
    {

          /* Board Card*/
          var boardCard1 = "K♠";
          GameLevel._boardCard1.textContent = boardCard1;
  
          var boardCard2 = "K❤";
          GameLevel._boardCard2.textContent = boardCard2;
  
          var boardCard3 = "K♦";
          GameLevel._boardCard3.textContent = boardCard3;
  
          var boardCard4 = "K♣";
          GameLevel._boardCard4.textContent = boardCard4;

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

        var buttonDiscardBottomPlayerCard4Text = "Discard K♣";
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

      var buttonEndOfTurnText = "End of turn";
        GameLevel._buttonEndOfTurnTop.textContent = buttonEndOfTurnText;
        GameLevel._buttonEndOfTurnBottom.textContent = buttonEndOfTurnText;

        GameLevel._buttonStartRestart.addEventListener("click", function()
        {
        
            GameLevel.HideAllRessourcesBeforeStartingGame();
        });
        
        
        
        GameLevel._buttonEndOfTurnTop.addEventListener("click", function()
        {
            GameLevel.GivePermissionBottomPlayerToPlay();
        });
        
        GameLevel._buttonEndOfTurnBottom.addEventListener("click", function()
        {
            GameLevel.GivePermissionTopPlayerToPlay();
        });


    },

    HideTopPlayerAction()
    {
    GameLevel._buttonDiscardTopPlayerCard1.style.visibility = "hidden";
    GameLevel._buttonDiscardTopPlayerCard2.style.visibility = "hidden";
    GameLevel._buttonDiscardTopPlayerCard3.style.visibility = "hidden";
    GameLevel._buttonDiscardTopPlayerCard4.style.visibility = "hidden";
    GameLevel._buttonPickUpTopPlayerCard1.style.visibility = "hidden";
    GameLevel._buttonPickUpTopPlayerCard2.style.visibility = "hidden";
    GameLevel._buttonPickUpTopPlayerCard3.style.visibility = "hidden";
    GameLevel._buttonPickUpTopPlayerCard4.style.visibility = "hidden";
    },
    HideBottomPlayerAction()
    {
    GameLevel._buttonDiscardBottomPlayerCard1.style.visibility = "hidden";
    GameLevel._buttonDiscardBottomPlayerCard2.style.visibility = "hidden";
    GameLevel._buttonDiscardBottomPlayerCard3.style.visibility = "hidden";
    GameLevel._buttonDiscardBottomPlayerCard4.style.visibility = "hidden";
    GameLevel._buttonPickUpBottomPlayerCard1.style.visibility = "hidden";
    GameLevel._buttonPickUpBottomPlayerCard2.style.visibility = "hidden";
    GameLevel._buttonPickUpBottomPlayerCard3.style.visibility = "hidden";
    GameLevel._buttonPickUpBottomPlayerCard4.style.visibility = "hidden";
    },

    ShowTopPlayerAction()
    {
    GameLevel._buttonDiscardTopPlayerCard1.style.visibility = "visible";
    GameLevel._buttonDiscardTopPlayerCard2.style.visibility = "visible";
    GameLevel._buttonDiscardTopPlayerCard3.style.visibility = "visible";
    GameLevel._buttonDiscardTopPlayerCard4.style.visibility = "visible";
    GameLevel._buttonPickUpTopPlayerCard1.style.visibility = "visible";
    GameLevel._buttonPickUpTopPlayerCard2.style.visibility = "visible";
    GameLevel._buttonPickUpTopPlayerCard3.style.visibility = "visible";
    GameLevel._buttonPickUpTopPlayerCard4.style.visibility = "visible";
    },

    ShowBottomPlayerAction()
    {
    GameLevel._buttonDiscardBottomPlayerCard1.style.visibility = "visible";
    GameLevel._buttonDiscardBottomPlayerCard2.style.visibility = "visible";
    GameLevel._buttonDiscardBottomPlayerCard3.style.visibility = "visible";
    GameLevel._buttonDiscardBottomPlayerCard4.style.visibility = "visible";
    GameLevel._buttonPickUpBottomPlayerCard1.style.visibility = "visible";
    GameLevel._buttonPickUpBottomPlayerCard2.style.visibility = "visible";
    GameLevel._buttonPickUpBottomPlayerCard3.style.visibility = "visible";
    GameLevel._buttonPickUpBottomPlayerCard4.style.visibility = "visible";
    },
    GivePermissionTopPlayerToPlay()
    {
        GameLevel.ShowTopPlayerAction();
        GameLevel.HideBottomPlayerAction();

    },
    GivePermissionBottomPlayerToPlay()
    {
        GameLevel.ShowBottomPlayerAction();
        GameLevel.HideTopPlayerAction();

    },

    HideAllBoardCards()
    {
        GameLevel._boardCard1.style.visibility = "hidden";
        GameLevel._boardCard2.style.visibility = "hidden";
        GameLevel._boardCard3.style.visibility = "hidden";
        GameLevel._boardCard4.style.visibility = "hidden";
    },
    HideTopPlayerEndOfTurnButton()
    {
        GameLevel._buttonEndOfTurnTop.visibility = "hidden";
    },
    HideBottomPlayerEndOfTurnButton()
    {
        GameLevel._buttonEndOfTurnBottom.visibility = "hidden";
    },
    HideAllEndOfTurnButton()
    {
        GameLevel.HideBottomPlayerEndOfTurnButton();
        GameLevel.HideTopPlayerEndOfTurnButton();
    },
    
    HideAllRessourcesBeforeStartingGame()
    {
        GameLevel.HideBottomPlayerAction();
        GameLevel.HideTopPlayerAction();
        GameLevel.HideAllBoardCards();
        GameLevel.HideAllEndOfTurnButton();
    }
};