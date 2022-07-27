var EndOfTurn = {
    _buttonEndOfTurnTop: document.querySelector("#end-of-turn-top-button"),
    _buttonEndOfTurnBottom: document.querySelector("#end-of-turn-bottom-button"),

    // end of turn button

    ShowBothButtonEndOfTurn()
    {
    var buttonEndOfTurnText = "End of turn";
    EndOfTurn._buttonEndOfTurnTop.textContent = buttonEndOfTurnText;
    EndOfTurn._buttonEndOfTurnBottom.textContent = buttonEndOfTurnText;

   
    
    
    
    EndOfTurn._buttonEndOfTurnTop.addEventListener("click", function()
    {
        EndOfTurn.GivePermissionBottomPlayerToPlay();
    });
    
    EndOfTurn._buttonEndOfTurnBottom.addEventListener("click", function()
    {
        EndOfTurn.GivePermissionTopPlayerToPlay();
    });
},
    GivePermissionTopPlayerToPlay()
    {
        EndOfTurn.ShowTopPlayerAction();
        EndOfTurn.HideBottomPlayerAction();

    },
    GivePermissionBottomPlayerToPlay()
    {
        EndOfTurn.ShowBottomPlayerAction();
        EndOfTurn.HideTopPlayerAction();

    },
    HideTopPlayerEndOfTurnButton()
    {
        EndOfTurn._buttonEndOfTurnTop.visibility = "hidden";
    },
    HideBottomPlayerEndOfTurnButton()
    {
        EndOfTurn._buttonEndOfTurnBottom.visibility = "hidden";
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

   
};