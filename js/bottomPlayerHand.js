var BottomPlayerHand ={

    
    _buttonDiscardBottomPlayerCard1: document.querySelector("#discard-bottom-player-card1"),
    _buttonDiscardBottomPlayerCard2: document.querySelector("#discard-bottom-player-card2"),
    _buttonDiscardBottomPlayerCard3: document.querySelector("#discard-bottom-player-card3"),
    _buttonDiscardBottomPlayerCard4: document.querySelector("#discard-bottom-player-card4"),

    ShowAndUpdateAllBottomPlayerHandCard(bottomPlayerHand1, bottomPlayerHand2, bottomPlayerHand3,  bottomPlayerHand4)
    {
        var buttonDiscardBottomPlayerCard1Text = "Discard " + bottomPlayerHand1 ;
        BottomPlayerHand._buttonDiscardBottomPlayerCard1.textContent = buttonDiscardBottomPlayerCard1Text;

        var buttonDiscardBottomPlayerCard2Text = "Discard " + bottomPlayerHand2 ;
        BottomPlayerHand._buttonDiscardBottomPlayerCard2.textContent = buttonDiscardBottomPlayerCard2Text;

        var buttonDiscardBottomPlayerCard3Text = "Discard " + bottomPlayerHand3 ;
        BottomPlayerHand._buttonDiscardBottomPlayerCard3.textContent = buttonDiscardBottomPlayerCard3Text;

        var buttonDiscardBottomPlayerCard4Text = "Discard " + bottomPlayerHand4 ;
        BottomPlayerHand._buttonDiscardBottomPlayerCard4.textContent = buttonDiscardBottomPlayerCard4Text;
    }
};