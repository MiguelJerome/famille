var StartRestartGame ={
    RunStartRestartGame()
    {
        BoardCard.ShowAllBoardCards();
        GameInt.SetAllCardsToTheirStartingGamePosition();
        EndOfTurn.GivePermissionToShowTopAndBottomEndOfurnButton();
        FamilleBoard.ClearBothPlayerFamilleBoard();
       FamilleAcquiredCaption.ClearBothThenShowUpdatedBottomFamilleAcquiredCaption();
       GameMessageEvent.ClearMessageBox();
       //BoardCard.ShowAllBoardCard1(Carte._graphic2c, Carte._graphic4h, Carte._graphic5s, Carte._graphicAs);

       //TopPlayerTurn.ShowThatIsTopPlayerTurn();
       GameMessageEvent.ShowMessageForBothPlayerGo();
       EndOfTurn.GivePermissionTopPlayerToPlay();
      // TopPlayerHand.ShowAndUpdateAllTopPlayerHandCard(Carte._graphic2c, Carte._graphic4h, Carte._graphic5s, Carte._graphicAs);
      // BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._graphic2c, Carte._graphic4h, Carte._graphic5s, Carte._graphicAs);
       FamilleBoard.ClearAutoCounterTopPlayerFamille();
       FamilleBoard.ClearAutoCounterBottomPlayerFamille();
       FamilleBoard.AutoAddANewFamilleToBottomPlayerFamilleBoard();
       FamilleBoard.AutoAddANewFamilleToTopPlayerFamilleBoard();
       EndOfTurn.HideTopPlayerEndOfTurnButton();
       EndOfTurn.HideTopPlayerAction();
       EndOfTurn.ShowBottomPlayerAction();
       EndOfTurn.HideBottomPlayerPickupCard();

   
    }
}