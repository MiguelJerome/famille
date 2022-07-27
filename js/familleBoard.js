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
    }
};