var TopPickUpCard ={
    _buttonPickUpTopPlayerCard1: document.querySelector("#pick-up-top-player-card1"),
    _buttonPickUpTopPlayerCard2: document.querySelector("#pick-up-top-player-card2"),
    _buttonPickUpTopPlayerCard3: document.querySelector("#pick-up-top-player-card3"),
    _buttonPickUpTopPlayerCard4: document.querySelector("#pick-up-top-player-card4"),
    ShowAndUpdateAllTopPickupCard(boardCard1, boardCard2, boardCard3,  boardCard4)
    {
        var buttonPickUpTopPlayerCard1Text = "Pick-up " + boardCard1;
        TopPickUpCard._buttonPickUpTopPlayerCard1.textContent = buttonPickUpTopPlayerCard1Text;

        var buttonPickUpTopPlayerCard2Text = "Pick-up " + boardCard2;
        TopPickUpCard._buttonPickUpTopPlayerCard2.textContent = buttonPickUpTopPlayerCard2Text;

        var buttonPickUpTopPlayerCard3Text = "Pick-up " + boardCard3 ;
        TopPickUpCard._buttonPickUpTopPlayerCard3.textContent = buttonPickUpTopPlayerCard3Text;

        var buttonPickUpTopPlayerCard4Text = "Pick-up " + boardCard4;
        TopPickUpCard._buttonPickUpTopPlayerCard4.textContent = buttonPickUpTopPlayerCard4Text;
    }
};