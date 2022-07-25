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
   
    StartGame()
    {
        var startOrRestartGameButtonText = "Start or Restart";
        GameLevel._buttonStartRestart.textContent = startOrRestartGameButtonText;
/* Top player*/
        var buttonDiscardTopPlayerCard1Text = "Discard First card";
        GameLevel._buttonDiscardTopPlayerCard1.textContent = buttonDiscardTopPlayerCard1Text;

        var buttonDiscardTopPlayerCard2Text = "Discard Second card";
        GameLevel._buttonDiscardTopPlayerCard2.textContent = buttonDiscardTopPlayerCard2Text;

        var buttonDiscardTopPlayerCard3Text = "Discard Third card";
        GameLevel._buttonDiscardTopPlayerCard3.textContent = buttonDiscardTopPlayerCard3Text;

        var buttonDiscardTopPlayerCard4Text = "Discard Forth card";
        GameLevel._buttonDiscardTopPlayerCard4.textContent = buttonDiscardTopPlayerCard4Text;

        var buttonPickUpTopPlayerCard1Text = "Pick-up First card";
        GameLevel._buttonPickUpTopPlayerCard1.textContent = buttonPickUpTopPlayerCard1Text;

        var buttonPickUpTopPlayerCard2Text = "Pick-up Second card";
        GameLevel._buttonPickUpTopPlayerCard2.textContent = buttonPickUpTopPlayerCard2Text;

        var buttonPickUpTopPlayerCard3Text = "Pick-up Third card";
        GameLevel._buttonPickUpTopPlayerCard3.textContent = buttonPickUpTopPlayerCard3Text;

        var buttonPickUpTopPlayerCard4Text = "Pick-up Forth card";
        GameLevel._buttonPickUpTopPlayerCard4.textContent = buttonPickUpTopPlayerCard4Text;

/* Bottom player*/
        var buttonDiscardBottomPlayerCard1Text = "Discard First card";
        GameLevel._buttonDiscardBottomPlayerCard1.textContent = buttonDiscardBottomPlayerCard1Text;

        var buttonDiscardBottomPlayerCard2Text = "Discard Second card";
        GameLevel._buttonDiscardBottomPlayerCard2.textContent = buttonDiscardBottomPlayerCard2Text;

        var buttonDiscardBottomPlayerCard3Text = "Discard Third card";
        GameLevel._buttonDiscardBottomPlayerCard3.textContent = buttonDiscardBottomPlayerCard3Text;

        var buttonDiscardBottomPlayerCard4Text = "Discard Forth card";
        GameLevel._buttonDiscardBottomPlayerCard4.textContent = buttonDiscardBottomPlayerCard4Text;

        var buttonPickUpBottomPlayerCard1Text = "Pick-up First card";
        GameLevel._buttonPickUpBottomPlayerCard1.textContent = buttonPickUpBottomPlayerCard1Text;

        var buttonPickUpBottomPlayerCard2Text = "Pick-up Second card";
        GameLevel._buttonPickUpBottomPlayerCard2.textContent = buttonPickUpBottomPlayerCard2Text;

        var buttonPickUpBottomPlayerCard3Text = "Pick-up Third card";
        GameLevel._buttonPickUpBottomPlayerCard3.textContent = buttonPickUpBottomPlayerCard3Text;

        var buttonPickUpBottomPlayerCard4Text = "Pick-up Forth card";
        GameLevel._buttonPickUpBottomPlayerCard4.textContent = buttonPickUpBottomPlayerCard4Text;

        
    }
};