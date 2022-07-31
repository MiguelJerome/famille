
GameInt.RunGameInit();
GameLevel.ShowAllGameRessources();

GameLevel._buttonStartRestart.addEventListener("click", function()
{
    StartRestartGame.RunStartRestartGame();
});

GameLevel._buttonStartRestart1.addEventListener("click", function()
{
    StartRestartGame.RunStartRestartGame();
});

GameMessageEvent.ClearShowMessageForPlayerGoInterval();
GameMessageEvent.ClearShowMessageForPlayerGoIntervalGet7();




















//GameLevel.HideAllRessourcesBeforeStartingGame();

//GameLevel.GivePermissionTopPlayerToPlay();
//GameLevel.GivePermissionBottomPlayerToPlay();
/*
GameLevel._buttonStartRestart.addEventListener("click", function()
{

    GameLevel.HideAllRessourcesBeforeStartingGame();
});



GameLevel._buttonEndOfTurnTop.addEventListener("click", function()
{
    GameLevel.GivePermissionBottomPlayerToPlay();
});

GameLevel._buttonEndOfTurnBottom.addEventListener("click", function()
{
    GameLevel.GivePermissionTopPlayerToPlay();
});
*/