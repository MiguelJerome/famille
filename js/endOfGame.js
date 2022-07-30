var EndOfGame = {

    StartEndOfGame()
    {

    },
 
    CheckIfTopPlayerWon()
    {
       if( FamilleBoard._counterTopFamilleBoard >= FamilleBoard._scoreForTheWin )
       {
        GameMessageEvent.ClearShowMessageForPlayerGoInterval();
            GameMessageEvent.ClearShowMessageForPlayerGoIntervalGet7();
        EndOfTurn.GivePermissionToHideTopAndBottomEndOfurnButton();
        EndOfTurn.GivePermissionToHideTopAndBottomAction();
        BoardCard.HideAllBoardCards();
            GameMessageEvent.ShowMessageTopPlayerWon();
            GameMessageEvent.ClearShowMessageForPlayerGoIntervalGet7();
            GameMessageEvent._intervalGameInPlay = null;
            GameMessageEvent._intervalGameInPlayGet7 =null;
            GameMessageEvent.ClearShowMessageForPlayerGoInterval();
            FamilleBoard.ClearAutoCounterTopPlayerFamille();
            FamilleBoard.ClearAutoCounterBottomPlayerFamille();
            
            
            
       }
    },
    CheckIfBottomPlayerWon()
    {
        if( FamilleBoard._counterBottomFamilleBoard >= FamilleBoard._scoreForTheWin )
        {
            GameMessageEvent.ClearShowMessageForPlayerGoInterval();
            GameMessageEvent.ClearShowMessageForPlayerGoIntervalGet7();
            EndOfTurn.GivePermissionToHideTopAndBottomEndOfurnButton();
            EndOfTurn.GivePermissionToHideTopAndBottomAction();
            BoardCard.HideAllBoardCards();
             GameMessageEvent.ShowMessageBottomPlayerWon();
             GameMessageEvent._intervalGameInPlay = null;
             GameMessageEvent._intervalGameInPlayGet7 = null;
             GameMessageEvent.ClearShowMessageForPlayerGoIntervalGet7();
             GameMessageEvent.ClearShowMessageForPlayerGoInterval();
             
             FamilleBoard.ClearAutoCounterTopPlayerFamille();
             FamilleBoard.ClearAutoCounterBottomPlayerFamille();
             
             
        }
    }

};