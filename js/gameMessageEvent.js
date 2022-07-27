var GameMessageEvent = {

    _messageBoxWhoWonInfo: document.querySelector("#message-box-who-won-info"),
    _messageBoxWhoWonInfo2: document.querySelector("#message-box-who-won-info2"),

ShowMessageCurrentMessageEvent()
{
     // message box who won the game
     var messageBoxWhoWonInfoText = "Top Player Won";
    GameMessageEvent._messageBoxWhoWonInfo.textContent = messageBoxWhoWonInfoText;
    GameMessageEvent._messageBoxWhoWonInfo2.textContent = messageBoxWhoWonInfoText;
},

ShowMessageTopPlayerWon()
{
    var messageBoxWhoWonInfoText = "Top Player Won";
    GameMessageEvent._messageBoxWhoWonInfo.textContent = messageBoxWhoWonInfoText;
    GameMessageEvent._messageBoxWhoWonInfo2.textContent = messageBoxWhoWonInfoText;
},

ShowMessageBottomPlayerWon()
{
    var messageBoxWhoWonInfoText = "Bottom Player Won";
    GameMessageEvent._messageBoxWhoWonInfo.textContent = messageBoxWhoWonInfoText;
    GameMessageEvent._messageBoxWhoWonInfo2.textContent = messageBoxWhoWonInfoText;
},

ShowMessageDraw()
{
    var messageBoxDrawInfoText = "Draw";
    GameMessageEvent._messageBoxWhoWonInfo.textContent = messageBoxDrawInfoText;
    GameMessageEvent._messageBoxWhoWonInfo2.textContent = messageBoxDrawInfoText;
},
ShowMessageTopPlayerItIsYourTurn()
{
    
    GameMessageEvent._messageBoxWhoWonInfo.textContent = "It is your turn";
    GameMessageEvent._messageBoxWhoWonInfo2.textContent = "Wait for your turn";
},
ShowMessageBottomPlayerItIsYourTurn()
{
   
    GameMessageEvent._messageBoxWhoWonInfo.textContent = "Wait for your turn";
    GameMessageEvent._messageBoxWhoWonInfo2.textContent = "It is your turn";
},

ClearMessageBox()
{
    GameMessageEvent._messageBoxWhoWonInfo.textContent = "";
    GameMessageEvent._messageBoxWhoWonInfo2.textContent = "";
}




};