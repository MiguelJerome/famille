var BottomPlayerFamilleAcquired ={
    CheckFirstCardHandFamilleCombination(carteIdHand1, carteIdHand2, carteIdHand3, carteIdHand4 )
    {
        switch(carteIdHand1)
        {
           case Carte._idAs:
            if(Carte._positionAs == CardPosition._bottomHandCardPosition1  )
            {
                BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationAs(carteIdHand2, carteIdHand3, carteIdHand4);
            }
            break;
            case Carte._idAh:
                if(Carte._positionAh == CardPosition._bottomHandCardPosition1   )
            {
                BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationAh(carteIdHand2, carteIdHand3, carteIdHand4);
            }
                break;
            case Carte._idAd:
                if(Carte._positionAd == CardPosition._bottomHandCardPosition1  )
            {
                BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationAd(carteIdHand2, carteIdHand3, carteIdHand4);           
            }
                break;
            case Carte._idAc:
                if(Carte._positionAc == CardPosition._bottomHandCardPosition1  )
            {
                BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationAc(carteIdHand2, carteIdHand3, carteIdHand4);
            }
                break;
            case Carte._id2s:
                if(Carte._position2s == CardPosition._bottomHandCardPosition1   )
                {
                    BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination2s(carteIdHand2, carteIdHand3, carteIdHand4);
                }
                break;
                case Carte._id2h:
                if(Carte._position2h == CardPosition._bottomHandCardPosition1   )
                {
                    BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination2h(carteIdHand2, carteIdHand3, carteIdHand4);
                }
                    break;     
                case Carte._id2d:
                    if(Carte._position2d == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination2d(carteIdHand2, carteIdHand3, carteIdHand4);           
                    }
                    break;
                case Carte._id2c:
                    if(Carte._position2c == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination2c(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id3s:
                    if(Carte._position3s == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination3s(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                break;
                case Carte._id3h:
                    if(Carte._position3h == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination3h(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id3d:
                    if(Carte._position3d == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination3d(carteIdHand2, carteIdHand3, carteIdHand4);          
                    }
                    break;
                case Carte._id3c:
                    if(Carte._position3c == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination3c(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;

                case Carte._id4s:
                    if(Carte._position4s == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination4s(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                break;
                case Carte._id4h:
                    if(Carte._position4h == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination4h(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id4d:
                    if(Carte._position4d == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination4d(carteIdHand2, carteIdHand3, carteIdHand4);           
                    }
                    break;
                case Carte._id4c:
                    if(Carte._position4c == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination4c(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id5s:
                    if(Carte._position5s == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination5s(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                break;
                case Carte._id5h:
                    if(Carte._position5h == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination5h(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id5d:
                    if(Carte._position5d == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination5d(carteIdHand2, carteIdHand3, carteIdHand4);           
                    }
                    break;
                case Carte._id5c:
                    if(Carte._position5c == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination5c(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id6s:
                    if(Carte._position6s == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination6s(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                break;
                case Carte._id6h:
                    if(Carte._position6h == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination6h(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id6d:
                    if(Carte._position6d == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination6d(carteIdHand2, carteIdHand3, carteIdHand4);           
                    }
                    break;
                case Carte._id6c:
                    if(Carte._position6c == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination6c(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id7s:
                    if(Carte._position7s == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination7s(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                break;
                case Carte._id7h:
                    if(Carte._position7h == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination7h(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id7d:
                    if(Carte._position7d == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination7d(carteIdHand2, carteIdHand3, carteIdHand4);           
                    }
                    break;
                case Carte._id7c:
                    if(Carte._position7c == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination7c(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id8s:
                    if(Carte._position8s == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination8s(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                break;
                case Carte._id8h:
                    if(Carte._position8h == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination8h(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id8d:
                    if(Carte._position8d == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination8d(carteIdHand2, carteIdHand3, carteIdHand4);          
                    }
                    break;
                case Carte._id8c:
                    if(Carte._position8c == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination8c(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id9s:
                    if(Carte._position9s == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination9s(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                break;
                case Carte._id9h:
                    if(Carte._position9h == CardPosition._bottomHandCardPosition1   )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination9h(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._id9d:
                    if(Carte._position9d == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination9d(carteIdHand2, carteIdHand3, carteIdHand4);           
                    }
                    break;
                case Carte._id9c:
                    if(Carte._position9c == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombination9c(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._idTs:
                    if(Carte._positionTs == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationTs(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                break;
                case Carte._idTh:
                    if(Carte._positionTh == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationTh(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._idTd:
                    if(Carte._positionTd == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationTd(carteIdHand2, carteIdHand3, carteIdHand4);           
                    }
                    break;
                case Carte._idTc:
                    if(Carte._positionTc == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationTc(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._idJs:
                    if(Carte._positionJs == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationJs(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                break;
                case Carte._idJh:
                    if(Carte._positionJh == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationJh(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._idJd:
                    if(Carte._positionJd == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationJd(carteIdHand2, carteIdHand3, carteIdHand4);           
                    }
                    break;
                case Carte._idJc:
                    if(Carte._positionJc == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationJc(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._idQs:
                    if(Carte._positionQs == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationQs(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                break;
                case Carte._idQh:
                    if(Carte._positionQh == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationQh(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._idQd:
                    if(Carte._positionQd == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationQd(carteIdHand2, carteIdHand3, carteIdHand4);           
                    }
                    break;
                case Carte._idQc:
                    if(Carte._positionQc == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationQc(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._idKs:
                    if(Carte._positionKs == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationKs(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                break;
                case Carte._idKh:
                    if(Carte._positionKh == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationKh(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;
                case Carte._idKd:
                    if(Carte._positionKd == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationKd(carteIdHand2, carteIdHand3, carteIdHand4);           
                    }
                    break;
                case Carte._idKc:
                    if(Carte._positionKc == CardPosition._bottomHandCardPosition1  )
                    {
                        BottomPlayerFamilleAcquired.CheckSecondHandCardFamilleCombinationKc(carteIdHand2, carteIdHand3, carteIdHand4);
                    }
                    break;


            default:break;

        }
    },
        CheckSecondHandCardFamilleCombination(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
               case Carte._idAs:
                if(Carte._positionAs == CardPosition._bottomHandCardPosition2  )
                {
                Carte.ShowLogCartePoperties(Carte._idAs, Carte._graphicAs, Carte._graphicIsVisibleOrNotAs, Carte._ShuffleOrNotAs, Carte._positionAs );
                }
                break;
                case Carte._idAh:
                    if(Carte._positionAh == CardPosition._bottomHandCardPosition2   )
                {
                    Carte.ShowLogCartePoperties(Carte._idAh, Carte._graphicAh, Carte._graphicIsVisibleOrNotAh, Carte._ShuffleOrNotAh , Carte._positionAh);
                }
                    break;
                case Carte._idAd:
                    if(Carte._positionAd == CardPosition._bottomHandCardPosition2  )
                {
                    Carte.ShowLogCartePoperties(Carte._idAd, Carte._graphicAd, Carte._graphicIsVisibleOrNotAd, Carte._ShuffleOrNotAd, Carte._positionAd );           
                }
                    break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition2 )
                {
                    Carte.ShowLogCartePoperties(Carte._idAc, Carte._graphicAc, Carte._graphicIsVisibleOrNotAc, Carte._ShuffleOrNotAc, Carte._positionAc );
                }
                    break;
                case Carte._id2s:
                    if(Carte._position2s == CardPosition._bottomHandCardPosition2   )
                    {
                    Carte.ShowLogCartePoperties(Carte._id2s, Carte._graphic2s, Carte._graphicIsVisibleOrNot2s, Carte._ShuffleOrNot2s, Carte._position2s );
                    }
                    break;
                    case Carte._id2h:
                    if(Carte._position2h == CardPosition._bottomHandCardPosition2   )
                    {
                        Carte.ShowLogCartePoperties(Carte._id2h, Carte._graphic2h, Carte._graphicIsVisibleOrNot2h, Carte._ShuffleOrNot2h, Carte._position2h );
                    }
                        break;     
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2d, Carte._graphic2d, Carte._graphicIsVisibleOrNot2d, Carte._ShuffleOrNot2d, Carte._position2d );           
                        }
                        break;
                    case Carte._id2c:
                        if(Carte._position2c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2c, Carte._graphic2c, Carte._graphicIsVisibleOrNot2c, Carte._ShuffleOrNot2c , Carte._position2c);
                        }
                        break;
                    case Carte._id3s:
                        if(Carte._position3s == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id3s, Carte._graphic3s, Carte._graphicIsVisibleOrNot3s, Carte._ShuffleOrNot3s, Carte._position3s );
                        }
                    break;
                    case Carte._id3h:
                        if(Carte._position3h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3h, Carte._graphic3h, Carte._graphicIsVisibleOrNot3h, Carte._ShuffleOrNot3h, Carte._position3h );
                        }
                        break;
                    case Carte._id3d:
                        if(Carte._position3d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3d, Carte._graphic3d, Carte._graphicIsVisibleOrNot3d, Carte._ShuffleOrNot3d, Carte._position3d );           
                        }
                        break;
                    case Carte._id3c:
                        if(Carte._position3c == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3c, Carte._graphic3c, Carte._graphicIsVisibleOrNot3c, Carte._ShuffleOrNot3c, Carte._position3c );
                        }
                        break;
    
                    case Carte._id4s:
                        if(Carte._position4s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id4s, Carte._graphic4s, Carte._graphicIsVisibleOrNot4s, Carte._ShuffleOrNot4s, Carte._position4s );
                        }
                    break;
                    case Carte._id4h:
                        if(Carte._position4h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4h, Carte._graphic4h, Carte._graphicIsVisibleOrNot4h, Carte._ShuffleOrNot4h, Carte._position4h );
                        }
                        break;
                    case Carte._id4d:
                        if(Carte._position4d == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4d, Carte._graphic4d, Carte._graphicIsVisibleOrNot4d, Carte._ShuffleOrNot4d , Carte._position4d);           
                        }
                        break;
                    case Carte._id4c:
                        if(Carte._position4c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4c, Carte._graphic4c, Carte._graphicIsVisibleOrNot4c, Carte._ShuffleOrNot4c , Carte._position4c);
                        }
                        break;
                    case Carte._id5s:
                        if(Carte._position5s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id5s, Carte._graphic5s, Carte._graphicIsVisibleOrNot5s, Carte._ShuffleOrNot5s, Carte._position5s );
                        }
                    break;
                    case Carte._id5h:
                        if(Carte._position5h == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5h, Carte._graphic5h, Carte._graphicIsVisibleOrNot5h, Carte._ShuffleOrNot5h, Carte._position5h );
                        }
                        break;
                    case Carte._id5d:
                        if(Carte._position5d == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5d, Carte._graphic5d, Carte._graphicIsVisibleOrNot5d, Carte._ShuffleOrNot5d, Carte._position5d );           
                        }
                        break;
                    case Carte._id5c:
                        if(Carte._position5c == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5c, Carte._graphic5c, Carte._graphicIsVisibleOrNot5c, Carte._ShuffleOrNot5c , Carte._position5c);
                        }
                        break;
                    case Carte._id6s:
                        if(Carte._position6s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id6s, Carte._graphic6s, Carte._graphicIsVisibleOrNot6s, Carte._ShuffleOrNot6s, Carte._position6s );
                        }
                    break;
                    case Carte._id6h:
                        if(Carte._position6h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6h, Carte._graphic6h, Carte._graphicIsVisibleOrNot6h, Carte._ShuffleOrNot6h, Carte._position6h );
                        }
                        break;
                    case Carte._id6d:
                        if(Carte._position6d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6d, Carte._graphic6d, Carte._graphicIsVisibleOrNot6d, Carte._ShuffleOrNot6d, Carte._position6d );           
                        }
                        break;
                    case Carte._id6c:
                        if(Carte._position6c == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6c, Carte._graphic6c, Carte._graphicIsVisibleOrNot6c, Carte._ShuffleOrNot6c, Carte._position6c );
                        }
                        break;
                    case Carte._id7s:
                        if(Carte._position7s == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id7s, Carte._graphic7s, Carte._graphicIsVisibleOrNot7s, Carte._ShuffleOrNot7s, Carte._position7s );
                        }
                    break;
                    case Carte._id7h:
                        if(Carte._position7h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7h, Carte._graphic7h, Carte._graphicIsVisibleOrNot7h, Carte._ShuffleOrNot7h, Carte._position7h );
                        }
                        break;
                    case Carte._id7d:
                        if(Carte._position7d == CardPosition._bottomHandCardPosition2 )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7d, Carte._graphic7d, Carte._graphicIsVisibleOrNot7d, Carte._ShuffleOrNot7d , Carte._position7d);           
                        }
                        break;
                    case Carte._id7c:
                        if(Carte._position7c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7c, Carte._graphic7c, Carte._graphicIsVisibleOrNot7c, Carte._ShuffleOrNot7c, Carte._position7c );
                        }
                        break;
                    case Carte._id8s:
                        if(Carte._position8s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id8s, Carte._graphic8s, Carte._graphicIsVisibleOrNot8s, Carte._ShuffleOrNot8s, Carte._position8s );
                        }
                    break;
                    case Carte._id8h:
                        if(Carte._position8h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8h, Carte._graphic8h, Carte._graphicIsVisibleOrNot8h, Carte._ShuffleOrNot8h, Carte._position8h );
                        }
                        break;
                    case Carte._id8d:
                        if(Carte._position8d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8d, Carte._graphic8d, Carte._graphicIsVisibleOrNot8d, Carte._ShuffleOrNot8d, Carte._position8d);           
                        }
                        break;
                    case Carte._id8c:
                        if(Carte._position8c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8c, Carte._graphic8c, Carte._graphicIsVisibleOrNot8c, Carte._ShuffleOrNot8c, Carte._position8c );
                        }
                        break;
                    case Carte._id9s:
                        if(Carte._position9s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id9s, Carte._graphic9s, Carte._graphicIsVisibleOrNot9s, Carte._ShuffleOrNot9s, Carte._position9s );
                        }
                    break;
                    case Carte._id9h:
                        if(Carte._position9h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9h, Carte._graphic9h, Carte._graphicIsVisibleOrNot9h, Carte._ShuffleOrNot9h, Carte._position9h );
                        }
                        break;
                    case Carte._id9d:
                        if(Carte._position9d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9d, Carte._graphic9d, Carte._graphicIsVisibleOrNot9d, Carte._ShuffleOrNot9d, Carte._position9d );           
                        }
                        break;
                    case Carte._id9c:
                        if(Carte._position9c == CardPosition._bottomHandCardPosition2 )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9c, Carte._graphic9c, Carte._graphicIsVisibleOrNot9c, Carte._ShuffleOrNot9c, Carte._position9c );
                        }
                        break;
                    case Carte._idTs:
                        if(Carte._positionTs == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTs, Carte._graphicTs, Carte._graphicIsVisibleOrNotTs, Carte._ShuffleOrNotTs, Carte._positionTs );
                        }
                    break;
                    case Carte._idTh:
                        if(Carte._positionTh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTh, Carte._graphicTh, Carte._graphicIsVisibleOrNotTh, Carte._ShuffleOrNotTh, Carte._positionTh );
                        }
                        break;
                    case Carte._idTd:
                        if(Carte._positionTd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTd, Carte._graphicTd, Carte._graphicIsVisibleOrNotTd, Carte._ShuffleOrNotTd, Carte._positionTd );           
                        }
                        break;
                    case Carte._idTc:
                        if(Carte._positionTc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTc, Carte._graphicTc, Carte._graphicIsVisibleOrNotTc, Carte._ShuffleOrNotTc, Carte._positionTc );
                        }
                        break;
                    case Carte._idJs:
                        if(Carte._positionJs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idJs, Carte._graphicJs, Carte._graphicIsVisibleOrNotJs, Carte._ShuffleOrNotJs, Carte._positionJs );
                        }
                    break;
                    case Carte._idJh:
                        if(Carte._positionJh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJh, Carte._graphicJh, Carte._graphicIsVisibleOrNotJh, Carte._ShuffleOrNotJh, Carte._positionJh );
                        }
                        break;
                    case Carte._idJd:
                        if(Carte._positionJd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJd, Carte._graphicJd, Carte._graphicIsVisibleOrNotJd, Carte._ShuffleOrNotJd, Carte._positionJd );           
                        }
                        break;
                    case Carte._idJc:
                        if(Carte._positionJc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJc, Carte._graphicJc, Carte._graphicIsVisibleOrNotJc, Carte._ShuffleOrNotJc, Carte._positionJc );
                        }
                        break;
                    case Carte._idQs:
                        if(Carte._positionQs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idQs, Carte._graphicQs, Carte._graphicIsVisibleOrNotQs, Carte._ShuffleOrNotQs, Carte._positionQs );
                        }
                    break;
                    case Carte._idQh:
                        if(Carte._positionQh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQh, Carte._graphicQh, Carte._graphicIsVisibleOrNotQh, Carte._ShuffleOrNotQh, Carte._positionQh );
                        }
                        break;
                    case Carte._idQd:
                        if(Carte._positionQd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQd, Carte._graphicQd, Carte._graphicIsVisibleOrNotQd, Carte._ShuffleOrNotQd, Carte._positionQd );           
                        }
                        break;
                    case Carte._idQc:
                        if(Carte._positionQc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQc, Carte._graphicQc, Carte._graphicIsVisibleOrNotQc, Carte._ShuffleOrNotQc, Carte._positionQc );
                        }
                        break;
                    case Carte._idKs:
                        if(Carte._positionKs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idKs, Carte._graphicKs, Carte._graphicIsVisibleOrNotKs, Carte._ShuffleOrNotKs, Carte._positionKs );
                        }
                    break;
                    case Carte._idKh:
                        if(Carte._positionKh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKh, Carte._graphicKh, Carte._graphicIsVisibleOrNotKh, Carte._ShuffleOrNotKh, Carte._positionKh );
                        }
                        break;
                    case Carte._idKd:
                        if(Carte._positionKd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKd, Carte._graphicKd, Carte._graphicIsVisibleOrNotKd, Carte._ShuffleOrNotKd, Carte._positionKd );           
                        }
                        break;
                    case Carte._idKc:
                        if(Carte._positionKc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKc, Carte._graphicKc, Carte._graphicIsVisibleOrNotKc, Carte._ShuffleOrNotKc, Carte._positionKc );
                        }
                        break;
    
    
                default:break;
    
            }
    
        },
        CheckSecondHandCardFamilleCombinationAs(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                case Carte._idAh:
                    if(Carte._positionAh == CardPosition._bottomHandCardPosition2   )
                {
                    CheckThirdHandCardFamilleCombinationAsAh(carteIdHand3, carteIdHand4);
                }
                    break;
                case Carte._idAd:
                    if(Carte._positionAd == CardPosition._bottomHandCardPosition2  )
                {
                    CheckThirdHandCardFamilleCombinationAsAd(carteIdHand3, carteIdHand4);           
                }
                    break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition2 )
                {
                    CheckThirdHandCardFamilleCombinationAsAc(carteIdHand3, carteIdHand4);
                }
                    break;
               
                default:break;
    
            }
    
        },
        CheckSecondHandCardFamilleCombinationAh(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
               case Carte._idAs:
                if(Carte._positionAs == CardPosition._bottomHandCardPosition2  )
                {
                    CheckThirdHandCardFamilleCombinationAhAs(carteIdHand3, carteIdHand4);
                }
                break;
                case Carte._idAd:
                    if(Carte._positionAd == CardPosition._bottomHandCardPosition2  )
                {
                    CheckThirdHandCardFamilleCombinationAhAd(carteIdHand3, carteIdHand4);          
                }
                    break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition2 )
                {
                    CheckThirdHandCardFamilleCombinationAhAc(carteIdHand3, carteIdHand4);
                }
                    break;
                
                default:break;
    
            }
    
        },
        CheckSecondHandCardFamilleCombinationAd(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
               case Carte._idAs:
                if(Carte._positionAs == CardPosition._bottomHandCardPosition2  )
                {
                    CheckThirdHandCardFamilleCombinationAdAs(carteIdHand3, carteIdHand4);
                }
                break;
                case Carte._idAh:
                    if(Carte._positionAh == CardPosition._bottomHandCardPosition2   )
                {
                    CheckThirdHandCardFamilleCombinationAdAh(carteIdHand3, carteIdHand4);
                }
                    break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition2 )
                {
                    CheckThirdHandCardFamilleCombinationAdAc(carteIdHand3, carteIdHand4);
                }
                    break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationAc(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
               case Carte._idAs:
                if(Carte._positionAs == CardPosition._bottomHandCardPosition2  )
                {
                    CheckThirdHandCardFamilleCombinationAcAs(carteIdHand3, carteIdHand4);
                }
                break;
                case Carte._idAh:
                    if(Carte._positionAh == CardPosition._bottomHandCardPosition2   )
                {
                    CheckThirdHandCardFamilleCombinationAcAh(carteIdHand3, carteIdHand4);
                }
                    break;
                case Carte._idAd:
                    if(Carte._positionAd == CardPosition._bottomHandCardPosition2  )
                {
                    CheckThirdHandCardFamilleCombinationAcAd(carteIdHand3, carteIdHand4);          
                }
                    break;  
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination2s(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
               
                    case Carte._id2h:
                    if(Carte._position2h == CardPosition._bottomHandCardPosition2   )
                    {
                        CheckThirdHandCardFamilleCombination2s2h(carteIdHand3, carteIdHand4);
                    }
                        break;     
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition2   )
                        {
                            CheckThirdHandCardFamilleCombination2s2d(carteIdHand3, carteIdHand4);          
                        }
                        break;
                    case Carte._id2c:
                        if(Carte._position2c == CardPosition._bottomHandCardPosition2   )
                        {
                            CheckThirdHandCardFamilleCombination2s2c(carteIdHand3, carteIdHand4);
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination2h(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                case Carte._id2s:
                    if(Carte._position2s == CardPosition._bottomHandCardPosition2   )
                    {
                        CheckThirdHandCardFamilleCombination2h2s(carteIdHand3, carteIdHand4);
                    }
                    break; 
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition2   )
                        {
                            CheckThirdHandCardFamilleCombination2h2d(carteIdHand3, carteIdHand4);           
                        }
                        break;
                    case Carte._id2c:
                        if(Carte._position2c == CardPosition._bottomHandCardPosition2   )
                        {
                            CheckThirdHandCardFamilleCombination2h2c(carteIdHand3, carteIdHand4);
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination2d(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                case Carte._id2s:
                    if(Carte._position2s == CardPosition._bottomHandCardPosition2   )
                    {
                        CheckThirdHandCardFamilleCombination2d2s(carteIdHand3, carteIdHand4);
                    }
                    break;
                    case Carte._id2h:
                    if(Carte._position2h == CardPosition._bottomHandCardPosition2   )
                    {
                        CheckThirdHandCardFamilleCombination2d2h(carteIdHand3, carteIdHand4);
                    }
                        break;     
                    case Carte._id2c:
                        if(Carte._position2c == CardPosition._bottomHandCardPosition2   )
                        {
                            CheckThirdHandCardFamilleCombination2d2c(carteIdHand3, carteIdHand4);
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination2c(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                case Carte._id2s:
                    if(Carte._position2s == CardPosition._bottomHandCardPosition2   )
                    {
                        CheckThirdHandCardFamilleCombination2c2s(carteIdHand3, carteIdHand4);
                    }
                    break;
                    case Carte._id2h:
                    if(Carte._position2h == CardPosition._bottomHandCardPosition2   )
                    {
                        CheckThirdHandCardFamilleCombination2c2h(carteIdHand3, carteIdHand4);
                    }
                        break;     
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition2   )
                        {
                            CheckThirdHandCardFamilleCombination2c2d(carteIdHand3, carteIdHand4);          
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination3s(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id3h:
                        if(Carte._position3h == CardPosition._bottomHandCardPosition2   )
                        {
                            CheckThirdHandCardFamilleCombination3s3h(carteIdHand3, carteIdHand4);
                        }
                        break;
                    case Carte._id3d:
                        if(Carte._position3d == CardPosition._bottomHandCardPosition2  )
                        {
                            CheckThirdHandCardFamilleCombination3s3d(carteIdHand3, carteIdHand4);      
                        }
                        break;
                    case Carte._id3c:
                        if(Carte._position3c == CardPosition._bottomHandCardPosition2  )
                        {
                            CheckThirdHandCardFamilleCombination3s3c(carteIdHand3, carteIdHand4);
                        }
                        break;
                default:break;
            }
        },
  
        CheckSecondHandCardFamilleCombination3h(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id3s:
                        if(Carte._position3s == CardPosition._bottomHandCardPosition2  )
                        {
                            CheckThirdHandCardFamilleCombination3h3s(carteIdHand3, carteIdHand4);
                        }
                    break;
                    case Carte._id3d:
                        if(Carte._position3d == CardPosition._bottomHandCardPosition2  )
                        {
                            CheckThirdHandCardFamilleCombination3h3d(carteIdHand3, carteIdHand4);          
                        }
                        break;
                    case Carte._id3c:
                        if(Carte._position3c == CardPosition._bottomHandCardPosition2  )
                        {
                            CheckThirdHandCardFamilleCombination3h3c(carteIdHand3, carteIdHand4);
                        }
                        break;
                default:break;
            }
        },

        CheckSecondHandCardFamilleCombination3d(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {

                    case Carte._id3s:
                        if(Carte._position3s == CardPosition._bottomHandCardPosition2  )
                        {
                            CheckThirdHandCardFamilleCombination3d3s(carteIdHand3, carteIdHand4);
                        }
                    break;
                    case Carte._id3h:
                        if(Carte._position3h == CardPosition._bottomHandCardPosition2   )
                        {
                            CheckThirdHandCardFamilleCombination3d3h(carteIdHand3, carteIdHand4);
                        }
                        break;
                    case Carte._id3c:
                        if(Carte._position3c == CardPosition._bottomHandCardPosition2  )
                        {
                            CheckThirdHandCardFamilleCombination3d3c(carteIdHand3, carteIdHand4);
                        }
                        break;
                default:break;
            }
        },

        CheckSecondHandCardFamilleCombination3c(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id3s:
                        if(Carte._position3s == CardPosition._bottomHandCardPosition2  )
                        {
                            CheckThirdHandCardFamilleCombination3c3s(carteIdHand3, carteIdHand4);
                        }
                    break;
                    case Carte._id3h:
                        if(Carte._position3h == CardPosition._bottomHandCardPosition2   )
                        {
                            CheckThirdHandCardFamilleCombination3c3h(carteIdHand3, carteIdHand4);
                        }
                        break;
                    case Carte._id3d:
                        if(Carte._position3d == CardPosition._bottomHandCardPosition2  )
                        {
                            CheckThirdHandCardFamilleCombination3c3d(carteIdHand3, carteIdHand4);           
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination4s(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id4h:
                        if(Carte._position4h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4h, Carte._graphic4h, Carte._graphicIsVisibleOrNot4h, Carte._ShuffleOrNot4h, Carte._position4h );
                        }
                        break;
                    case Carte._id4d:
                        if(Carte._position4d == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4d, Carte._graphic4d, Carte._graphicIsVisibleOrNot4d, Carte._ShuffleOrNot4d , Carte._position4d);           
                        }
                        break;
                    case Carte._id4c:
                        if(Carte._position4c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4c, Carte._graphic4c, Carte._graphicIsVisibleOrNot4c, Carte._ShuffleOrNot4c , Carte._position4c);
                        }
                        break;
                default:break;
    
            }
        },
        CheckSecondHandCardFamilleCombination4h(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id4s:
                        if(Carte._position4s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id4s, Carte._graphic4s, Carte._graphicIsVisibleOrNot4s, Carte._ShuffleOrNot4s, Carte._position4s );
                        }
                    break;
                    case Carte._id4d:
                        if(Carte._position4d == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4d, Carte._graphic4d, Carte._graphicIsVisibleOrNot4d, Carte._ShuffleOrNot4d , Carte._position4d);           
                        }
                        break;
                    case Carte._id4c:
                        if(Carte._position4c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4c, Carte._graphic4c, Carte._graphicIsVisibleOrNot4c, Carte._ShuffleOrNot4c , Carte._position4c);
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination4d(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id4s:
                        if(Carte._position4s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id4s, Carte._graphic4s, Carte._graphicIsVisibleOrNot4s, Carte._ShuffleOrNot4s, Carte._position4s );
                        }
                    break;
                    case Carte._id4h:
                        if(Carte._position4h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4h, Carte._graphic4h, Carte._graphicIsVisibleOrNot4h, Carte._ShuffleOrNot4h, Carte._position4h );
                        }
                        break;
                    case Carte._id4c:
                        if(Carte._position4c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4c, Carte._graphic4c, Carte._graphicIsVisibleOrNot4c, Carte._ShuffleOrNot4c , Carte._position4c);
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination4c(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {    
                    case Carte._id4s:
                        if(Carte._position4s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id4s, Carte._graphic4s, Carte._graphicIsVisibleOrNot4s, Carte._ShuffleOrNot4s, Carte._position4s );
                        }
                    break;
                    case Carte._id4h:
                        if(Carte._position4h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4h, Carte._graphic4h, Carte._graphicIsVisibleOrNot4h, Carte._ShuffleOrNot4h, Carte._position4h );
                        }
                        break;
                    case Carte._id4d:
                        if(Carte._position4d == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4d, Carte._graphic4d, Carte._graphicIsVisibleOrNot4d, Carte._ShuffleOrNot4d , Carte._position4d);           
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination5s(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id5s:
                        if(Carte._position5s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id5s, Carte._graphic5s, Carte._graphicIsVisibleOrNot5s, Carte._ShuffleOrNot5s, Carte._position5s );
                        }
                    break;
                    case Carte._id5h:
                        if(Carte._position5h == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5h, Carte._graphic5h, Carte._graphicIsVisibleOrNot5h, Carte._ShuffleOrNot5h, Carte._position5h );
                        }
                        break;
                    case Carte._id5d:
                        if(Carte._position5d == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5d, Carte._graphic5d, Carte._graphicIsVisibleOrNot5d, Carte._ShuffleOrNot5d, Carte._position5d );           
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination5h(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id5s:
                        if(Carte._position5s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id5s, Carte._graphic5s, Carte._graphicIsVisibleOrNot5s, Carte._ShuffleOrNot5s, Carte._position5s );
                        }
                    break;
                    case Carte._id5d:
                        if(Carte._position5d == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5d, Carte._graphic5d, Carte._graphicIsVisibleOrNot5d, Carte._ShuffleOrNot5d, Carte._position5d );           
                        }
                        break;
                    case Carte._id5c:
                        if(Carte._position5c == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5c, Carte._graphic5c, Carte._graphicIsVisibleOrNot5c, Carte._ShuffleOrNot5c , Carte._position5c);
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination5d(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id5s:
                        if(Carte._position5s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id5s, Carte._graphic5s, Carte._graphicIsVisibleOrNot5s, Carte._ShuffleOrNot5s, Carte._position5s );
                        }
                    break;
                    case Carte._id5h:
                        if(Carte._position5h == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5h, Carte._graphic5h, Carte._graphicIsVisibleOrNot5h, Carte._ShuffleOrNot5h, Carte._position5h );
                        }
                        break;
                    case Carte._id5c:
                        if(Carte._position5c == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5c, Carte._graphic5c, Carte._graphicIsVisibleOrNot5c, Carte._ShuffleOrNot5c , Carte._position5c);
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination5c(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id5s:
                        if(Carte._position5s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id5s, Carte._graphic5s, Carte._graphicIsVisibleOrNot5s, Carte._ShuffleOrNot5s, Carte._position5s );
                        }
                    break;
                    case Carte._id5h:
                        if(Carte._position5h == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5h, Carte._graphic5h, Carte._graphicIsVisibleOrNot5h, Carte._ShuffleOrNot5h, Carte._position5h );
                        }
                        break;
                    case Carte._id5d:
                        if(Carte._position5d == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5d, Carte._graphic5d, Carte._graphicIsVisibleOrNot5d, Carte._ShuffleOrNot5d, Carte._position5d );           
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination6s(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id6h:
                        if(Carte._position6h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6h, Carte._graphic6h, Carte._graphicIsVisibleOrNot6h, Carte._ShuffleOrNot6h, Carte._position6h );
                        }
                        break;
                    case Carte._id6d:
                        if(Carte._position6d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6d, Carte._graphic6d, Carte._graphicIsVisibleOrNot6d, Carte._ShuffleOrNot6d, Carte._position6d );           
                        }
                        break;
                    case Carte._id6c:
                        if(Carte._position6c == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6c, Carte._graphic6c, Carte._graphicIsVisibleOrNot6c, Carte._ShuffleOrNot6c, Carte._position6c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination6h(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id6s:
                        if(Carte._position6s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id6s, Carte._graphic6s, Carte._graphicIsVisibleOrNot6s, Carte._ShuffleOrNot6s, Carte._position6s );
                        }
                    break;
                    case Carte._id6d:
                        if(Carte._position6d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6d, Carte._graphic6d, Carte._graphicIsVisibleOrNot6d, Carte._ShuffleOrNot6d, Carte._position6d );           
                        }
                        break;
                    case Carte._id6c:
                        if(Carte._position6c == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6c, Carte._graphic6c, Carte._graphicIsVisibleOrNot6c, Carte._ShuffleOrNot6c, Carte._position6c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination6d(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id6s:
                        if(Carte._position6s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id6s, Carte._graphic6s, Carte._graphicIsVisibleOrNot6s, Carte._ShuffleOrNot6s, Carte._position6s );
                        }
                    break;
                    case Carte._id6h:
                        if(Carte._position6h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6h, Carte._graphic6h, Carte._graphicIsVisibleOrNot6h, Carte._ShuffleOrNot6h, Carte._position6h );
                        }
                        break;
                    case Carte._id6c:
                        if(Carte._position6c == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6c, Carte._graphic6c, Carte._graphicIsVisibleOrNot6c, Carte._ShuffleOrNot6c, Carte._position6c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination6c(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id6s:
                        if(Carte._position6s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id6s, Carte._graphic6s, Carte._graphicIsVisibleOrNot6s, Carte._ShuffleOrNot6s, Carte._position6s );
                        }
                    break;
                    case Carte._id6h:
                        if(Carte._position6h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6h, Carte._graphic6h, Carte._graphicIsVisibleOrNot6h, Carte._ShuffleOrNot6h, Carte._position6h );
                        }
                        break;
                    case Carte._id6d:
                        if(Carte._position6d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6d, Carte._graphic6d, Carte._graphicIsVisibleOrNot6d, Carte._ShuffleOrNot6d, Carte._position6d );           
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination7s(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id7h:
                        if(Carte._position7h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7h, Carte._graphic7h, Carte._graphicIsVisibleOrNot7h, Carte._ShuffleOrNot7h, Carte._position7h );
                        }
                        break;
                    case Carte._id7d:
                        if(Carte._position7d == CardPosition._bottomHandCardPosition2 )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7d, Carte._graphic7d, Carte._graphicIsVisibleOrNot7d, Carte._ShuffleOrNot7d , Carte._position7d);           
                        }
                        break;
                    case Carte._id7c:
                        if(Carte._position7c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7c, Carte._graphic7c, Carte._graphicIsVisibleOrNot7c, Carte._ShuffleOrNot7c, Carte._position7c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination7h(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id7s:
                        if(Carte._position7s == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id7s, Carte._graphic7s, Carte._graphicIsVisibleOrNot7s, Carte._ShuffleOrNot7s, Carte._position7s );
                        }
                    break;
                    case Carte._id7d:
                        if(Carte._position7d == CardPosition._bottomHandCardPosition2 )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7d, Carte._graphic7d, Carte._graphicIsVisibleOrNot7d, Carte._ShuffleOrNot7d , Carte._position7d);           
                        }
                        break;
                    case Carte._id7c:
                        if(Carte._position7c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7c, Carte._graphic7c, Carte._graphicIsVisibleOrNot7c, Carte._ShuffleOrNot7c, Carte._position7c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination7d(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id7s:
                        if(Carte._position7s == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id7s, Carte._graphic7s, Carte._graphicIsVisibleOrNot7s, Carte._ShuffleOrNot7s, Carte._position7s );
                        }
                    break;
                    case Carte._id7h:
                        if(Carte._position7h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7h, Carte._graphic7h, Carte._graphicIsVisibleOrNot7h, Carte._ShuffleOrNot7h, Carte._position7h );
                        }
                        break;
                    case Carte._id7c:
                        if(Carte._position7c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7c, Carte._graphic7c, Carte._graphicIsVisibleOrNot7c, Carte._ShuffleOrNot7c, Carte._position7c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination7c(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id7s:
                        if(Carte._position7s == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id7s, Carte._graphic7s, Carte._graphicIsVisibleOrNot7s, Carte._ShuffleOrNot7s, Carte._position7s );
                        }
                    break;
                    case Carte._id7h:
                        if(Carte._position7h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7h, Carte._graphic7h, Carte._graphicIsVisibleOrNot7h, Carte._ShuffleOrNot7h, Carte._position7h );
                        }
                        break;
                    case Carte._id7d:
                        if(Carte._position7d == CardPosition._bottomHandCardPosition2 )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7d, Carte._graphic7d, Carte._graphicIsVisibleOrNot7d, Carte._ShuffleOrNot7d , Carte._position7d);           
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination8s(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id8h:
                        if(Carte._position8h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8h, Carte._graphic8h, Carte._graphicIsVisibleOrNot8h, Carte._ShuffleOrNot8h, Carte._position8h );
                        }
                        break;
                    case Carte._id8d:
                        if(Carte._position8d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8d, Carte._graphic8d, Carte._graphicIsVisibleOrNot8d, Carte._ShuffleOrNot8d, Carte._position8d);           
                        }
                        break;
                    case Carte._id8c:
                        if(Carte._position8c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8c, Carte._graphic8c, Carte._graphicIsVisibleOrNot8c, Carte._ShuffleOrNot8c, Carte._position8c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination8h(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id8s:
                        if(Carte._position8s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id8s, Carte._graphic8s, Carte._graphicIsVisibleOrNot8s, Carte._ShuffleOrNot8s, Carte._position8s );
                        }
                    break;
                    case Carte._id8d:
                        if(Carte._position8d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8d, Carte._graphic8d, Carte._graphicIsVisibleOrNot8d, Carte._ShuffleOrNot8d, Carte._position8d);           
                        }
                        break;
                    case Carte._id8c:
                        if(Carte._position8c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8c, Carte._graphic8c, Carte._graphicIsVisibleOrNot8c, Carte._ShuffleOrNot8c, Carte._position8c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination8d(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id8s:
                        if(Carte._position8s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id8s, Carte._graphic8s, Carte._graphicIsVisibleOrNot8s, Carte._ShuffleOrNot8s, Carte._position8s );
                        }
                    break;
                    case Carte._id8h:
                        if(Carte._position8h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8h, Carte._graphic8h, Carte._graphicIsVisibleOrNot8h, Carte._ShuffleOrNot8h, Carte._position8h );
                        }
                        break;
                    case Carte._id8c:
                        if(Carte._position8c == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8c, Carte._graphic8c, Carte._graphicIsVisibleOrNot8c, Carte._ShuffleOrNot8c, Carte._position8c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination8c(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id8s:
                        if(Carte._position8s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id8s, Carte._graphic8s, Carte._graphicIsVisibleOrNot8s, Carte._ShuffleOrNot8s, Carte._position8s );
                        }
                    break;
                    case Carte._id8h:
                        if(Carte._position8h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8h, Carte._graphic8h, Carte._graphicIsVisibleOrNot8h, Carte._ShuffleOrNot8h, Carte._position8h );
                        }
                        break;
                    case Carte._id8d:
                        if(Carte._position8d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8d, Carte._graphic8d, Carte._graphicIsVisibleOrNot8d, Carte._ShuffleOrNot8d, Carte._position8d);           
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination9s(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id9h:
                        if(Carte._position9h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9h, Carte._graphic9h, Carte._graphicIsVisibleOrNot9h, Carte._ShuffleOrNot9h, Carte._position9h );
                        }
                        break;
                    case Carte._id9d:
                        if(Carte._position9d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9d, Carte._graphic9d, Carte._graphicIsVisibleOrNot9d, Carte._ShuffleOrNot9d, Carte._position9d );           
                        }
                        break;
                    case Carte._id9c:
                        if(Carte._position9c == CardPosition._bottomHandCardPosition2 )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9c, Carte._graphic9c, Carte._graphicIsVisibleOrNot9c, Carte._ShuffleOrNot9c, Carte._position9c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination9h(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id9s:
                        if(Carte._position9s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id9s, Carte._graphic9s, Carte._graphicIsVisibleOrNot9s, Carte._ShuffleOrNot9s, Carte._position9s );
                        }
                    break;
                    case Carte._id9d:
                        if(Carte._position9d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9d, Carte._graphic9d, Carte._graphicIsVisibleOrNot9d, Carte._ShuffleOrNot9d, Carte._position9d );           
                        }
                        break;
                    case Carte._id9c:
                        if(Carte._position9c == CardPosition._bottomHandCardPosition2 )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9c, Carte._graphic9c, Carte._graphicIsVisibleOrNot9c, Carte._ShuffleOrNot9c, Carte._position9c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination9d(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id9s:
                        if(Carte._position9s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id9s, Carte._graphic9s, Carte._graphicIsVisibleOrNot9s, Carte._ShuffleOrNot9s, Carte._position9s );
                        }
                    break;
                    case Carte._id9h:
                        if(Carte._position9h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9h, Carte._graphic9h, Carte._graphicIsVisibleOrNot9h, Carte._ShuffleOrNot9h, Carte._position9h );
                        }
                        break;
                    case Carte._id9c:
                        if(Carte._position9c == CardPosition._bottomHandCardPosition2 )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9c, Carte._graphic9c, Carte._graphicIsVisibleOrNot9c, Carte._ShuffleOrNot9c, Carte._position9c );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombination9c(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._id9s:
                        if(Carte._position9s == CardPosition._bottomHandCardPosition2   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id9s, Carte._graphic9s, Carte._graphicIsVisibleOrNot9s, Carte._ShuffleOrNot9s, Carte._position9s );
                        }
                    break;
                    case Carte._id9h:
                        if(Carte._position9h == CardPosition._bottomHandCardPosition2   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9h, Carte._graphic9h, Carte._graphicIsVisibleOrNot9h, Carte._ShuffleOrNot9h, Carte._position9h );
                        }
                        break;
                    case Carte._id9d:
                        if(Carte._position9d == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9d, Carte._graphic9d, Carte._graphicIsVisibleOrNot9d, Carte._ShuffleOrNot9d, Carte._position9d );           
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationTs(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idTh:
                        if(Carte._positionTh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTh, Carte._graphicTh, Carte._graphicIsVisibleOrNotTh, Carte._ShuffleOrNotTh, Carte._positionTh );
                        }
                        break;
                    case Carte._idTd:
                        if(Carte._positionTd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTd, Carte._graphicTd, Carte._graphicIsVisibleOrNotTd, Carte._ShuffleOrNotTd, Carte._positionTd );           
                        }
                        break;
                    case Carte._idTc:
                        if(Carte._positionTc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTc, Carte._graphicTc, Carte._graphicIsVisibleOrNotTc, Carte._ShuffleOrNotTc, Carte._positionTc );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationTh(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idTs:
                        if(Carte._positionTs == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTs, Carte._graphicTs, Carte._graphicIsVisibleOrNotTs, Carte._ShuffleOrNotTs, Carte._positionTs );
                        }
                    break;
                    case Carte._idTd:
                        if(Carte._positionTd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTd, Carte._graphicTd, Carte._graphicIsVisibleOrNotTd, Carte._ShuffleOrNotTd, Carte._positionTd );           
                        }
                        break;
                    case Carte._idTc:
                        if(Carte._positionTc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTc, Carte._graphicTc, Carte._graphicIsVisibleOrNotTc, Carte._ShuffleOrNotTc, Carte._positionTc );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationTd(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idTs:
                        if(Carte._positionTs == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTs, Carte._graphicTs, Carte._graphicIsVisibleOrNotTs, Carte._ShuffleOrNotTs, Carte._positionTs );
                        }
                    break;
                    case Carte._idTh:
                        if(Carte._positionTh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTh, Carte._graphicTh, Carte._graphicIsVisibleOrNotTh, Carte._ShuffleOrNotTh, Carte._positionTh );
                        }
                        break;
                    case Carte._idTc:
                        if(Carte._positionTc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTc, Carte._graphicTc, Carte._graphicIsVisibleOrNotTc, Carte._ShuffleOrNotTc, Carte._positionTc );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationTc(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idTs:
                        if(Carte._positionTs == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTs, Carte._graphicTs, Carte._graphicIsVisibleOrNotTs, Carte._ShuffleOrNotTs, Carte._positionTs );
                        }
                    break;
                    case Carte._idTh:
                        if(Carte._positionTh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTh, Carte._graphicTh, Carte._graphicIsVisibleOrNotTh, Carte._ShuffleOrNotTh, Carte._positionTh );
                        }
                        break;
                    case Carte._idTd:
                        if(Carte._positionTd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTd, Carte._graphicTd, Carte._graphicIsVisibleOrNotTd, Carte._ShuffleOrNotTd, Carte._positionTd );           
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationJs(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idJh:
                        if(Carte._positionJh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJh, Carte._graphicJh, Carte._graphicIsVisibleOrNotJh, Carte._ShuffleOrNotJh, Carte._positionJh );
                        }
                        break;
                    case Carte._idJd:
                        if(Carte._positionJd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJd, Carte._graphicJd, Carte._graphicIsVisibleOrNotJd, Carte._ShuffleOrNotJd, Carte._positionJd );           
                        }
                        break;
                    case Carte._idJc:
                        if(Carte._positionJc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJc, Carte._graphicJc, Carte._graphicIsVisibleOrNotJc, Carte._ShuffleOrNotJc, Carte._positionJc );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationJh(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idJs:
                        if(Carte._positionJs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idJs, Carte._graphicJs, Carte._graphicIsVisibleOrNotJs, Carte._ShuffleOrNotJs, Carte._positionJs );
                        }
                    break;
                    case Carte._idJd:
                        if(Carte._positionJd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJd, Carte._graphicJd, Carte._graphicIsVisibleOrNotJd, Carte._ShuffleOrNotJd, Carte._positionJd );           
                        }
                        break;
                    case Carte._idJc:
                        if(Carte._positionJc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJc, Carte._graphicJc, Carte._graphicIsVisibleOrNotJc, Carte._ShuffleOrNotJc, Carte._positionJc );
                        }
                        break;
            }
        },
        CheckSecondHandCardFamilleCombinationJd(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idJs:
                        if(Carte._positionJs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idJs, Carte._graphicJs, Carte._graphicIsVisibleOrNotJs, Carte._ShuffleOrNotJs, Carte._positionJs );
                        }
                    break;
                    case Carte._idJh:
                        if(Carte._positionJh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJh, Carte._graphicJh, Carte._graphicIsVisibleOrNotJh, Carte._ShuffleOrNotJh, Carte._positionJh );
                        }
                        break;
                    case Carte._idJc:
                        if(Carte._positionJc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJc, Carte._graphicJc, Carte._graphicIsVisibleOrNotJc, Carte._ShuffleOrNotJc, Carte._positionJc );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationJc(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idJs:
                        if(Carte._positionJs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idJs, Carte._graphicJs, Carte._graphicIsVisibleOrNotJs, Carte._ShuffleOrNotJs, Carte._positionJs );
                        }
                    break;
                    case Carte._idJh:
                        if(Carte._positionJh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJh, Carte._graphicJh, Carte._graphicIsVisibleOrNotJh, Carte._ShuffleOrNotJh, Carte._positionJh );
                        }
                        break;
                    case Carte._idJd:
                        if(Carte._positionJd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJd, Carte._graphicJd, Carte._graphicIsVisibleOrNotJd, Carte._ShuffleOrNotJd, Carte._positionJd );           
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationQs(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idQh:
                        if(Carte._positionQh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQh, Carte._graphicQh, Carte._graphicIsVisibleOrNotQh, Carte._ShuffleOrNotQh, Carte._positionQh );
                        }
                        break;
                    case Carte._idQd:
                        if(Carte._positionQd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQd, Carte._graphicQd, Carte._graphicIsVisibleOrNotQd, Carte._ShuffleOrNotQd, Carte._positionQd );           
                        }
                        break;
                    case Carte._idQc:
                        if(Carte._positionQc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQc, Carte._graphicQc, Carte._graphicIsVisibleOrNotQc, Carte._ShuffleOrNotQc, Carte._positionQc );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationQh(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idQs:
                        if(Carte._positionQs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idQs, Carte._graphicQs, Carte._graphicIsVisibleOrNotQs, Carte._ShuffleOrNotQs, Carte._positionQs );
                        }
                    break;
                    case Carte._idQd:
                        if(Carte._positionQd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQd, Carte._graphicQd, Carte._graphicIsVisibleOrNotQd, Carte._ShuffleOrNotQd, Carte._positionQd );           
                        }
                        break;
                    case Carte._idQc:
                        if(Carte._positionQc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQc, Carte._graphicQc, Carte._graphicIsVisibleOrNotQc, Carte._ShuffleOrNotQc, Carte._positionQc );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationQd(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idQs:
                        if(Carte._positionQs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idQs, Carte._graphicQs, Carte._graphicIsVisibleOrNotQs, Carte._ShuffleOrNotQs, Carte._positionQs );
                        }
                    break;
                    case Carte._idQh:
                        if(Carte._positionQh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQh, Carte._graphicQh, Carte._graphicIsVisibleOrNotQh, Carte._ShuffleOrNotQh, Carte._positionQh );
                        }
                        break;
                    case Carte._idQc:
                        if(Carte._positionQc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQc, Carte._graphicQc, Carte._graphicIsVisibleOrNotQc, Carte._ShuffleOrNotQc, Carte._positionQc );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationQc(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idQs:
                        if(Carte._positionQs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idQs, Carte._graphicQs, Carte._graphicIsVisibleOrNotQs, Carte._ShuffleOrNotQs, Carte._positionQs );
                        }
                    break;
                    case Carte._idQh:
                        if(Carte._positionQh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQh, Carte._graphicQh, Carte._graphicIsVisibleOrNotQh, Carte._ShuffleOrNotQh, Carte._positionQh );
                        }
                        break;
                    case Carte._idQd:
                        if(Carte._positionQd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQd, Carte._graphicQd, Carte._graphicIsVisibleOrNotQd, Carte._ShuffleOrNotQd, Carte._positionQd );           
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationKs(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idKh:
                        if(Carte._positionKh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKh, Carte._graphicKh, Carte._graphicIsVisibleOrNotKh, Carte._ShuffleOrNotKh, Carte._positionKh );
                        }
                        break;
                    case Carte._idKd:
                        if(Carte._positionKd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKd, Carte._graphicKd, Carte._graphicIsVisibleOrNotKd, Carte._ShuffleOrNotKd, Carte._positionKd );           
                        }
                        break;
                    case Carte._idKc:
                        if(Carte._positionKc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKc, Carte._graphicKc, Carte._graphicIsVisibleOrNotKc, Carte._ShuffleOrNotKc, Carte._positionKc );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationKh(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idKs:
                        if(Carte._positionKs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idKs, Carte._graphicKs, Carte._graphicIsVisibleOrNotKs, Carte._ShuffleOrNotKs, Carte._positionKs );
                        }
                    break;
                    case Carte._idKd:
                        if(Carte._positionKd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKd, Carte._graphicKd, Carte._graphicIsVisibleOrNotKd, Carte._ShuffleOrNotKd, Carte._positionKd );           
                        }
                        break;
                    case Carte._idKc:
                        if(Carte._positionKc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKc, Carte._graphicKc, Carte._graphicIsVisibleOrNotKc, Carte._ShuffleOrNotKc, Carte._positionKc );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationKd(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idKs:
                        if(Carte._positionKs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idKs, Carte._graphicKs, Carte._graphicIsVisibleOrNotKs, Carte._ShuffleOrNotKs, Carte._positionKs );
                        }
                    break;
                    case Carte._idKh:
                        if(Carte._positionKh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKh, Carte._graphicKh, Carte._graphicIsVisibleOrNotKh, Carte._ShuffleOrNotKh, Carte._positionKh );
                        }
                        break;
                    case Carte._idKc:
                        if(Carte._positionKc == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKc, Carte._graphicKc, Carte._graphicIsVisibleOrNotKc, Carte._ShuffleOrNotKc, Carte._positionKc );
                        }
                        break;
                default:break;
            }
        },
        CheckSecondHandCardFamilleCombinationKc(carteIdHand2, carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand2)
            {
                    case Carte._idKs:
                        if(Carte._positionKs == CardPosition._bottomHandCardPosition2  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idKs, Carte._graphicKs, Carte._graphicIsVisibleOrNotKs, Carte._ShuffleOrNotKs, Carte._positionKs );
                        }
                    break;
                    case Carte._idKh:
                        if(Carte._positionKh == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKh, Carte._graphicKh, Carte._graphicIsVisibleOrNotKh, Carte._ShuffleOrNotKh, Carte._positionKh );
                        }
                        break;
                    case Carte._idKd:
                        if(Carte._positionKd == CardPosition._bottomHandCardPosition2  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKd, Carte._graphicKd, Carte._graphicIsVisibleOrNotKd, Carte._ShuffleOrNotKd, Carte._positionKd );           
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAsAh(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._idAd:
                    if(Carte._positionAd == CardPosition._bottomHandCardPosition3  )
                {
                    Carte.ShowLogCartePoperties(Carte._idAd, Carte._graphicAd, Carte._graphicIsVisibleOrNotAd, Carte._ShuffleOrNotAd, Carte._positionAd );           
                }
                    break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition3 )
                {
                    Carte.ShowLogCartePoperties(Carte._idAc, Carte._graphicAc, Carte._graphicIsVisibleOrNotAc, Carte._ShuffleOrNotAc, Carte._positionAc );
                }
                    break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAsAd(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._idAh:
                    if(Carte._positionAh == CardPosition._bottomHandCardPosition3  )
                {
                    Carte.ShowLogCartePoperties(Carte._idAh, Carte._graphicAh, Carte._graphicIsVisibleOrNotAh, Carte._ShuffleOrNotAh, Carte._positionAh );           
                }
                    break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition3 )
                {
                    Carte.ShowLogCartePoperties(Carte._idAc, Carte._graphicAc, Carte._graphicIsVisibleOrNotAc, Carte._ShuffleOrNotAc, Carte._positionAc );
                }
                    break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAsAc(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._idAd:
                    if(Carte._positionAd == CardPosition._bottomHandCardPosition3  )
                {
                    Carte.ShowLogCartePoperties(Carte._idAd, Carte._graphicAd, Carte._graphicIsVisibleOrNotAd, Carte._ShuffleOrNotAd, Carte._positionAd );           
                }
                    break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition3 )
                {
                    Carte.ShowLogCartePoperties(Carte._idAc, Carte._graphicAc, Carte._graphicIsVisibleOrNotAc, Carte._ShuffleOrNotAc, Carte._positionAc );
                }
                    break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAhAs(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._idAd:
                    if(Carte._positionAd == CardPosition._bottomHandCardPosition3  )
                {
                    Carte.ShowLogCartePoperties(Carte._idAd, Carte._graphicAd, Carte._graphicIsVisibleOrNotAd, Carte._ShuffleOrNotAd, Carte._positionAd );           
                }
                    break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition3 )
                {
                    Carte.ShowLogCartePoperties(Carte._idAc, Carte._graphicAc, Carte._graphicIsVisibleOrNotAc, Carte._ShuffleOrNotAc, Carte._positionAc );
                }
                    break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAhAd(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
               case Carte._idAs:
                if(Carte._positionAs == CardPosition._bottomHandCardPosition3  )
                {
                Carte.ShowLogCartePoperties(Carte._idAs, Carte._graphicAs, Carte._graphicIsVisibleOrNotAs, Carte._ShuffleOrNotAs, Carte._positionAs );
                }
                break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition3 )
                {
                    Carte.ShowLogCartePoperties(Carte._idAc, Carte._graphicAc, Carte._graphicIsVisibleOrNotAc, Carte._ShuffleOrNotAc, Carte._positionAc );
                }
                    break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAhAc(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
               case Carte._idAs:
                if(Carte._positionAs == CardPosition._bottomHandCardPosition3  )
                {
                Carte.ShowLogCartePoperties(Carte._idAs, Carte._graphicAs, Carte._graphicIsVisibleOrNotAs, Carte._ShuffleOrNotAs, Carte._positionAs );
                }
                break;
                case Carte._idAd:
                    if(Carte._positionAd == CardPosition._bottomHandCardPosition3  )
                {
                    Carte.ShowLogCartePoperties(Carte._idAd, Carte._graphicAd, Carte._graphicIsVisibleOrNotAd, Carte._ShuffleOrNotAd, Carte._positionAd );           
                }
                    break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAdAs(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._idAh:
                    if(Carte._positionAh == CardPosition._bottomHandCardPosition3   )
                {
                    Carte.ShowLogCartePoperties(Carte._idAh, Carte._graphicAh, Carte._graphicIsVisibleOrNotAh, Carte._ShuffleOrNotAh , Carte._positionAh);
                }
                    break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition3 )
                {
                    Carte.ShowLogCartePoperties(Carte._idAc, Carte._graphicAc, Carte._graphicIsVisibleOrNotAc, Carte._ShuffleOrNotAc, Carte._positionAc );
                }
                    break;   
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAdAh(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
               case Carte._idAs:
                if(Carte._positionAs == CardPosition._bottomHandCardPosition3  )
                {
                Carte.ShowLogCartePoperties(Carte._idAs, Carte._graphicAs, Carte._graphicIsVisibleOrNotAs, Carte._ShuffleOrNotAs, Carte._positionAs );
                }
                break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition3 )
                {
                    Carte.ShowLogCartePoperties(Carte._idAc, Carte._graphicAc, Carte._graphicIsVisibleOrNotAc, Carte._ShuffleOrNotAc, Carte._positionAc );
                }
                    break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAdAc(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
               case Carte._idAs:
                if(Carte._positionAs == CardPosition._bottomHandCardPosition3  )
                {
                Carte.ShowLogCartePoperties(Carte._idAs, Carte._graphicAs, Carte._graphicIsVisibleOrNotAs, Carte._ShuffleOrNotAs, Carte._positionAs );
                }
                break;
                case Carte._idAh:
                    if(Carte._positionAh == CardPosition._bottomHandCardPosition3   )
                {
                    Carte.ShowLogCartePoperties(Carte._idAh, Carte._graphicAh, Carte._graphicIsVisibleOrNotAh, Carte._ShuffleOrNotAh , Carte._positionAh);
                }
                    break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAcAs(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._idAh:
                    if(Carte._positionAh == CardPosition._bottomHandCardPosition3   )
                {
                    Carte.ShowLogCartePoperties(Carte._idAh, Carte._graphicAh, Carte._graphicIsVisibleOrNotAh, Carte._ShuffleOrNotAh , Carte._positionAh);
                }
                    break;
                case Carte._idAd:
                    if(Carte._positionAd == CardPosition._bottomHandCardPosition3  )
                {
                    Carte.ShowLogCartePoperties(Carte._idAd, Carte._graphicAd, Carte._graphicIsVisibleOrNotAd, Carte._ShuffleOrNotAd, Carte._positionAd );           
                }
                    break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAcAh(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
               case Carte._idAs:
                if(Carte._positionAs == CardPosition._bottomHandCardPosition3  )
                {
                Carte.ShowLogCartePoperties(Carte._idAs, Carte._graphicAs, Carte._graphicIsVisibleOrNotAs, Carte._ShuffleOrNotAs, Carte._positionAs );
                }
                break;
                case Carte._idAd:
                    if(Carte._positionAd == CardPosition._bottomHandCardPosition3  )
                {
                    Carte.ShowLogCartePoperties(Carte._idAd, Carte._graphicAd, Carte._graphicIsVisibleOrNotAd, Carte._ShuffleOrNotAd, Carte._positionAd );           
                }
                    break;
              
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombinationAcAd(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
               case Carte._idAs:
                if(Carte._positionAs == CardPosition._bottomHandCardPosition3  )
                {
                Carte.ShowLogCartePoperties(Carte._idAs, Carte._graphicAs, Carte._graphicIsVisibleOrNotAs, Carte._ShuffleOrNotAs, Carte._positionAs );
                }
                break;
                case Carte._idAh:
                    if(Carte._positionAh == CardPosition._bottomHandCardPosition3   )
                {
                    Carte.ShowLogCartePoperties(Carte._idAh, Carte._graphicAh, Carte._graphicIsVisibleOrNotAh, Carte._ShuffleOrNotAh , Carte._positionAh);
                }
                    break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2s2h(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {    
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2d, Carte._graphic2d, Carte._graphicIsVisibleOrNot2d, Carte._ShuffleOrNot2d, Carte._position2d );           
                        }
                        break;
                    case Carte._id2c:
                        if(Carte._position2c == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2c, Carte._graphic2c, Carte._graphicIsVisibleOrNot2c, Carte._ShuffleOrNot2c , Carte._position2c);
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2s2d(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id2h:
                    if(Carte._position2h == CardPosition._bottomHandCardPosition3   )
                    {
                        Carte.ShowLogCartePoperties(Carte._id2h, Carte._graphic2h, Carte._graphicIsVisibleOrNot2h, Carte._ShuffleOrNot2h, Carte._position2h );
                    }
                        break;     
                    case Carte._id2c:
                        if(Carte._position2c == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2c, Carte._graphic2c, Carte._graphicIsVisibleOrNot2c, Carte._ShuffleOrNot2c , Carte._position2c);
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2s2c(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id2h:
                    if(Carte._position2h == CardPosition._bottomHandCardPosition3   )
                    {
                        Carte.ShowLogCartePoperties(Carte._id2h, Carte._graphic2h, Carte._graphicIsVisibleOrNot2h, Carte._ShuffleOrNot2h, Carte._position2h );
                    }
                        break;     
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2d, Carte._graphic2d, Carte._graphicIsVisibleOrNot2d, Carte._ShuffleOrNot2d, Carte._position2d );           
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2h2s(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {    
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2d, Carte._graphic2d, Carte._graphicIsVisibleOrNot2d, Carte._ShuffleOrNot2d, Carte._position2d );           
                        }
                        break;
                    case Carte._id2c:
                        if(Carte._position2c == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2c, Carte._graphic2c, Carte._graphicIsVisibleOrNot2c, Carte._ShuffleOrNot2c , Carte._position2c);
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2h2d(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._id2s:
                    if(Carte._position2s == CardPosition._bottomHandCardPosition3   )
                    {
                    Carte.ShowLogCartePoperties(Carte._id2s, Carte._graphic2s, Carte._graphicIsVisibleOrNot2s, Carte._ShuffleOrNot2s, Carte._position2s );
                    }
                    break;     
                    case Carte._id2c:
                        if(Carte._position2c == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2c, Carte._graphic2c, Carte._graphicIsVisibleOrNot2c, Carte._ShuffleOrNot2c , Carte._position2c);
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2h2c(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._id2s:
                    if(Carte._position2s == CardPosition._bottomHandCardPosition3   )
                    {
                    Carte.ShowLogCartePoperties(Carte._id2s, Carte._graphic2s, Carte._graphicIsVisibleOrNot2s, Carte._ShuffleOrNot2s, Carte._position2s );
                    }
                    break;    
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2d, Carte._graphic2d, Carte._graphicIsVisibleOrNot2d, Carte._ShuffleOrNot2d, Carte._position2d );           
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2d2s(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {    
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2d, Carte._graphic2d, Carte._graphicIsVisibleOrNot2d, Carte._ShuffleOrNot2d, Carte._position2d );           
                        }
                        break;
                    case Carte._id2c:
                        if(Carte._position2c == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2c, Carte._graphic2c, Carte._graphicIsVisibleOrNot2c, Carte._ShuffleOrNot2c , Carte._position2c);
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2d2h(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._id2s:
                    if(Carte._position2s == CardPosition._bottomHandCardPosition3   )
                    {
                    Carte.ShowLogCartePoperties(Carte._id2s, Carte._graphic2s, Carte._graphicIsVisibleOrNot2s, Carte._ShuffleOrNot2s, Carte._position2s );
                    }
                    break;    
                    case Carte._id2c:
                        if(Carte._position2c == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2c, Carte._graphic2c, Carte._graphicIsVisibleOrNot2c, Carte._ShuffleOrNot2c , Carte._position2c);
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2d2c(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._id2s:
                    if(Carte._position2s == CardPosition._bottomHandCardPosition3   )
                    {
                    Carte.ShowLogCartePoperties(Carte._id2s, Carte._graphic2s, Carte._graphicIsVisibleOrNot2s, Carte._ShuffleOrNot2s, Carte._position2s );
                    }
                    break;
                    case Carte._id2h:
                    if(Carte._position2h == CardPosition._bottomHandCardPosition3   )
                    {
                        Carte.ShowLogCartePoperties(Carte._id2h, Carte._graphic2h, Carte._graphicIsVisibleOrNot2h, Carte._ShuffleOrNot2h, Carte._position2h );
                    }
                        break;     
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2c2s(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id2h:
                    if(Carte._position2h == CardPosition._bottomHandCardPosition3   )
                    {
                        Carte.ShowLogCartePoperties(Carte._id2h, Carte._graphic2h, Carte._graphicIsVisibleOrNot2h, Carte._ShuffleOrNot2h, Carte._position2h );
                    }
                        break;     
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2d, Carte._graphic2d, Carte._graphicIsVisibleOrNot2d, Carte._ShuffleOrNot2d, Carte._position2d );           
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2c2h(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._id2s:
                    if(Carte._position2s == CardPosition._bottomHandCardPosition3   )
                    {
                    Carte.ShowLogCartePoperties(Carte._id2s, Carte._graphic2s, Carte._graphicIsVisibleOrNot2s, Carte._ShuffleOrNot2s, Carte._position2s );
                    }
                    break;    
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2d, Carte._graphic2d, Carte._graphicIsVisibleOrNot2d, Carte._ShuffleOrNot2d, Carte._position2d );           
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination2c2d(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                case Carte._id2s:
                    if(Carte._position2s == CardPosition._bottomHandCardPosition3   )
                    {
                    Carte.ShowLogCartePoperties(Carte._id2s, Carte._graphic2s, Carte._graphicIsVisibleOrNot2s, Carte._ShuffleOrNot2s, Carte._position2s );
                    }
                    break;
                    case Carte._id2h:
                    if(Carte._position2h == CardPosition._bottomHandCardPosition3   )
                    {
                        Carte.ShowLogCartePoperties(Carte._id2h, Carte._graphic2h, Carte._graphicIsVisibleOrNot2h, Carte._ShuffleOrNot2h, Carte._position2h );
                    }
                        break;     
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3s3h(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id3d:
                        if(Carte._position3d == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3d, Carte._graphic3d, Carte._graphicIsVisibleOrNot3d, Carte._ShuffleOrNot3d, Carte._position3d );           
                        }
                        break;
                    case Carte._id3c:
                        if(Carte._position3c == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3c, Carte._graphic3c, Carte._graphicIsVisibleOrNot3c, Carte._ShuffleOrNot3c, Carte._position3c );
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3s3d(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id3h:
                        if(Carte._position3h == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3h, Carte._graphic3h, Carte._graphicIsVisibleOrNot3h, Carte._ShuffleOrNot3h, Carte._position3h );
                        }
                        break;
                    case Carte._id3c:
                        if(Carte._position3c == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3c, Carte._graphic3c, Carte._graphicIsVisibleOrNot3c, Carte._ShuffleOrNot3c, Carte._position3c );
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3s3c(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
               
                    case Carte._id3h:
                        if(Carte._position3h == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3h, Carte._graphic3h, Carte._graphicIsVisibleOrNot3h, Carte._ShuffleOrNot3h, Carte._position3h );
                        }
                        break;
                    case Carte._id3d:
                        if(Carte._position3d == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3d, Carte._graphic3d, Carte._graphicIsVisibleOrNot3d, Carte._ShuffleOrNot3d, Carte._position3d );           
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3h3s(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id3d:
                        if(Carte._position3d == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3d, Carte._graphic3d, Carte._graphicIsVisibleOrNot3d, Carte._ShuffleOrNot3d, Carte._position3d );           
                        }
                        break;
                    case Carte._id3c:
                        if(Carte._position3c == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3c, Carte._graphic3c, Carte._graphicIsVisibleOrNot3c, Carte._ShuffleOrNot3c, Carte._position3c );
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3h3d(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id3s:
                        if(Carte._position3s == CardPosition._bottomHandCardPosition3  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id3s, Carte._graphic3s, Carte._graphicIsVisibleOrNot3s, Carte._ShuffleOrNot3s, Carte._position3s );
                        }
                    break;
                    case Carte._id3c:
                        if(Carte._position3c == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3c, Carte._graphic3c, Carte._graphicIsVisibleOrNot3c, Carte._ShuffleOrNot3c, Carte._position3c );
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3h3c(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id3s:
                        if(Carte._position3s == CardPosition._bottomHandCardPosition3  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id3s, Carte._graphic3s, Carte._graphicIsVisibleOrNot3s, Carte._ShuffleOrNot3s, Carte._position3s );
                        }
                    break;
                    case Carte._id3d:
                        if(Carte._position3d == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3d, Carte._graphic3d, Carte._graphicIsVisibleOrNot3d, Carte._ShuffleOrNot3d, Carte._position3d );           
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3d3s(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id3h:
                        if(Carte._position3h == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3h, Carte._graphic3h, Carte._graphicIsVisibleOrNot3h, Carte._ShuffleOrNot3h, Carte._position3h );
                        }
                        break;
                    case Carte._id3c:
                        if(Carte._position3c == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3c, Carte._graphic3c, Carte._graphicIsVisibleOrNot3c, Carte._ShuffleOrNot3c, Carte._position3c );
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3d3h(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id3s:
                        if(Carte._position3s == CardPosition._bottomHandCardPosition3  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id3s, Carte._graphic3s, Carte._graphicIsVisibleOrNot3s, Carte._ShuffleOrNot3s, Carte._position3s );
                        }
                    break;
                    case Carte._id3c:
                        if(Carte._position3c == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3c, Carte._graphic3c, Carte._graphicIsVisibleOrNot3c, Carte._ShuffleOrNot3c, Carte._position3c );
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3d3c(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id3s:
                        if(Carte._position3s == CardPosition._bottomHandCardPosition3  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id3s, Carte._graphic3s, Carte._graphicIsVisibleOrNot3s, Carte._ShuffleOrNot3s, Carte._position3s );
                        }
                    break;
                    case Carte._id3h:
                        if(Carte._position3h == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3h, Carte._graphic3h, Carte._graphicIsVisibleOrNot3h, Carte._ShuffleOrNot3h, Carte._position3h );
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3c3s(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id3h:
                        if(Carte._position3h == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3h, Carte._graphic3h, Carte._graphicIsVisibleOrNot3h, Carte._ShuffleOrNot3h, Carte._position3h );
                        }
                        break;
                    case Carte._id3d:
                        if(Carte._position3d == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3d, Carte._graphic3d, Carte._graphicIsVisibleOrNot3d, Carte._ShuffleOrNot3d, Carte._position3d );           
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3c3h(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id3s:
                        if(Carte._position3s == CardPosition._bottomHandCardPosition3  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id3s, Carte._graphic3s, Carte._graphicIsVisibleOrNot3s, Carte._ShuffleOrNot3s, Carte._position3s );
                        }
                    break;
                    case Carte._id3d:
                        if(Carte._position3d == CardPosition._bottomHandCardPosition3  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3d, Carte._graphic3d, Carte._graphicIsVisibleOrNot3d, Carte._ShuffleOrNot3d, Carte._position3d );           
                        }
                        break;
                default:break;
            }
        },
        CheckThirdHandCardFamilleCombination3c3d(carteIdHand3, carteIdHand4)
        {
            switch(carteIdHand3)
            {
                    case Carte._id3s:
                        if(Carte._position3s == CardPosition._bottomHandCardPosition3  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id3s, Carte._graphic3s, Carte._graphicIsVisibleOrNot3s, Carte._ShuffleOrNot3s, Carte._position3s );
                        }
                    break;
                    case Carte._id3h:
                        if(Carte._position3h == CardPosition._bottomHandCardPosition3   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3h, Carte._graphic3h, Carte._graphicIsVisibleOrNot3h, Carte._ShuffleOrNot3h, Carte._position3h );
                        }
                        break;
                default:break;
            }
        },
        CheckFourthHandCardFamilleCombination(carteIdHand4)
        {
            switch(carteIdHand4)
            {
               case Carte._idAs:
                if(Carte._positionAs == CardPosition._bottomHandCardPosition4  )
                {
                Carte.ShowLogCartePoperties(Carte._idAs, Carte._graphicAs, Carte._graphicIsVisibleOrNotAs, Carte._ShuffleOrNotAs, Carte._positionAs );
                }
                break;
                case Carte._idAh:
                    if(Carte._positionAh == CardPosition._bottomHandCardPosition4   )
                {
                    Carte.ShowLogCartePoperties(Carte._idAh, Carte._graphicAh, Carte._graphicIsVisibleOrNotAh, Carte._ShuffleOrNotAh , Carte._positionAh);
                }
                    break;
                case Carte._idAd:
                    if(Carte._positionAd == CardPosition._bottomHandCardPosition4  )
                {
                    Carte.ShowLogCartePoperties(Carte._idAd, Carte._graphicAd, Carte._graphicIsVisibleOrNotAd, Carte._ShuffleOrNotAd, Carte._positionAd );           
                }
                    break;
                case Carte._idAc:
                    if(Carte._positionAc == CardPosition._bottomHandCardPosition4 )
                {
                    Carte.ShowLogCartePoperties(Carte._idAc, Carte._graphicAc, Carte._graphicIsVisibleOrNotAc, Carte._ShuffleOrNotAc, Carte._positionAc );
                }
                    break;
                case Carte._id2s:
                    if(Carte._position2s == CardPosition._bottomHandCardPosition4   )
                    {
                    Carte.ShowLogCartePoperties(Carte._id2s, Carte._graphic2s, Carte._graphicIsVisibleOrNot2s, Carte._ShuffleOrNot2s, Carte._position2s );
                    }
                    break;
                    case Carte._id2h:
                    if(Carte._position2h == CardPosition._bottomHandCardPosition4   )
                    {
                        Carte.ShowLogCartePoperties(Carte._id2h, Carte._graphic2h, Carte._graphicIsVisibleOrNot2h, Carte._ShuffleOrNot2h, Carte._position2h );
                    }
                        break;     
                    case Carte._id2d:
                        if(Carte._position2d == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2d, Carte._graphic2d, Carte._graphicIsVisibleOrNot2d, Carte._ShuffleOrNot2d, Carte._position2d );           
                        }
                        break;
                    case Carte._id2c:
                        if(Carte._position2c == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id2c, Carte._graphic2c, Carte._graphicIsVisibleOrNot2c, Carte._ShuffleOrNot2c , Carte._position2c);
                        }
                        break;
                    case Carte._id3s:
                        if(Carte._position3s == CardPosition._bottomHandCardPosition4  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id3s, Carte._graphic3s, Carte._graphicIsVisibleOrNot3s, Carte._ShuffleOrNot3s, Carte._position3s );
                        }
                    break;
                    case Carte._id3h:
                        if(Carte._position3h == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3h, Carte._graphic3h, Carte._graphicIsVisibleOrNot3h, Carte._ShuffleOrNot3h, Carte._position3h );
                        }
                        break;
                    case Carte._id3d:
                        if(Carte._position3d == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3d, Carte._graphic3d, Carte._graphicIsVisibleOrNot3d, Carte._ShuffleOrNot3d, Carte._position3d );           
                        }
                        break;
                    case Carte._id3c:
                        if(Carte._position3c == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id3c, Carte._graphic3c, Carte._graphicIsVisibleOrNot3c, Carte._ShuffleOrNot3c, Carte._position3c );
                        }
                        break;
    
                    case Carte._id4s:
                        if(Carte._position4s == CardPosition._bottomHandCardPosition4   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id4s, Carte._graphic4s, Carte._graphicIsVisibleOrNot4s, Carte._ShuffleOrNot4s, Carte._position4s );
                        }
                    break;
                    case Carte._id4h:
                        if(Carte._position4h == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4h, Carte._graphic4h, Carte._graphicIsVisibleOrNot4h, Carte._ShuffleOrNot4h, Carte._position4h );
                        }
                        break;
                    case Carte._id4d:
                        if(Carte._position4d == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4d, Carte._graphic4d, Carte._graphicIsVisibleOrNot4d, Carte._ShuffleOrNot4d , Carte._position4d);           
                        }
                        break;
                    case Carte._id4c:
                        if(Carte._position4c == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id4c, Carte._graphic4c, Carte._graphicIsVisibleOrNot4c, Carte._ShuffleOrNot4c , Carte._position4c);
                        }
                        break;
                    case Carte._id5s:
                        if(Carte._position5s == CardPosition._bottomHandCardPosition4   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id5s, Carte._graphic5s, Carte._graphicIsVisibleOrNot5s, Carte._ShuffleOrNot5s, Carte._position5s );
                        }
                    break;
                    case Carte._id5h:
                        if(Carte._position5h == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5h, Carte._graphic5h, Carte._graphicIsVisibleOrNot5h, Carte._ShuffleOrNot5h, Carte._position5h );
                        }
                        break;
                    case Carte._id5d:
                        if(Carte._position5d == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5d, Carte._graphic5d, Carte._graphicIsVisibleOrNot5d, Carte._ShuffleOrNot5d, Carte._position5d );           
                        }
                        break;
                    case Carte._id5c:
                        if(Carte._position5c == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id5c, Carte._graphic5c, Carte._graphicIsVisibleOrNot5c, Carte._ShuffleOrNot5c , Carte._position5c);
                        }
                        break;
                    case Carte._id6s:
                        if(Carte._position6s == CardPosition._bottomHandCardPosition4   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id6s, Carte._graphic6s, Carte._graphicIsVisibleOrNot6s, Carte._ShuffleOrNot6s, Carte._position6s );
                        }
                    break;
                    case Carte._id6h:
                        if(Carte._position6h == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6h, Carte._graphic6h, Carte._graphicIsVisibleOrNot6h, Carte._ShuffleOrNot6h, Carte._position6h );
                        }
                        break;
                    case Carte._id6d:
                        if(Carte._position6d == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6d, Carte._graphic6d, Carte._graphicIsVisibleOrNot6d, Carte._ShuffleOrNot6d, Carte._position6d );           
                        }
                        break;
                    case Carte._id6c:
                        if(Carte._position6c == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id6c, Carte._graphic6c, Carte._graphicIsVisibleOrNot6c, Carte._ShuffleOrNot6c, Carte._position6c );
                        }
                        break;
                    case Carte._id7s:
                        if(Carte._position7s == CardPosition._bottomHandCardPosition4  )
                        {
                    Carte.ShowLogCartePoperties(Carte._id7s, Carte._graphic7s, Carte._graphicIsVisibleOrNot7s, Carte._ShuffleOrNot7s, Carte._position7s );
                        }
                    break;
                    case Carte._id7h:
                        if(Carte._position7h == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7h, Carte._graphic7h, Carte._graphicIsVisibleOrNot7h, Carte._ShuffleOrNot7h, Carte._position7h );
                        }
                        break;
                    case Carte._id7d:
                        if(Carte._position7d == CardPosition._bottomHandCardPosition4 )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7d, Carte._graphic7d, Carte._graphicIsVisibleOrNot7d, Carte._ShuffleOrNot7d , Carte._position7d);           
                        }
                        break;
                    case Carte._id7c:
                        if(Carte._position7c == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id7c, Carte._graphic7c, Carte._graphicIsVisibleOrNot7c, Carte._ShuffleOrNot7c, Carte._position7c );
                        }
                        break;
                    case Carte._id8s:
                        if(Carte._position8s == CardPosition._bottomHandCardPosition4   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id8s, Carte._graphic8s, Carte._graphicIsVisibleOrNot8s, Carte._ShuffleOrNot8s, Carte._position8s );
                        }
                    break;
                    case Carte._id8h:
                        if(Carte._position8h == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8h, Carte._graphic8h, Carte._graphicIsVisibleOrNot8h, Carte._ShuffleOrNot8h, Carte._position8h );
                        }
                        break;
                    case Carte._id8d:
                        if(Carte._position8d == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8d, Carte._graphic8d, Carte._graphicIsVisibleOrNot8d, Carte._ShuffleOrNot8d, Carte._position8d);           
                        }
                        break;
                    case Carte._id8c:
                        if(Carte._position8c == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id8c, Carte._graphic8c, Carte._graphicIsVisibleOrNot8c, Carte._ShuffleOrNot8c, Carte._position8c );
                        }
                        break;
                    case Carte._id9s:
                        if(Carte._position9s == CardPosition._bottomHandCardPosition4   )
                        {
                    Carte.ShowLogCartePoperties(Carte._id9s, Carte._graphic9s, Carte._graphicIsVisibleOrNot9s, Carte._ShuffleOrNot9s, Carte._position9s );
                        }
                    break;
                    case Carte._id9h:
                        if(Carte._position9h == CardPosition._bottomHandCardPosition4   )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9h, Carte._graphic9h, Carte._graphicIsVisibleOrNot9h, Carte._ShuffleOrNot9h, Carte._position9h );
                        }
                        break;
                    case Carte._id9d:
                        if(Carte._position9d == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9d, Carte._graphic9d, Carte._graphicIsVisibleOrNot9d, Carte._ShuffleOrNot9d, Carte._position9d );           
                        }
                        break;
                    case Carte._id9c:
                        if(Carte._position9c == CardPosition._bottomHandCardPosition4 )
                        {
                        Carte.ShowLogCartePoperties(Carte._id9c, Carte._graphic9c, Carte._graphicIsVisibleOrNot9c, Carte._ShuffleOrNot9c, Carte._position9c );
                        }
                        break;
                    case Carte._idTs:
                        if(Carte._positionTs == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTs, Carte._graphicTs, Carte._graphicIsVisibleOrNotTs, Carte._ShuffleOrNotTs, Carte._positionTs );
                        }
                    break;
                    case Carte._idTh:
                        if(Carte._positionTh == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTh, Carte._graphicTh, Carte._graphicIsVisibleOrNotTh, Carte._ShuffleOrNotTh, Carte._positionTh );
                        }
                        break;
                    case Carte._idTd:
                        if(Carte._positionTd == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTd, Carte._graphicTd, Carte._graphicIsVisibleOrNotTd, Carte._ShuffleOrNotTd, Carte._positionTd );           
                        }
                        break;
                    case Carte._idTc:
                        if(Carte._positionTc == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idTc, Carte._graphicTc, Carte._graphicIsVisibleOrNotTc, Carte._ShuffleOrNotTc, Carte._positionTc );
                        }
                        break;
                    case Carte._idJs:
                        if(Carte._positionJs == CardPosition._bottomHandCardPosition4  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idJs, Carte._graphicJs, Carte._graphicIsVisibleOrNotJs, Carte._ShuffleOrNotJs, Carte._positionJs );
                        }
                    break;
                    case Carte._idJh:
                        if(Carte._positionJh == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJh, Carte._graphicJh, Carte._graphicIsVisibleOrNotJh, Carte._ShuffleOrNotJh, Carte._positionJh );
                        }
                        break;
                    case Carte._idJd:
                        if(Carte._positionJd == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJd, Carte._graphicJd, Carte._graphicIsVisibleOrNotJd, Carte._ShuffleOrNotJd, Carte._positionJd );           
                        }
                        break;
                    case Carte._idJc:
                        if(Carte._positionJc == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idJc, Carte._graphicJc, Carte._graphicIsVisibleOrNotJc, Carte._ShuffleOrNotJc, Carte._positionJc );
                        }
                        break;
                    case Carte._idQs:
                        if(Carte._positionQs == CardPosition._bottomHandCardPosition4  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idQs, Carte._graphicQs, Carte._graphicIsVisibleOrNotQs, Carte._ShuffleOrNotQs, Carte._positionQs );
                        }
                    break;
                    case Carte._idQh:
                        if(Carte._positionQh == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQh, Carte._graphicQh, Carte._graphicIsVisibleOrNotQh, Carte._ShuffleOrNotQh, Carte._positionQh );
                        }
                        break;
                    case Carte._idQd:
                        if(Carte._positionQd == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQd, Carte._graphicQd, Carte._graphicIsVisibleOrNotQd, Carte._ShuffleOrNotQd, Carte._positionQd );           
                        }
                        break;
                    case Carte._idQc:
                        if(Carte._positionQc == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idQc, Carte._graphicQc, Carte._graphicIsVisibleOrNotQc, Carte._ShuffleOrNotQc, Carte._positionQc );
                        }
                        break;
                    case Carte._idKs:
                        if(Carte._positionKs == CardPosition._bottomHandCardPosition4  )
                        {
                    Carte.ShowLogCartePoperties(Carte._idKs, Carte._graphicKs, Carte._graphicIsVisibleOrNotKs, Carte._ShuffleOrNotKs, Carte._positionKs );
                        }
                    break;
                    case Carte._idKh:
                        if(Carte._positionKh == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKh, Carte._graphicKh, Carte._graphicIsVisibleOrNotKh, Carte._ShuffleOrNotKh, Carte._positionKh );
                        }
                        break;
                    case Carte._idKd:
                        if(Carte._positionKd == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKd, Carte._graphicKd, Carte._graphicIsVisibleOrNotKd, Carte._ShuffleOrNotKd, Carte._positionKd );           
                        }
                        break;
                    case Carte._idKc:
                        if(Carte._positionKc == CardPosition._bottomHandCardPosition4  )
                        {
                        Carte.ShowLogCartePoperties(Carte._idKc, Carte._graphicKc, Carte._graphicIsVisibleOrNotKc, Carte._ShuffleOrNotKc, Carte._positionKc );
                        }
                        break;
                default:break;
            }
        }
};