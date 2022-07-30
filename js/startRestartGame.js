var StartRestartGame ={
    RunStartRestartGame()
    {
        BoardCard.HideAllBoardCards();
        BottomPlayerHand.HideAllBoardCards();
        BoardCard.ShowAllBoardCards();
        BottomPlayerHand.HideAllBoardCards();
        
        GameInt.SetAllCardsToTheirStartingGamePosition();
        EndOfTurn.GivePermissionToShowTopAndBottomEndOfurnButton();
        FamilleBoard.ClearBothPlayerFamilleBoard();
       FamilleAcquiredCaption.ClearBothThenShowUpdatedBottomFamilleAcquiredCaption();
       GameMessageEvent.ClearMessageBox();
       GameMessageEvent.ShowMessageForBothPlayerGo();
       EndOfTurn.GivePermissionTopPlayerToPlay();
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