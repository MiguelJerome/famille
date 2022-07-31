var GameInt ={
    
    RunGameInit()
    {
        Carte.AddAllSpadesSuitToTheArray();
        Carte.AddAllHeartsSuitToTheArray();
        Carte.AddAllDiamondsSuitToTheArray();
        Carte.AddAllClubsSuitToTheArray();
        
        BoardCard.HideAllBoardCards();
        EndOfTurn.GivePermissionToShowTopAndBottomEndOfurnButton();
        GameInt.SetAllCardsToTheirStartingGamePosition();
        EndOfTurn.HideTopPlayerAction();
        EndOfTurn.HideBottomPlayerAction();
    
        var captionFamilleAcquiredCaptionTopText = "Famille Acquired = " + FamilleBoard._counterTopFamilleBoard;
        FamilleBoard._captionFamilleAcquiredCaptionTop.textContent = captionFamilleAcquiredCaptionTopText;

        var captionFamilleAcquiredCaptionBottomText = "Famille Acquired = " + FamilleBoard._counterBottomFamilleBoard;
        FamilleBoard._captionFamilleAcquiredCaptionBottom.textContent = captionFamilleAcquiredCaptionBottomText;
        GameMessageEvent.ShowPressStart();
        EndOfTurn.HideTopPlayerEndOfTurnButton();
        EndOfTurn.HideBottomPlayerEndOfTurnButton();
    },
    SetAllCardsToTheirStartingGamePosition()
    {
        Carte._positionAs = CardPosition._startingCardDeck1,
        Carte._positionAh = CardPosition._startingCardDeck2,
        Carte._positionAd = CardPosition._startingCardDeck3,
        Carte._positionAc = CardPosition._startingCardDeck4,
        Carte._position2s = CardPosition._startingCardDeck5,
        Carte._position2h = CardPosition._startingCardDeck6,
        Carte._position2d = CardPosition._startingCardDeck7,
        Carte._position2c = CardPosition._startingCardDeck8,
        Carte._position3s = CardPosition._startingCardDeck9,
        Carte._position3h = CardPosition._startingCardDeck10,
        Carte._position3d = CardPosition._startingCardDeck11,
        Carte._position3c = CardPosition._startingCardDeck12,
        Carte._position4s = CardPosition._startingCardDeck13,
        Carte._position4h = CardPosition._startingCardDeck14,
        Carte._position4d = CardPosition._startingCardDeck15,
        Carte._position4c = CardPosition._startingCardDeck16,
        Carte._position5s = CardPosition._startingCardDeck17,
        Carte._position5h = CardPosition._startingCardDeck18,
        Carte._position5d = CardPosition._startingCardDeck19,
        Carte._position5c = CardPosition._startingCardDeck20,
        Carte._position6s = CardPosition._startingCardDeck21,
        Carte._position6h = CardPosition._startingCardDeck22,
        Carte._position6d = CardPosition._startingCardDeck23,
        Carte._position6c = CardPosition._startingCardDeck24,
        Carte._position7s = CardPosition._startingCardDeck25,
        Carte._position7h = CardPosition._startingCardDeck26,
        Carte._position7d = CardPosition._startingCardDeck27,
        Carte._position7c = CardPosition._startingCardDeck28,
        Carte._position8s = CardPosition._startingCardDeck29,
        Carte._position8h = CardPosition._startingCardDeck30,
        Carte._position8d = CardPosition._startingCardDeck31,
        Carte._position8c = CardPosition._startingCardDeck32,
        Carte._position9s = CardPosition._startingCardDeck33,
        Carte._position9h = CardPosition._startingCardDeck34,
        Carte._position9d = CardPosition._startingCardDeck35,
        Carte._position9c = CardPosition._startingCardDeck36,
        Carte._positionTs = CardPosition._startingCardDeck37,
        Carte._positionTh = CardPosition._startingCardDeck38,
        Carte._positionTd = CardPosition._startingCardDeck39,
        Carte._positionTc = CardPosition._startingCardDeck40,
        Carte._positionJs = CardPosition._startingCardDeck41,
        Carte._positionJh = CardPosition._startingCardDeck42,
        Carte._positionJd = CardPosition._startingCardDeck43,
        Carte._positionJc = CardPosition._startingCardDeck44,
        Carte._positionQs = CardPosition._startingCardDeck45,
        Carte._positionQh = CardPosition._startingCardDeck46,
        Carte._positionQd = CardPosition._startingCardDeck47,
        Carte._positionQc =  CardPosition._startingCardDeck48,
        Carte._positionKs = CardPosition._startingCardDeck49,
        Carte._positionKh = CardPosition._startingCardDeck50,
        Carte._positionKd = CardPosition._startingCardDeck51,
        Carte._positionKc = CardPosition._startingCardDeck52
    },
    SetAllTheFamilleToTheirStartingGameState()
    {
        FamilleBoard._counterBottomFamilleBoard = 0;
        FamilleBoard._counterTopFamilleBoard = 0;
        FamilleBoard._counterAllFamilleBoard = 0;
    }
};