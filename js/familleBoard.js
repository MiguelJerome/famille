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
AddANewFamilleToTopPlayerFamilleBoard(combination)
{
    switch(combination)
    {
        case FamilleBoard._combinationRankA:
            FamilleBoard._topPlayerFamilleRankA.textContent = "A";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank2:
            FamilleBoard._topPlayerFamilleRank2.textContent = "2";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank3:
            FamilleBoard._topPlayerFamilleRank3.textContent = "3";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();;
            break;
        case FamilleBoard._combinationRank4:
            FamilleBoard._topPlayerFamilleRank4.textContent = "4";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank5:
            FamilleBoard._topPlayerFamilleRank5.textContent = "5";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank6:
            FamilleBoard._topPlayerFamilleRank6.textContent = "6";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank7:
            FamilleBoard._topPlayerFamilleRank7.textContent = "7";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank8:
            FamilleBoard._topPlayerFamilleRank8.textContent = "8";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank9:
            FamilleBoard._topPlayerFamilleRank9.textContent = "9";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRankT:
            FamilleBoard._topPlayerFamilleRankT.textContent = "T";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRankJ:
            FamilleBoard._topPlayerFamilleRankJ.textContent = "J";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRankQ:
            FamilleBoard._topPlayerFamilleRankQ.textContent = "Q";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRankK:
            FamilleBoard._topPlayerFamilleRankK.textContent = "K";
            FamilleAcquiredCaption.ShowUpdatedTopFamilleAcquiredCaption();
            break;   
        default:break;
    }

},
AddANewFamilleToBottomPlayerFamilleBoard(combination)
{
    switch(combination)
    {
        case FamilleBoard._combinationRankA:
            FamilleBoard._bottomPlayerFamilleRankA.textContent = "A";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank2:
            FamilleBoard._bottomPlayerFamilleRank2.textContent = "2";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank3:
            FamilleBoard._bottomPlayerFamilleRank3.textContent = "3";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank4:
            FamilleBoard._bottomPlayerFamilleRank4.textContent = "4";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank5:
            FamilleBoard._bottomPlayerFamilleRank5.textContent = "5";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank6:
            FamilleBoard._bottomPlayerFamilleRank6.textContent = "6";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank7:
            FamilleBoard._bottomPlayerFamilleRank7.textContent = "7";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank8:
            FamilleBoard._bottomPlayerFamilleRank8.textContent = "8";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRank9:
            FamilleBoard._bottomPlayerFamilleRank9.textContent = "9";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRankT:
            FamilleBoard._bottomPlayerFamilleRankT.textContent = "T";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRankJ:
            FamilleBoard._bottomPlayerFamilleRankJ.textContent = "J";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRankQ:
            FamilleBoard._bottomPlayerFamilleRankQ.textContent = "Q";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
            break;
        case FamilleBoard._combinationRankK:
            FamilleBoard._bottomPlayerFamilleRankK.textContent = "K";
            FamilleAcquiredCaption.ShowUpdatedBottomFamilleAcquiredCaption();
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