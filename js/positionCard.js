var CardPosition ={
    _deadZonePosition: 0,
    _boardCardPosition1: 4,
    _boardCardPosition2: 5,
    _boardCardPosition3: 6,
    _boardCardPosition4: 7,

    _topHandCardPosition1: 8,
    _topHandPosition2: 9,
    _topHandPosition3: 10,
    _topHandPosition4: 11,

    _bottomHandCardPosition1: 12,
    _bottomPosition2: 13,
    _bottomPosition3: 14,
    _bottomPosition4: 15,

    _startingCardDeck1: 101,
    _startingCardDeck2: 102,
    _startingCardDeck3: 103,
    _startingCardDeck4: 104,
    _startingCardDeck5: 105,
    _startingCardDeck6: 106,
    _startingCardDeck7: 107,
    _startingCardDeck8: 108,
    _startingCardDeck9: 109,
    _startingCardDeck10: 110,
    _startingCardDeck11: 111,
    _startingCardDeck12: 112,
    _startingCardDeck13: 113,
    _startingCardDeck14: 114,
    _startingCardDeck15: 115,
    _startingCardDeck16: 116,
    _startingCardDeck17: 117,
    _startingCardDeck18: 118,
    _startingCardDeck19: 119,
    _startingCardDeck20: 120,
    _startingCardDeck21: 121,
    _startingCardDeck22: 122,
    _startingCardDeck23: 123,
    _startingCardDeck24: 124,
    _startingCardDeck25: 125,
    _startingCardDeck26: 126,
    _startingCardDeck27: 127,
    _startingCardDeck28: 128,
    _startingCardDeck29: 129,
    _startingCardDeck30: 130,
    _startingCardDeck31: 131,
    _startingCardDeck32: 132,
    _startingCardDeck33: 133,
    _startingCardDeck34: 134,
    _startingCardDeck35: 135,
    _startingCardDeck36: 136,
    _startingCardDeck37: 137,
    _startingCardDeck38: 138,
    _startingCardDeck39: 139,
    _startingCardDeck40: 140,
    _startingCardDeck41: 141,
    _startingCardDeck42: 142,
    _startingCardDeck43: 143,
    _startingCardDeck44: 144,
    _startingCardDeck45: 145,
    _startingCardDeck46: 146,
    _startingCardDeck47: 147,
    _startingCardDeck48: 148,
    _startingCardDeck49: 149,
    _startingCardDeck50: 150,
    _startingCardDeck51: 151,
    _startingCardDeck52: 152,

    _shuffleCardDeck1: 201,
    _shuffleCardDeck2: 202,
    _shuffleCardDeck3: 203,
    _shuffleCardDeck4: 204,
    _shuffleCardDeck5: 205,
    _shuffleCardDeck6: 206,
    _shuffleCardDeck7: 207,
    _shuffleCardDeck8: 208,
    _shuffleCardDeck9: 209,
    _shuffleCardDeck10: 210,
    _shuffleCardDeck11: 211,
    _shuffleCardDeck12: 212,
    _shuffleCardDeck13: 213,
    _shuffleCardDeck14: 214,
    _shuffleCardDeck15: 215,
    _shuffleCardDeck16: 216,
    _shuffleCardDeck17: 217,
    _shuffleCardDeck18: 218,
    _shuffleCardDeck19: 219,
    _shuffleCardDeck20: 220,
    _shuffleCardDeck21: 221,
    _shuffleCardDeck22: 222,
    _shuffleCardDeck23: 223,
    _shuffleardDeck24: 224,
    _shuffleCardDeck25: 225,
    _shuffleCardDeck26: 226,
    _shuffleCardDeck27: 227,
    _shuffleCardDeck28: 228,
    __shuffleCardDeck29: 229,
    _shuffleCardDeck30: 230,
    _shuffleCardDeck31: 231,
    _shuffleCardDeck32: 232,
    _shuffleCardDeck33: 233,
    _shuffleCardDeck34: 234,
    _shuffleCardDeck35: 235,
    _shuffleCardDeck36: 236,
    _shuffleCardDeck37: 237,
    _shuffleCardDeck38: 238,
    _shuffleCardDeck39: 239,
    _shuffleCardDeck40: 240,
    _shuffleCardDeck41: 241,
    _shuffleCardDeck42: 242,
    _shuffleCardDeck43: 243,
    _shuffleCardDeck44: 244,
    _shuffleCardDeck45: 245,
    _shuffleCardDeck46: 246,
    _shuffleCardDeck47: 247,
    _shuffleCardDeck48: 248,
    _shuffleCardDeck49: 249,
    _shuffleCardDeck50: 250,
    _shuffleCardDeck51: 251,
    _shuffleCardDeck52: 252,

    _graveyardCardDeck1: 301,
    _graveyardCardDeck2: 302,
    _graveyardCardDeck3: 303,
    _graveyardCardDeck4: 304,
    _graveyardCardDeck5: 305,
    _graveyardCardDeck6: 306,
    _graveyardCardDeck7: 307,
    _graveyardCardDeck8: 308,
    _graveyardCardDeck9: 309,
    _graveyardCardDeck10: 310,
    _graveyardCardDeck11: 311,
    _graveyardCardDeck12: 312,
    _graveyardCardDeck13: 313,
    _graveyardCardDeck14: 314,
    _graveyardCardDeck15: 315,
    _graveyardCardDeck16: 316,
    _graveyardCardDeck17: 317,
    _graveyardCardDeck18: 318,
    _graveyardCardDeck19: 319,
    _graveyardCardDeck20: 320,
    _graveyardCardDeck21: 321,
    _graveyardCardDeck22: 322,
    _graveyardCardDeck23: 323,
    _graveyardCardDeck24: 324,
    _graveyardCardDeck25: 325,
    _graveyardCardDeck26: 326,
    _graveyardCardDeck27: 327,
    _graveyardCardDeck28: 328,
    _graveyardCardDeck29: 329,
    _graveyardCardDeck30: 330,
    _graveyardCardDeck31: 331,
    _graveyardCardDeck32: 332,
    _graveyardCardDeck33: 333,
    _graveyardCardDeck34: 334,
    _graveyardCardDeck35: 335,
    _graveyardCardDeck36: 336,
    _graveyardCardDeck37: 337,
    _graveyardCardDeck38: 338,
    _graveyardCardDeck39: 339,
    _graveyardCardDeck40: 340,
    _graveyardCardDeck41: 341,
    _graveyardCardDeck42: 342,
    _graveyardCardDeck43: 343,
    _graveyardCardDeck44: 344,
    _graveyardCardDeck45: 345,
    _graveyardCardDeck46: 346,
    _graveyardCardDeck47: 347,
    _graveyardCardDeck48: 348,
    _graveyardCardDeck49: 349,
    _graveyardCardDeck50: 350,
    _graveyardCardDeck51: 351,
    _graveyardCardDeck52: 352,
};