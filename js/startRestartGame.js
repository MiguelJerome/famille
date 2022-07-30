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
       
       EndOfTurn.GivePermissionTopPlayerToPlay();
       GameMessageEvent.ClearShowMessageForPlayerGoInterval();
       GameMessageEvent.ClearShowMessageForPlayerGoIntervalGet7();
       FamilleBoard.ClearAutoCounterTopPlayerFamille();
       FamilleBoard.ClearAutoCounterBottomPlayerFamille();
       GameMessageEvent.ShowMessageForBothPlayerGo();
       FamilleBoard.AutoAddANewFamilleToBottomPlayerFamilleBoard();
       FamilleBoard.AutoAddANewFamilleToTopPlayerFamilleBoard();
       EndOfTurn.HideTopPlayerEndOfTurnButton();
       EndOfTurn.HideTopPlayerAction();
       EndOfTurn.ShowBottomPlayerAction();
       EndOfTurn.HideBottomPlayerPickupCard();
    }
}