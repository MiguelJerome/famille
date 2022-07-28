var BottomPickUpCard ={

    _buttonPickUpBottomPlayerCard1: document.querySelector("#pick-up-bottom-player-card1"),
    _buttonPickUpBottomPlayerCard2: document.querySelector("#pick-up-bottom-player-card2"),
    _buttonPickUpBottomPlayerCard3: document.querySelector("#pick-up-bottom-player-card3"),
    _buttonPickUpBottomPlayerCard4: document.querySelector("#pick-up-bottom-player-card4"),

    ShowAndUpdateAllBottomPickupCard(boardCard1, boardCard2, boardCard3,  boardCard4)
    {
    var buttonPickUpBottomPlayerCard1Text = "Pick-up " + boardCard1;
    BottomPickUpCard._buttonPickUpBottomPlayerCard1.textContent = buttonPickUpBottomPlayerCard1Text;

    var buttonPickUpBottomPlayerCard2Text = "Pick-up " + boardCard2;
    BottomPickUpCard._buttonPickUpBottomPlayerCard2.textContent = buttonPickUpBottomPlayerCard2Text;

    var buttonPickUpBottomPlayerCard3Text = "Pick-up " + boardCard3;
    BottomPickUpCard._buttonPickUpBottomPlayerCard3.textContent = buttonPickUpBottomPlayerCard3Text;

    var buttonPickUpBottomPlayerCard4Text = "Pick-up " + boardCard4;
    BottomPickUpCard._buttonPickUpBottomPlayerCard4.textContent = buttonPickUpBottomPlayerCard4Text;
    }
};