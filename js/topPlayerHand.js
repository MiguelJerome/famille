var TopPlayerHand ={
    _buttonDiscardTopPlayerCard1: document.querySelector("#discard-top-player-card1"),
    _buttonDiscardTopPlayerCard2: document.querySelector("#discard-top-player-card2"),
    _buttonDiscardTopPlayerCard3: document.querySelector("#discard-top-player-card3"),
    _buttonDiscardTopPlayerCard4: document.querySelector("#discard-top-player-card4"),

    ShowAndUpdateAllTopPlayerHandCard(topPlayerHand1, topPlayerHand2, topPlayerHand3,  topPlayerHand4)
    {
        var buttonDiscardTopPlayerCard1Text = "Discard " + topPlayerHand1 ;
        TopPlayerHand._buttonDiscardTopPlayerCard1.textContent = buttonDiscardTopPlayerCard1Text;

        var buttonDiscardTopPlayerCard2Text = "Discard " + topPlayerHand2 ;
        TopPlayerHand._buttonDiscardTopPlayerCard2.textContent = buttonDiscardTopPlayerCard2Text;

        var buttonDiscardTopPlayerCard3Text = "Discard " + topPlayerHand3 ;
        TopPlayerHand._buttonDiscardTopPlayerCard3.textContent = buttonDiscardTopPlayerCard3Text;

        var buttonDiscardTopPlayerCard4Text = "Discard " + topPlayerHand4 ;
        TopPlayerHand._buttonDiscardTopPlayerCard4.textContent = buttonDiscardTopPlayerCard4Text;
    }
};