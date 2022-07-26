var Carte = {
    _idAs: 1,
    _graphicAs: "A♠",
    _graphicIsVisibleOrNotAs: 0,
    _ShuffleOrNotAs: 0,
    _positionAs: CardPosition._startingCardDeck1,
    _idAh: 2,
    _graphicAh: "A❤" ,
    _graphicIsVisibleOrNotAh: 0,
    _ShuffleOrNotAh: 0,
    _positionAh: CardPosition._startingCardDeck2,
    _idAd: 3,
    _graphicAd: "A◆" ,
    _graphicIsVisibleOrNotAd: 0,
    _ShuffleOrNotAd: 0,
    _positionAd: CardPosition._startingCardDeck3,
    _idAc: 4,
    _graphicAc: "A♣" ,
    _graphicIsVisibleOrNotAc: 0,
    _ShuffleOrNotAc: 0,
    _positionAc: CardPosition._startingCardDeck4,

    _id2s: 5,
    _graphic2s: "2♠",
    _graphicIsVisibleOrNot2s: 0,
    _ShuffleOrNot2s: 0,
    _position2s: CardPosition._startingCardDeck5,
    _id2h: 6,
    _graphic2h: "2❤",
    _graphicIsVisibleOrNot2h: 0,
    _ShuffleOrNot2h: 0,
    _position2h: CardPosition._startingCardDeck6,
    _id2d: 7,
    _graphic2d: "2◆",
    _graphicIsVisibleOrNot2d: 0,
    _ShuffleOrNot2d: 0,
    _position2d: CardPosition._startingCardDeck7,
    _id2c: 8,
    _graphic2c: "2♣",
    _graphicIsVisibleOrNot2c: 0,
    _ShuffleOrNot2c: 0,
    _position2c: CardPosition._startingCardDeck8,

    _id3s: 9,
    _graphic3s: "3♠",
    _graphicIsVisibleOrNot3s: 0,
    _ShuffleOrNot3s: 0,
    _position3s: CardPosition._startingCardDeck9,
    _id3h: 10,
    _graphic3h: "3❤",
    _graphicIsVisibleOrNot3h: 0,
    _ShuffleOrNot3h: 0,
    _position3h: CardPosition._startingCardDeck10,
    _id3d: 11,
    _graphic3d: "3◆",
    _graphicIsVisibleOrNot3d: 0,
    _ShuffleOrNot3d: 0,
    _position3d: CardPosition._startingCardDeck11,
    _id3c: 12,
    _graphic3c: "3♣",
    _graphicIsVisibleOrNot3c: 0,
    _ShuffleOrNot3c: 0,
    _position3c: CardPosition._startingCardDeck12,

    _id4s: 13,
    _graphic4s: "4♠",
    _graphicIsVisibleOrNot4s: 0,
    _ShuffleOrNot4s: 0,
    _position4s: CardPosition._startingCardDeck13,
    _id4h: 14,
    _graphic4h: "4❤",
    _graphicIsVisibleOrNot4h: 0,
    _ShuffleOrNot4h: 0,
    _position4h: CardPosition._startingCardDeck14,
    _id4d: 15,
    _graphic4d: "4◆",
    _graphicIsVisibleOrNot4d: 0,
    _ShuffleOrNot4d: 0,
    _position4d: CardPosition._startingCardDeck15,
    _id4c: 16,
    _graphic4c: "4♣",
    _graphicIsVisibleOrNot4c: 0,
    _ShuffleOrNot4c: 0,
    _position4c: CardPosition._startingCardDeck16,

    _id5s: 17,
    _graphic5s: "5♠",
    _graphicIsVisibleOrNot5s: 0,
    _ShuffleOrNot5s: 0,
    _position5s: CardPosition._startingCardDeck17,
    _id5h: 18,
    _graphic5h: "5❤",
    _graphicIsVisibleOrNot5h: 0,
    _ShuffleOrNot5h: 0,
    _position5h: CardPosition._startingCardDeck18,
    _id5d: 19,
    _graphic5d: "5◆",
    _graphicIsVisibleOrNot5d: 0,
    _ShuffleOrNot5d: 0,
    _position5d: CardPosition._startingCardDeck19,
    _id5c: 20,
    _graphic5c: "5♣",
    _graphicIsVisibleOrNot5c: 0,
    _ShuffleOrNot5c: 0,
    _position5c: CardPosition._startingCardDeck20,

    _id6s: 21,
    _graphic6s: "6♠",
    _graphicIsVisibleOrNot6s: 0,
    _ShuffleOrNot6s: 0,
    _position6s: CardPosition._startingCardDeck21,
    _id6h: 22,
    _graphic6h: "6❤",
    _graphicIsVisibleOrNot6h: 0,
    _ShuffleOrNot6h: 0,
    _position6h: CardPosition._startingCardDeck22,
    _id6d: 23,
    _graphic6d: "6◆",
    _graphicIsVisibleOrNot6d: 0,
    _ShuffleOrNot6d: 0,
    _position6d: CardPosition._startingCardDeck23,
    _id6c: 24,
    _graphic6c: "6♣",
    _graphicIsVisibleOrNot6c: 0,
    _ShuffleOrNot6c: 0,
    _position6c: CardPosition._startingCardDeck24,

    _id7s: 25,
    _graphic7s: "7♠",
    _graphicIsVisibleOrNot7s: 0,
    _ShuffleOrNot7s: 0,
    _position7s: CardPosition._startingCardDeck25,
    _id7h: 26,
    _graphic7h: "7❤",
    _graphicIsVisibleOrNot7h: 0,
    _ShuffleOrNot7h: 0,
    _position7h: CardPosition._startingCardDeck26,
    _id7d: 27,
    _graphic7d: "7◆",
    _graphicIsVisibleOrNot7d: 0,
    _ShuffleOrNot7d: 0,
    _position7d: CardPosition._startingCardDeck27,
    _id7c: 28,
    _graphic7c: "7♣",
    _graphicIsVisibleOrNot7c: 0,
    _ShuffleOrNot7c: 0,
    _position7c: CardPosition._startingCardDeck28,

    _id8s: 29,
    _graphic8s: "8♠",
    _graphicIsVisibleOrNot8s: 0,
    _ShuffleOrNot8s: 0,
    _position8s: CardPosition._startingCardDeck29,
    _id8h: 30,
    _graphic8h: "8❤",
    _graphicIsVisibleOrNot8h: 0,
    _ShuffleOrNot8h: 0,
    _position8h: CardPosition._startingCardDeck30,
    _id8d: 31,
    _graphic8d: "8◆",
    _graphicIsVisibleOrNot8d: 0,
    _ShuffleOrNot8d: 0,
    _position8d: CardPosition._startingCardDeck31,
    _id8c: 32,
    _graphic8c: "8♣",
    _graphicIsVisibleOrNot8c: 0,
    _ShuffleOrNot8c: 0,
    _position8c: CardPosition._startingCardDeck32,
    
    _id9s: 33,
    _graphic9s: "9♠",
    _graphicIsVisibleOrNot9s: 0,
    _ShuffleOrNot9s: 0,
    _position9s: CardPosition._startingCardDeck33,
    _id9h: 34,
    _graphic9h: "9❤",
    _graphicIsVisibleOrNot9h: 0,
    _ShuffleOrNot9h: 0,
    _position9h: CardPosition._startingCardDeck34,
    _id9d: 35,
    _graphic9d: "9◆",
    _graphicIsVisibleOrNot9d: 0,
    _ShuffleOrNot9d: 0,
    _position9d: CardPosition._startingCardDeck35,
    _id9c: 36,
    _graphic9c: "9♣",
    _graphicIsVisibleOrNot9c: 0,
    _ShuffleOrNot9c: 0,
    _position9c: CardPosition._startingCardDeck36,

    _idTs: 37,
    _graphicTs: "T♠",
    _graphicIsVisibleOrNotTs: 0,
    _ShuffleOrNotTs: 0,
    _positionTs: CardPosition._startingCardDeck37,
    _idTh: 38,
    _graphicTh: "T❤",
    _graphicIsVisibleOrNotTh: 0,
    _ShuffleOrNotTh: 0,
    _positionTh: CardPosition._startingCardDeck38,
    _idTd: 39,
    _graphicTd: "T◆",
    _graphicIsVisibleOrNotTd: 0,
    _ShuffleOrNotTd: 0,
    _positionTd: CardPosition._startingCardDeck39,
    _idTc: 40,
    _graphicTc: "T♣",
    _graphicIsVisibleOrNotTc: 0,
    _ShuffleOrNotTc: 0,
    _positionTc: CardPosition._startingCardDeck40,

    _idJs: 41,
    _graphicJs: "J♠",
    _graphicIsVisibleOrNotJs: 0,
    _ShuffleOrNotJs: 0,
    _positionJs: CardPosition._startingCardDeck41,
    _idJh: 42,
    _graphicJh: "J❤",
    _graphicIsVisibleOrNotJh: 0,
    _ShuffleOrNotJh: 0,
    _positionJh: CardPosition._startingCardDeck42,
    _idJd: 43,
    _graphicJd: "J◆",
    _graphicIsVisibleOrNotJd: 0,
    _ShuffleOrNotJd: 0,
    _positionJd: CardPosition._startingCardDeck43,
    _idJc: 44,
    _graphicJc: "J♣",
    _graphicIsVisibleOrNotJc: 0,
    _ShuffleOrNotJc: 0,
    _positionJc: CardPosition._startingCardDeck44,

    _idQs: 45,
    _graphicQs: "Q♠",
    _graphicIsVisibleOrNotQs: 0,
    _ShuffleOrNotQs: 0,
    _positionQs: CardPosition._startingCardDeck45,
    _idQh: 46,
    _graphicQh: "Q❤",
    _graphicIsVisibleOrNotQh: 0,
    _ShuffleOrNotQh: 0,
    _positionQh: CardPosition._startingCardDeck46,
    _idQd: 47,
    _graphicQd: "Q◆",
    _graphicIsVisibleOrNotQd: 0,
    _ShuffleOrNotQd: 0,
    _positionQd: CardPosition._startingCardDeck47,
    _idQc: 48,
    _graphicQc: "Q♣",
    _graphicIsVisibleOrNotQc: 0,
    _ShuffleOrNotQc: 0,
    _positionQc: CardPosition._startingCardDeck48,

    _idKs: 49,
    _graphicKs: "K♠",
    _graphicIsVisibleOrNotKs: 0,
    _ShuffleOrNotKs: 0,
    _positionKs: CardPosition._startingCardDeck49,
    _idKh: 50,
    _graphicKh: "K❤",
    _graphicIsVisibleOrNotKh: 0,
    _ShuffleOrNotKh: 0,
    _positionKh: CardPosition._startingCardDeck50,
    _idKd: 51,
    _graphicKd: "K◆",
    _graphicIsVisibleOrNotKd: 0,
    _ShuffleOrNotKd: 0,
    _positionKd: CardPosition._startingCardDeck51,
    _idKc: 52,
    _graphicKc: "K♣",
    _graphicIsVisibleOrNotKc: 0,
    _ShuffleOrNotKc: 0,
    _positionKc: CardPosition._startingCardDeck52,

    _cardAllSpadesSuit: [],
    _cardAllHeartsSuit: [],
    _cardAllDiamondsSuit: [],
    _cardAllClubsSuit: [],

    _indexFamilleA: 0,
    _indexFamille2: 1,
    _indexFamille3: 2,
    _indexFamille4: 3,
    _indexFamille5: 4,
    _indexFamille6: 5,
    _indexFamille7: 6,
    _indexFamille8: 7,
    _indexFamille9: 8,
    _indexFamilleT: 9,
    _indexFamilleJ: 10,
    _indexFamilleQ: 11,
    _indexFamilleK: 12, 
    AddAllSpadesSuitToTheArray()
    {
        Carte._cardAllSpadesSuit.push(Carte._graphicAs);
        Carte._cardAllSpadesSuit.push(Carte._graphic2s);
        Carte._cardAllSpadesSuit.push(Carte._graphic3s);
        Carte._cardAllSpadesSuit.push(Carte._graphic4s);
        Carte._cardAllSpadesSuit.push(Carte._graphic5s);
        Carte._cardAllSpadesSuit.push(Carte._graphic6s);
        Carte._cardAllSpadesSuit.push(Carte._graphic7s);
        Carte._cardAllSpadesSuit.push(Carte._graphic8s);
        Carte._cardAllSpadesSuit.push(Carte._graphic9s);
        Carte._cardAllSpadesSuit.push(Carte._graphicTs);
        Carte._cardAllSpadesSuit.push(Carte._graphicJs);
        Carte._cardAllSpadesSuit.push(Carte._graphicQs);
        Carte._cardAllSpadesSuit.push(Carte._graphicKs);
    },
    AddAllHeartsSuitToTheArray()
    {
        Carte._cardAllHeartsSuit.push(Carte._graphicAh);
        Carte._cardAllHeartsSuit.push(Carte._graphic2h);
        Carte._cardAllHeartsSuit.push(Carte._graphic3h);
        Carte._cardAllHeartsSuit.push(Carte._graphic4h);
        Carte._cardAllHeartsSuit.push(Carte._graphic5h);
        Carte._cardAllHeartsSuit.push(Carte._graphic6h);
        Carte._cardAllHeartsSuit.push(Carte._graphic7h);
        Carte._cardAllHeartsSuit.push(Carte._graphic8h);
        Carte._cardAllHeartsSuit.push(Carte._graphic9h);
        Carte._cardAllHeartsSuit.push(Carte._graphicTh);
        Carte._cardAllHeartsSuit.push(Carte._graphicJh);
        Carte._cardAllHeartsSuit.push(Carte._graphicQh);
        Carte._cardAllHeartsSuit.push(Carte._graphicKh);
    },
    AddAllDiamondsSuitToTheArray()
    {
        Carte._cardAllDiamondsSuit.push(Carte._graphicAd);
        Carte._cardAllDiamondsSuit.push(Carte._graphic2d);
        Carte._cardAllDiamondsSuit.push(Carte._graphic3d);
        Carte._cardAllDiamondsSuit.push(Carte._graphic4d);
        Carte._cardAllDiamondsSuit.push(Carte._graphic5d);
        Carte._cardAllDiamondsSuit.push(Carte._graphic6d);
        Carte._cardAllDiamondsSuit.push(Carte._graphic7d);
        Carte._cardAllDiamondsSuit.push(Carte._graphic8d);
        Carte._cardAllDiamondsSuit.push(Carte._graphic9d);
        Carte._cardAllDiamondsSuit.push(Carte._graphicTd);
        Carte._cardAllDiamondsSuit.push(Carte._graphicJd);
        Carte._cardAllDiamondsSuit.push(Carte._graphicQd);
        Carte._cardAllDiamondsSuit.push(Carte._graphicKd);
    },
    AddAllClubsSuitToTheArray()
    {
        Carte._cardAllClubsSuit.push(Carte._graphicAc);
        Carte._cardAllClubsSuit.push(Carte._graphic2c);
        Carte._cardAllClubsSuit.push(Carte._graphic3c);
        Carte._cardAllClubsSuit.push(Carte._graphic4c);
        Carte._cardAllClubsSuit.push(Carte._graphic5c);
        Carte._cardAllClubsSuit.push(Carte._graphic6c);
        Carte._cardAllClubsSuit.push(Carte._graphic7c);
        Carte._cardAllClubsSuit.push(Carte._graphic8c);
        Carte._cardAllClubsSuit.push(Carte._graphic9c);
        Carte._cardAllClubsSuit.push(Carte._graphicTc);
        Carte._cardAllClubsSuit.push(Carte._graphicJc);
        Carte._cardAllClubsSuit.push(Carte._graphicQc);
        Carte._cardAllClubsSuit.push(Carte._graphicKc);
    },
    ShowGameStartAllCardsProperties(carteId)
    {
        switch(carteId)
        {
           case Carte._idAs:
            Carte.ShowLogCartePoperties(Carte._idAs, Carte._graphicAs, Carte._graphicIsVisibleOrNotAs, Carte._ShuffleOrNotAs, Carte._positionAs );
            break;
            case Carte._idAh:
                Carte.ShowLogCartePoperties(Carte._idAh, Carte._graphicAh, Carte._graphicIsVisibleOrNotAh, Carte._ShuffleOrNotAh , Carte._positionAh);
            break;
            case Carte._idAd:
                Carte.ShowLogCartePoperties(Carte._idAd, Carte._graphicAd, Carte._graphicIsVisibleOrNotAd, Carte._ShuffleOrNotAd, Carte._positionAd );           
            break;
            case Carte._idAc:
                Carte.ShowLogCartePoperties(Carte._idAc, Carte._graphicAc, Carte._graphicIsVisibleOrNotAc, Carte._ShuffleOrNotAc, Carte._positionAc );
            break;
            case Carte._id2s:
                Carte.ShowLogCartePoperties(Carte._id2s, Carte._graphic2s, Carte._graphicIsVisibleOrNot2s, Carte._ShuffleOrNot2s, Carte._position2s );
                break;
                case Carte._id2h:
                    Carte.ShowLogCartePoperties(Carte._id2h, Carte._graphic2h, Carte._graphicIsVisibleOrNot2h, Carte._ShuffleOrNot2h, Carte._position2h );
                break;
                case Carte._id2d:
                    Carte.ShowLogCartePoperties(Carte._id2d, Carte._graphic2d, Carte._graphicIsVisibleOrNot2d, Carte._ShuffleOrNot2d, Carte._position2d );           
                break;
                case Carte._id2c:
                    Carte.ShowLogCartePoperties(Carte._id2c, Carte._graphic2c, Carte._graphicIsVisibleOrNot2c, Carte._ShuffleOrNot2c , Carte._position2c);
                break;
                case Carte._id3s:
                Carte.ShowLogCartePoperties(Carte._id3s, Carte._graphic3s, Carte._graphicIsVisibleOrNot3s, Carte._ShuffleOrNot3s, Carte._position3s );
                break;
                case Carte._id3h:
                    Carte.ShowLogCartePoperties(Carte._id3h, Carte._graphic3h, Carte._graphicIsVisibleOrNot3h, Carte._ShuffleOrNot3h, Carte._position3h );
                break;
                case Carte._id3d:
                    Carte.ShowLogCartePoperties(Carte._id3d, Carte._graphic3d, Carte._graphicIsVisibleOrNot3d, Carte._ShuffleOrNot3d, Carte._position3d );           
                break;
                case Carte._id3c:
                    Carte.ShowLogCartePoperties(Carte._id3c, Carte._graphic3c, Carte._graphicIsVisibleOrNot3c, Carte._ShuffleOrNot3c, Carte._position3c );
                break;

                case Carte._id4s:
                Carte.ShowLogCartePoperties(Carte._id4s, Carte._graphic4s, Carte._graphicIsVisibleOrNot4s, Carte._ShuffleOrNot4s, Carte._position4s );
                break;
                case Carte._id4h:
                    Carte.ShowLogCartePoperties(Carte._id4h, Carte._graphic4h, Carte._graphicIsVisibleOrNot4h, Carte._ShuffleOrNot4h, Carte._position4h );
                break;
                case Carte._id4d:
                    Carte.ShowLogCartePoperties(Carte._id4d, Carte._graphic4d, Carte._graphicIsVisibleOrNot4d, Carte._ShuffleOrNot4d , Carte._position4d);           
                break;
                case Carte._id4c:
                    Carte.ShowLogCartePoperties(Carte._id4c, Carte._graphic4c, Carte._graphicIsVisibleOrNot4c, Carte._ShuffleOrNot4c , Carte._position4c);
                break;
                case Carte._id5s:
                Carte.ShowLogCartePoperties(Carte._id5s, Carte._graphic5s, Carte._graphicIsVisibleOrNot5s, Carte._ShuffleOrNot5s, Carte._position5s );
                break;
                case Carte._id5h:
                    Carte.ShowLogCartePoperties(Carte._id5h, Carte._graphic5h, Carte._graphicIsVisibleOrNot5h, Carte._ShuffleOrNot5h, Carte._position5h );
                break;
                case Carte._id5d:
                    Carte.ShowLogCartePoperties(Carte._id5d, Carte._graphic5d, Carte._graphicIsVisibleOrNot5d, Carte._ShuffleOrNot5d, Carte._position5d );           
                break;
                case Carte._id5c:
                    Carte.ShowLogCartePoperties(Carte._id5c, Carte._graphic5c, Carte._graphicIsVisibleOrNot5c, Carte._ShuffleOrNot5c , Carte._position5c);
                break;
                case Carte._id6s:
                Carte.ShowLogCartePoperties(Carte._id6s, Carte._graphic6s, Carte._graphicIsVisibleOrNot6s, Carte._ShuffleOrNot6s, Carte._position6s );
                break;
                case Carte._id6h:
                    Carte.ShowLogCartePoperties(Carte._id6h, Carte._graphic6h, Carte._graphicIsVisibleOrNot6h, Carte._ShuffleOrNot6h, Carte._position6h );
                break;
                case Carte._id6d:
                    Carte.ShowLogCartePoperties(Carte._id6d, Carte._graphic6d, Carte._graphicIsVisibleOrNot6d, Carte._ShuffleOrNot6d, Carte._position6d );           
                break;
                case Carte._id6c:
                    Carte.ShowLogCartePoperties(Carte._id6c, Carte._graphic6c, Carte._graphicIsVisibleOrNot6c, Carte._ShuffleOrNot6c, Carte._position6c );
                break;
                case Carte._id7s:
                Carte.ShowLogCartePoperties(Carte._id7s, Carte._graphic7s, Carte._graphicIsVisibleOrNot7s, Carte._ShuffleOrNot7s, Carte._position7s );
                break;
                case Carte._id7h:
                    Carte.ShowLogCartePoperties(Carte._id7h, Carte._graphic7h, Carte._graphicIsVisibleOrNot7h, Carte._ShuffleOrNot7h, Carte._position7h );
                break;
                case Carte._id7d:
                    Carte.ShowLogCartePoperties(Carte._id7d, Carte._graphic7d, Carte._graphicIsVisibleOrNot7d, Carte._ShuffleOrNot7d , Carte._position7d);           
                break;
                case Carte._id7c:
                    Carte.ShowLogCartePoperties(Carte._id7c, Carte._graphic7c, Carte._graphicIsVisibleOrNot7c, Carte._ShuffleOrNot7c, Carte._position7c );
                break;
                case Carte._id8s:
                Carte.ShowLogCartePoperties(Carte._id8s, Carte._graphic8s, Carte._graphicIsVisibleOrNot8s, Carte._ShuffleOrNot8s, Carte._position8s );
                break;
                case Carte._id8h:
                    Carte.ShowLogCartePoperties(Carte._id8h, Carte._graphic8h, Carte._graphicIsVisibleOrNot8h, Carte._ShuffleOrNot8h, Carte._position8h );
                break;
                case Carte._id8d:
                    Carte.ShowLogCartePoperties(Carte._id8d, Carte._graphic8d, Carte._graphicIsVisibleOrNot8d, Carte._ShuffleOrNot8d, Carte._position8d);           
                break;
                case Carte._id8c:
                    Carte.ShowLogCartePoperties(Carte._id8c, Carte._graphic8c, Carte._graphicIsVisibleOrNot8c, Carte._ShuffleOrNot8c, Carte._position8c );
                break;
                case Carte._id9s:
                Carte.ShowLogCartePoperties(Carte._id9s, Carte._graphic9s, Carte._graphicIsVisibleOrNot9s, Carte._ShuffleOrNot9s, Carte._position9s );
                break;
                case Carte._id9h:
                    Carte.ShowLogCartePoperties(Carte._id9h, Carte._graphic9h, Carte._graphicIsVisibleOrNot9h, Carte._ShuffleOrNot9h, Carte._position9h );
                break;
                case Carte._id9d:
                    Carte.ShowLogCartePoperties(Carte._id9d, Carte._graphic9d, Carte._graphicIsVisibleOrNot9d, Carte._ShuffleOrNot9d, Carte._position9d );           
                break;
                case Carte._id9c:
                    Carte.ShowLogCartePoperties(Carte._id9c, Carte._graphic9c, Carte._graphicIsVisibleOrNot9c, Carte._ShuffleOrNot9c, Carte._position9c );
                break;
                case Carte._idTs:
                Carte.ShowLogCartePoperties(Carte._idTs, Carte._graphicTs, Carte._graphicIsVisibleOrNotTs, Carte._ShuffleOrNotTs, Carte._positionTs );
                break;
                case Carte._idTh:
                    Carte.ShowLogCartePoperties(Carte._idTh, Carte._graphicTh, Carte._graphicIsVisibleOrNotTh, Carte._ShuffleOrNotTh, Carte._positionTh );
                break;
                case Carte._idTd:
                    Carte.ShowLogCartePoperties(Carte._idTd, Carte._graphicTd, Carte._graphicIsVisibleOrNotTd, Carte._ShuffleOrNotTd, Carte._positionTd );           
                break;
                case Carte._idTc:
                    Carte.ShowLogCartePoperties(Carte._idTc, Carte._graphicTc, Carte._graphicIsVisibleOrNotTc, Carte._ShuffleOrNotTc, Carte._positionTc );
                break;
                case Carte._idJs:
                Carte.ShowLogCartePoperties(Carte._idJs, Carte._graphicJs, Carte._graphicIsVisibleOrNotJs, Carte._ShuffleOrNotJs, Carte._positionJs );
                break;
                case Carte._idJh:
                    Carte.ShowLogCartePoperties(Carte._idJh, Carte._graphicJh, Carte._graphicIsVisibleOrNotJh, Carte._ShuffleOrNotJh, Carte._positionJh );
                break;
                case Carte._idJd:
                    Carte.ShowLogCartePoperties(Carte._idJd, Carte._graphicJd, Carte._graphicIsVisibleOrNotJd, Carte._ShuffleOrNotJd, Carte._positionJd );           
                break;
                case Carte._idJc:
                    Carte.ShowLogCartePoperties(Carte._idJc, Carte._graphicJc, Carte._graphicIsVisibleOrNotJc, Carte._ShuffleOrNotJc, Carte._positionJc );
                break;
                case Carte._idQs:
                Carte.ShowLogCartePoperties(Carte._idQs, Carte._graphicQs, Carte._graphicIsVisibleOrNotQs, Carte._ShuffleOrNotQs, Carte._positionQs );
                break;
                case Carte._idQh:
                    Carte.ShowLogCartePoperties(Carte._idQh, Carte._graphicQh, Carte._graphicIsVisibleOrNotQh, Carte._ShuffleOrNotQh, Carte._positionQh );
                break;
                case Carte._idQd:
                    Carte.ShowLogCartePoperties(Carte._idQd, Carte._graphicQd, Carte._graphicIsVisibleOrNotQd, Carte._ShuffleOrNotQd, Carte._positionQd );           
                break;
                case Carte._idQc:
                    Carte.ShowLogCartePoperties(Carte._idQc, Carte._graphicQc, Carte._graphicIsVisibleOrNotQc, Carte._ShuffleOrNotQc, Carte._positionQc );
                break;
                case Carte._idKs:
                Carte.ShowLogCartePoperties(Carte._idKs, Carte._graphicKs, Carte._graphicIsVisibleOrNotKs, Carte._ShuffleOrNotKs, Carte._positionKs );
                break;
                case Carte._idKh:
                    Carte.ShowLogCartePoperties(Carte._idKh, Carte._graphicKh, Carte._graphicIsVisibleOrNotKh, Carte._ShuffleOrNotKh, Carte._positionKh );
                break;
                case Carte._idKd:
                    Carte.ShowLogCartePoperties(Carte._idKd, Carte._graphicKd, Carte._graphicIsVisibleOrNotKd, Carte._ShuffleOrNotKd, Carte._positionKd );           
                break;
                case Carte._idKc:
                    Carte.ShowLogCartePoperties(Carte._idKc, Carte._graphicKc, Carte._graphicIsVisibleOrNotKc, Carte._ShuffleOrNotKc, Carte._positionKc );
                break;
            default:break;
        }
    },          
    ShowLogCartePoperties(carteId, carteGraphic, carteVisibilityState, carteShuffleState, cartePosition)
    {
        console.log("id " + carteId +" Graphic: " + carteGraphic);
        console.log("id " + carteId + " visibility: " + carteVisibilityState);
        console.log("id " + carteId + " shuffle: " + carteShuffleState);
        console.log("id " + carteId + " position: " + cartePosition);
    }
};