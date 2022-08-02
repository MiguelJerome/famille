var GameMessageEvent = {
    _messageBoxTopPlayerInfo: document.querySelector("#message-box-who-won-info"),
    _messageBoxBottomPlayerInfo: document.querySelector("#message-box-who-won-info2"),
    _intervalGameInPlay: null,
    _intervalGameInPlayGet7: null,
    _timerIntervalGameInPlay: 3000,
    _timerMessageEventMidGame: 4000,
    ShowMessageCurrentMessageEvent()
    {
        // message box who won the game
        var messageBoxWhoWonInfoText = "Top Player Won";
        GameMessageEvent._messageBoxTopPlayerInfo.textContent = messageBoxWhoWonInfoText;
        GameMessageEvent._messageBoxBottomPlayerInfo.textContent = messageBoxWhoWonInfoText;
    },
    ShowMessageTopPlayerWon()
    {
        var messageBoxWhoWonInfoText = "Top Won";
        GameMessageEvent._messageBoxTopPlayerInfo.textContent = messageBoxWhoWonInfoText;
        GameMessageEvent._messageBoxBottomPlayerInfo.textContent = messageBoxWhoWonInfoText;
    },
    ShowMessageBottomPlayerWon()
    {
        var messageBoxWhoWonInfoText = "Bottom Won";
        GameMessageEvent._messageBoxTopPlayerInfo.textContent = messageBoxWhoWonInfoText;
        GameMessageEvent._messageBoxBottomPlayerInfo.textContent = messageBoxWhoWonInfoText;
    },
    ShowMessageTopPlayerItIsYourTurn()
    {
        GameMessageEvent._messageBoxTopPlayerInfo.textContent = "Top Player Turn";
        GameMessageEvent._messageBoxBottomPlayerInfo.textContent = "Bottom Player Wait";
    },
    ShowMessageBottomPlayerItIsYourTurn()
    {
        GameMessageEvent._messageBoxTopPlayerInfo.textContent = "Top Player Wait";
        GameMessageEvent._messageBoxBottomPlayerInfo.textContent = "Bottom Player Turn";
    },
    ClearMessageBox()
    {
        GameMessageEvent._messageBoxTopPlayerInfo.textContent = "";
        GameMessageEvent._messageBoxBottomPlayerInfo.textContent = "";
    },
    ShowPressStart()
    {
        var messageBoxDrawInfoText = "Press start";
        GameMessageEvent._messageBoxTopPlayerInfo.textContent = messageBoxDrawInfoText;
        GameMessageEvent._messageBoxBottomPlayerInfo.textContent = messageBoxDrawInfoText;
    },
    ShowMessageForBothPlayerGo()
    { 
        GameMessageEvent.ShowMessageGo();
    },
    ClearShowMessageForPlayerGoInterval()
    {
        clearInterval(GameMessageEvent._intervalGameInPlay);
    },
    ShowMessageGet7FamilleAndWin()
    {
        GameMessageEvent._messageBoxTopPlayerInfo.textContent = "Get 7 And Win";
        GameMessageEvent._messageBoxBottomPlayerInfo.textContent = "Get 7 And Win";
    },
    ClearShowMessageForPlayerGoIntervalGet7()
    {
        clearInterval(GameMessageEvent._intervalGameInPlayGet7);
    },
    ShowMessageGo()
    {
        GameMessageEvent._messageBoxTopPlayerInfo.textContent = "Go! Go!";
        GameMessageEvent._messageBoxBottomPlayerInfo.textContent = "Go! Go!";
    },
    ShowMessageGet7Win()
    {
    setTimeout(function()
        {
            GameMessageEvent._messageBoxTopPlayerInfo.textContent = "Get 7 Win";
            GameMessageEvent._messageBoxBottomPlayerInfo.textContent = "Get 7 Win";
            GameMessageEvent.ShowMessageForBothPlayerGo();
        },GameMessageEvent._timerMessageEventMidGame);
    }
};