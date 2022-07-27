var FamilleAcquiredCaption = {

    ShowUpdatedTopFamilleAcquiredCaption()
    {
        FamilleBoard._counterAllFamilleBoard = ++FamilleBoard._counterTopFamilleBoard;
        FamilleBoard._captionFamilleAcquiredCaptionTop.textContent = "Famille Acquired = " + FamilleBoard._counterTopFamilleBoard;
    },
    ShowUpdatedBottomFamilleAcquiredCaption()
    {
        FamilleBoard._counterAllFamilleBoard = ++FamilleBoard._counterBottomFamilleBoard;
        FamilleBoard._captionFamilleAcquiredCaptionBottom.textContent = "Famille Acquired = " + FamilleBoard._counterBottomFamilleBoard;
    },

    ClearThenShowUpdatedTopFamilleAcquiredCaption()
    {
        FamilleBoard._counterAllFamilleBoard = 0;
        FamilleBoard._counterTopFamilleBoard = 0;
        FamilleBoard._captionFamilleAcquiredCaptionTop.textContent = "Famille Acquired = " + FamilleBoard._counterTopFamilleBoard;
    },
    ClearThenShowUpdatedBottomFamilleAcquiredCaption()
    {
        FamilleBoard._counterAllFamilleBoard = 0;
        FamilleBoard._counterBottomFamilleBoard = 0;
        FamilleBoard._captionFamilleAcquiredCaptionBottom.textContent = "Famille Acquired = " + FamilleBoard._counterBottomFamilleBoard;
    },
    ClearBothThenShowUpdatedBottomFamilleAcquiredCaption()
    {
        FamilleAcquiredCaption.ClearThenShowUpdatedTopFamilleAcquiredCaption();
        FamilleAcquiredCaption.ClearThenShowUpdatedBottomFamilleAcquiredCaption();
    }

}