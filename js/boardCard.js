var BoardCard = {

    _boardCard1: document.querySelector("#board-card1"),
    _boardCard2: document.querySelector("#board-card2"),
    _boardCard3: document.querySelector("#board-card3"),
    _boardCard4: document.querySelector("#board-card4"),

    ShowAllBoardCardPreviewTesting()
    {
          /* Board Card*/
          var boardCard1 = "K♠";
          BoardCard._boardCard1.textContent = boardCard1;
          var boardCard2 = "K❤";
          BoardCard._boardCard2.textContent = boardCard2;
  
          var boardCard3 = "K♦";
          BoardCard._boardCard3.textContent = boardCard3;
  
          var boardCard4 = "K♣";
          BoardCard._boardCard4.textContent = boardCard4;
    },
    HideAllBoardCards()
    {
        BoardCard._boardCard1.style.visibility = "hidden";
        BoardCard._boardCard2.style.visibility = "hidden";
        BoardCard._boardCard3.style.visibility = "hidden";
        BoardCard._boardCard4.style.visibility = "hidden";
    },
    ShowFirstBoardCard(cardGraphic)
    {
        //BoardCard._boardCard1.style.visibility = "visible";
        BoardCard._boardCard1.textContent = cardGraphic;
    },
    ShowSecondBoardCard(cardGraphic)
    {
        //BoardCard._boardCard2.style.visibility = "visible";
        BoardCard._boardCard2.textContent = cardGraphic;
    },
    ShowThirdBoardCard(cardGraphic)
    {
        //BoardCard._boardCard3.style.visibility = "visible";
        BoardCard._boardCard3.textContent = cardGraphic;
    },
    ShowForthBoardCard(cardGraphic)
    {
       // BoardCard._boardCard4.style.visibility = "visible";
        BoardCard._boardCard4.textContent = cardGraphic;
    },
    ShowAllBoardCard1(firstCardGraphic, secondCardGraphic, thirdCardGraphic, forthCardGraphic)
    {
        BoardCard.ShowFirstBoardCard(firstCardGraphic);
        BoardCard.ShowSecondBoardCard(secondCardGraphic);
        BoardCard.ShowThirdBoardCard(thirdCardGraphic);
        BoardCard.ShowForthBoardCard(forthCardGraphic);
        BottomPickUpCard.ShowAndUpdateAllBottomPickupCard(firstCardGraphic,secondCardGraphic,thirdCardGraphic,forthCardGraphic);
        TopPickUpCard.ShowAndUpdateAllTopPickupCard(firstCardGraphic,secondCardGraphic,thirdCardGraphic,forthCardGraphic);

    }


}