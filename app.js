let element = document.getElementsByTagName('img');
let flagCoup = true;
let flagFind = 0;
let counterFind3 = 0;
let counterComp = 0;
let counter = 0;
let counterI = 0;
let mPole
let orz = 1
let num
let tmp
let number
const img = {
    v1: "img/ship/z1_1.png",
    v21: "img/ship/z2_1.png",
    v22: "img/ship/z2_2.png",
    v31: "img/ship/z3_1.png",
    v32: "img/ship/z3_2.png",
    v33: "img/ship/z3_3.png",
    v41: "img/ship/z4_1.png",
    v42: "img/ship/z4_2.png",
    v43: "img/ship/z4_3.png",
    v44: "img/ship/z4_4.png",
    g1: "img/ship2/z1_1c.png",
    g21: "img/ship2/z2_1c.png",
    g22: "img/ship2/z2_2c.png",
    g31: "img/ship2/z3_1c.png",
    g32: "img/ship2/z3_2c.png",
    g33: "img/ship2/z3_3c.png",
    g41: "img/ship2/z4_1c.png",
    g42: "img/ship2/z4_2c.png",
    g43: "img/ship2/z4_3c.png",
    g44: "img/ship2/z4_4c.png",
    zp: "img/zp.png",
    zm: "img/zm2.png",
    zf: "img/zf.png",
    z1: "img/z1.png",
    z2: "img/z2.png",
    cross: "img/cross.png"
}


let arrSea = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
let arrSeaComp = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
let arrBattle = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]


function over(item) {
    if (flagCoup === true) {
        if (counter === 0) {
            if (+arrSea[+item.id - 1] === 0) {
                if ((+item.id - 1) < 70) {
                    shipFunc(img.z2
                        , +item.id + 9
                        , +item.id + 19
                        , +item.id + 29
                        , +item.id - 1)
                } else if ((+item.id - 1) >= 70 && (+item.id - 1) < 80) {
                    shipFunc(img.z2
                        , +item.id - 11
                        , +item.id - 1
                        , +item.id + 9
                        , +item.id + 19)
                } else if ((+item.id - 1) >= 80 && (+item.id - 1) < 90) {
                    shipFunc(img.z2
                        , +item.id - 11
                        , +item.id - 1
                        , +item.id + 9
                        , +item.id - 21)
                } else {
                    shipFunc(img.z2
                        , +item.id - 1
                        , +item.id - 11
                        , +item.id - 21
                        , +item.id - 31)
                }
            }
        } else if (counter === 1 || counter === 2) {
            if ((+item.id - 1) < 80) {
                shipFuncIf(img.z2
                    , +item.id - 1
                    , +item.id + 9
                    , +item.id + 19)
            } else if ((+item.id - 1) >= 80 && (+item.id - 1) < 90) {
                shipFuncIf(img.z2
                    , +item.id - 11
                    , +item.id - 1
                    , +item.id + 9)
            } else {
                shipFuncIf(img.z2
                    , +item.id - 21
                    , +item.id - 11
                    , +item.id - 1)
            }
        } else if (counter === 3 || counter === 4 || counter === 5) {
            if ((+item.id - 1) < 90) {
                shipFuncIf2(img.z2
                    , +item.id - 1
                    , +item.id + 9)
            } else {
                shipFuncIf2(img.z2
                    , +item.id - 1
                    , +item.id - 11)
            }
        } else if (counter === 6 || counter === 7 || counter === 8 || counter === 9) {
            shipFuncIf1(img.z2
                , +item.id - 1)
        }
    } else {
        if (counter === 0) {
            if (+arrSea[+item.id - 1] === 0) {
                if ((+item.id - 1) % 10 === 7) {
                    shipFunc(img.z2
                        , +item.id - 2
                        , +item.id - 1
                        , +item.id
                        , +item.id + 1)
                } else if ((+item.id - 1) % 10 === 8) {
                    shipFunc(img.z2
                        , +item.id - 2
                        , +item.id - 1
                        , +item.id
                        , +item.id - 3)
                } else if ((+item.id - 1) % 10 === 9) {
                    shipFunc(img.z2
                        , +item.id - 2
                        , +item.id - 1
                        , +item.id - 4
                        , +item.id - 3)
                } else {
                    shipFunc(img.z2
                        , +item.id - 1
                        , +item.id
                        , +item.id + 1
                        , +item.id + 2)
                }
            }
        } else if (counter === 1 || counter === 2) {
            if ((+item.id - 1) % 10 === 8) {
                shipFuncIf(img.z2
                    , +item.id - 2
                    , +item.id
                    , +item.id - 1)
            } else if ((+item.id - 1) % 10 === 9) {
                shipFuncIf(img.z2
                    , +item.id - 3
                    , +item.id - 2
                    , +item.id - 1)
            } else {
                shipFuncIf(img.z2
                    , +item.id - 1
                    , +item.id
                    , +item.id + 1)
            }
        } else if (counter === 3 || counter === 4 || counter === 5) {
            if ((+item.id - 1) % 10 === 9) {
                shipFuncIf2(img.z2
                    , +item.id - 1
                    , +item.id - 2)
            } else {
                shipFuncIf2(img.z2
                    , +item.id - 1
                    , +item.id)
            }
        } else if (counter === 6 || counter === 7 || counter === 8 || counter === 9) {
            shipFuncIf1(img.z2
                , +item.id - 1)
        }
    }
}

function out(item) {
    if (flagCoup === true) {
        if (counter === 0) {
            if (+arrSea[+item.id - 1] === 0) {
                if ((+item.id - 1) < 70) {
                    shipFunc(img.z1
                        , +item.id + 9
                        , +item.id + 19
                        , +item.id + 29
                        , +item.id - 1)
                } else if ((+item.id - 1) >= 70 && (+item.id - 1) < 80) {
                    shipFunc(img.z1
                        , +item.id - 11
                        , +item.id - 1
                        , +item.id + 9
                        , +item.id + 19)
                } else if ((+item.id - 1) >= 80 && (+item.id - 1) < 90) {
                    shipFunc(img.z1
                        , +item.id - 11
                        , +item.id - 1
                        , +item.id + 9
                        , +item.id - 21)
                } else {
                    shipFunc(img.z1
                        , +item.id - 1
                        , +item.id - 11
                        , +item.id - 21
                        , +item.id - 31)
                }
            }
        } else if (counter === 1 || counter === 2) {
            if ((+item.id - 1) < 80) {
                shipFuncIf(img.z1
                    , +item.id - 1
                    , +item.id + 9
                    , +item.id + 19)
            } else if ((+item.id - 1) >= 80 && (+item.id - 1) < 90) {
                shipFuncIf(img.z1
                    , +item.id - 11
                    , +item.id - 1
                    , +item.id + 9)
            } else {
                shipFuncIf(img.z1
                    , +item.id - 21
                    , +item.id - 11
                    , +item.id - 1)
            }
        } else if (counter === 3 || counter === 4 || counter === 5) {
            if ((+item.id - 1) < 90) {
                shipFuncIf2(img.z1
                    , +item.id - 1
                    , +item.id + 9)
            } else {
                shipFuncIf2(img.z1
                    , +item.id - 1
                    , +item.id - 11)
            }
        } else if (counter === 6 || counter === 7 || counter === 8 || counter === 9) {
            shipFuncIf1(img.z1
                , +item.id - 1)
        }
    } else {
        if (counter === 0) {
            if (+arrSea[+item.id - 1] === 0) {
                if ((+item.id - 1) % 10 === 7) {
                    shipFunc(img.z1
                        , +item.id - 2
                        , +item.id - 1
                        , +item.id
                        , +item.id + 1)
                } else if ((+item.id - 1) % 10 === 8) {
                    shipFunc(img.z1
                        , +item.id - 2
                        , +item.id - 1
                        , +item.id
                        , +item.id - 3)
                } else if ((+item.id - 1) % 10 === 9) {
                    shipFunc(img.z1
                        , +item.id - 2
                        , +item.id - 1
                        , +item.id - 4
                        , +item.id - 3)
                } else {
                    shipFunc(img.z1
                        , +item.id - 1
                        , +item.id
                        , +item.id + 1
                        , +item.id + 2)
                }
            }
        } else if (counter === 1 || counter === 2) {
            if ((+item.id - 1) % 10 === 8) {
                shipFuncIf(img.z1
                    , +item.id - 2
                    , +item.id
                    , +item.id - 1)
            } else if ((+item.id - 1) % 10 === 9) {
                shipFuncIf(img.z1
                    , +item.id - 3
                    , +item.id - 2
                    , +item.id - 1)
            } else {
                shipFuncIf(img.z1
                    , +item.id - 1
                    , +item.id
                    , +item.id + 1)
            }
        } else if (counter === 3 || counter === 4 || counter === 5) {
            if ((+item.id - 1) % 10 === 9) {
                shipFuncIf2(img.z1
                    , +item.id - 1
                    , +item.id - 2)
            } else {
                shipFuncIf2(img.z1
                    , +item.id - 1
                    , +item.id)
            }
        } else if (counter === 6 || counter === 7 || counter === 8 || counter === 9) {
            shipFuncIf1(img.z1
                , +item.id - 1)
        }
    }

}

function shipImg(img) {
    for (let i = 0; i < arrSea.length; i++) {
        if (+arrSea[i] === 2) {
            element[i].src = img
        }
    }
}

function imgPosition4Auto(z, x, a, s, q, w, c, v) {
    arrSeaComp[z] = x
    arrSeaComp[a] = s
    arrSeaComp[q] = w
    arrSeaComp[c] = v
}

function imgPosition4AutoStart(z, x, a, s, q, w, c, v) {
    arrSea[z] = x
    arrSea[a] = s
    arrSea[q] = w
    arrSea[c] = v
}

function imgPosition4(z, x, c, v) {

    if (flagCoup === true) {
        element[z].src = img.v41
        element[x].src = img.v42
        element[c].src = img.v43
        element[v].src = img.v44
        arrSea[z] = 41
        arrSea[x] = 42
        arrSea[c] = 43
        arrSea[v] = 44
    } else {
        element[z].src = img.g41
        element[x].src = img.g42
        element[c].src = img.g43
        element[v].src = img.g44
        arrSea[z] = 414
        arrSea[x] = 424
        arrSea[c] = 434
        arrSea[v] = 444
    }
}

function imgPosition3(z, x, c) {

    if (flagCoup === true) {
        element[z].src = img.v31
        element[x].src = img.v32
        element[c].src = img.v33
        arrSea[z] = 31
        arrSea[x] = 32
        arrSea[c] = 33
    } else {
        element[z].src = img.g31
        element[x].src = img.g32
        element[c].src = img.g33
        arrSea[z] = 313
        arrSea[x] = 323
        arrSea[c] = 333
    }
}

function imgPosition2(z, x) {

    if (flagCoup === true) {
        element[z].src = img.v21
        element[x].src = img.v22
        arrSea[z] = 21
        arrSea[x] = 22
    } else {
        element[z].src = img.g21
        element[x].src = img.g22
        arrSea[z] = 212
        arrSea[x] = 222
    }
}

function imgPosition1(z) {

    if (flagCoup === true) {
        element[z].src = img.v1
        arrSea[z] = 11
    } else {
        element[z].src = img.g1
        arrSea[z] = 111
    }


}

function positionNumber(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14) {
    arrSea[q1] = 2
    arrSea[q2] = 2
    arrSea[q3] = 2
    arrSea[q4] = 2
    arrSea[q5] = 2
    arrSea[q6] = 2
    arrSea[q7] = 2
    arrSea[q8] = 2
    arrSea[q9] = 2
    arrSea[q10] = 2
    arrSea[q11] = 2
    arrSea[q12] = 2
    arrSea[q13] = 2
    arrSea[q14] = 2
}

function installShip4(item) {
    if (flagCoup === true) {
        if ((+item.id - 1) < 10) {
            if ((+item.id - 1) === 0) {
                imgPosition4(+item.id - 1, +item.id + 9, +item.id + 19, +item.id + 29)
                positionNumber(+item.id
                    , +item.id + 10
                    , +item.id + 20
                    , +item.id + 30
                    , +item.id + 39
                    , +item.id + 40)

            } else if ((+item.id) % 10 === 0) {
                imgPosition4(+item.id - 1, +item.id + 9, +item.id + 19, +item.id + 29)
                positionNumber(+item.id - 2
                    , +item.id + 8
                    , +item.id + 18
                    , +item.id + 28
                    , +item.id + 38
                    , +item.id + 39)

            } else {
                imgPosition4(+item.id - 1, +item.id + 9, +item.id + 19, +item.id + 29)
                positionNumber(+item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10
                    , +item.id + 18
                    , +item.id + 20
                    , +item.id + 28
                    , +item.id + 30
                    , +item.id + 38
                    , +item.id + 39
                    , +item.id + 40)
            }
        } else if (((+item.id - 1) > 9) && ((+item.id - 1) < 60)) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition4(+item.id - 1, +item.id + 9, +item.id + 19, +item.id + 29)
                positionNumber(+item.id - 11
                    , +item.id - 10
                    , +item.id
                    , +item.id + 10
                    , +item.id + 20
                    , +item.id + 30
                    , +item.id + 39
                    , +item.id + 40)

            } else if ((+item.id) % 10 === 0) {
                imgPosition4(+item.id - 1, +item.id + 9, +item.id + 19, +item.id + 29)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 2
                    , +item.id + 8
                    , +item.id + 18
                    , +item.id + 28
                    , +item.id + 38
                    , +item.id + 39)

            } else {
                imgPosition4(+item.id - 1, +item.id + 9, +item.id + 19, +item.id + 29)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10
                    , +item.id + 18
                    , +item.id + 20
                    , +item.id + 28
                    , +item.id + 30
                    , +item.id + 38
                    , +item.id + 39
                    , +item.id + 40)
            }
        } else if (+item.id - 1 >= 60 && +item.id - 1 < 70) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition4(+item.id - 1, +item.id + 9, +item.id + 19, +item.id + 29)
                positionNumber(+item.id - 11
                    , +item.id - 10
                    , +item.id
                    , +item.id + 10
                    , +item.id + 20
                    , +item.id + 30)

            } else if ((+item.id) % 10 === 0) {
                imgPosition4(+item.id - 1, +item.id + 9, +item.id + 19, +item.id + 29)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 2
                    , +item.id + 8
                    , +item.id + 18
                    , +item.id + 28)

            } else {
                imgPosition4(+item.id - 1, +item.id + 9, +item.id + 19, +item.id + 29)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10
                    , +item.id + 18
                    , +item.id + 20
                    , +item.id + 28
                    , +item.id + 30)
            }
        } else if (+item.id - 1 >= 70 && +item.id - 1 < 80) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition4(+item.id - 11, +item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id - 21
                    , +item.id - 20
                    , +item.id - 10
                    , +item.id
                    , +item.id + 10
                    , +item.id + 20)

            } else if ((+item.id) % 10 === 0) {
                imgPosition4(+item.id - 11, +item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id - 22
                    , +item.id - 21
                    , +item.id - 12
                    , +item.id - 2
                    , +item.id + 8
                    , +item.id + 18)

            } else {
                imgPosition4(+item.id - 11, +item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id - 22
                    , +item.id - 21
                    , +item.id - 20
                    , +item.id - 12
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10
                    , +item.id + 18
                    , +item.id + 20)
            }

        } else if (+item.id - 1 >= 80 && +item.id - 1 < 90) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition4(+item.id - 21, +item.id - 11, +item.id - 1, +item.id + 9)
                positionNumber(+item.id - 30
                    , +item.id - 31
                    , +item.id - 20
                    , +item.id - 10
                    , +item.id
                    , +item.id + 10)

            } else if ((+item.id) % 10 === 0) {
                imgPosition4(+item.id - 21, +item.id - 11, +item.id - 1, +item.id + 9)
                positionNumber(+item.id - 32
                    , +item.id - 31
                    , +item.id - 22
                    , +item.id - 12
                    , +item.id - 2
                    , +item.id + 8)

            } else {
                imgPosition4(+item.id - 21, +item.id - 11, +item.id - 1, +item.id + 9)
                positionNumber(+item.id - 32
                    , +item.id - 31
                    , +item.id - 30
                    , +item.id - 22
                    , +item.id - 20
                    , +item.id - 12
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10)

            }
        } else if (+item.id - 1 >= 90 && +item.id - 1 < 100) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition4(+item.id - 31, +item.id - 21, +item.id - 11, +item.id - 1)
                positionNumber(+item.id - 41
                    , +item.id - 40
                    , +item.id - 30
                    , +item.id - 20
                    , +item.id - 10
                    , +item.id)

            } else if ((+item.id) % 10 === 0) {
                imgPosition4(+item.id - 31, +item.id - 21, +item.id - 11, +item.id - 1)
                positionNumber(+item.id - 42
                    , +item.id - 41
                    , +item.id - 32
                    , +item.id - 22
                    , +item.id - 12
                    , +item.id - 2)

            } else {
                imgPosition4(+item.id - 31, +item.id - 21, +item.id - 11, +item.id - 1)
                positionNumber(+item.id - 42
                    , +item.id - 41
                    , +item.id - 40
                    , +item.id - 32
                    , +item.id - 30
                    , +item.id - 22
                    , +item.id - 20
                    , +item.id - 12
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id)
            }
        }
    } else {
        if ((+item.id - 1) === 0) {
            imgPosition4(+item.id - 1, +item.id, +item.id + 1, +item.id + 2)
            positionNumber(+item.id + 3
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11
                , +item.id + 12
                , +item.id + 13)

        } else if ((+item.id - 1) === 6) {
            imgPosition4(+item.id - 1, +item.id, +item.id + 1, +item.id + 2)
            positionNumber(+item.id - 2
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11
                , +item.id + 12)

        } else if (((+item.id - 1) > 0) && ((+item.id - 1) < 6)) {
            imgPosition4(+item.id - 1, +item.id, +item.id + 1, +item.id + 2)
            positionNumber(+item.id - 2
                , +item.id + 3
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11
                , +item.id + 12
                , +item.id + 13)

        } else if ((+item.id - 1) === 7) {
            imgPosition4(+item.id - 2, +item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id - 3
                , +item.id + 7
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11)

        } else if ((+item.id - 1) === 8) {
            imgPosition4(+item.id - 3, +item.id - 2, +item.id - 1, +item.id)
            positionNumber(+item.id - 4
                , +item.id + 6
                , +item.id + 7
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10)

        } else if ((+item.id - 1) === 9) {
            imgPosition4(+item.id - 4, +item.id - 3, +item.id - 2, +item.id - 1)
            positionNumber(+item.id - 5
                , +item.id + 5
                , +item.id + 6
                , +item.id + 7
                , +item.id + 8
                , +item.id + 9)

        } else if (((+item.id - 1) % 10 === 0) && ((+item.id - 1) > 0) && ((+item.id - 1) < 90)) {
            imgPosition4(+item.id - 1, +item.id, +item.id + 1, +item.id + 2)
            positionNumber(+item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id - 8
                , +item.id - 7
                , +item.id + 3
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11
                , +item.id + 12
                , +item.id + 13)

        } else if (((+item.id - 1) % 10 === 6) && ((+item.id - 1) > 6) && ((+item.id - 1) < 96)) {
            imgPosition4(+item.id - 1, +item.id, +item.id + 1, +item.id + 2)
            positionNumber(+item.id - 2
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id - 8
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11
                , +item.id + 12)

        } else if (((+item.id - 1) % 10 === 7) && ((+item.id - 1) > 7) && ((+item.id - 1) < 97)) {
            imgPosition4(+item.id - 2, +item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id - 3
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id + 7
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11)

        } else if (((+item.id - 1) % 10 === 8) && ((+item.id - 1) > 8) && ((+item.id - 1) < 98)) {
            imgPosition4(+item.id - 3, +item.id - 2, +item.id - 1, +item.id)
            positionNumber(+item.id - 4
                , +item.id - 14
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id + 6
                , +item.id + 7
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10)

        } else if (((+item.id - 1) % 10 === 9) && ((+item.id - 1) > 9) && ((+item.id - 1) < 99)) {
            imgPosition4(+item.id - 4, +item.id - 3, +item.id - 2, +item.id - 1)
            positionNumber(+item.id - 5
                , +item.id - 15
                , +item.id - 14
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11
                , +item.id + 5
                , +item.id + 6
                , +item.id + 7
                , +item.id + 8
                , +item.id + 9)

        } else if ((+item.id - 1) === 99) {
            imgPosition4(+item.id - 4, +item.id - 3, +item.id - 2, +item.id - 1)
            positionNumber(+item.id - 5
                , +item.id - 15
                , +item.id - 14
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11)

        } else if ((+item.id - 1) === 98) {
            imgPosition4(+item.id - 3, +item.id - 2, +item.id - 1, +item.id)
            positionNumber(+item.id - 4
                , +item.id - 14
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10)

        } else if ((+item.id - 1) === 97) {
            imgPosition4(+item.id - 2, +item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id - 3
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9)

        } else if ((+item.id - 1) === 96) {
            imgPosition4(+item.id - 1, +item.id, +item.id + 1, +item.id + 2)
            positionNumber(+item.id - 2
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id - 8)

        } else if ((+item.id - 1) === 90) {
            imgPosition4(+item.id - 1, +item.id, +item.id + 1, +item.id + 2)
            positionNumber(+item.id + 3
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id - 8
                , +item.id - 7)

        } else if (((+item.id - 1) > 90) && ((+item.id - 1) < 96)) {
            imgPosition4(+item.id - 1, +item.id, +item.id + 1, +item.id + 2)
            positionNumber(+item.id + 3
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id - 8
                , +item.id - 7
                , +item.id - 2)
        } else {
            imgPosition4(+item.id - 1, +item.id, +item.id + 1, +item.id + 2)
            positionNumber(+item.id - 2
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id - 8
                , +item.id - 7
                , +item.id + 3
                , +item.id + 13
                , +item.id + 12
                , +item.id + 11
                , +item.id + 10
                , +item.id + 9
                , +item.id + 8)
        }
    }
}

function installShip3(item) {
    if (flagCoup === true) {
        if (+item.id - 1 < 10) {
            if ((+item.id - 1) === 0) {
                imgPosition3(+item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id
                    , +item.id + 10
                    , +item.id + 20
                    , +item.id + 29
                    , +item.id + 30)

            } else if ((+item.id) % 10 === 0) {
                imgPosition3(+item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id - 2
                    , +item.id + 8
                    , +item.id + 18
                    , +item.id + 28
                    , +item.id + 29)

            } else {
                imgPosition3(+item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10
                    , +item.id + 18
                    , +item.id + 20
                    , +item.id + 28
                    , +item.id + 29
                    , +item.id + 30)
            }
        } else if (((+item.id - 1) > 9) && ((+item.id - 1) < 70)) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition3(+item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id - 11
                    , +item.id - 10
                    , +item.id
                    , +item.id + 10
                    , +item.id + 20
                    , +item.id + 29
                    , +item.id + 30)

            } else if ((+item.id) % 10 === 0) {
                imgPosition3(+item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 2
                    , +item.id + 8
                    , +item.id + 18
                    , +item.id + 28
                    , +item.id + 29)

            } else {
                imgPosition3(+item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10
                    , +item.id + 18
                    , +item.id + 20
                    , +item.id + 28
                    , +item.id + 29
                    , +item.id + 30)
            }
        } else if (+item.id - 1 >= 70 && +item.id - 1 < 80) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition3(+item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id - 11
                    , +item.id - 10
                    , +item.id
                    , +item.id + 10
                    , +item.id + 20)

            } else if ((+item.id) % 10 === 0) {
                imgPosition3(+item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 2
                    , +item.id + 8
                    , +item.id + 18)

            } else {
                imgPosition3(+item.id - 1, +item.id + 9, +item.id + 19)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10
                    , +item.id + 18
                    , +item.id + 20)
            }

        } else if (+item.id - 1 >= 80 && +item.id - 1 < 90) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition3(+item.id - 11, +item.id - 1, +item.id + 9)
                positionNumber(+item.id - 21
                    , +item.id - 20
                    , +item.id - 10
                    , +item.id
                    , +item.id + 10)
            } else if ((+item.id) % 10 === 0) {
                imgPosition3(+item.id - 11, +item.id - 1, +item.id + 9)
                positionNumber(+item.id - 22
                    , +item.id - 21
                    , +item.id - 12
                    , +item.id - 2
                    , +item.id + 8)
            } else {
                imgPosition3(+item.id - 11, +item.id - 1, +item.id + 9)
                positionNumber(+item.id - 22
                    , +item.id - 21
                    , +item.id - 20
                    , +item.id - 12
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10)

            }
        } else if (+item.id - 1 >= 90 && +item.id - 1 < 100) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition3(+item.id - 21, +item.id - 11, +item.id - 1)
                positionNumber(+item.id - 31
                    , +item.id - 30
                    , +item.id - 20
                    , +item.id - 10
                    , +item.id)

            } else if ((+item.id) % 10 === 0) {
                imgPosition3(+item.id - 21, +item.id - 11, +item.id - 1)
                positionNumber(+item.id - 32
                    , +item.id - 31
                    , +item.id - 22
                    , +item.id - 12
                    , +item.id - 2)

            } else {
                imgPosition3(+item.id - 21, +item.id - 11, +item.id - 1)
                positionNumber(+item.id - 32
                    , +item.id - 31
                    , +item.id - 30
                    , +item.id - 22
                    , +item.id - 20
                    , +item.id - 12
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id)
            }
        }
    } else {
        if ((+item.id - 1) === 0) {
            imgPosition3(+item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id + 2
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11
                , +item.id + 12)
        } else if ((+item.id - 1) === 7) {
            imgPosition3(+item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id - 2
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11)
        } else if ((+item.id - 1) === 8) {
            imgPosition3(+item.id - 2, +item.id - 1, +item.id)
            positionNumber(+item.id - 3
                , +item.id + 7
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10)
        } else if ((+item.id - 1) === 9) {
            imgPosition3(+item.id - 3, +item.id - 2, +item.id - 1)
            positionNumber(+item.id - 4
                , +item.id + 6
                , +item.id + 7
                , +item.id + 8
                , +item.id + 9)

        } else if (((+item.id - 1) > 0) && ((+item.id - 1) < 7)) {
            imgPosition3(+item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id - 2
                , +item.id + 2
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11
                , +item.id + 12)

        } else if (((+item.id - 1) % 10 === 0) && ((+item.id - 1) > 0) && ((+item.id - 1) < 90)) {
            imgPosition3(+item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id + 2
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id - 8
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11
                , +item.id + 12)

        } else if (((+item.id - 1) % 10 === 7) && ((+item.id - 1) > 7) && ((+item.id - 1) < 97)) {
            imgPosition3(+item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id - 2
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id + 11
                , +item.id + 10
                , +item.id + 9
                , +item.id + 8)
        } else if (((+item.id - 1) % 10 === 8) && ((+item.id - 1) > 8) && ((+item.id - 1) < 98)) {
            imgPosition3(+item.id - 2, +item.id - 1, +item.id)
            positionNumber(+item.id - 3
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id + 10
                , +item.id + 9
                , +item.id + 8
                , +item.id + 7)
        } else if (((+item.id - 1) % 10 === 9) && ((+item.id - 1) > 9) && ((+item.id - 1) < 99)) {
            imgPosition3(+item.id - 3, +item.id - 2, +item.id - 1)
            positionNumber(+item.id - 4
                , +item.id - 14
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11
                , +item.id + 9
                , +item.id + 8
                , +item.id + 7
                , +item.id + 6)
        } else if ((+item.id - 1) === 97) {
            imgPosition3(+item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id - 2
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9)


        } else if ((+item.id - 1) === 98) {
            imgPosition3(+item.id - 2, +item.id - 1, +item.id)
            positionNumber(+item.id - 3
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10)

        } else if ((+item.id - 1) === 99) {
            imgPosition3(+item.id - 3, +item.id - 2, +item.id - 1)
            positionNumber(+item.id - 4
                , +item.id - 14
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11)


        } else if ((+item.id - 1) === 90) {
            imgPosition3(+item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id - 8
                , +item.id + 2)

        } else if (((+item.id - 1) > 90) && ((+item.id - 1) < 97)) {
            imgPosition3(+item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id - 2
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id - 8
                , +item.id + 2)

        } else {
            imgPosition3(+item.id - 1, +item.id, +item.id + 1)
            positionNumber(+item.id - 2
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id - 8
                , +item.id + 2
                , +item.id + 12
                , +item.id + 11
                , +item.id + 10
                , +item.id + 9
                , +item.id + 8)
        }
    }
}

function installShip2(item) {
    if (flagCoup === true) {
        if (+item.id - 1 < 10) {
            if ((+item.id - 1) === 0) {
                imgPosition2(+item.id - 1, +item.id + 9)
                positionNumber(+item.id
                    , +item.id + 10
                    , +item.id + 19
                    , +item.id + 20)

            } else if ((+item.id) % 10 === 0) {
                imgPosition2(+item.id - 1, +item.id + 9)
                positionNumber(+item.id - 2
                    , +item.id + 8
                    , +item.id + 18
                    , +item.id + 19)
            } else {
                imgPosition2(+item.id - 1, +item.id + 9)
                positionNumber(+item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10
                    , +item.id + 18
                    , +item.id + 19
                    , +item.id + 20)
            }
        } else if (((+item.id - 1) > 9) && ((+item.id - 1) < 80)) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition2(+item.id - 1, +item.id + 9)
                positionNumber(+item.id - 11
                    , +item.id - 10
                    , +item.id
                    , +item.id + 10
                    , +item.id + 19
                    , +item.id + 20)
            } else if (((+item.id - 1) > 0) && ((+item.id - 1) < 9)) {
                imgPosition2(+item.id - 1, +item.id + 9)
                positionNumber(+item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10
                    , +item.id + 18
                    , +item.id + 19
                    , +item.id + 20)
            } else if ((+item.id) % 10 === 0) {
                imgPosition2(+item.id - 1, +item.id + 9)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 2
                    , +item.id + 8
                    , +item.id + 18
                    , +item.id + 19)
            } else {
                imgPosition2(+item.id - 1, +item.id + 9)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10
                    , +item.id + 18
                    , +item.id + 19
                    , +item.id + 20)
            }
        } else if ((+item.id - 1 >= 80) && (+item.id - 1 < 90)) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition2(+item.id - 1, +item.id + 9)
                positionNumber(+item.id - 11
                    , +item.id - 10
                    , +item.id
                    , +item.id + 10)

            } else if ((+item.id) % 10 === 0) {
                imgPosition2(+item.id - 1, +item.id + 9)
                positionNumber(+item.id - 12
                    , +item.id - 12
                    , +item.id - 11
                    , +item.id - 2
                    , +item.id + 8)

            } else {
                imgPosition2(+item.id - 1, +item.id + 9)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 10)
            }
        } else if ((+item.id - 1 >= 90) && (+item.id - 1 < 100)) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition2(+item.id - 11, +item.id - 1)
                positionNumber(+item.id - 21
                    , +item.id - 20
                    , +item.id - 10
                    , +item.id)
            } else if ((+item.id) % 10 === 0) {
                imgPosition2(+item.id - 11, +item.id - 1)
                positionNumber(+item.id - 21
                    , +item.id - 22
                    , +item.id - 12
                    , +item.id - 2)

            } else {
                imgPosition2(+item.id - 11, +item.id - 1)
                positionNumber(+item.id - 22
                    , +item.id - 21
                    , +item.id - 20
                    , +item.id - 12
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id)
            }
        }
    } else {
        if ((+item.id - 1) === 0) {
            imgPosition2(+item.id - 1, +item.id)
            positionNumber(+item.id + 1
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11)

        } else if ((+item.id - 1) === 8) {
            imgPosition2(+item.id - 1, +item.id)
            positionNumber(+item.id - 2
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10)

        } else if ((+item.id - 1) === 9) {
            imgPosition2(+item.id - 2, +item.id - 1)
            positionNumber(+item.id - 3
                , +item.id + 7
                , +item.id + 8
                , +item.id + 9)

        } else if (((+item.id - 1) > 0) && ((+item.id - 1) < 8)) {
            imgPosition2(+item.id - 1, +item.id)
            positionNumber(+item.id - 2
                , +item.id + 1
                , +item.id + 8
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11)

        } else if (((+item.id - 1) % 10 === 0) && ((+item.id - 1) > 0) && ((+item.id - 1) < 90)) {
            imgPosition2(+item.id - 1, +item.id)
            positionNumber(+item.id + 1
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id + 9
                , +item.id + 10
                , +item.id + 11)

        } else if (((+item.id - 1) % 10 === 8) && ((+item.id - 1) > 8) && ((+item.id - 1) < 98)) {
            imgPosition2(+item.id - 1, +item.id)
            positionNumber(+item.id - 2
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id + 10
                , +item.id + 9
                , +item.id + 8)
        } else if (((+item.id - 1) % 10 === 9) && ((+item.id - 1) > 9) && ((+item.id - 1) < 99)) {
            imgPosition2(+item.id - 2, +item.id - 1)
            positionNumber(+item.id - 3
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11
                , +item.id + 9
                , +item.id + 8
                , +item.id + 7)
        } else if ((+item.id - 1) === 98) {
            imgPosition2(+item.id - 1, +item.id)
            positionNumber(+item.id - 2
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10)

        } else if ((+item.id - 1) === 99) {
            imgPosition2(+item.id - 2, +item.id - 1)
            positionNumber(+item.id - 3
                , +item.id - 13
                , +item.id - 12
                , +item.id - 11)

        } else if (((+item.id - 1) > 90) && ((+item.id - 1) < 98)) {
            imgPosition2(+item.id - 1, +item.id)
            positionNumber(+item.id - 2
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id + 1)

        } else if ((+item.id - 1) === 90) {
            imgPosition2(+item.id - 1, +item.id)
            positionNumber(+item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id + 1)

        } else {
            imgPosition2(+item.id - 1, +item.id)
            positionNumber(+item.id - 2
                , +item.id - 12
                , +item.id - 11
                , +item.id - 10
                , +item.id - 9
                , +item.id + 1
                , +item.id + 11
                , +item.id + 10
                , +item.id + 9
                , +item.id + 8)
        }
    }
}

function installShip1(item) {
    if (flagCoup === true) {
        if ((+item.id - 1) < 10) {
            if ((+item.id - 1) === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id
                    , +item.id + 9
                    , +item.id + 10)
            } else if ((+item.id) % 10 === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 2
                    , +item.id + 8
                    , +item.id + 9)
            } else {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 9
                    , +item.id + 10)
            }
        } else if (((+item.id - 1) > 9) && ((+item.id - 1) < 90)) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 10
                    , +item.id - 11
                    , +item.id
                    , +item.id + 9
                    , +item.id + 10)
            } else if ((+item.id) % 10 === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 11
                    , +item.id - 12
                    , +item.id - 2
                    , +item.id + 8
                    , +item.id + 9)
            } else {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 9
                    , +item.id + 10)
            }
        } else if (((+item.id - 1) > 89) && ((+item.id - 1) < 100)) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 10
                    , +item.id - 11
                    , +item.id)
            } else if ((+item.id) % 10 === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 2)
            } else {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id)
            }
        }
    } else {
        if ((+item.id - 1) < 10) {
            if ((+item.id - 1) === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id
                    , +item.id + 9
                    , +item.id + 10)
            } else if ((+item.id) % 10 === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 2
                    , +item.id + 8
                    , +item.id + 9)
            } else {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 9
                    , +item.id + 10)
            }
        } else if (((+item.id - 1) > 9) && ((+item.id - 1) < 90)) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 10
                    , +item.id - 11
                    , +item.id
                    , +item.id + 9
                    , +item.id + 10)
            } else if ((+item.id) % 10 === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 11
                    , +item.id - 12
                    , +item.id - 2
                    , +item.id + 8
                    , +item.id + 9)
            } else {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id
                    , +item.id + 8
                    , +item.id + 9
                    , +item.id + 10)
            }
        } else if (((+item.id - 1) > 89) && ((+item.id - 1) < 100)) {
            if ((+item.id - 1) % 10 === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 10
                    , +item.id - 11
                    , +item.id)
            } else if ((+item.id) % 10 === 0) {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 2)
            } else {
                imgPosition1(+item.id - 1)
                positionNumber(+item.id - 12
                    , +item.id - 11
                    , +item.id - 10
                    , +item.id - 2
                    , +item.id)
            }
        }
    }
}

function shipFunc(y, z, x, c, v) {
    element[z].src = y
    element[x].src = y
    element[c].src = y
    element[v].src = y
}

function shipFuncIf(y, z, x, c) {
    if ((+arrSea[z] === 0) && (+arrSea[x] === 0) && (+arrSea[c] === 0)) {
        element[z].src = y
        element[x].src = y
        element[c].src = y
    }
}

function shipFuncIf2(y, z, x) {
    if ((+arrSea[z] === 0) && (+arrSea[x] === 0)) {
        element[z].src = y
        element[x].src = y
    }
}

function shipFuncIf1(y, z) {
    if ((+arrSea[z] === 0)) element[z].src = y
}

function instShipN (item, a, b){
    counter += 1
    a(item)
    shipImg(img.zp)
    b()
}

function installShip(item) {
    if (counter === 0) {
        instShipN (item, installShip4, imgShipTable4)
    } else if ((counter === 1 || counter === 2) && (+arrSea[+item.id - 1] === 0)) {
        if (flagCoup === true) {
            if ((+item.id - 1) < 80) {
                if ((+arrSea[+item.id - 1] === 0) && (+arrSea[+item.id + 9] === 0) && (+arrSea[+item.id + 19] === 0)) {
                    instShipN (item, installShip3, imgShipTable3)
                }
            } else if ((+item.id - 1) < 90) {
                if ((+arrSea[+item.id - 1] === 0) && (+arrSea[+item.id + 9] === 0) && (+arrSea[+item.id - 11] === 0)) {
                    instShipN (item, installShip3, imgShipTable3)
                }
            } else {
                if ((+arrSea[+item.id - 1] === 0) && (+arrSea[+item.id - 11] === 0) && (+arrSea[+item.id - 21] === 0)) {
                    instShipN (item, installShip3, imgShipTable3)
                }
            }
        } else {
            if ((+item.id - 1) % 10 === 7) {
                if ((+arrSea[+item.id - 1] === 0) && (+arrSea[+item.id] === 0) && (+arrSea[+item.id + 1] === 0)) {
                    instShipN (item, installShip3, imgShipTable3)
                }
            } else if ((+item.id - 1) % 10 === 8) {
                if ((+arrSea[+item.id - 2] === 0) && (+arrSea[+item.id - 1] === 0) && (+arrSea[+item.id] === 0)) {
                    instShipN (item, installShip3, imgShipTable3)
                }
            } else if ((+item.id - 1) % 10 === 9) {
                if ((+arrSea[+item.id - 3] === 0) && (+arrSea[+item.id - 2] === 0) && (+arrSea[+item.id - 1] === 0)) {
                    instShipN (item, installShip3, imgShipTable3)
                }
            } else {
                if ((+arrSea[+item.id - 1] === 0) && (+arrSea[+item.id] === 0) && (+arrSea[+item.id + 1] === 0)) {
                    instShipN (item, installShip3, imgShipTable3)
                }
            }
        }
    } else if ((counter === 3 || counter === 4 || counter === 5) && (+arrSea[+item.id - 1] === 0)) {
        if (flagCoup === true) {
            if ((+item.id - 1) < 90) {
                if ((+arrSea[+item.id - 1] === 0) && (+arrSea[+item.id + 9] === 0)) {
                    instShipN (item, installShip2, imgShipTable2)
                }
            } else {
                if ((+arrSea[+item.id - 1] === 0) && (+arrSea[+item.id - 11] === 0)) {
                    instShipN (item, installShip2, imgShipTable2)
                }
            }
        } else {
            if ((+item.id - 1) % 10 === 9) {
                if ((+arrSea[+item.id - 2] === 0) && (+arrSea[+item.id - 1] === 0)) {
                    instShipN (item, installShip2, imgShipTable2)
                }
            } else {
                if ((+arrSea[+item.id - 1] === 0) && (+arrSea[+item.id] === 0)) {
                    instShipN (item, installShip2, imgShipTable2)
                }
            }
        }
    } else if ((counter === 6 || counter === 7 || counter === 8 || counter === 9) && (+arrSea[+item.id - 1] === 0)) {
        if (flagCoup === true) {
            instShipN (item, installShip1, imgShipTable1)
        } else {
            instShipN (item, installShip1, imgShipTable1)
        }

    }

}

function imgShipTable4() {
    let imgGrey_101 = document.getElementById('101')
    let imgGrey_102 = document.getElementById('102')
    let shipNumber_105 = document.getElementById('105')
    if (flagCoup === true) {
        imgGrey_101.src = "img/z44_bw.png"
        imgGrey_102.src = "img/z33g.gif"
        shipNumber_105.innerHTML = "0"
    } else {
        imgGrey_101.src = "img/z44_bwc.png"
        imgGrey_102.src = "img/z33gc.gif"
        shipNumber_105.innerHTML = "0"
    }
}

function imgShipTable3() {
    let imgGrey_102 = document.getElementById('102')
    let imgGrey_103 = document.getElementById('103')
    let shipNumber_106 = document.getElementById('106')
    shipNumber_106.innerHTML = +shipNumber_106.innerHTML - 1;
    if (flagCoup === true) {
        if (counter === 3) {
            imgGrey_102.src = "img/z33_bw.png"
            imgGrey_103.src = "img/z22g.gif"
        }
    } else {
        if (counter === 3) {
            imgGrey_102.src = "img/z33_bwc.png"
            imgGrey_103.src = "img/z22gc.gif"
        }
    }
}

function imgShipTable2() {
    const imgGrey_103 = document.getElementById('103')
    const imgGrey_104 = document.getElementById('104')
    let shipNumber_107 = document.getElementById('107')
    shipNumber_107.innerHTML = +shipNumber_107.innerHTML - 1;
    if (flagCoup === true) {
        if (counter === 6) {
            imgGrey_103.src = "img/z22_bw.png"
            imgGrey_104.src = "img/z11g.gif"
        }
    } else {
        if (counter === 6) {
            imgGrey_103.src = "img/z22_bwc.png"
            imgGrey_104.src = "img/z11gc.gif"
        }
    }
}

function imgShipTable1() {
    const imgGrey_104 = document.getElementById('104')
    let shipNumber_108 = document.getElementById('108')
    const buttonPlay = document.getElementById('game')
    shipNumber_108.innerHTML = +shipNumber_108.innerHTML - 1;
    if (flagCoup === true) {
        if (counter === 10) {
            imgGrey_104.src = "img/z11_bw.png"
            buttonPlay.style.visibility = "visible"
        }
    } else {
        if (counter === 10) {
            imgGrey_104.src = "img/z11_bwc.png"
            buttonPlay.style.visibility = "visible"
        }
    }
}

function imgCoup() {
    let imgGrey_101 = document.getElementById('101')
    let imgGrey_102 = document.getElementById('102')
    let imgGrey_103 = document.getElementById('103')
    let imgGrey_104 = document.getElementById('104')
    if (counter === 0) {
        if (flagCoup === true) {
            imgGrey_101.src = "img/z44gc.gif"
            imgGrey_102.src = "img/z33c.png"
            imgGrey_103.src = "img/z22c.png"
            imgGrey_104.src = "img/z11c.png"
            flagCoup = false;
        } else {
            imgGrey_101.src = "img/z44g.gif"
            imgGrey_102.src = "img/z33.png"
            imgGrey_103.src = "img/z22.png"
            imgGrey_104.src = "img/z11.png"
            flagCoup = true;
        }
    } else if (counter === 1 || counter === 2) {
        if (flagCoup === true) {
            imgGrey_101.src = "img/z44_bwc.png"
            imgGrey_102.src = "img/z33gc.gif"
            imgGrey_103.src = "img/z22c.png"
            imgGrey_104.src = "img/z11c.png"
            flagCoup = false;
        } else {
            imgGrey_101.src = "img/z44_bw.png"
            imgGrey_102.src = "img/z33g.gif"
            imgGrey_103.src = "img/z22.png"
            imgGrey_104.src = "img/z11.png"
            flagCoup = true;
        }
    } else if (counter === 3 || counter === 4 || counter === 5) {
        if (flagCoup === true) {
            imgGrey_101.src = "img/z44_bwc.png"
            imgGrey_102.src = "img/z33_bwc.png"
            imgGrey_103.src = "img/z22gc.gif"
            imgGrey_104.src = "img/z11c.png"
            flagCoup = false;
        } else {
            imgGrey_101.src = "img/z44_bw.png"
            imgGrey_102.src = "img/z33_bw.png"
            imgGrey_103.src = "img/z22g.gif"
            imgGrey_104.src = "img/z11.png"
            flagCoup = true;
        }
    } else if (counter === 6 || counter === 7 || counter === 8 || counter === 9) {
        if (flagCoup === true) {
            imgGrey_101.src = "img/z44_bwc.png"
            imgGrey_102.src = "img/z33_bwc.png"
            imgGrey_103.src = "img/z22_bwc.png"
            imgGrey_104.src = "img/z11gc.gif"
            flagCoup = false;
        } else {
            imgGrey_101.src = "img/z44_bw.png"
            imgGrey_102.src = "img/z33_bw.png"
            imgGrey_103.src = "img/z22_bw.png"
            imgGrey_104.src = "img/z11g.gif"
            flagCoup = true;
        }
    }
}

function restartInstall() {
    const imgGrey_101 = document.getElementById('101')
    const imgGrey_102 = document.getElementById('102')
    const imgGrey_103 = document.getElementById('103')
    const imgGrey_104 = document.getElementById('104')
    let shipNumber_105 = document.getElementById('105')
    let shipNumber_106 = document.getElementById('106')
    let shipNumber_107 = document.getElementById('107')
    let shipNumber_108 = document.getElementById('108')
    if (flagCoup === true) {
        imgGrey_101.src = "img/z44g.gif"
        imgGrey_102.src = "img/z33.png"
        imgGrey_103.src = "img/z22.png"
        imgGrey_104.src = "img/z11.png"
    } else {
        imgGrey_101.src = "img/z44gc.gif"
        imgGrey_102.src = "img/z33c.png"
        imgGrey_103.src = "img/z22c.png"
        imgGrey_104.src = "img/z11c.png"
    }
    shipNumber_105.innerHTML = 1;
    shipNumber_106.innerHTML = 2;
    shipNumber_107.innerHTML = 3;
    shipNumber_108.innerHTML = 4;
    counter = 0;
    counterComp = 0;
    for (let i = 0; i < 100; i++) {
        element[i].src = img.z1;
        arrSea[i] = 0;
    }
}

function playBattle() {
    localStorage.setItem('myPole', JSON.stringify(arrSea))
    shipImg(img.z1)
}

function playBattle2() {
    localStorage.setItem('myPole2', JSON.stringify(mPole))
}



function imgReplaceP100 (i, n, img, arr) {
    if (arr[i] === n) {
        element[i + 100].src = img
    }
}

function imgReplace (i, n, img, arr) {
    if (arr[i] === n) {
        element[i].src = img
    }
}

function imgReplaceFunc (imgRep, arr){
    for (let i = 0; i < arr.length; i++) {
        imgRep (i, 11, img.v1, arr)
        imgRep (i, 111, img.g1, arr)
        imgRep (i, 21, img.v21, arr)
        imgRep (i, 212, img.g21, arr)
        imgRep (i, 22, img.v22, arr)
        imgRep (i, 222, img.g22, arr)
        imgRep (i, 31, img.v31, arr)
        imgRep (i, 313, img.g31, arr)
        imgRep (i, 32, img.v32, arr)
        imgRep (i, 323, img.g32, arr)
        imgRep (i, 33,img.v33, arr)
        imgRep (i, 333, img.g33, arr)
        imgRep (i, 41, img.v41, arr)
        imgRep (i, 414, img.g41, arr)
        imgRep (i, 42, img.v42, arr)
        imgRep (i, 424, img.g42, arr)
        imgRep (i, 43, img.v43, arr)
        imgRep (i, 434, img.g43, arr)
        imgRep (i, 44, img.v44, arr)
        imgRep (i, 444, img.g44, arr)
    }
}

function start() {
    automation(arrSeaComp, imgPosition4Auto)
    const raw = localStorage.getItem('myPole')
    mPole = JSON.parse(raw)
    imgReplaceFunc (imgReplace, mPole)
}

function startAuto(field) {
    for (let i = 0; i < 100; i++) {
        element[i].src = img.z1;
        arrSea[i] = 0;
    }
    automation2(arrSea, imgPosition4AutoStart)
    const buttonPlay = document.getElementById('game')
    buttonPlay.style.visibility = "visible"
    const imgGrey_101 = document.getElementById('101')
    const imgGrey_102 = document.getElementById('102')
    const imgGrey_103 = document.getElementById('103')
    const imgGrey_104 = document.getElementById('104')
    let shipNumber_105 = document.getElementById('105')
    let shipNumber_106 = document.getElementById('106')
    let shipNumber_107 = document.getElementById('107')
    let shipNumber_108 = document.getElementById('108')
    shipNumber_105.innerHTML = 0;
    shipNumber_106.innerHTML = 0;
    shipNumber_107.innerHTML = 0;
    shipNumber_108.innerHTML = 0;
    if (flagCoup === true) {
        imgGrey_101.src = "img/z44_bw.png"
        imgGrey_102.src = "img/z33_bw.png"
        imgGrey_103.src = "img/z22_bw.png"
        imgGrey_104.src = "img/z11_bw.png"
    } else {
        imgGrey_101.src = "img/z44_bwc.png"
        imgGrey_102.src = "img/z33_bwc.png"
        imgGrey_103.src = "img/z22_bwc.png"
        imgGrey_104.src = "img/z11_bwc.png"
    }
    counter = 10
    for (let i = 0; i < field.length; i++) {
        if (field[i] === 11) {
            element[i].src = img.v1
        } else if (field[i] === 111) {
            element[i].src = img.g1
        } else if (field[i] === 21) {
            element[i].src = img.v21
        } else if (field[i] === 212) {
            element[i].src = img.g21
        } else if (field[i] === 22) {
            element[i].src = img.v22
        } else if (field[i] === 222) {
            element[i].src = img.g22
        } else if (field[i] === 31) {
            element[i].src = img.v31
        } else if (field[i] === 313) {
            element[i].src = img.g31
        } else if (field[i] === 32) {
            element[i].src = img.v32
        } else if (field[i] === 323) {
            element[i].src = img.g32
        } else if (field[i] === 33) {
            element[i].src = img.v33
        } else if (field[i] === 333) {
            element[i].src = img.g33
        } else if (field[i] === 41) {
            element[i].src = img.v41
        } else if (field[i] === 414) {
            element[i].src = img.g41
        } else if (field[i] === 42) {
            element[i].src = img.v42
        } else if (field[i] === 424) {
            element[i].src = img.g42
        } else if (field[i] === 43) {
            element[i].src = img.v43
        } else if (field[i] === 434) {
            element[i].src = img.g43
        } else if (field[i] === 44) {
            element[i].src = img.v44
        } else if (field[i] === 444) {
            element[i].src = img.g44
        }
    }
}

function menu() {
    localStorage.clear()
}

function automation(arrSeaComp, imgPosition4Auto) {
    while (counterComp < 10) {
        number = randomInt(0, 2)
        if (number === 1) {
            if (counterComp === 0) {
                number = randomInt(0, 60)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 10] === 0) && (+arrSeaComp[+number + 20] === 0) && (+arrSeaComp[+number + 30] === 0)) {
                    imgPosition4Auto(number, 41, number + 10, 42, number + 20, 43, number + 30, 44);
                    addTwo4(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 1 || counterComp === 2) {
                number = randomInt(0, 70)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 10] === 0) && (+arrSeaComp[+number + 20] === 0)) {
                    imgPosition4Auto(number, 31, number + 10, 32, number + 20, 33);
                    addTwo3(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 3 || counterComp === 4 || counterComp === 5) {
                number = randomInt(0, 80)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 10] === 0)) {
                    imgPosition4Auto(number, 21, number + 10, 22);
                    addTwo2(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 6 || counterComp === 7 || counterComp === 8 || counterComp === 9) {
                number = randomInt(0, 100)
                if ((+arrSeaComp[+number] === 0)) {
                    imgPosition4Auto(number, 11);
                    addTwo1(arrSeaComp)
                    counterComp += 1
                }
            }
        } else {
            if (counterComp === 0) {
                number = numberTo(7)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 1] === 0) && (+arrSeaComp[+number + 2] === 0) && (+arrSeaComp[+number + 3] === 0)) {
                    imgPosition4Auto(number, 414, number + 1, 424, number + 2, 434, number + 3, 444);
                    addTwo4c(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 1 || counterComp === 2) {
                number = numberTo(8)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 1] === 0) && (+arrSeaComp[+number + 2] === 0)) {
                    imgPosition4Auto(number, 313, number + 1, 323, number + 2, 333);
                    addTwo3c(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 3 || counterComp === 4 || counterComp === 5) {
                number = numberTo(9)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 1] === 0)) {
                    imgPosition4Auto(number, 212, number + 1, 222);
                    addTwo2c(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 6 || counterComp === 7 || counterComp === 8 || counterComp === 9) {
                number = numberTo(10)
                if ((+arrSeaComp[+number] === 0)) {
                    imgPosition4Auto(number, 111);
                    addTwo1c(arrSeaComp)
                    counterComp += 1
                }
            }
        }
    }
}

function automation2(arrSeaComp, imgPosition4Auto) {
    while (counterComp < 10) {
        number = randomInt(0, 2)
        if (number === 1) {
            if (counterComp === 0) {
                number = randomInt(0, 60)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 10] === 0) && (+arrSeaComp[+number + 20] === 0) && (+arrSeaComp[+number + 30] === 0)) {
                    imgPosition4Auto(number, 41, number + 10, 42, number + 20, 43, number + 30, 44);
                    addTwo4(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 1 || counterComp === 2) {
                number = randomInt(0, 70)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 10] === 0) && (+arrSeaComp[+number + 20] === 0)) {
                    imgPosition4Auto(number, 31, number + 10, 32, number + 20, 33);
                    addTwo3(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 3 || counterComp === 4 || counterComp === 5) {
                number = randomInt(0, 80)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 10] === 0)) {
                    imgPosition4Auto(number, 21, number + 10, 22);
                    addTwo2(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 6 || counterComp === 7 || counterComp === 8 || counterComp === 9) {
                number = randomInt(0, 100)
                if ((+arrSeaComp[+number] === 0)) {
                    imgPosition4Auto(number, 11);
                    addTwo1(arrSeaComp)
                    counterComp += 1
                }
            }
        } else {
            if (counterComp === 0) {
                number = numberTo(7)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 1] === 0) && (+arrSeaComp[+number + 2] === 0) && (+arrSeaComp[+number + 3] === 0)) {
                    imgPosition4Auto(number, 414, number + 1, 424, number + 2, 434, number + 3, 444);
                    addTwo4c(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 1 || counterComp === 2) {
                number = numberTo(8)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 1] === 0) && (+arrSeaComp[+number + 2] === 0)) {
                    imgPosition4Auto(number, 313, number + 1, 323, number + 2, 333);
                    addTwo3c(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 3 || counterComp === 4 || counterComp === 5) {
                number = numberTo(9)
                if ((+arrSeaComp[+number] === 0) && (+arrSeaComp[+number + 1] === 0)) {
                    imgPosition4Auto(number, 212, number + 1, 222);
                    addTwo2c(arrSeaComp)
                    counterComp += 1
                }
            } else if (counterComp === 6 || counterComp === 7 || counterComp === 8 || counterComp === 9) {
                number = numberTo(10)
                if ((+arrSeaComp[+number] === 0)) {
                    imgPosition4Auto(number, 111);
                    addTwo1c(arrSeaComp)
                    counterComp += 1
                }
            }
        }
    }
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function numberTo(toNumber) {
    return (randomInt(0, 10) * 10 + randomInt(0, toNumber))
}

function addTwo4c(arrSeaComp) {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 414) {
            if (i === 0) {
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 13] = 2
                arrSeaComp[i + 14] = 2
                arrSeaComp[i + 4] = 2
            } else if (i === 6) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 13] = 2
            } else if ((i > 0) && (i < 6)) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 13] = 2
                arrSeaComp[i + 14] = 2
                arrSeaComp[i + 4] = 2
            } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 7] = 2
                arrSeaComp[i - 6] = 2
                arrSeaComp[i + 4] = 2
                arrSeaComp[i + 14] = 2
                arrSeaComp[i + 13] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
            } else if ((i % 10 === 6) && (i > 6) && (i < 96)) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 7] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 13] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 9] = 2
            } else if ((i > 90) && (i < 96)) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 7] = 2
                arrSeaComp[i - 6] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 4] = 2
            } else if ((i === 90)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 7] = 2
                arrSeaComp[i - 6] = 2
                arrSeaComp[i + 4] = 2
            } else if (i === 96) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 7] = 2
                arrSeaComp[i - 1] = 2
            } else {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 7] = 2
                arrSeaComp[i - 6] = 2
                arrSeaComp[i + 4] = 2
                arrSeaComp[i + 14] = 2
                arrSeaComp[i + 13] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i - 1] = 2
            }
        }
    }
}

function addTwo3c(arrSeaComp) {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 313) {
            if (i === 0) {
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 13] = 2
                arrSeaComp[i + 3] = 2
            } else if (i === 7) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 12] = 2
            } else if ((i > 0) && (i < 7)) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 13] = 2
                arrSeaComp[i + 3] = 2
            } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 7] = 2
                arrSeaComp[i + 3] = 2
                arrSeaComp[i + 13] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
            } else if ((i % 10 === 7) && (i > 7) && (i < 97)) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 9] = 2
            } else if ((i > 90) && (i < 97)) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 7] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 3] = 2
            } else if ((i === 90)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 7] = 2
                arrSeaComp[i + 3] = 2
            } else if (i === 97) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 1] = 2
            } else {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 7] = 2
                arrSeaComp[i + 3] = 2
                arrSeaComp[i + 13] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i - 1] = 2
            }
        }
    }
}

function addTwo2c(arrSeaComp) {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 212) {
            if (i === 0) {
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 2] = 2
            } else if (i === 8) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 11] = 2
            } else if ((i > 0) && (i < 8)) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 2] = 2
            } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i + 2] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
            } else if ((i % 10 === 8) && (i > 8) && (i < 98)) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 9] = 2
            } else if ((i > 90) && (i < 98)) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 2] = 2
            } else if ((i === 90)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i + 2] = 2
            } else if (i === 98) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 1] = 2
            } else {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 8] = 2
                arrSeaComp[i + 2] = 2
                arrSeaComp[i + 12] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i - 1] = 2
            }
        }
    }
}

function addTwo1c(arrSeaComp) {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 111) {
            if (i === 0) {
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 1] = 2
            } else if (i === 9) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
            } else if ((i > 0) && (i < 9)) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 1] = 2
            } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
            } else if ((i % 10 === 9) && (i > 9) && (i < 99)) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 9] = 2
            } else if ((i > 90) && (i < 99)) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 1] = 2
            } else if ((i === 90)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
            } else if (i === 99) {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 1] = 2
            } else {
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i - 1] = 2
            }
        }
    }
}

function addTwo4(arrSeaComp) {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 41) {
            if (i === 0) {
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 31] = 2
                arrSeaComp[i + 41] = 2
                arrSeaComp[i + 40] = 2
            } else if (i === 9) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 29] = 2
                arrSeaComp[i + 39] = 2
                arrSeaComp[i + 40] = 2
            } else if ((i > 0) && (i < 9)) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 29] = 2
                arrSeaComp[i + 39] = 2
                arrSeaComp[i + 40] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 31] = 2
                arrSeaComp[i + 41] = 2
            } else if ((i % 10 === 0) && (i > 0) && (i < 60)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 31] = 2
                arrSeaComp[i + 41] = 2
                arrSeaComp[i + 40] = 2
            } else if ((i % 10 === 9) && (i > 9) && (i < 69)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 29] = 2
                arrSeaComp[i + 39] = 2
                arrSeaComp[i + 40] = 2
            } else if ((i > 60) && (i < 69)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 29] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 31] = 2
            } else if ((i === 60)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 31] = 2
            } else if (i === 69) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 29] = 2
            } else {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 29] = 2
                arrSeaComp[i + 39] = 2
                arrSeaComp[i + 40] = 2
                arrSeaComp[i + 41] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 31] = 2
            }
        }
    }
}

function addTwo3(arrSeaComp) {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 31) {
            if (i === 0) {
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 31] = 2
                arrSeaComp[i + 30] = 2
            } else if (i === 9) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 29] = 2
                arrSeaComp[i + 30] = 2
            } else if ((i > 0) && (i < 9)) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 29] = 2
                arrSeaComp[i + 30] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 31] = 2
            } else if ((i % 10 === 0) && (i > 0) && (i < 70)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 31] = 2
                arrSeaComp[i + 30] = 2
            } else if ((i % 10 === 9) && (i > 9) && (i < 79)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 29] = 2
                arrSeaComp[i + 30] = 2
            } else if ((i > 70) && (i < 79)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
            } else if ((i === 70)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
            } else if (i === 79) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
            } else {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 29] = 2
                arrSeaComp[i + 30] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 31] = 2
            }
        }
    }
}

function addTwo2(arrSeaComp) {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 21) {
            if (i === 0) {
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 20] = 2
            } else if (i === 9) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 20] = 2
            } else if ((i > 0) && (i < 9)) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 20] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
            } else if ((i % 10 === 0) && (i > 0) && (i < 80)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
                arrSeaComp[i + 20] = 2
            } else if ((i % 10 === 9) && (i > 9) && (i < 89)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 20] = 2
            } else if ((i > 80) && (i < 89)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
            } else if (i === 80) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
            } else if (i === 89) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
            } else {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 19] = 2
                arrSeaComp[i + 20] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 21] = 2
            }
        }
    }
}

function addTwo1(arrSeaComp) {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 11) {
            if (i === 0) {
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
            } else if (i === 9) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
            } else if ((i > 0) && (i < 9)) {
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
            } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
                arrSeaComp[i + 10] = 2
            } else if ((i % 10 === 9) && (i > 9) && (i < 99)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
            } else if ((i > 90) && (i < 99)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
            } else if ((i === 90)) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
            } else if (i === 99) {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
            } else {
                arrSeaComp[i - 10] = 2
                arrSeaComp[i - 11] = 2
                arrSeaComp[i - 1] = 2
                arrSeaComp[i + 9] = 2
                arrSeaComp[i + 10] = 2
                arrSeaComp[i - 9] = 2
                arrSeaComp[i + 1] = 2
                arrSeaComp[i + 11] = 2
            }
        }
    }
}

function click(fire, a1) {
    arrSeaComp[fire.id] = a1
    fire.src = img.cross
    findBattle2My()
    findBattle3My()
    findBattle4My()
    setTimeout(fireShip, 300, fire)
}

function hitFind (fire, number, hit, find, n){
    hit(number, fire, n)
    find(number, fire)
}

function fireShip(fire) {
    victory()
    let arrowImg = document.getElementById('1000')
    if (+flagFind === 0 && (counter < 10) && (counterI < 10) && (flagCoup === true)) {
        if (+arrSeaComp[fire.id] !== 5) {
            arrowImg.src = "img/arrowRight.png"
            if ((+arrSeaComp[fire.id] === 11) || (+arrSeaComp[+fire.id] === 111)) {
                arrSeaComp[fire.id] = 911
                fire.src = img.zf
                findBattle1My()
                setTimeout(fireShip, 300, fire)
            } else if (+arrSeaComp[fire.id] === 21) {
                click(fire, 921)
            } else if (+arrSeaComp[fire.id] === 22) {
                click(fire, 922)
            } else if (+arrSeaComp[fire.id] === 212) {
                click(fire, 9212)
            } else if (+arrSeaComp[fire.id] === 222) {
                click(fire, 9222)
            } else if (+arrSeaComp[fire.id] === 31) {
                click(fire, 931)
            } else if (+arrSeaComp[fire.id] === 32) {
                click(fire, 932)
            } else if (+arrSeaComp[fire.id] === 33) {
                click(fire, 933)
            } else if (+arrSeaComp[fire.id] === 313) {
                click(fire, 9313)
            } else if (+arrSeaComp[fire.id] === 323) {
                click(fire, 9323)
            } else if (+arrSeaComp[fire.id] === 333) {
                click(fire, 9333)
            } else if (+arrSeaComp[fire.id] === 41) {
                click(fire, 941)
            } else if (+arrSeaComp[fire.id] === 42) {
                click(fire, 942)
            } else if (+arrSeaComp[fire.id] === 43) {
                click(fire, 943)
            } else if (+arrSeaComp[fire.id] === 44) {
                click(fire, 944)
            } else if (+arrSeaComp[fire.id] === 414) {
                click(fire, 9414)
            } else if (+arrSeaComp[fire.id] === 424) {
                click(fire, 9424)
            } else if (+arrSeaComp[fire.id] === 434) {
                click(fire, 9434)
            } else if (+arrSeaComp[fire.id] === 444) {
                click(fire, 9444)
            } else if ((+arrSeaComp[+fire.id] === 0) || (+arrSeaComp[+fire.id] === 2)) {
                arrSeaComp[fire.id] = 5
                flagFind = +orz
                fire.src = img.zm
                arrowImg.src = "img/arrowLeft.png"
                setTimeout(fireShip, 300, fire)
            }
        }
    } else if ((+flagFind !== 0) && (counter < 10) && (counterI < 10) && (flagCoup === true)) {
        arrowImg.src = "img/arrowLeft.png"
        if (flagFind === 1) {
            number = randomInt(0, 100)
            if (+arrBattle[number] === 0) {
                    if ((mPole[number] === 11) || (mPole[number] === 111)) {
                        if (+mPole[number] === 11) {
                            hit(number, fire, 900)
                        } else if (+mPole[number] === 111) {
                            hit(number, fire, 9000)
                        }
                        findBattle1()
                    } else if ((+mPole[number] === 21) || (+mPole[number] === 22) || (+mPole[number] === 212) || (+mPole[number] === 222)) {
                        flagFind = 2
                        tmp = number
                        if (+mPole[number] === 21) {
                            hitFind (fire, number, hit2, find2X, 900)
                        } else if (+mPole[number] === 212) {
                            hitFind (fire, number, hit2, find2X, 9000)
                        } else if (+mPole[number] === 22) {
                            hitFind (fire, number, hit2, find2X, 900)
                        } else if (+mPole[number] === 222) {
                            hitFind (fire, number, hit2, find2X, 9000)
                        }
                    } else if ((+mPole[number] === 31) || (+mPole[number] === 32) || (+mPole[number] === 33)
                        || (+mPole[number] === 313) || (+mPole[number] === 323) || (+mPole[number] === 333)) {
                        flagFind = 3
                        tmp = number
                        if (+mPole[number] === 31) {
                            hitFind (fire, number, hit3X, find3X, 900)
                        } else if (+mPole[number] === 32) {
                            hitFind (fire, number, hit3X, find3X, 900)
                        } else if (+mPole[number] === 33) {
                            hitFind (fire, number, hit3X, find3X, 900)
                        } else if (+mPole[number] === 313) {
                            hitFind (fire, number, hit3X, find3X, 9000)
                        } else if (+mPole[number] === 323) {
                            hitFind (fire, number, hit3X, find3X, 9000)
                        } else if (+mPole[number] === 333) {
                            hitFind (fire, number, hit3X, find3X, 9000)
                        }
                    } else if ((mPole[number] === 41) || (mPole[number] === 42) || (mPole[number] === 43) || (mPole[number] === 44)
                        || (mPole[number] === 414) || (mPole[number] === 424) || (mPole[number] === 434) || (mPole[number] === 444)) {
                        flagFind = 4
                        tmp = number
                        if (+mPole[number] === 41) {
                            hitFind (fire, number, hit3X, find4X, 900)
                        } else if (+mPole[number] === 42) {
                            hitFind (fire, number, hit3X, find4X, 900)
                        } else if (+mPole[number] === 43) {
                            hitFind (fire, number, hit3X, find4X, 900)
                        } else if (+mPole[number] === 44) {
                            hitFind (fire, number, hit3X, find4X, 900)
                        } else if (+mPole[number] === 414) {
                            hitFind (fire, number, hit3X, find4X, 9000)
                        } else if (+mPole[number] === 424) {
                            hitFind (fire, number, hit3X, find4X, 9000)
                        } else if (+mPole[number] === 434) {
                            hitFind (fire, number, hit3X, find4X, 9000)
                        } else if (+mPole[number] === 444) {
                            hitFind (fire, number, hit3X, find4X, 9000)
                        }
                    }else {
                        missed(number, fire, 1)
                }
            } else {
                fireShip(fire)
            }
        } else if (+flagFind === 2) {
            find2X(tmp, fire)
        } else if ((+flagFind === 3) && (+flagFind !== 0)) {
            if ((counterFind3 < 2) && (+flagFind !== 0)) {
                find3X(tmp, fire)
            } else if ((counterFind3 === 2) && (+flagFind !== 0)) {
                find3XX(fire)
            }
        } else if ((+flagFind === 4) && (+flagFind !== 0)) {
            if ((counterFind3 < 2) && (+flagFind !== 0)) {
                find4X(tmp, fire)
            } else if ((counterFind3 === 2) && (+flagFind !== 0)) {
                find4XX(fire)
            } else if ((counterFind3 === 3) && (+flagFind !== 0)) {
                find4XXX(fire)
            }
        }
    }
}

function victory() {
    const buttonRestart = document.getElementById('restart')
    let arrowImg = document.getElementById('1000')
    if (+counter === 10) {
        arrowImg.src = "img/v1.gif"
        surrender()
        buttonRestart.style.visibility = "visible"
    } else if (+counterI === 10) {
        arrowImg.src = "img/v2.gif"
        buttonRestart.style.visibility = "visible"
    }
}


function missed(n, fire, flag) {
    flagFind = 0
    orz = flag
    let arrowImg = document.getElementById('1000')
    arrowImg.src = "img/arrowRight.png"
    element[+n].src = img.zm
    mPole[+n] = 5
    arrBattle[+n] = 5
    setTimeout(fireShip, 500, fire)
}

function hit(n, fire, k) {
    arrBattle[n] = mPole[n] + k
    counter += 1
    setTimeout(fireShip, 500, fire)
}

function hit2(n, fire, k) {
    arrBattle[n] = mPole[n] + k
    element[+n].src = img.cross
    setTimeout(fireShip, 500, fire)
}

function hit2X(n1, n2, fire) {
    arrBattle[n1] = +mPole[n1]
    arrBattle[n2] = +mPole[n2]
    flagFind = 1
    counter += 1
    findBattle2()
    setTimeout(fireShip, 500, fire)
}

function hit3X(n, fire, k) {
    arrBattle[n] = mPole[n] + k
    element[n].src = img.cross
    counterFind3 += 1
    setTimeout(fireShip, 500, fire)
}

function hit3XX(n1, n2, n3, fire, k) {
    arrBattle[n1] = +mPole[n1] + k
    arrBattle[n2] = +mPole[n2] + k
    arrBattle[n3] = +mPole[n3] + k
    counter += 1
    flagFind = 1
    counterFind3 = 0
    findBattle3()
    setTimeout(fireShip, 500, fire)
}

function hit4XX(n1, n2, n3, fire, k) {
    element[n1].src = img.cross
    element[n2].src = img.cross
    element[n3].src = img.cross

    arrBattle[n1] = +mPole[n1] + k
    arrBattle[n2] = +mPole[n2] + k
    arrBattle[n3] = +mPole[n3] + k
    counterFind3 += 1
    setTimeout(fireShip, 500, fire)
}

function hit4XXX(n1, n2, n3, n4, fire, k) {
    arrBattle[n1] = +mPole[n1] + k
    arrBattle[n2] = +mPole[n2] + k
    arrBattle[n3] = +mPole[n3] + k
    arrBattle[n4] = +mPole[n4] + k
    flagFind = 1
    counterFind3 = 0
    counter += 1
    findBattle4()
    setTimeout(fireShip, 500, fire)
}



function find2X(number, fire) {

    const n2xnm10 = ((mPole[number - 10] === 21) || (mPole[number - 10] === 22) || (mPole[number - 10] === 212) || (mPole[number - 10] === 222)
        || (mPole[number - 10] === 921) || (mPole[number - 10] === 922) || (mPole[number - 10] === 9212) || (mPole[number - 10] === 9222))

    const n2xnm1 = ((mPole[number - 1] === 21) || (mPole[number - 1] === 22) || (mPole[number - 1] === 212) || (mPole[number - 1] === 222)
        || (mPole[number - 1] === 921) || (mPole[number - 1] === 922) || (mPole[number - 1] === 9212) || (mPole[number - 1] === 9222))

    const n2xnp1 = ((mPole[number + 1] === 21) || (mPole[number + 1] === 22) || (mPole[number + 1] === 212) || (mPole[number + 1] === 222)
        || (mPole[number + 1] === 921) || (mPole[number + 1] === 922) || (mPole[number + 1] === 9212) || (mPole[number + 1] === 9222))

    const n2xnp10 = ((mPole[number + 10] === 21) || (mPole[number + 10] === 22) || (mPole[number + 10] === 212) || (mPole[number + 10] === 222)
        || (mPole[number + 10] === 921) || (mPole[number + 10] === 922) || (mPole[number + 10] === 9212) || (mPole[number + 10] === 9222))
    if (flagFind !== 0) {
        if (+number === 0) {
            num = randomInt(1, 3)
            if (+num === 1) {
                ifFind2X(number, fire, number + 1, n2xnp1, 2)
            } else {
                ifFind2X(number, fire, number + 10, n2xnp10, 2)
            }
        } else if (+number === 9) {
            num = randomInt(1, 3)
            if (num === 1) {
                ifFind2X(number, fire, number + 10, n2xnp10, 2)
            } else {
                ifFind2X(number, fire, number - 1, n2xnm1, 2)
            }
        } else if (+number === 90) {
            num = randomInt(1, 3)
            if (num === 1) {
                ifFind2X(number, fire, number - 10, n2xnm10, 2)
            } else {
                ifFind2X(number, fire, number + 1, n2xnp1, 2)
            }
        } else if (+number === 99) {
            num = randomInt(1, 3)
            if (num === 1) {
                ifFind2X(number, fire, number - 10, n2xnm10, 2)
            } else {
                ifFind2X(number, fire, number - 1, n2xnm1, 2)
            }
        } else if ((+number > 0) && (+number < 9)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind2X(number, fire, number + 1, n2xnp1, 2)
            } else if (num === 2) {
                ifFind2X(number, fire, number + 10, n2xnp10, 2)
            } else {
                ifFind2X(number, fire, number - 1, n2xnm1, 2)
            }
        } else if ((+number > 90) && (+number < 99)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind2X(number, fire, number - 1, n2xnm1, 2)
            } else if (num === 2) {
                ifFind2X(number, fire, number - 10, n2xnm10, 2)
            } else {
                ifFind2X(number, fire, number + 1, n2xnp1, 2)
            }
        } else if ((+number % 10 === 0) && (+number > 0) && (+number < 90)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind2X(number, fire, number - 10, n2xnm10, 2)
            } else if (num === 2) {
                ifFind2X(number, fire, number + 1, n2xnp1, 2)
            } else {
                ifFind2X(number, fire, number + 10, n2xnp10, 2)
            }
        } else if ((+number % 10 === 9) && (+number > 9) && (+number < 99)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind2X(number, fire, number - 10, n2xnm10, 2)
            } else if (num === 2) {
                ifFind2X(number, fire, number + 10, n2xnp10, 2)
            } else {
                ifFind2X(number, fire, number - 1, n2xnm1, 2)
            }
        } else {
            num = randomInt(1, 5)
            if (num === 1) {
                ifFind2X(number, fire, number - 10, n2xnm10, 2)
            } else if (num === 2) {
                ifFind2X(number, fire, number + 1, n2xnp1, 2)
            } else if (num === 3) {
                ifFind2X(number, fire, number + 10, n2xnp10, 2)
            } else {
                ifFind2X(number, fire, number - 1, n2xnm1, 2)
            }
        }
    } else {
        fireShip(fire)
    }
}

function ifFind2X(number, fire, n1, ifn, f) {
    if (+arrBattle[n1] === 0) {
        if (ifn) {
            hit2X(number, n1, fire)
        } else {
            missed(n1, fire, f)
        }
    } else {
        find2X(number, fire)
    }
}

function ifFind3X (number, fire, n1, if1, if2){
    if (+arrBattle[n1] === 0) {
        if (if1) {
            hit3X(n1, fire, 900)
        } else if (if2) {
            hit3X(n1, fire, 9000)
        } else {
            missed(n1, fire, 3)
        }
    } else {
        find3X(number, fire)
    }
}

function ifFind4X (number, fire, n1, if1){
    if (+arrBattle[n1] === 0) {
        if (if1) {
            hit3X(n1, fire)
        } else {
            missed(n1, fire, 4)
        }
    } else {
        find4X(number, fire)
    }
}

function find3X(number, fire) {
    const n3m10 = ((mPole[number - 10] === 31) || (mPole[number - 10] === 32) || (mPole[number - 10] === 33))
    const n33m10 = ((mPole[number - 10] === 313) || (mPole[number - 10] === 323) || (mPole[number - 10] === 333))
    const n3m1 = ((mPole[number - 1] === 31) || (mPole[number - 1] === 32) || (mPole[number - 1] === 33))
    const n33m1 = ((mPole[number - 1] === 313) || (mPole[number - 1] === 323) || (mPole[number - 1] === 333))
    const n3p1 = ((mPole[number + 1] === 31) || (mPole[number + 1] === 32) || (mPole[number + 1] === 33))
    const n33p1 = ((mPole[number + 1] === 313) || (mPole[number + 1] === 323) || (mPole[number + 1] === 333))
    const n3p10 = ((mPole[number + 10] === 31) || (mPole[number + 10] === 32) || (mPole[number + 10] === 33))
    const n33p10 = ((mPole[number + 10] === 313) || (mPole[number + 10] === 323) || (mPole[number + 10] === 333))

    if (flagFind !== 0) {
        if (+number === 0) {
            num = randomInt(1, 3)
            if (+num === 1) {
                ifFind3X (number, fire, number + 1, n3p1, n33p1)
            } else {
                ifFind3X (number, fire, number + 10, n3p10, n33p10)
            }
        } else if (+number === 9) {
            num = randomInt(1, 3)
            if (num === 1) {
                ifFind3X (number, fire, number + 10, n3p10, n33p10)
            } else {
                ifFind3X (number, fire, number - 1, n3m1, n33m1)
            }
        } else if (+number === 90) {
            num = randomInt(1, 3)
            if (num === 1) {
                ifFind3X (number, fire, number - 10, n3m10, n33m10)
            } else {
                ifFind3X (number, fire, number + 1, n3p1, n33p1)
            }
        } else if (+number === 99) {
            num = randomInt(1, 3)
            if (num === 1) {
                ifFind3X (number, fire, number - 10, n3m10, n33m10)
            } else {
                ifFind3X (number, fire, number - 1, n3m1, n33m1)
            }
        } else if ((+number > 0) && (+number < 9)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind3X (number, fire, number + 1, n3p1, n33p1)
            } else if (num === 2) {
                ifFind3X (number, fire, number + 10, n3p10, n33p10)
            } else {
                ifFind3X (number, fire, number - 1, n3m1, n33m1)
            }
        } else if ((+number > 90) && (+number < 99)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind3X (number, fire, number - 1, n3m1, n33m1)
            } else if (num === 2) {
                ifFind3X (number, fire, number - 10, n3m10, n33m10)
            } else {
                ifFind3X (number, fire, number + 1, n3p1, n33p1)
            }
        } else if ((+number % 10 === 0) && (+number > 0) && (+number < 90)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind3X (number, fire, number - 10, n3m10, n33m10)
            } else if (num === 2) {
                ifFind3X (number, fire, number + 1, n3p1, n33p1)
            } else {
                ifFind3X (number, fire, number + 10, n3p10, n33p10)
            }
        } else if ((+number % 10 === 9) && (+number > 9) && (+number < 99)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind3X (number, fire, number - 10, n3m10, n33m10)
            } else if (num === 2) {
                ifFind3X (number, fire, number + 10, n3p10, n33p10)
            } else {
                ifFind3X (number, fire, number - 1, n3m1, n33m1)
            }
        } else {
            num = randomInt(1, 5)
            if (num === 1) {
                ifFind3X (number, fire, number - 10, n3m10, n33m10)
            } else if (num === 2) {
                ifFind3X (number, fire, number + 1, n3p1, n33p1)
            } else if (num === 3) {
                ifFind3X (number, fire, number + 10, n3p10, n33p10)
            } else {
                ifFind3X (number, fire, number - 1, n3m1, n33m1)
            }
        }
    } else {
        fireShip(fire)
    }

}

function find3XX(fire) {
    if (flagFind !== 0) {
        if ((+arrBattle[tmp] === 31) || (+arrBattle[tmp] === 931)) {
            if ((+tmp >= 0) && (+tmp <= 9)) {
                hit3XX(tmp, tmp + 10, tmp + 20, fire, 900)
            } else {
                num = randomInt(1, 3)
                if (+num === 1) {
                    if (+arrBattle[tmp - 10] === 0) {
                        missed(tmp - 10, fire, 3)
                    } else {
                        hit3XX(tmp, tmp + 10, tmp + 20, fire, 900)
                    }
                } else {
                    hit3XX(tmp, tmp + 10, tmp + 20, fire, 900)
                }
            }
        } else if ((+arrBattle[tmp] === 32) || (+arrBattle[tmp] === 932)) {
            if ((+tmp >= 10) && (+tmp <= 19)) {
                if (+arrBattle[tmp - 10] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit3XX(tmp - 10, tmp, tmp + 10, fire, 900)
                    } else {
                        if (+arrBattle[tmp + 20] === 0) {
                            missed(tmp + 20, fire, 3)
                        } else {
                            hit3XX(tmp - 10, tmp, tmp + 10, fire, 900)
                        }
                    }
                } else {
                    hit3XX(tmp - 10, tmp, tmp + 10, fire, 900)
                }
            } else if ((+tmp >= 80) && (+tmp <= 89)) {
                if (+arrBattle[tmp + 10] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit3XX(tmp - 10, tmp, tmp + 10, fire, 900)
                    } else {
                        if (+arrBattle[tmp + 20] === 0) {
                            missed(tmp + 20, fire, 3)
                        } else {
                            hit3XX(tmp - 10, tmp, tmp + 10, fire, 900)
                        }
                    }
                } else {
                    hit3XX(tmp - 10, tmp, tmp + 10, fire, 900)
                }
            } else {
                if (+arrBattle[tmp + 10] === 0) {
                    if (+arrBattle[tmp - 20] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp - 20, fire, 3)
                        } else {
                            hit3XX(tmp - 10, tmp, tmp + 10, fire, 900)
                        }
                    } else {
                        hit3XX(tmp - 10, tmp, tmp + 10, fire, 900)
                    }
                } else {
                    if (+arrBattle[tmp + 20] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp + 20, fire, 3)
                        } else {
                            hit3XX(tmp - 10, tmp, tmp + 10, fire, 900)
                        }
                    } else {
                        hit3XX(tmp - 10, tmp, tmp + 10, fire, 900)
                    }
                }
            }
        } else if ((+arrBattle[tmp] === 33) || (+arrBattle[tmp] === 933)) {
            if ((+tmp >= 20) && (+tmp <= 29)) {
                if (+arrBattle[tmp + 10] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        missed(tmp + 10, fire, 3)
                    } else {
                        hit3XX(tmp - 20, tmp - 10, tmp, fire, 900)
                    }
                }
                hit3XX(tmp - 20, tmp - 10, tmp, fire, 900)
            } else if ((+tmp >= 90) && (+tmp <= 99)) {
                hit3XX(tmp - 20, tmp - 10, tmp, fire, 900)
            } else {
                if (+arrBattle[tmp + 10] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        missed(tmp + 10, fire, 3)
                    } else {
                        hit3XX(tmp - 20, tmp - 10, tmp, fire, 900)
                    }
                } else {
                    hit3XX(tmp - 20, tmp - 10, tmp, fire, 900)
                }
            }
        } else if ((+arrBattle[tmp] === 313) || (+arrBattle[tmp] === 9313)) {
            if ((+tmp % 10 === 0) && (+tmp >= 0) && (+tmp <= 90)) {
                hit3XX(tmp, tmp + 1, tmp + 2, fire, 9000)
            } else {
                if (+arrBattle[tmp - 1] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        missed(tmp - 1, fire, 3)
                    } else {
                        hit3XX(tmp, tmp + 1, tmp + 2, fire, 9000)
                    }
                } else {
                    hit3XX(tmp, tmp + 1, tmp + 2, fire, 9000)
                }
            }
        } else if ((+arrBattle[tmp] === 323) || (+arrBattle[tmp] === 9323)) {
            if (+tmp % 10 === 1) {
                num = randomInt(1, 3)
                if (+num === 1) {
                    if (+arrBattle[tmp - 1] === 0) {
                        hit3XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                    } else {
                        missed(tmp + 2, fire, 3)
                    }
                } else {
                    hit3XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                }
            } else if (+tmp % 10 === 8) {
                num = randomInt(1, 3)
                if (+num === 1) {
                    if (+arrBattle[tmp + 1] === 0) {
                        hit3XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                    } else {
                        missed(tmp - 2, fire, 3)
                    }
                } else {
                    hit3XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                }
            } else {
                if (+arrBattle[tmp - 1] === 0) {
                    if (+arrBattle[tmp + 2] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp + 2, fire, 3)
                        } else {
                            hit3XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                        }
                    } else {
                        hit3XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                    }

                } else {
                    if (+arrBattle[tmp - 2] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp - 2, fire, 3)
                        } else {
                            hit3XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                        }
                    } else {
                        hit3XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                    }
                }
            }
        } else if ((+arrBattle[tmp] === 333) || (+arrBattle[tmp] === 9333)) {
            if (+tmp % 10 === 9) {
                hit3XX(tmp - 2, tmp - 1, tmp, fire, 9000)
            } else {
                if (+arrBattle[tmp + 1] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        missed(tmp + 1, fire, 3)
                    } else {
                        hit3XX(tmp - 2, tmp - 1, tmp, fire, 9000)
                    }
                } else {
                    hit3XX(tmp - 2, tmp - 1, tmp, fire, 9000)
                }
            }
        }
    } else {
        fireShip(fire)
    }

}

function find4X(number, fire) {
    const n4m10 = ((mPole[number - 10] === 41) || (mPole[number - 10] === 42) || (mPole[number - 10] === 43) || (mPole[number - 10] === 44)
        || (mPole[number - 10] === 414) || (mPole[number - 10] === 424) || (mPole[number - 10] === 434) || (mPole[number - 10] === 444))
    const n4m1 = ((mPole[number - 1] === 41) || (mPole[number - 1] === 42) || (mPole[number - 1] === 43) || (mPole[number - 1] === 44)
        || (mPole[number - 1] === 414) || (mPole[number - 1] === 424) || (mPole[number - 1] === 434) || (mPole[number - 1] === 444))
    const n4p1 = ((mPole[number + 1] === 41) || (mPole[number + 1] === 42) || (mPole[number + 1] === 43) || (mPole[number + 1] === 44)
        || (mPole[number + 1] === 414) || (mPole[number + 1] === 424) || (mPole[number + 1] === 434) || (mPole[number + 1] === 444))
    const n4p10 = ((mPole[number + 10] === 41) || (mPole[number + 10] === 42) || (mPole[number + 10] === 43) || (mPole[number + 10] === 44)
        || (mPole[number + 10] === 414) || (mPole[number + 10] === 424) || (mPole[number + 10] === 434) || (mPole[number + 10] === 444))
    if (flagFind !== 0) {
        if (+number === 0) {
            num = randomInt(1, 3)
            if (+num === 1) {
                ifFind4X (number, fire, number + 1, n4p1)
            } else {
                ifFind4X (number, fire, number + 10, n4p10)
            }
        } else if (+number === 9) {
            num = randomInt(1, 3)
            if (num === 1) {
                ifFind4X (number, fire, number + 10, n4p10)
            } else {
                ifFind4X (number, fire, number - 1, n4m1)
            }
        } else if (+number === 90) {
            num = randomInt(1, 3)
            if (num === 1) {
                ifFind4X (number, fire, number - 10, n4m10)
            } else {
                ifFind4X (number, fire, number + 1, n4p1)
            }
        } else if (+number === 99) {
            num = randomInt(1, 3)
            if (num === 1) {
                ifFind4X (number, fire, number - 10, n4m10)
            } else {
                ifFind4X (number, fire, number - 1, n4m1)
            }
        } else if ((+number > 0) && (+number < 9)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind4X (number, fire, number + 1, n4p1)
            } else if (num === 2) {
                ifFind4X (number, fire, number + 10, n4p10)
            } else {
                ifFind4X (number, fire, number - 1, n4m1)
            }
        } else if ((+number > 90) && (+number < 99)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind4X (number, fire, number - 1, n4m1)
            } else if (num === 2) {
                ifFind4X (number, fire, number - 10, n4m10)
            } else {
                ifFind4X (number, fire, number + 1, n4p1)
            }
        } else if ((+number % 10 === 0) && (+number > 0) && (+number < 90)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind4X (number, fire, number - 10, n4m10)
            } else if (num === 2) {
                ifFind4X (number, fire, number + 1, n4p1)
            } else {
                ifFind4X (number, fire, number + 10, n4p10)
            }
        } else if ((+number % 10 === 9) && (+number > 9) && (+number < 99)) {
            num = randomInt(1, 4)
            if (num === 1) {
                ifFind4X (number, fire, number - 10, n4m10)
            } else if (num === 2) {
                ifFind4X (number, fire, number + 10, n4p10)
            } else {
                ifFind4X (number, fire, number - 1, n4m1)
            }
        } else {
            num = randomInt(1, 5)
            if (num === 1) {
                ifFind4X (number, fire, number - 10, n4m10)
            } else if (num === 2) {
                ifFind4X (number, fire, number + 1, n4p1)
            } else if (num === 3) {
                ifFind4X (number, fire, number + 10, n4p10)
            } else {
                ifFind4X (number, fire, number - 1, n4m1)
            }
        }
    } else {
        fireShip(fire)
    }
}



function find4XX(fire) {
    if (flagFind !== 0) {
        if ((+arrBattle[tmp] === 41) || (+arrBattle[tmp] === 941)) {
            if ((+tmp >= 0) && (+tmp <= 9)) {
                hit4XX(tmp, tmp + 10, tmp + 20, fire, 900)
            } else {
                num = randomInt(1, 3)
                if (+num === 1) {
                    if (+arrBattle[tmp - 10] === 0) {
                        missed(tmp - 10, fire, 4)
                    } else {
                        hit4XX(tmp, tmp + 10, tmp + 20, fire, 900)
                    }
                } else {
                    hit4XX(tmp, tmp + 10, tmp + 20, fire, 900)
                }
            }
        } else if ((+arrBattle[tmp] === 42) || (+arrBattle[tmp] === 942)) {
            if ((+tmp >= 10) && (+tmp <= 19)) {
                if (+arrBattle[tmp - 10] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XX(tmp - 10, tmp, tmp + 10, fire, 900)
                    } else {
                        hit4XX(tmp, tmp + 10, tmp + 20, fire, 900)
                    }
                } else {
                    hit4XX(tmp - 10, tmp, tmp + 10, fire, 900)
                }
            } else {
                if (+arrBattle[tmp + 10] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XX(tmp - 10, tmp, tmp + 10, fire, 900)
                    } else {
                        missed(tmp - 20, fire, 4)
                    }
                } else {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XX(tmp - 10, tmp, tmp + 10, fire, 900)
                    } else {
                        hit4XX(tmp, tmp + 10, tmp + 20, fire, 900)
                    }
                }
            }
        } else if ((+arrBattle[tmp] === 43) || (+arrBattle[tmp] === 943)) {
            if ((+tmp >= 80) && (+tmp <= 89)) {
                if (+arrBattle[tmp - 10] === 0) {
                    hit4XX(tmp - 10, tmp, tmp + 10, fire, 900)
                } else {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XX(tmp - 20, tmp - 10, tmp, fire, 900)
                    } else {
                        hit4XX(tmp - 10, tmp, tmp + 10, fire, 900)
                    }
                }
            } else {
                if (+arrBattle[tmp + 10] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XX(tmp - 20, tmp - 10, tmp, fire, 900)
                    } else {
                        hit4XX(tmp - 10, tmp, tmp + 10, fire, 900)
                    }
                } else {
                    if (+num === 1) {
                        missed(tmp + 20, fire, 4)
                    } else {
                        hit4XX(tmp - 10, tmp, tmp + 10, fire, 900)
                    }
                }
            }
        } else if ((+arrBattle[tmp] === 44) || (+arrBattle[tmp] === 944)) {
            if ((+tmp >= 90) && (+tmp <= 99)) {
                hit4XX(tmp - 20, tmp - 10, tmp, fire, 900)
            } else {
                num = randomInt(1, 3)
                if (+num === 1) {
                    missed(tmp + 10, fire, 4)
                } else {
                    hit4XX(tmp - 20, tmp - 10, tmp, fire, 900)
                }
            }
        } else if ((+arrBattle[tmp] === 414) || (+arrBattle[tmp] === 9414)) {
            if ((+tmp % 10 === 0) && (+tmp >= 0) && (+tmp <= 90)) {
                hit4XX(tmp, tmp + 1, tmp + 2, fire, 9000)
            } else {
                num = randomInt(1, 3)
                if (+num === 1) {
                    if (+arrBattle[tmp - 1] === 0) {
                        missed(tmp - 1, fire, 4)
                    } else {
                        hit4XX(tmp, tmp + 1, tmp + 2, fire, 9000)
                    }
                } else {
                    hit4XX(tmp, tmp + 1, tmp + 2, fire, 9000)
                }
            }
        } else if ((+arrBattle[tmp] === 424) || (+arrBattle[tmp] === 9424)) {
            if (+tmp % 10 === 1) {
                if (+arrBattle[tmp + 1] === 0) {
                    hit4XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                } else {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                    } else {
                        hit4XX(tmp, tmp + 1, tmp + 2, fire, 9000)
                    }
                }
            } else {
                if (+arrBattle[tmp - 1] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                    } else {
                        hit4XX(tmp, tmp + 1, tmp + 2, fire, 9000)
                    }
                } else {
                    if (+arrBattle[tmp - 2] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            hit4XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                        } else {
                            missed(tmp - 2, fire, 4)
                        }
                    } else {
                        hit4XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                    }
                }
            }
        } else if ((+arrBattle[tmp] === 434) || (+arrBattle[tmp] === 9434)) {
            if (+tmp % 10 === 8) {
                if (+arrBattle[tmp - 1] === 0) {
                    hit4XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                } else {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                    } else {
                        hit4XX(tmp - 2, tmp - 1, tmp, fire, 9000)
                    }
                }
            } else {
                if (+arrBattle[tmp - 1] === 0) {
                    if (+arrBattle[tmp + 2] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            hit4XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                        } else {
                            missed(tmp + 2, fire, 4)
                        }
                    } else {
                        hit4XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                    }
                } else {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XX(tmp - 1, tmp, tmp + 1, fire, 9000)
                    } else {
                        hit4XX(tmp - 2, tmp - 1, tmp, fire, 9000)
                    }
                }
            }
        } else if ((+arrBattle[tmp] === 444) || (+arrBattle[tmp] === 9444)) {
            if (+tmp % 10 === 9) {
                hit4XX(tmp - 2, tmp - 1, tmp, fire, 9000)
            } else {
                if (+arrBattle[tmp + 1] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XX(tmp - 2, tmp - 1, tmp, fire, 9000)
                    } else {
                        missed(tmp + 1, fire, 4)
                    }
                } else {
                    hit4XX(tmp - 2, tmp - 1, tmp, fire, 9000)
                }
            }
        }
    } else {
        fireShip(fire)
    }

}

function find4XXX(fire) {
    if (flagFind !== 0) {
        if ((+arrBattle[tmp] === 41) || (+arrBattle[tmp] === 941)) {
            if ((+tmp >= 0) && (+tmp <= 9)) {
                hit4XXX(tmp, tmp + 10, tmp + 20, tmp + 30, fire, 900)
            } else {
                num = randomInt(1, 3)
                if (+num === 1) {
                    if (+arrBattle[tmp - 10] === 0) {
                        missed(tmp - 10, fire, 4)
                    } else {
                        hit4XXX(tmp, tmp + 10, tmp + 20, tmp + 30, fire, 900)
                    }
                } else {
                    hit4XXX(tmp, tmp + 10, tmp + 20, tmp + 30, fire, 900)
                }
            }
        } else if ((+arrBattle[tmp] === 42) || (+arrBattle[tmp] === 942)) {
            if ((+tmp >= 10) && (+tmp <= 19)) {
                if (+arrBattle[tmp + 20] === 0) {
                    hit4XXX(tmp - 10, tmp, tmp + 10, tmp + 20, fire, 900)
                } else {
                    if (+arrBattle[tmp + 30] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            hit4XXX(tmp - 10, tmp, tmp + 10, tmp + 20, fire, 900)
                        } else {
                            missed(tmp + 30, fire, 4)
                        }
                    } else {
                        hit4XXX(tmp - 10, tmp, tmp + 10, tmp + 20, fire, 900)
                    }
                }
            } else if ((+tmp >= 70) && (+tmp <= 79)) {
                if (+arrBattle[tmp - 10] === 0) {
                    hit4XXX(tmp - 10, tmp, tmp + 10, tmp + 20, fire, 900)
                } else {
                    if (+arrBattle[tmp - 20] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            hit4XXX(tmp - 10, tmp, tmp + 10, tmp + 20, fire, 900)
                        } else {
                            missed(tmp - 20, fire, 4)
                        }
                    } else {
                        hit4XXX(tmp - 10, tmp, tmp + 10, tmp + 20, fire, 900)
                    }

                }
            } else {
                if (+arrBattle[tmp + 20] === 0) {
                    if (+arrBattle[tmp - 20] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            hit4XXX(tmp - 10, tmp, tmp + 10, tmp + 20, fire, 900)
                        } else {
                            missed(tmp - 20, fire, 4)
                        }
                    } else {
                        hit4XXX(tmp - 10, tmp, tmp + 10, tmp + 20, fire, 900)
                    }
                } else {
                    if (+arrBattle[tmp + 30] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            hit4XXX(tmp - 10, tmp, tmp + 10, tmp + 20, fire, 900)
                        } else {
                            missed(tmp + 30, fire, 4)
                        }
                    } else {
                        hit4XXX(tmp - 10, tmp, tmp + 10, tmp + 20, fire, 900)
                    }
                }
            }
        } else if ((+arrBattle[tmp] === 43) || (+arrBattle[tmp] === 943)) {
            if ((+tmp >= 20) && (+tmp <= 29)) {
                if (+arrBattle[tmp + 10] === 0) {
                    hit4XXX(tmp - 20, tmp - 10, tmp, tmp + 10, fire, 900)
                } else {
                    if (+arrBattle[tmp + 20] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp + 20, fire, 4)
                        } else {
                            hit4XXX(tmp - 20, tmp - 10, tmp, tmp + 10, fire, 900)
                        }
                    } else {
                        hit4XXX(tmp - 20, tmp - 10, tmp, tmp + 10, fire, 900)
                    }
                }
            } else if ((+tmp >= 80) && (+tmp <= 89)) {
                if (+arrBattle[tmp - 20] === 0) {
                    hit4XXX(tmp - 20, tmp - 10, tmp, tmp + 10, fire, 900)
                } else {
                    if (+arrBattle[tmp - 30] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp - 30, fire, 4)
                        } else {
                            hit4XXX(tmp - 20, tmp - 10, tmp, tmp + 10, fire, 900)
                        }
                    } else {
                        hit4XXX(tmp - 20, tmp - 10, tmp, tmp + 10, fire, 900)
                    }
                }
            } else {
                if (+arrBattle[tmp - 20] === 0) {
                    if (+arrBattle[tmp + 20] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp + 20, fire, 4)
                        } else {
                            hit4XXX(tmp - 20, tmp - 10, tmp, tmp + 10, fire, 900)
                        }
                    } else {
                        hit4XXX(tmp - 20, tmp - 10, tmp, tmp + 10, fire, 900)

                    }
                } else {
                    if (+arrBattle[tmp - 30] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp - 30, fire, 4)
                        } else {
                            hit4XXX(tmp - 20, tmp - 10, tmp, tmp + 10, fire, 900)
                        }
                    } else {
                        hit4XXX(tmp - 20, tmp - 10, tmp, tmp + 10, fire, 900)
                    }
                }
            }
        } else if ((+arrBattle[tmp] === 44) || (+arrBattle[tmp] === 944)) {
            if ((+tmp >= 90) && (+tmp <= 99)) {
                hit4XXX(tmp - 30, tmp - 20, tmp - 10, tmp, fire, 900)
            } else {
                if (+arrBattle[tmp + 10] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XXX(tmp - 30, tmp - 20, tmp - 10, tmp, fire, 900)
                    } else {
                        missed(tmp + 10, fire, 4)
                    }
                } else {
                    hit4XXX(tmp - 30, tmp - 20, tmp - 10, tmp, fire, 900)
                }
            }
        }
        if ((+arrBattle[tmp] === 414) || (+arrBattle[tmp] === 9414)) {

            if (+tmp % 10 === 0) {
                hit4XXX(tmp, tmp + 1, tmp + 2, tmp + 3, fire, 9000)
            } else {
                num = randomInt(1, 3)
                if (+num === 1) {
                    if (+arrBattle[tmp - 1] === 0) {
                        missed(tmp - 1, fire, 4)
                    } else {
                        hit4XXX(tmp, tmp + 1, tmp + 2, tmp + 3, fire, 9000)
                    }
                } else {
                    hit4XXX(tmp, tmp + 1, tmp + 2, tmp + 3, fire, 9000)
                }
            }
        } else if ((+arrBattle[tmp] === 424) || (+arrBattle[tmp] === 9424)) {
            if (+tmp % 10 === 1) {
                if (+arrBattle[tmp + 2] === 0) {
                    hit4XXX(tmp - 1, tmp, tmp + 1, tmp + 2, fire, 9000)
                } else {
                    if (+arrBattle[tmp + 3] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            hit4XXX(tmp - 1, tmp, tmp + 1, tmp + 2, fire, 9000)
                        } else {
                            missed(tmp + 3, fire, 4)
                        }
                    } else {
                        hit4XXX(tmp - 1, tmp, tmp + 1, tmp + 2, fire, 9000)
                    }
                }
            } else if (+tmp % 10 === 7) {
                if (+arrBattle[tmp - 1] === 0) {
                    hit4XXX(tmp - 1, tmp, tmp + 1, tmp + 2, fire, 9000)
                } else {
                    if (+arrBattle[tmp - 2] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            hit4XXX(tmp - 1, tmp, tmp + 1, tmp + 2, fire, 9000)
                        } else {
                            missed(tmp - 2, fire, 4)
                        }
                    } else {
                        hit4XXX(tmp - 1, tmp, tmp + 1, tmp + 2, fire, 9000)
                    }
                }
            } else {
                if (+arrBattle[tmp + 2] === 0) {
                    if (+arrBattle[tmp - 2] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            hit4XXX(tmp - 1, tmp, tmp + 1, tmp + 2, fire, 9000)
                        } else {
                            missed(tmp - 2, fire, 4)
                        }
                    } else {
                        hit4XXX(tmp - 1, tmp, tmp + 1, tmp + 2, fire, 9000)
                    }
                } else {
                    if (+arrBattle[tmp + 3] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            hit4XXX(tmp - 1, tmp, tmp + 1, tmp + 2, fire, 9000)
                        } else {
                            missed(tmp + 3, fire, 4)
                        }
                    } else {
                        hit4XXX(tmp - 1, tmp, tmp + 1, tmp + 2, fire, 9000)
                    }
                }
            }
        } else if ((+arrBattle[tmp] === 434) || (+arrBattle[tmp] === 9434)) {
            if (+tmp % 10 === 2) {
                if (+arrBattle[tmp + 1] === 0) {
                    hit4XXX(tmp - 2, tmp - 1, tmp, tmp + 1, fire, 9000)
                } else {
                    if (+arrBattle[tmp + 2] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp + 2, fire, 4)
                        } else {
                            hit4XXX(tmp - 2, tmp - 1, tmp, tmp + 1, fire, 9000)
                        }
                    } else {
                        hit4XXX(tmp - 2, tmp - 1, tmp, tmp + 1, fire, 9000)
                    }
                }
            } else if (+tmp % 10 === 8) {
                if (+arrBattle[tmp - 2] === 0) {
                    hit4XXX(tmp - 2, tmp - 1, tmp, tmp + 1, fire, 9000)
                } else {
                    if (+arrBattle[tmp - 3] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp - 3, fire, 4)
                        } else {
                            hit4XXX(tmp - 2, tmp - 1, tmp, tmp + 1, fire, 9000)
                        }
                    } else {
                        hit4XXX(tmp - 2, tmp - 1, tmp, tmp + 1, fire, 9000)
                    }
                }
            } else {
                if (+arrBattle[tmp - 2] === 0) {
                    if (+arrBattle[tmp + 2] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp + 2, fire, 4)
                        } else {
                            hit4XXX(tmp - 2, tmp - 1, tmp, tmp + 1, fire, 9000)
                        }
                    } else {
                        hit4XXX(tmp - 2, tmp - 1, tmp, tmp + 1, fire, 9000)
                    }
                } else {
                    if (+arrBattle[tmp - 3] === 0) {
                        num = randomInt(1, 3)
                        if (+num === 1) {
                            missed(tmp - 3, fire, 4)
                        } else {
                            hit4XXX(tmp - 2, tmp - 1, tmp, tmp + 1, fire, 9000)
                        }
                    } else {
                        hit4XXX(tmp - 2, tmp - 1, tmp, tmp + 1, fire, 9000)
                    }
                }
            }
        } else if ((+arrBattle[tmp] === 444) || (+arrBattle[tmp] === 9444)) {
            if (+tmp % 10 === 9) {
                hit4XXX(tmp - 3, tmp - 2, tmp - 1, tmp, fire, 9000)
            } else {
                if (+arrBattle[tmp + 1] === 0) {
                    num = randomInt(1, 3)
                    if (+num === 1) {
                        hit4XXX(tmp - 3, tmp - 2, tmp - 1, tmp, fire, 9000)
                        missed(tmp + 1, fire, 4)
                    }
                } else {
                    hit4XXX(tmp - 3, tmp - 2, tmp - 1, tmp, fire, 9000)
                }
            }
        }
    } else {
        fireShip(fire)
    }
}

function elArBaSea(cell) {
    element[cell].src = img.zm
    arrSeaComp[cell - 100] = 5
}

function BaSea1(i) {
    counterI += 1
    if (+arrSeaComp[i] === 911) {
        element[i + 100].src = 'img/shipfire/z1_1f.gif'
        arrSeaComp[i] = 5
    } else if (+arrSeaComp[i] === 9111) {
        element[i + 100].src = 'img/ship2fire/z1_1cf.gif'
        arrSeaComp[i] = 5
    }
}

function BaSea2(i) {
    counterI += 1
    if (+arrSeaComp[i] === 921) {
        element[i + 100].src = 'img/shipfire/z2_1f.gif'
        element[i + 110].src = 'img/shipfire/z2_2f.gif'
        arrSeaComp[i] = 5
        arrSeaComp[i + 10] = 5
    } else if (+arrSeaComp[i] === 9212) {
        element[i + 100].src = 'img/ship2fire/z2_1cf.gif'
        element[i + 101].src = 'img/ship2fire/z2_2cf.gif'
        arrSeaComp[i] = 5
        arrSeaComp[i + 1] = 5
    }
}

function BaSea3(i) {
    counterI += 1
    if (+arrSeaComp[i] === 931) {
        element[i + 100].src = 'img/shipfire/z3_1f.gif'
        element[i + 110].src = 'img/shipfire/z3_2f.gif'
        element[i + 120].src = 'img/shipfire/z3_3f.gif'
        arrSeaComp[i] = 5
        arrSeaComp[i + 10] = 5
        arrSeaComp[i + 20] = 5
    } else if (+arrSeaComp[i] === 9313) {
        element[i + 100].src = 'img/ship2fire/z3_1cf.gif'
        element[i + 101].src = 'img/ship2fire/z3_2cf.gif'
        element[i + 102].src = 'img/ship2fire/z3_3cf.gif'
        arrSeaComp[i] = 5
        arrSeaComp[i + 1] = 5
        arrSeaComp[i + 2] = 5

    }
}

function BaSea4(i) {
    counterI += 1
    if (+arrSeaComp[i] === 941) {
        element[i + 100].src = 'img/shipfire/z4_1f.gif'
        element[i + 110].src = 'img/shipfire/z4_2f.gif'
        element[i + 120].src = 'img/shipfire/z4_3f.gif'
        element[i + 130].src = 'img/shipfire/z4_4f.gif'
        arrSeaComp[i] = 5
        arrSeaComp[i + 10] = 5
        arrSeaComp[i + 20] = 5
        arrSeaComp[i + 30] = 5
    } else if (+arrSeaComp[i] === 9414) {
        element[i + 100].src = 'img/ship2fire/z4_1cf.gif'
        element[i + 101].src = 'img/ship2fire/z4_2cf.gif'
        element[i + 102].src = 'img/ship2fire/z4_3cf.gif'
        element[i + 103].src = 'img/ship2fire/z4_4cf.gif'
        arrSeaComp[i] = 5
        arrSeaComp[i + 1] = 5
        arrSeaComp[i + 2] = 5
        arrSeaComp[i + 3] = 5
    }
}

function findBattle1My() {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 911 || +arrSeaComp[i] === 9111) {
            if (i === 0) {
                BaSea1(i)
                elArBaSea(i + 101)
                elArBaSea(i + 111)
                elArBaSea(i + 110)
            } else if (i === 9) {
                BaSea1(i)
                elArBaSea(i + 99)
                elArBaSea(i + 109)
                elArBaSea(i + 110)
            } else if ((i > 0) && (i < 9)) {
                BaSea1(i)
                elArBaSea(i + 101)
                elArBaSea(i + 111)
                elArBaSea(i + 110)
                elArBaSea(i + 109)
                elArBaSea(i + 99)
            } else if (i === 90) {
                BaSea1(i)
                elArBaSea(i + 90)
                elArBaSea(i + 91)
                elArBaSea(i + 101)
            } else if (i === 99) {
                BaSea1(i)
                elArBaSea(i + 90)
                elArBaSea(i + 89)
                elArBaSea(i + 99)
            } else if ((i > 90) && (i < 99)) {
                BaSea1(i)
                elArBaSea(i + 99)
                elArBaSea(i + 89)
                elArBaSea(i + 90)
                elArBaSea(i + 91)
                elArBaSea(i + 101)
            } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                BaSea1(i)
                elArBaSea(i + 90)
                elArBaSea(i + 91)
                elArBaSea(i + 101)
                elArBaSea(i + 111)
                elArBaSea(i + 110)
            } else if ((i % 10 === 9) && (i > 9) && (i < 99)) {
                BaSea1(i)
                elArBaSea(i + 90)
                elArBaSea(i + 110)
                elArBaSea(i + 109)
                elArBaSea(i + 99)
                elArBaSea(i + 89)
            } else {
                BaSea1(i)
                elArBaSea(i + 90)
                elArBaSea(i + 91)
                elArBaSea(i + 101)
                elArBaSea(i + 111)
                elArBaSea(i + 110)
                elArBaSea(i + 109)
                elArBaSea(i + 99)
                elArBaSea(i + 89)
            }
        }
    }
}

function findBattle2My() {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 921 || +arrSeaComp[i] === 9212) {
            if ((+arrSeaComp[i] === 921) && (+arrSeaComp[i + 10] === 922)) {
                if (i === 0) {
                    BaSea2(i)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 120)
                } else if (i === 9) {
                    BaSea2(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                    elArBaSea(i + 119)
                    elArBaSea(i + 120)
                } else if ((i > 0) && (i < 9)) {
                    BaSea2(i)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 120)
                    elArBaSea(i + 119)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                } else if (i === 80) {
                    BaSea2(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                } else if (i === 89) {
                    BaSea2(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 89)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                } else if ((i > 80) && (i < 89)) {
                    BaSea2(i)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                } else if ((i % 10 === 0) && (i > 0) && (i < 80)) {
                    BaSea2(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 120)
                } else if ((i % 10 === 9) && (i > 9) && (i < 89)) {
                    BaSea2(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 120)
                    elArBaSea(i + 119)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                } else {
                    BaSea2(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 120)
                    elArBaSea(i + 119)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                }
            } else if ((+arrSeaComp[i] === 9212) && (+arrSeaComp[i + 1] === 9222)) {
                if (i === 0) {
                    BaSea2(i)
                    elArBaSea(i + 102)
                    elArBaSea(i + 112)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                } else if (i === 8) {
                    BaSea2(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                    elArBaSea(i + 110)
                    elArBaSea(i + 111)
                } else if ((i > 0) && (i < 8)) {
                    BaSea2(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                    elArBaSea(i + 110)
                    elArBaSea(i + 111)
                    elArBaSea(i + 112)
                    elArBaSea(i + 102)
                } else if (i === 90) {
                    BaSea2(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 102)
                } else if (i === 98) {
                    BaSea2(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                } else if ((i > 90) && (i < 98)) {
                    BaSea2(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 102)
                } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                    BaSea2(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 102)
                    elArBaSea(i + 112)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                } else if ((i % 10 === 8) && (i > 8) && (i < 98)) {
                    BaSea2(i)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                } else {
                    BaSea2(i)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 102)
                    elArBaSea(i + 112)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                }
            }
        }
    }
}

function findBattle3My() {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 931 || +arrSeaComp[i] === 9313) {
            if ((+arrSeaComp[i] === 931) && (+arrSeaComp[i + 10] === 932) && (+arrSeaComp[i + 20] === 933)) {
                if (i === 0) {
                    BaSea3(i)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 131)
                    elArBaSea(i + 130)
                } else if (i === 9) {
                    BaSea3(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                    elArBaSea(i + 119)
                    elArBaSea(i + 129)
                    elArBaSea(i + 130)
                } else if ((i > 0) && (i < 9)) {
                    BaSea3(i)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 131)
                    elArBaSea(i + 130)
                    elArBaSea(i + 129)
                    elArBaSea(i + 119)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                } else if (i === 70) {
                    BaSea3(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                } else if (i === 79) {
                    BaSea3(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 89)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                    elArBaSea(i + 119)
                } else if ((i > 70) && (i < 79)) {
                    BaSea3(i)
                    elArBaSea(i + 119)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                } else if ((i % 10 === 0) && (i > 0) && (i < 70)) {
                    BaSea3(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 131)
                    elArBaSea(i + 130)
                } else if ((i % 10 === 9) && (i > 9) && (i < 79)) {
                    BaSea3(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 130)
                    elArBaSea(i + 129)
                    elArBaSea(i + 119)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                } else {
                    BaSea3(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 131)
                    elArBaSea(i + 130)
                    elArBaSea(i + 129)
                    elArBaSea(i + 119)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                }
            } else if ((+arrSeaComp[i] === 9313) && (+arrSeaComp[i + 1] === 9323) && (+arrSeaComp[i + 2] === 9333)) {
                if (i === 0) {
                    BaSea3(i)
                    elArBaSea(i + 103)
                    elArBaSea(i + 113)
                    elArBaSea(i + 112)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                } else if (i === 7) {
                    BaSea3(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                    elArBaSea(i + 110)
                    elArBaSea(i + 111)
                    elArBaSea(i + 112)
                } else if ((i > 0) && (i < 7)) {
                    BaSea3(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                    elArBaSea(i + 110)
                    elArBaSea(i + 111)
                    elArBaSea(i + 112)
                    elArBaSea(i + 113)
                    elArBaSea(i + 103)
                } else if (i === 90) {
                    BaSea3(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 93)
                    elArBaSea(i + 103)
                } else if (i === 97) {
                    BaSea3(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                } else if ((i > 90) && (i < 97)) {
                    BaSea3(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 93)
                    elArBaSea(i + 103)
                } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                    BaSea3(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 93)
                    elArBaSea(i + 103)
                    elArBaSea(i + 113)
                    elArBaSea(i + 112)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                } else if ((i % 10 === 7) && (i > 7) && (i < 97)) {
                    BaSea3(i)
                    elArBaSea(i + 112)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                } else {
                    BaSea3(i)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 93)
                    elArBaSea(i + 103)
                    elArBaSea(i + 113)
                    elArBaSea(i + 112)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                }
            }
        }
    }
}

function findBattle4My() {
    for (let i = 0; i < arrSeaComp.length; i++) {
        if (+arrSeaComp[i] === 941 || +arrSeaComp[i] === 9414) {
            if ((+arrSeaComp[i] === 941) && (+arrSeaComp[i + 10] === 942) && (+arrSeaComp[i + 20] === 943) && (+arrSeaComp[i + 30] === 944)) {
                if (i === 0) {
                    BaSea4(i)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 131)
                    elArBaSea(i + 141)
                    elArBaSea(i + 140)
                } else if (i === 9) {
                    BaSea4(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                    elArBaSea(i + 119)
                    elArBaSea(i + 129)
                    elArBaSea(i + 139)
                    elArBaSea(i + 140)
                } else if ((i > 0) && (i < 9)) {
                    BaSea4(i)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 131)
                    elArBaSea(i + 141)
                    elArBaSea(i + 140)
                    elArBaSea(i + 139)
                    elArBaSea(i + 129)
                    elArBaSea(i + 119)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                } else if (i === 60) {
                    BaSea4(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 131)
                } else if (i === 69) {
                    BaSea4(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 89)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                    elArBaSea(i + 119)
                    elArBaSea(i + 129)
                } else if ((i > 60) && (i < 69)) {
                    BaSea4(i)
                    elArBaSea(i + 129)
                    elArBaSea(i + 119)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 131)
                } else if ((i % 10 === 0) && (i > 0) && (i < 60)) {
                    BaSea4(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 131)
                    elArBaSea(i + 141)
                    elArBaSea(i + 140)
                } else if ((i % 10 === 9) && (i > 9) && (i < 69)) {
                    BaSea4(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 140)
                    elArBaSea(i + 139)
                    elArBaSea(i + 129)
                    elArBaSea(i + 119)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                } else {
                    BaSea4(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 101)
                    elArBaSea(i + 111)
                    elArBaSea(i + 121)
                    elArBaSea(i + 131)
                    elArBaSea(i + 141)
                    elArBaSea(i + 140)
                    elArBaSea(i + 139)
                    elArBaSea(i + 129)
                    elArBaSea(i + 119)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                }
            } else if ((+arrSeaComp[i] === 9414) && (+arrSeaComp[i + 1] === 9424) && (+arrSeaComp[i + 2] === 9434) && (+arrSeaComp[i + 3] === 9444)) {
                if (i === 0) {
                    BaSea4(i)
                    elArBaSea(i + 104)
                    elArBaSea(i + 114)
                    elArBaSea(i + 113)
                    elArBaSea(i + 112)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                } else if (i === 6) {
                    BaSea4(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                    elArBaSea(i + 110)
                    elArBaSea(i + 111)
                    elArBaSea(i + 112)
                    elArBaSea(i + 113)
                } else if ((i > 0) && (i < 6)) {
                    BaSea4(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 109)
                    elArBaSea(i + 110)
                    elArBaSea(i + 111)
                    elArBaSea(i + 112)
                    elArBaSea(i + 113)
                    elArBaSea(i + 114)
                    elArBaSea(i + 104)
                } else if (i === 90) {
                    BaSea4(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 93)
                    elArBaSea(i + 94)
                    elArBaSea(i + 104)
                } else if (i === 96) {
                    BaSea4(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 93)
                } else if ((i > 90) && (i < 96)) {
                    BaSea4(i)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 93)
                    elArBaSea(i + 94)
                    elArBaSea(i + 104)
                } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                    BaSea4(i)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 93)
                    elArBaSea(i + 94)
                    elArBaSea(i + 104)
                    elArBaSea(i + 114)
                    elArBaSea(i + 113)
                    elArBaSea(i + 112)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                } else if ((i % 10 === 6) && (i > 6) && (i < 96)) {
                    BaSea4(i)
                    elArBaSea(i + 113)
                    elArBaSea(i + 112)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 93)
                } else {
                    BaSea4(i)
                    elArBaSea(i + 89)
                    elArBaSea(i + 90)
                    elArBaSea(i + 91)
                    elArBaSea(i + 92)
                    elArBaSea(i + 93)
                    elArBaSea(i + 94)
                    elArBaSea(i + 104)
                    elArBaSea(i + 114)
                    elArBaSea(i + 113)
                    elArBaSea(i + 112)
                    elArBaSea(i + 111)
                    elArBaSea(i + 110)
                    elArBaSea(i + 109)
                    elArBaSea(i + 99)
                }
            }
        }
    }
}

function elArBa(cell) {
    element[cell].src = img.zm
    arrBattle[cell] = 5

}

function BaSea1Comp(i) {
    if (+arrBattle[i] === 911) {
        element[i].src = 'img/shipfire/z1_1f.gif'
        arrBattle[i] = 5
    } else if (+arrBattle[i] === 9111) {
        element[i].src = 'img/ship2fire/z1_1cf.gif'
        arrBattle[i] = 5
    }
}

function BaSea2Comp(i) {
    if (+arrBattle[i] === 921 || +arrBattle[i] === 21) {
        element[i].src = 'img/shipfire/z2_1f.gif'
        element[i + 10].src = 'img/shipfire/z2_2f.gif'
        arrBattle[i] = 5
        arrBattle[i + 10] = 5
    } else if (+arrBattle[i] === 9212 || +arrBattle[i] === 212) {
        element[i].src = 'img/ship2fire/z2_1cf.gif'
        element[i + 1].src = 'img/ship2fire/z2_2cf.gif'
        arrBattle[i] = 5
        arrBattle[i + 1] = 5
    }
}

function BaSea3Comp(i) {
    if (+arrBattle[i] === 931) {
        element[i].src = 'img/shipfire/z3_1f.gif'
        element[i + 10].src = 'img/shipfire/z3_2f.gif'
        element[i + 20].src = 'img/shipfire/z3_3f.gif'
        arrBattle[i] = 5
        arrBattle[i + 10] = 5
        arrBattle[i + 20] = 5
    } else if (+arrBattle[i] === 9313) {
        element[i].src = 'img/ship2fire/z3_1cf.gif'
        element[i + 1].src = 'img/ship2fire/z3_2cf.gif'
        element[i + 2].src = 'img/ship2fire/z3_3cf.gif'
        arrBattle[i] = 5
        arrBattle[i + 1] = 5
        arrBattle[i + 2] = 5

    }
}

function baSea4Comp(i) {
    if (+arrBattle[i] === 941) {
        element[i].src = 'img/shipfire/z4_1f.gif'
        element[i + 10].src = 'img/shipfire/z4_2f.gif'
        element[i + 20].src = 'img/shipfire/z4_3f.gif'
        element[i + 30].src = 'img/shipfire/z4_4f.gif'
        arrBattle[i] = 5
        arrBattle[i + 10] = 5
        arrBattle[i + 20] = 5
        arrBattle[i + 30] = 5
    } else if (+arrBattle[i] === 9414) {
        element[i].src = 'img/ship2fire/z4_1cf.gif'
        element[i + 1].src = 'img/ship2fire/z4_2cf.gif'
        element[i + 2].src = 'img/ship2fire/z4_3cf.gif'
        element[i + 3].src = 'img/ship2fire/z4_4cf.gif'
        arrBattle[i] = 5
        arrBattle[i + 1] = 5
        arrBattle[i + 2] = 5
        arrBattle[i + 3] = 5
    }
}

function findBattle1() {
    for (let i = 0; i < arrBattle.length; i++) {
        if (+arrBattle[i] === 11 || +arrBattle[i] === 911) {
            if (i === 0) {
                BaSea1Comp(i)
                elArBa(i + 1)
                elArBa(i + 10)
                elArBa(i + 11)
            } else if (i === 9) {
                BaSea1Comp(i)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 10)
            } else if ((i > 0) && (i < 9)) {
                BaSea1Comp(i)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
            } else if (i === 90) {
                BaSea1Comp(i)
                elArBa(i + 1)
                elArBa(i - 9)
                elArBa(i - 10)
            } else if (i === 99) {
                BaSea1Comp(i)
                elArBa(i - 1)
                elArBa(i - 10)
                elArBa(i - 11)
            } else if ((i > 90) && (i < 99)) {
                BaSea1Comp(i)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
            } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                BaSea1Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 10)
            } else if ((i % 10 === 9) && (i > 9) && (i < 99)) {
                BaSea1Comp(i)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
            } else {
                BaSea1Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
            }
        } else if (+arrBattle[i] === 111 || +arrBattle[i] === 9111) {
            if (i === 0) {
                BaSea1Comp(i)
                elArBa(i + 1)
                elArBa(i + 10)
                elArBa(i + 11)
            } else if (i === 9) {
                BaSea1Comp(i)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 10)
            } else if ((i > 0) && (i < 9)) {
                BaSea1Comp(i)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
            } else if (i === 90) {
                BaSea1Comp(i)
                elArBa(i + 1)
                elArBa(i - 9)
                elArBa(i - 10)
            } else if (i === 99) {
                BaSea1Comp(i)
                elArBa(i - 1)
                elArBa(i - 10)
                elArBa(i - 11)
            } else if ((i > 90) && (i < 99)) {
                BaSea1Comp(i)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
            } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                BaSea1Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 10)
            } else if ((i % 10 === 9) && (i > 9) && (i < 99)) {
                BaSea1Comp(i)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
            } else {
                BaSea1Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
            }
        }
    }
}

function findBattle2() {
    for (let i = 0; i < arrBattle.length; i++) {
        if (+arrBattle[i] === 21 || +arrBattle[i] === 921) {
            if (i === 0) {
                BaSea2Comp(i)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 20)
            } else if (i === 9) {
                BaSea2Comp(i)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 19)
                elArBa(i + 20)
            } else if ((i > 0) && (i < 9)) {
                BaSea2Comp(i)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 20)
                elArBa(i + 19)
                elArBa(i + 9)
                elArBa(i - 1)
            } else if (i === 80) {
                BaSea2Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
            } else if (i === 89) {
                BaSea2Comp(i)
                elArBa(i - 10)
                elArBa(i - 11)
                elArBa(i - 1)
                elArBa(i + 9)
            } else if ((i > 80) && (i < 89)) {
                BaSea2Comp(i)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
            } else if ((i % 10 === 0) && (i > 0) && (i < 80)) {
                BaSea2Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 20)
            } else if ((i % 10 === 9) && (i > 9) && (i < 89)) {
                BaSea2Comp(i)
                elArBa(i - 10)
                elArBa(i + 20)
                elArBa(i + 19)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
            } else {
                BaSea2Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 20)
                elArBa(i + 19)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
            }
        } else if (+arrBattle[i] === 212 || +arrBattle[i] === 9212) {
            if (i === 0) {
                BaSea2Comp(i)
                elArBa(i + 2)
                elArBa(i + 12)
                elArBa(i + 11)
                elArBa(i + 10)
            } else if (i === 8) {
                BaSea2Comp(i)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 10)
                elArBa(i + 11)
            } else if ((i > 0) && (i < 8)) {
                BaSea2Comp(i)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 10)
                elArBa(i + 11)
                elArBa(i + 12)
                elArBa(i + 2)
            } else if (i === 90) {
                BaSea2Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i + 2)
            } else if (i === 98) {
                BaSea2Comp(i)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
            } else if ((i > 90) && (i < 98)) {
                BaSea2Comp(i)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i + 2)
            } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                BaSea2Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i + 2)
                elArBa(i + 12)
                elArBa(i + 11)
                elArBa(i + 10)
            } else if ((i % 10 === 8) && (i > 8) && (i < 98)) {
                BaSea2Comp(i)
                elArBa(i + 11)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
            } else {
                BaSea2Comp(i)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i + 2)
                elArBa(i + 12)
                elArBa(i + 11)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
            }
        }
    }
}

function findBattle3() {
    for (let i = 0; i < arrBattle.length; i++) {
        if (+arrBattle[i] === 31 || +arrBattle[i] === 931) {
            if (i === 0) {
                BaSea3Comp(i)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 31)
                elArBa(i + 30)
            } else if (i === 9) {
                BaSea3Comp(i)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 19)
                elArBa(i + 29)
                elArBa(i + 30)
            } else if ((i > 0) && (i < 9)) {
                BaSea3Comp(i)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 31)
                elArBa(i + 30)
                elArBa(i + 29)
                elArBa(i + 19)
                elArBa(i + 9)
                elArBa(i - 1)
            } else if (i === 70) {
                BaSea3Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
            } else if (i === 79) {
                BaSea3Comp(i)
                elArBa(i - 10)
                elArBa(i - 11)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 19)
            } else if ((i > 70) && (i < 79)) {
                BaSea3Comp(i)
                elArBa(i + 19)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
            } else if ((i % 10 === 0) && (i > 0) && (i < 70)) {
                BaSea3Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 31)
                elArBa(i + 30)
            } else if ((i % 10 === 9) && (i > 9) && (i < 79)) {
                BaSea3Comp(i)
                elArBa(i - 10)
                elArBa(i + 30)
                elArBa(i + 29)
                elArBa(i + 19)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
            } else {
                BaSea3Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 31)
                elArBa(i + 30)
                elArBa(i + 29)
                elArBa(i + 19)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
            }
        } else if (+arrBattle[i] === 313 || +arrBattle[i] === 9313) {
            if (i === 0) {
                BaSea3Comp(i)
                elArBa(i + 3)
                elArBa(i + 13)
                elArBa(i + 12)
                elArBa(i + 11)
                elArBa(i + 10)
            } else if (i === 7) {
                BaSea3Comp(i)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 10)
                elArBa(i + 11)
                elArBa(i + 12)
            } else if ((i > 0) && (i < 7)) {
                BaSea3Comp(i)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 10)
                elArBa(i + 11)
                elArBa(i + 12)
                elArBa(i + 13)
                elArBa(i + 3)
            } else if (i === 90) {
                BaSea3Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i - 7)
                elArBa(i + 3)
            } else if (i === 97) {
                BaSea3Comp(i)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
            } else if ((i > 90) && (i < 97)) {
                BaSea3Comp(i)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i - 7)
                elArBa(i + 3)
            } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                BaSea3Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i - 7)
                elArBa(i + 3)
                elArBa(i + 13)
                elArBa(i + 12)
                elArBa(i + 11)
                elArBa(i + 10)
            } else if ((i % 10 === 7) && (i > 7) && (i < 97)) {
                BaSea3Comp(i)
                elArBa(i + 12)
                elArBa(i + 11)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
            } else {
                BaSea3Comp(i)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i - 7)
                elArBa(i + 3)
                elArBa(i + 13)
                elArBa(i + 12)
                elArBa(i + 11)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
            }
        }
    }
}


function findBattle4 () {
    for (let i = 0; i < arrBattle.length; i++) {
        if (+arrBattle[i] === 41 || +arrBattle[i] === 941) {
            if (i === 0) {
                baSea4Comp(i)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 31)
                elArBa(i + 41)
                elArBa(i + 40)
            } else if (i === 9) {
                baSea4Comp(i)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 19)
                elArBa(i + 29)
                elArBa(i + 39)
                elArBa(i + 40)
            } else if ((i > 0) && (i < 9)) {
                baSea4Comp(i)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 31)
                elArBa(i + 41)
                elArBa(i + 40)
                elArBa(i + 39)
                elArBa(i + 29)
                elArBa(i + 19)
                elArBa(i + 9)
                elArBa(i - 1)
            } else if (i === 60) {
                baSea4Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 31)
            } else if (i === 69) {
                baSea4Comp(i)
                elArBa(i - 10)
                elArBa(i - 11)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 19)
                elArBa(i + 29)
            } else if ((i > 60) && (i < 69)) {
                baSea4Comp(i)
                elArBa(i + 29)
                elArBa(i + 19)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 31)
            } else if ((i % 10 === 0) && (i > 0) && (i < 60)) {
                baSea4Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 31)
                elArBa(i + 41)
                elArBa(i + 40)
            } else if ((i % 10 === 9) && (i > 9) && (i < 69)) {
                baSea4Comp(i)
                elArBa(i - 10)
                elArBa(i + 40)
                elArBa(i + 39)
                elArBa(i + 29)
                elArBa(i + 19)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
            } else {
                baSea4Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i + 1)
                elArBa(i + 11)
                elArBa(i + 21)
                elArBa(i + 31)
                elArBa(i + 41)
                elArBa(i + 40)
                elArBa(i + 39)
                elArBa(i + 29)
                elArBa(i + 19)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
            }
        } else if (+arrBattle[i] === 414 || +arrBattle[i] === 9414) {
            if (i === 0) {
                baSea4Comp(i)
                elArBa(i + 4)
                elArBa(i + 14)
                elArBa(i + 13)
                elArBa(i + 12)
                elArBa(i + 11)
                elArBa(i + 10)
            } else if (i === 6) {
                baSea4Comp(i)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 10)
                elArBa(i + 11)
                elArBa(i + 12)
                elArBa(i + 13)
            } else if ((i > 0) && (i < 6)) {
                baSea4Comp(i)
                elArBa(i - 1)
                elArBa(i + 9)
                elArBa(i + 10)
                elArBa(i + 11)
                elArBa(i + 12)
                elArBa(i + 13)
                elArBa(i + 14)
                elArBa(i + 4)
            } else if (i === 90) {
                baSea4Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i - 7)
                elArBa(i - 6)
                elArBa(i + 4)
            } else if (i === 96) {
                baSea4Comp(i)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i - 7)
            } else if ((i > 90) && (i < 96)) {
                baSea4Comp(i)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i - 7)
                elArBa(i - 6)
                elArBa(i + 4)
            } else if ((i % 10 === 0) && (i > 0) && (i < 90)) {
                baSea4Comp(i)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i - 7)
                elArBa(i - 6)
                elArBa(i + 4)
                elArBa(i + 14)
                elArBa(i + 13)
                elArBa(i + 12)
                elArBa(i + 11)
                elArBa(i + 10)
            } else if ((i % 10 === 6) && (i > 6) && (i < 96)) {
                baSea4Comp(i)
                elArBa(i + 13)
                elArBa(i + 12)
                elArBa(i + 11)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i - 7)
            } else {
                baSea4Comp(i)
                elArBa(i - 11)
                elArBa(i - 10)
                elArBa(i - 9)
                elArBa(i - 8)
                elArBa(i - 7)
                elArBa(i - 6)
                elArBa(i + 4)
                elArBa(i + 14)
                elArBa(i + 13)
                elArBa(i + 12)
                elArBa(i + 11)
                elArBa(i + 10)
                elArBa(i + 9)
                elArBa(i - 1)
            }
        }
    }
}


function surrender() {
    const buttonRestart = document.getElementById('restart')
    buttonRestart.style.visibility = "visible"
    flagCoup = false;
    imgReplaceFunc (imgReplaceP100, arrSeaComp)
}


function playRestart() {
    playBattle2()
    flagCoup = true;
    const raw = localStorage.getItem('myPole2')
    const mPole2 = JSON.parse(raw)
    imgReplaceFunc (imgReplace, mPole2)
}