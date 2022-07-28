var GameInt ={
    
    RunGameInit()
    {
        EndOfTurn.HideTopPlayerAction();
        EndOfTurn.HideBottomPlayerAction();
    var captionFamilleAcquiredCaptionTopText = "Famille Acquired = " + FamilleBoard._counterTopFamilleBoard;
    FamilleBoard._captionFamilleAcquiredCaptionTop.textContent = captionFamilleAcquiredCaptionTopText;

    var captionFamilleAcquiredCaptionBottomText = "Famille Acquired = " + FamilleBoard._counterBottomFamilleBoard;
    FamilleBoard._captionFamilleAcquiredCaptionBottom.textContent = captionFamilleAcquiredCaptionBottomText;
    GameMessageEvent.ShowPressStart();
    DeckCard.ShowStartingDeckCartelog();
   // BoardCard.ShowAllBoardCardPreviewTesting();
    }
};