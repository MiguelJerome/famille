
GameInt.RunGameInit();
GameLevel.ShowAllGameRessources();
//FamilleBoard.ShowFamilleBoard();
FamilleBoard.AddANewFamilleToTopPlayerFamilleBoard(FamilleBoard._combinationRankK);
FamilleBoard.AddANewFamilleToTopPlayerFamilleBoard(FamilleBoard._combinationRankQ);
FamilleBoard.AddANewFamilleToTopPlayerFamilleBoard(FamilleBoard._combinationRankT);
FamilleBoard.AddANewFamilleToBottomPlayerFamilleBoard(FamilleBoard._combinationRankK);
FamilleBoard.AddANewFamilleToBottomPlayerFamilleBoard(FamilleBoard._combinationRank5);
FamilleBoard.AddANewFamilleToBottomPlayerFamilleBoard(FamilleBoard._combinationRank6);
FamilleBoard.AddANewFamilleToBottomPlayerFamilleBoard(FamilleBoard._combinationRank2);
FamilleBoard.AddANewFamilleToBottomPlayerFamilleBoard(FamilleBoard._combinationRank4);
FamilleBoard.AddANewFamilleToBottomPlayerFamilleBoard(FamilleBoard._combinationRank7);
GameMessageEvent.ShowMessageCurrentMessageEvent();
BoardCard.ShowAllBoardCard();
EndOfTurn.ShowBothButtonEndOfTurn();


DeckCard.PrintStartingDeckCarte();
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