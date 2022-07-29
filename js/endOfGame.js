var EndOfGame = {

    StartEndOfGame()
    {

    },
 
    CheckIfTopPlayerWon()
    {
       if( FamilleBoard._counterTopFamilleBoard >= FamilleBoard._scoreForTheWin )
       {
        EndOfTurn.GivePermissionToHideTopAndBottomEndOfurnButton();
        EndOfTurn.GivePermissionToHideTopAndBottomAction();
        BoardCard.HideAllBoardCards();
            GameMessageEvent.ShowMessageTopPlayerWon();
            FamilleBoard.ClearAutoCounterTopPlayerFamille();
            FamilleBoard.ClearAutoCounterBottomPlayerFamille();
       }
    },
    CheckIfBottomPlayerWon()
    {
        if( FamilleBoard._counterBottomFamilleBoard >= FamilleBoard._scoreForTheWin )
        {
            EndOfTurn.GivePermissionToHideTopAndBottomEndOfurnButton();
            EndOfTurn.GivePermissionToHideTopAndBottomAction();
            BoardCard.HideAllBoardCards();
             GameMessageEvent.ShowMessageBottomPlayerWon();
             FamilleBoard.ClearAutoCounterTopPlayerFamille();
             FamilleBoard.ClearAutoCounterBottomPlayerFamille();
             
        }
    }

};