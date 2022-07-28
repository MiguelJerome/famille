var StartRestartGame ={
    RunStartRestartGame()
    {
        FamilleBoard.ClearBothPlayerFamilleBoard();
       FamilleAcquiredCaption.ClearBothThenShowUpdatedBottomFamilleAcquiredCaption();
       GameMessageEvent.ClearMessageBox();
       BoardCard.ShowAllBoardCard1(Carte._graphic2c, Carte._graphic4h, Carte._graphic5s, Carte._graphicAs);
       
       TopPlayerTurn.ShowThatIsTopPlayerTurn();
    }
}