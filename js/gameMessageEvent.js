var GameMessageEvent = {

    _messageBoxWhoWonInfo: document.querySelector("#message-box-who-won-info"),
    _messageBoxWhoWonInfo2: document.querySelector("#message-box-who-won-info2"),

ShowMessageCurrentMessageEvent()
{
     // message box who won the game
     var messageBoxWhoWonInfoText = "Top Player Won";
    GameMessageEvent._messageBoxWhoWonInfo.textContent = messageBoxWhoWonInfoText;
    GameMessageEvent._messageBoxWhoWonInfo2.textContent = messageBoxWhoWonInfoText;
}
};