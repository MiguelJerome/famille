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
        GameMessageEvent.ShowMessageBottomPlayerItIsYourTurn();
        EndOfGame.CheckIfTopPlayerWon();
    });
    
    EndOfTurn._buttonEndOfTurnBottom.addEventListener("click", function()
    {
        EndOfTurn.GivePermissionTopPlayerToPlay();
        GameMessageEvent.ShowMessageTopPlayerItIsYourTurn();
        EndOfGame.CheckIfBottomPlayerWon();
    });
},
    GivePermissionTopPlayerToPlay()
    {
        EndOfTurn.ShowTopPlayerAction();
        EndOfTurn.ShowTopPlayerEndOfTurnButton();
        EndOfTurn.HideBottomPlayerAction();
        EndOfTurn.HideBottomPlayerEndOfTurnButton();

    },
    GivePermissionBottomPlayerToPlay()
    {
        EndOfTurn.ShowBottomPlayerAction();
        EndOfTurn.ShowBottomPlayerEndOfTurnButton();
        EndOfTurn.HideTopPlayerAction();
        EndOfTurn.HideTopPlayerEndOfTurnButton();

    },
    GivePermissionToHideTopAndBottomAction()
    {
        EndOfTurn.HideTopPlayerAction();
        EndOfTurn.HideBottomPlayerAction();
    },
    GivePermissionToHideTopAndBottomEndOfurnButton()
    {
        EndOfTurn.HideTopPlayerEndOfTurnButton();
        EndOfTurn.HideBottomPlayerEndOfTurnButton();
    },
    HideTopPlayerEndOfTurnButton()
    {
        EndOfTurn._buttonEndOfTurnTop.style.visibility = "hidden";
    },
    HideBottomPlayerEndOfTurnButton()
    {
        EndOfTurn._buttonEndOfTurnBottom.style.visibility = "hidden";
    },
    HideTopPlayerAction()
    {
    TopPlayerHand._buttonDiscardTopPlayerCard1.style.visibility = "hidden";
    TopPlayerHand._buttonDiscardTopPlayerCard2.style.visibility = "hidden";
    TopPlayerHand._buttonDiscardTopPlayerCard3.style.visibility = "hidden";
    TopPlayerHand._buttonDiscardTopPlayerCard4.style.visibility = "hidden";
    TopPickUpCard._buttonPickUpTopPlayerCard1.style.visibility = "hidden";
    TopPickUpCard._buttonPickUpTopPlayerCard2.style.visibility = "hidden";
    TopPickUpCard._buttonPickUpTopPlayerCard3.style.visibility = "hidden";
    TopPickUpCard._buttonPickUpTopPlayerCard4.style.visibility = "hidden";
    },
    HideBottomPlayerAction()
    {
    BottomPlayerHand._buttonDiscardBottomPlayerCard1.style.visibility = "hidden";
    BottomPlayerHand._buttonDiscardBottomPlayerCard2.style.visibility = "hidden";
    BottomPlayerHand._buttonDiscardBottomPlayerCard3.style.visibility = "hidden";
    BottomPlayerHand._buttonDiscardBottomPlayerCard4.style.visibility = "hidden";
    BottomPickUpCard._buttonPickUpBottomPlayerCard1.style.visibility = "hidden";
    BottomPickUpCard._buttonPickUpBottomPlayerCard2.style.visibility = "hidden";
    BottomPickUpCard._buttonPickUpBottomPlayerCard3.style.visibility = "hidden";
    BottomPickUpCard._buttonPickUpBottomPlayerCard4.style.visibility = "hidden";
    },

    ShowTopPlayerAction()
    {
    TopPlayerHand._buttonDiscardTopPlayerCard1.style.visibility = "visible";
    TopPlayerHand._buttonDiscardTopPlayerCard2.style.visibility = "visible";
    TopPlayerHand._buttonDiscardTopPlayerCard3.style.visibility = "visible";
    TopPlayerHand._buttonDiscardTopPlayerCard4.style.visibility = "visible";
    TopPickUpCard._buttonPickUpTopPlayerCard1.style.visibility = "visible";
    TopPickUpCard._buttonPickUpTopPlayerCard2.style.visibility = "visible";
    TopPickUpCard._buttonPickUpTopPlayerCard3.style.visibility = "visible";
    TopPickUpCard._buttonPickUpTopPlayerCard4.style.visibility = "visible";
    },

    ShowBottomPlayerAction()
    {
    BottomPlayerHand._buttonDiscardBottomPlayerCard1.style.visibility = "visible";
    BottomPlayerHand._buttonDiscardBottomPlayerCard2.style.visibility = "visible";
    BottomPlayerHand._buttonDiscardBottomPlayerCard3.style.visibility = "visible";
    BottomPlayerHand._buttonDiscardBottomPlayerCard4.style.visibility = "visible";
    BottomPickUpCard._buttonPickUpBottomPlayerCard1.style.visibility = "visible";
    BottomPickUpCard._buttonPickUpBottomPlayerCard2.style.visibility = "visible";
    BottomPickUpCard._buttonPickUpBottomPlayerCard3.style.visibility = "visible";
    BottomPickUpCard._buttonPickUpBottomPlayerCard4.style.visibility = "visible";
    },
    GivePermissionToShowTopAndBottomEndOfurnButton()
    {
        EndOfTurn.ShowTopPlayerEndOfTurnButton();
        EndOfTurn.ShowBottomPlayerEndOfTurnButton();
    },
    ShowTopPlayerEndOfTurnButton()
    {
        EndOfTurn._buttonEndOfTurnTop.style.visibility = "visible";
    },
    ShowBottomPlayerEndOfTurnButton()
    {
        EndOfTurn._buttonEndOfTurnBottom.style.visibility = "visible";
    }

   
};