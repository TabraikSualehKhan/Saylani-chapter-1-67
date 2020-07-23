var multTable = {};
for (var v = 0; v < 13; v++) {
    multTable[v] = {};
    for (var i = 0; i < 13; i++) {
        multTable[v][i] = i * v;
    }
}

multTable[5][5] // 25