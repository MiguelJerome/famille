
GameInt.RunGameInit();
GameLevel.ShowAllGameRessources();
//FamilleBoard.ShowFamilleBoard();

//GameMessageEvent.ShowMessageCurrentMessageEvent();

EndOfTurn.ShowBothButtonEndOfTurn();



GameLevel._buttonStartRestart.addEventListener("click", function()
{

    StartRestartGame.RunStartRestartGame();
});






















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