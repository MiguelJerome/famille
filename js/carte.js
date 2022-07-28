var Carte = {
    _idAs: 0,
    _graphicAs: "A♠",
    _graphicIsVisibleOrNotAs: 0,
    _ShuffleOrNotAs: 0,
    _idAh: 1,
    _graphicAh: "A❤",
    _graphicIsVisibleOrNotAh: 0,
    _ShuffleOrNotAh: 0,
    _idAd: 2,
    _graphicAd: "A♦",
    _graphicIsVisibleOrNotAd: 0,
    _ShuffleOrNotAd: 0,
    _idAc: 3,
    _graphicAc: "A♣",
    _graphicIsVisibleOrNotAc: 0,
    _ShuffleOrNotAc: 0,
    

    SetCarteBehavior(carteId, graphicIsVisibleOrNot)
    {
        
        switch(carteId)
        {
           case Carte._idAs:
            Carte._graphicIsVisibleOrNotAs = graphicIsVisibleOrNot;
            console.log("id " + Carte._idAs +" Graphic: " + Carte._graphicAs);
            console.log("id " + Carte._idAs + " visibility: " + Carte._graphicIsVisibleOrNotAs);
            console.log("id " + Carte._idAs + " shuffle: " + Carte._ShuffleOrNotAs);
            break;
            case Carte._idAh:
                Carte._graphicIsVisibleOrNotAh = graphicIsVisibleOrNot;
                console.log("id " + Carte._idAh +" Graphic: " + Carte._graphicAh);
                console.log("id " + Carte._idAh + " visibility: " + Carte._graphicIsVisibleOrNotAh);
                console.log("id " + Carte._idAh + " shuffle: " + Carte._ShuffleOrNotAh);
            break;
            case Carte._idAd:
                Carte._graphicIsVisibleOrNotAd = graphicIsVisibleOrNot;
                console.log("id " + Carte._idAd +" Graphic: " + Carte._graphicAd);
                console.log("id " + Carte._idAd + " visibility: " + Carte._graphicIsVisibleOrNotAd);
                console.log("id " + Carte._idAd + " shuffle: " + Carte._ShuffleOrNotAd);
            break;
            case Carte._idAc:
                Carte._graphicIsVisibleOrNotAc = graphicIsVisibleOrNot;
                console.log("id " + Carte._idAc +" Graphic: " + Carte._graphicAc);
                console.log("id " + Carte._idAc + " visibility: " + Carte._graphicIsVisibleOrNotAc);
                console.log("id " + Carte._idAc + " shuffle: " + Carte._ShuffleOrNotAc);
            break;
            default:break;

        }
    }
           
};