var FamilleBoard ={
    _captionFamilleAcquiredCaptionBottom: document.querySelector("#famille-acquired-caption-bottom"),
    _captionFamilleAcquiredCaptionTop: document.querySelector("#famille-acquired-caption-top"),

    _topPlayerFamilleRankA: document.querySelector("#top-player-famille-rank-A"),
    _topPlayerFamilleRank2: document.querySelector("#top-player-famille-rank-2"),
    _topPlayerFamilleRank3: document.querySelector("#top-player-famille-rank-3"),
    _topPlayerFamilleRank4: document.querySelector("#top-player-famille-rank-4"),
    _topPlayerFamilleRank5: document.querySelector("#top-player-famille-rank-5"),
    _topPlayerFamilleRank6: document.querySelector("#top-player-famille-rank-6"),
    _topPlayerFamilleRank7: document.querySelector("#top-player-famille-rank-7"),
    _topPlayerFamilleRank8: document.querySelector("#top-player-famille-rank-8"),
    _topPlayerFamilleRank9: document.querySelector("#top-player-famille-rank-9"),
    _topPlayerFamilleRankT: document.querySelector("#top-player-famille-rank-T"),
    _topPlayerFamilleRankJ: document.querySelector("#top-player-famille-rank-J"),
    _topPlayerFamilleRankQ: document.querySelector("#top-player-famille-rank-Q"),
    _topPlayerFamilleRankK: document.querySelector("#top-player-famille-rank-K"),

    _bottomPlayerFamilleRankA: document.querySelector("#bottom-player-famille-rank-A"),
    _bottomPlayerFamilleRank2: document.querySelector("#bottom-player-famille-rank-2"),
    _bottomPlayerFamilleRank3: document.querySelector("#bottom-player-famille-rank-3"),
    _bottomPlayerFamilleRank4: document.querySelector("#bottom-player-famille-rank-4"),
    _bottomPlayerFamilleRank5: document.querySelector("#bottom-player-famille-rank-5"),
    _bottomPlayerFamilleRank6: document.querySelector("#bottom-player-famille-rank-6"),
    _bottomPlayerFamilleRank7: document.querySelector("#bottom-player-famille-rank-7"),
    _bottomPlayerFamilleRank8: document.querySelector("#bottom-player-famille-rank-8"),
    _bottomPlayerFamilleRank9: document.querySelector("#bottom-player-famille-rank-9"),
    _bottomPlayerFamilleRankT: document.querySelector("#bottom-player-famille-rank-T"),
    _bottomPlayerFamilleRankJ: document.querySelector("#bottom-player-famille-rank-J"),
    _bottomPlayerFamilleRankQ: document.querySelector("#bottom-player-famille-rank-Q"),
    _bottomPlayerFamilleRankK: document.querySelector("#bottom-player-famille-rank-K"),

    _combinationRankA: 1,
    _combinationRank2: 2,
    _combinationRank3: 3,
    _combinationRank4: 4,
    _combinationRank5: 5,
    _combinationRank6: 6,
    _combinationRank7: 7,
    _combinationRank8: 8,
    _combinationRank9: 9,
    _combinationRankT: 10,
    _combinationRankJ: 11,
    _combinationRankQ: 12,
    _combinationRankK: 13,

    _counterTopFamilleBoard: 0,
    _counterBottomFamilleBoard: 0,
    _counterAllFamilleBoard: 0,
    _numberMaximalCombinationFamille: 12,
    _scoreForTheWin: 7,

    _timerTop: 0,
    _timerBottom: 0,
    _autoCounterTopPlayerFamille: 0,
    _botAITimer: 1000,
    ClearAutoCounterTopPlayerFamille()
    {
        FamilleBoard._autoCounterTopPlayerFamille = null;
        clearInterval(FamilleBoard._timerTop);
    },
    ClearAutoCounterBottomPlayerFamille()
    {
        FamilleBoard._autoCounterTopPlayerFamille = null;
        clearInterval(FamilleBoard._timerBottom);
    },
    ShowFamilleBoard()
    {
         // caption header Famille acquired
        var captionFamilleAcquiredCaptionBottomText = "Famille Acquired = " + "0";
        FamilleBoard._captionFamilleAcquiredCaptionBottom.textContent = captionFamilleAcquiredCaptionBottomText;

        var captionFamilleAcquiredCaptionTopText = "Famille Acquired = " + "0";
        FamilleBoard._captionFamilleAcquiredCaptionTop.textContent = captionFamilleAcquiredCaptionTopText;

        // Top Player Famille acquired
        FamilleBoard._topPlayerFamilleRankA.textContent = "A";
        FamilleBoard._topPlayerFamilleRank2.textContent = "2";
        FamilleBoard._topPlayerFamilleRank3.textContent = "3";
        FamilleBoard._topPlayerFamilleRank4.textContent = "4";
        FamilleBoard._topPlayerFamilleRank5.textContent = "5";
        FamilleBoard._topPlayerFamilleRank6.textContent = "6";
        FamilleBoard._topPlayerFamilleRank7.textContent = "7";
        FamilleBoard._topPlayerFamilleRank8.textContent = "8";
        FamilleBoard._topPlayerFamilleRank9.textContent = "9";
        FamilleBoard._topPlayerFamilleRankT.textContent = "T";
        FamilleBoard._topPlayerFamilleRankJ.textContent = "J";
        FamilleBoard._topPlayerFamilleRankQ.textContent = "Q";
        FamilleBoard._topPlayerFamilleRankK.textContent = "K";

         // Bottom Player Famille acquired
        FamilleBoard._bottomPlayerFamilleRankA.textContent = "A";
        FamilleBoard._bottomPlayerFamilleRank2.textContent = "2";
        FamilleBoard._bottomPlayerFamilleRank3.textContent = "3";
        FamilleBoard._bottomPlayerFamilleRank4.textContent = "4";
        FamilleBoard._bottomPlayerFamilleRank5.textContent = "5";
        FamilleBoard._bottomPlayerFamilleRank6.textContent = "6";
        FamilleBoard._bottomPlayerFamilleRank7.textContent = "7";
        FamilleBoard._bottomPlayerFamilleRank8.textContent = "8";
        FamilleBoard._bottomPlayerFamilleRank9.textContent = "9";
        FamilleBoard._bottomPlayerFamilleRankT.textContent = "T";
        FamilleBoard._bottomPlayerFamilleRankJ.textContent = "J";
        FamilleBoard._bottomPlayerFamilleRankQ.textContent = "Q";
        FamilleBoard._bottomPlayerFamilleRankK.textContent = "K"; 
    },
    AutoAddANewFamilleToTopPlayerFamilleBoard()
    {
            var cardCombinationFamille =13;

            FamilleBoard._timerTop =   setInterval(function()
            {
                // random Combination between 1 and 13
               FamilleBoard.AddANewFamilleToTopPlayerFamilleBoard(Math.floor(Math.random()*cardCombinationFamille)+1);
               EndOfGame.CheckIfTopPlayerWon();
            },FamilleBoard._botAITimer);    
    },
    AutoAddANewFamilleToBottomPlayerFamilleBoard()
    {
            var cardCombinationFamille =13;

            FamilleBoard._timerBottom=   setInterval(function()
            {
                // random Combination between 1 and 13
               FamilleBoard.AddANewFamilleToBottomPlayerFamilleBoard(Math.floor(Math.random()*cardCombinationFamille)+1);
               EndOfGame.CheckIfBottomPlayerWon();
            },FamilleBoard._botAITimer);   
    },
    AddANewFamilleToTopPlayerFamilleBoard(combination)
    {
    var cardHandPosition1 =[Carte._graphicAs];
    cardHandPosition1.push(Carte._graphic2s);

    var cardHandPosition2 =[Carte._graphicAh];
    cardHandPosition2.push(Carte._graphic2h);

    var cardHandPosition3 =[Carte._graphicAd];
    cardHandPosition3.push(Carte._graphic2d);

    var cardHandPosition4 =[Carte._graphicAc];
    cardHandPosition4.push(Carte._graphic2c);
    
    switch(combination)
    {
        case FamilleBoard._combinationRankA:
            if(Carte._positionAs == CardPosition._startingCardDeck1 && Carte._positionAh == CardPosition._startingCardDeck2 && Carte._positionAd == CardPosition._startingCardDeck3 && Carte._positionAc == CardPosition._startingCardDeck4)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamilleA], Carte._cardAllHeartsSuit[Carte._indexFamilleA],     Carte._cardAllDiamondsSuit[Carte._indexFamilleA], Carte._cardAllClubsSuit[Carte._indexFamilleA]);
                FamilleBoard._topPlayerFamilleRankA.textContent = "A";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCardsAFromTheGame();
            }
            break;
        case FamilleBoard._combinationRank2:
            if(Carte._position2s == CardPosition._startingCardDeck5 && Carte._position2h == CardPosition._startingCardDeck6 && Carte._position2d == CardPosition._startingCardDeck7 && Carte._position2c == CardPosition._startingCardDeck8)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille2], Carte._cardAllHeartsSuit[Carte._indexFamille2], Carte._cardAllDiamondsSuit[Carte._indexFamille2], Carte._cardAllClubsSuit[Carte._indexFamille2]);
                FamilleBoard._topPlayerFamilleRank2.textContent = "2";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCards2FromTheGame();
            }
            break;
            
        case FamilleBoard._combinationRank3:
            if(Carte._position3s == CardPosition._startingCardDeck9 && Carte._position3h == CardPosition._startingCardDeck10 && Carte._position3d == CardPosition._startingCardDeck11 && Carte._position3c == CardPosition._startingCardDeck12)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille3], Carte._cardAllHeartsSuit[Carte._indexFamille3], Carte._cardAllDiamondsSuit[Carte._indexFamille3], Carte._cardAllClubsSuit[Carte._indexFamille3]);
                FamilleBoard._topPlayerFamilleRank3.textContent = "3";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCards3FromTheGame();
            }
            break;

        case FamilleBoard._combinationRank4:
            if(Carte._position4s == CardPosition._startingCardDeck13 && Carte._position4h == CardPosition._startingCardDeck14 && Carte._position4d == CardPosition._startingCardDeck15 && Carte._position4c == CardPosition._startingCardDeck16)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille4], Carte._cardAllHeartsSuit[Carte._indexFamille4], Carte._cardAllDiamondsSuit[Carte._indexFamille4], Carte._cardAllClubsSuit[Carte._indexFamille4]);
                FamilleBoard._topPlayerFamilleRank4.textContent = "4";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCards4FromTheGame();
            }
            break;
        case FamilleBoard._combinationRank5:
            if(Carte._position5s == CardPosition._startingCardDeck17 && Carte._position5h == CardPosition._startingCardDeck18 && Carte._position5d == CardPosition._startingCardDeck19 && Carte._position5c == CardPosition._startingCardDeck20)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille5], Carte._cardAllHeartsSuit[Carte._indexFamille5], Carte._cardAllDiamondsSuit[Carte._indexFamille5], Carte._cardAllClubsSuit[Carte._indexFamille5]);
                FamilleBoard._topPlayerFamilleRank5.textContent = "5";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCards5FromTheGame();
            }
            break;
        case FamilleBoard._combinationRank6:
            if(Carte._position6s == CardPosition._startingCardDeck21 && Carte._position6h == CardPosition._startingCardDeck22 && Carte._position6d == CardPosition._startingCardDeck23 && Carte._position6c == CardPosition._startingCardDeck24)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille6], Carte._cardAllHeartsSuit[Carte._indexFamille6], Carte._cardAllDiamondsSuit[Carte._indexFamille6], Carte._cardAllClubsSuit[Carte._indexFamille6]);
                FamilleBoard._topPlayerFamilleRank6.textContent = "6";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCards6FromTheGame();
            }
            break;
        case FamilleBoard._combinationRank7:
            if(Carte._position7s == CardPosition._startingCardDeck25 && Carte._position7h == CardPosition._startingCardDeck26 && Carte._position7d == CardPosition._startingCardDeck27 && Carte._position7c == CardPosition._startingCardDeck28)
            {
            BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille7], Carte._cardAllHeartsSuit[Carte._indexFamille7], Carte._cardAllDiamondsSuit[Carte._indexFamille7], Carte._cardAllClubsSuit[Carte._indexFamille7]);
            FamilleBoard._topPlayerFamilleRank7.textContent = "7";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            Dealer.RemoveAllCards7FromTheGame();
            }
            break;
        case FamilleBoard._combinationRank8:
            if(Carte._position8s == CardPosition._startingCardDeck29 && Carte._position8h == CardPosition._startingCardDeck30 && Carte._position8d == CardPosition._startingCardDeck31 && Carte._position8c == CardPosition._startingCardDeck32)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille8], Carte._cardAllHeartsSuit[Carte._indexFamille8], Carte._cardAllDiamondsSuit[Carte._indexFamille8], Carte._cardAllClubsSuit[Carte._indexFamille8]);
                FamilleBoard._topPlayerFamilleRank8.textContent = "8";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCards8FromTheGame();
            }
            break;
        case FamilleBoard._combinationRank9:
            if(Carte._position9s == CardPosition._startingCardDeck33 && Carte._position9h == CardPosition._startingCardDeck34 && Carte._position9d == CardPosition._startingCardDeck35 && Carte._position9c == CardPosition._startingCardDeck36)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille9], Carte._cardAllHeartsSuit[Carte._indexFamille9], Carte._cardAllDiamondsSuit[Carte._indexFamille9], Carte._cardAllClubsSuit[Carte._indexFamille9]);
                FamilleBoard._topPlayerFamilleRank9.textContent = "9";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCards9FromTheGame();
            }
            break;
        case FamilleBoard._combinationRankT:
            if(Carte._positionTs == CardPosition._startingCardDeck37 && Carte._positionTh == CardPosition._startingCardDeck38 && Carte._positionTd == CardPosition._startingCardDeck39 && Carte._positionTc == CardPosition._startingCardDeck40)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamilleT], Carte._cardAllHeartsSuit[Carte._indexFamilleT], Carte._cardAllDiamondsSuit[Carte._indexFamilleT], Carte._cardAllClubsSuit[Carte._indexFamilleT]);
                FamilleBoard._topPlayerFamilleRankT.textContent = "T";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCardsTFromTheGame();
            }
            break;
        case FamilleBoard._combinationRankJ:
            if(Carte._positionJs == CardPosition._startingCardDeck41 && Carte._positionJh == CardPosition._startingCardDeck42 && Carte._positionJd == CardPosition._startingCardDeck43 && Carte._positionJc == CardPosition._startingCardDeck44)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamilleJ], Carte._cardAllHeartsSuit[Carte._indexFamilleJ], Carte._cardAllDiamondsSuit[Carte._indexFamilleJ], Carte._cardAllClubsSuit[Carte._indexFamilleJ]);
                FamilleBoard._topPlayerFamilleRankJ.textContent = "J";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCardsJFromTheGame();
            }
            break;
        case FamilleBoard._combinationRankQ:
            if(Carte._positionQs == CardPosition._startingCardDeck45 && Carte._positionQh == CardPosition._startingCardDeck46 && Carte._positionQd == CardPosition._startingCardDeck47 && Carte._positionQc == CardPosition._startingCardDeck48)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamilleQ], Carte._cardAllHeartsSuit[Carte._indexFamilleQ], Carte._cardAllDiamondsSuit[Carte._indexFamilleQ], Carte._cardAllClubsSuit[Carte._indexFamilleQ]);
                FamilleBoard._topPlayerFamilleRankQ.textContent = "Q";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCardsQFromTheGame();
            }
            break;
        case FamilleBoard._combinationRankK:
            if(Carte._positionKs == CardPosition._startingCardDeck49 && Carte._positionKh == CardPosition._startingCardDeck50 && Carte._positionKd == CardPosition._startingCardDeck51 && Carte._positionKc == CardPosition._startingCardDeck52)
            {
                BoardCard.ShowAndUpdateTopPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamilleK], Carte._cardAllHeartsSuit[Carte._indexFamilleK], Carte._cardAllDiamondsSuit[Carte._indexFamilleK], Carte._cardAllClubsSuit[Carte._indexFamilleK]);
                FamilleBoard._topPlayerFamilleRankK.textContent = "K";
                FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
                Dealer.RemoveAllCardsKFromTheGame();
            }
            break;   
        default:break;
    }

    },
    AddANewFamilleToBottomPlayerFamilleBoard(combination)
{
    switch(combination)
    {
        case FamilleBoard._combinationRankA:
            if(Carte._positionAs == CardPosition._startingCardDeck1 && Carte._positionAh == CardPosition._startingCardDeck2 && Carte._positionAd == CardPosition._startingCardDeck3 && Carte._positionAc == CardPosition._startingCardDeck4)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamilleA], Carte._cardAllHeartsSuit[Carte._indexFamilleA], Carte._cardAllDiamondsSuit[Carte._indexFamilleA], Carte._cardAllClubsSuit[Carte._indexFamilleA]);
                FamilleBoard._bottomPlayerFamilleRankA.textContent = "A";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCardsAFromTheGame();
            }
            break;
        case FamilleBoard._combinationRank2:
            if(Carte._position2s == CardPosition._startingCardDeck5 && Carte._position2h == CardPosition._startingCardDeck6 && Carte._position2d == CardPosition._startingCardDeck7 && Carte._position2c == CardPosition._startingCardDeck8)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille2], Carte._cardAllHeartsSuit[Carte._indexFamille2], Carte._cardAllDiamondsSuit[Carte._indexFamille2], Carte._cardAllClubsSuit[Carte._indexFamille2]);
                FamilleBoard._bottomPlayerFamilleRank2.textContent = "2";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCards2FromTheGame();
             }
            break;
        case FamilleBoard._combinationRank3:
            if(Carte._position3s == CardPosition._startingCardDeck9 && Carte._position3h == CardPosition._startingCardDeck10 && Carte._position3d == CardPosition._startingCardDeck11 && Carte._position3c == CardPosition._startingCardDeck12)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille3], Carte._cardAllHeartsSuit[Carte._indexFamille3], Carte._cardAllDiamondsSuit[Carte._indexFamille3], Carte._cardAllClubsSuit[Carte._indexFamille3]);
                FamilleBoard._bottomPlayerFamilleRank3.textContent = "3";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCards3FromTheGame();
            }
            break;
        case FamilleBoard._combinationRank4:
            if(Carte._position4s == CardPosition._startingCardDeck13 && Carte._position4h == CardPosition._startingCardDeck14 && Carte._position4d == CardPosition._startingCardDeck15 && Carte._position4c == CardPosition._startingCardDeck16)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille4], Carte._cardAllHeartsSuit[Carte._indexFamille4], Carte._cardAllDiamondsSuit[Carte._indexFamille4], Carte._cardAllClubsSuit[Carte._indexFamille4]);
                FamilleBoard._bottomPlayerFamilleRank4.textContent = "4";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCards4FromTheGame();
            }
            break;
        case FamilleBoard._combinationRank5:
            if(Carte._position5s == CardPosition._startingCardDeck17 && Carte._position5h == CardPosition._startingCardDeck18 && Carte._position5d == CardPosition._startingCardDeck19 && Carte._position5c == CardPosition._startingCardDeck20)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille5], Carte._cardAllHeartsSuit[Carte._indexFamille5], Carte._cardAllDiamondsSuit[Carte._indexFamille5], Carte._cardAllClubsSuit[Carte._indexFamille5]);
                FamilleBoard._bottomPlayerFamilleRank5.textContent = "5";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCards5FromTheGame();
            }
            break;
        case FamilleBoard._combinationRank6:
            if(Carte._position6s == CardPosition._startingCardDeck21 && Carte._position6h == CardPosition._startingCardDeck22 && Carte._position6d == CardPosition._startingCardDeck23 && Carte._position6c == CardPosition._startingCardDeck24)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille6], Carte._cardAllHeartsSuit[Carte._indexFamille6], Carte._cardAllDiamondsSuit[Carte._indexFamille6], Carte._cardAllClubsSuit[Carte._indexFamille6]);
                FamilleBoard._bottomPlayerFamilleRank6.textContent = "6";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCards6FromTheGame();
            }
            break;
        case FamilleBoard._combinationRank7:
            if(Carte._position7s == CardPosition._startingCardDeck25 && Carte._position7h == CardPosition._startingCardDeck26 && Carte._position7d == CardPosition._startingCardDeck27 && Carte._position7c == CardPosition._startingCardDeck28)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille7], Carte._cardAllHeartsSuit[Carte._indexFamille7], Carte._cardAllDiamondsSuit[Carte._indexFamille7], Carte._cardAllClubsSuit[Carte._indexFamille7]);
                FamilleBoard._bottomPlayerFamilleRank7.textContent = "7";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCards7FromTheGame();
            }
            break;
        case FamilleBoard._combinationRank8:
            if(Carte._position8s == CardPosition._startingCardDeck29 && Carte._position8h == CardPosition._startingCardDeck30 && Carte._position8d == CardPosition._startingCardDeck31 && Carte._position8c == CardPosition._startingCardDeck32)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille8], Carte._cardAllHeartsSuit[Carte._indexFamille8], Carte._cardAllDiamondsSuit[Carte._indexFamille8], Carte._cardAllClubsSuit[Carte._indexFamille8]);
                FamilleBoard._bottomPlayerFamilleRank8.textContent = "8";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCards8FromTheGame();
            }
            break;
        case FamilleBoard._combinationRank9:
            if(Carte._position9s == CardPosition._startingCardDeck33 && Carte._position9h == CardPosition._startingCardDeck34 && Carte._position9d == CardPosition._startingCardDeck35 && Carte._position9c == CardPosition._startingCardDeck36)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamille9], Carte._cardAllHeartsSuit[Carte._indexFamille9], Carte._cardAllDiamondsSuit[Carte._indexFamille9], Carte._cardAllClubsSuit[Carte._indexFamille9]);
                FamilleBoard._bottomPlayerFamilleRank9.textContent = "9";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCards9FromTheGame();
            }
            break;
        case FamilleBoard._combinationRankT:
            if(Carte._positionTs == CardPosition._startingCardDeck37 && Carte._positionTh == CardPosition._startingCardDeck38 && Carte._positionTd == CardPosition._startingCardDeck39 && Carte._positionTc == CardPosition._startingCardDeck40)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamilleT], Carte._cardAllHeartsSuit[Carte._indexFamilleT], Carte._cardAllDiamondsSuit[Carte._indexFamilleT], Carte._cardAllClubsSuit[Carte._indexFamilleT]);
                FamilleBoard._bottomPlayerFamilleRankT.textContent = "T";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCardsTFromTheGame();
            }
            break;
        case FamilleBoard._combinationRankJ:
            if(Carte._positionJs == CardPosition._startingCardDeck41 && Carte._positionJh == CardPosition._startingCardDeck42 && Carte._positionJd == CardPosition._startingCardDeck43 && Carte._positionJc == CardPosition._startingCardDeck44)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamilleJ], Carte._cardAllHeartsSuit[Carte._indexFamilleJ], Carte._cardAllDiamondsSuit[Carte._indexFamilleJ], Carte._cardAllClubsSuit[Carte._indexFamilleJ]);
                FamilleBoard._bottomPlayerFamilleRankJ.textContent = "J";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                 Dealer.RemoveAllCardsJFromTheGame();
            }
            break;
        case FamilleBoard._combinationRankQ:
            if(Carte._positionQs == CardPosition._startingCardDeck45 && Carte._positionQh == CardPosition._startingCardDeck46 && Carte._positionQd == CardPosition._startingCardDeck47 && Carte._positionQc == CardPosition._startingCardDeck48)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamilleQ], Carte._cardAllHeartsSuit[Carte._indexFamilleQ], Carte._cardAllDiamondsSuit[Carte._indexFamilleQ], Carte._cardAllClubsSuit[Carte._indexFamilleQ]);
                FamilleBoard._bottomPlayerFamilleRankQ.textContent = "Q";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCardsQFromTheGame();
            }
            break;
        case FamilleBoard._combinationRankK:
            if(Carte._positionKs == CardPosition._startingCardDeck49 && Carte._positionKh == CardPosition._startingCardDeck50 && Carte._positionKd == CardPosition._startingCardDeck51 && Carte._positionKc == CardPosition._startingCardDeck52)
            {
                BottomPlayerHand.ShowAndUpdateAllBottomPlayerHandCard(Carte._cardAllSpadesSuit[Carte._indexFamilleK], Carte._cardAllHeartsSuit[Carte._indexFamilleK], Carte._cardAllDiamondsSuit[Carte._indexFamilleK], Carte._cardAllClubsSuit[Carte._indexFamilleK]);
                FamilleBoard._bottomPlayerFamilleRankK.textContent = "K";
                FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
                Dealer.RemoveAllCardsKFromTheGame();
            }
            break;   
        default:break;
    }
    },
    ClearTopPlayerFamilleBoard()
    {
        FamilleBoard._topPlayerFamilleRankA.textContent = "";
        FamilleBoard._topPlayerFamilleRank2.textContent = "";
        FamilleBoard._topPlayerFamilleRank3.textContent = "";
        FamilleBoard._topPlayerFamilleRank4.textContent = "";
        FamilleBoard._topPlayerFamilleRank5.textContent = "";
        FamilleBoard._topPlayerFamilleRank6.textContent = "";
        FamilleBoard._topPlayerFamilleRank7.textContent = "";
        FamilleBoard._topPlayerFamilleRank8.textContent = "";
        FamilleBoard._topPlayerFamilleRank9.textContent = "";
        FamilleBoard._topPlayerFamilleRankT.textContent = "";
        FamilleBoard._topPlayerFamilleRankJ.textContent = "";
        FamilleBoard._topPlayerFamilleRankQ.textContent = "";
        FamilleBoard._topPlayerFamilleRankK.textContent = "";
    },
    ClearBottomPlayerFamilleBoard()
    {
        FamilleBoard._bottomPlayerFamilleRankA.textContent = "";
        FamilleBoard._bottomPlayerFamilleRank2.textContent = "";
        FamilleBoard._bottomPlayerFamilleRank3.textContent = "";
        FamilleBoard._bottomPlayerFamilleRank4.textContent = "";
        FamilleBoard._bottomPlayerFamilleRank5.textContent = "";
        FamilleBoard._bottomPlayerFamilleRank6.textContent = "";
        FamilleBoard._bottomPlayerFamilleRank7.textContent = "";
        FamilleBoard._bottomPlayerFamilleRank8.textContent = "";
        FamilleBoard._bottomPlayerFamilleRank9.textContent = "";
        FamilleBoard._bottomPlayerFamilleRankT.textContent = "";
        FamilleBoard._bottomPlayerFamilleRankJ.textContent = "";
        FamilleBoard._bottomPlayerFamilleRankQ.textContent = "";
        FamilleBoard._bottomPlayerFamilleRankK.textContent = "";
    },
    ClearBothPlayerFamilleBoard()
    {
        FamilleBoard.ClearTopPlayerFamilleBoard();
        FamilleBoard.ClearBottomPlayerFamilleBoard();
    }
};