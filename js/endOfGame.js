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
            GameMessageEvent.ShowMessageTopPlayerWon();

       }
    },
    CheckIfBottomPlayerWon()
    {
        if( FamilleBoard._counterBottomFamilleBoard >= FamilleBoard._scoreForTheWin )
        {
            EndOfTurn.GivePermissionToHideTopAndBottomEndOfurnButton();
            EndOfTurn.GivePermissionToHideTopAndBottomAction();
             GameMessageEvent.ShowMessageBottomPlayerWon();
        }
    }

};