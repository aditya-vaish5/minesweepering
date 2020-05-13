var mat = [];

var matrix = () => {
    var t = [];
    for (var i = 0; i < 10; i++) {
        t.push(0);
    }
    for (var i = 0; i < 10; i++) {
        mat.push(JSON.parse(JSON.stringify(t)));
    }
    for (var i = 0; i < 10;) {
        var r = Math.floor(Math.random() * 10);
        var c = Math.floor(Math.random() * 10);
        if (mat[r][c] == -1) {
            continue;
        } else {
            mat[r][c] = -1;
            i++;
        }
        // console.log(mat);
    }
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (mat[i][j] == -1) {
                if (i + 1 < 10 && mat[i + 1][j] != -1) mat[i + 1][j]++;
                if (i - 1 > -1 && mat[i - 1][j] != -1) mat[i - 1][j]++;
                if (j - 1 > -1 && mat[i][j - 1] != -1) mat[i][j - 1]++;
                if (j + 1 < 10 && mat[i][j + 1] != -1) mat[i][j + 1]++;

                if (i + 1 < 10 && j + 1 < 10 && mat[i + 1][j + 1] != -1) mat[i + 1][j + 1]++;
                if (i - 1 > -1 && j + 1 < 10 && mat[i - 1][j + 1] != -1) mat[i - 1][j + 1]++;
                if (i - 1 > -1 && j - 1 > -1 && mat[i - 1][j - 1] != -1) mat[i - 1][j - 1]++;
                if (i + 1 < 10 && j - 1 > -1 && mat[i + 1][j - 1] != -1) mat[i + 1][j - 1]++;
            }
        }
    }
    // console.table(mat);
    return mat;
}

export var newVis = (vis, mat, i, j) => {
    if (vis[i][j] >= 1) return vis;
    vis[i][j] = 1;
    if (mat[i][j] != 0) return vis;
    if (i + 1 < 10 && mat[i][j] == 0) newVis(vis, mat, i + 1, j);
    if (i - 1 > -1 && mat[i][j] == 0) newVis(vis, mat, i - 1, j);
    if (j - 1 > -1 && mat[i][j] == 0) newVis(vis, mat, i, j - 1);
    if (j + 1 < 10 && mat[i][j] == 0) newVis(vis, mat, i, j + 1);
    if (i + 1 < 10 && j + 1 < 10 && mat[i][j] == 0) newVis(vis, mat, i + 1, j + 1);
    if (i - 1 > -1 && j + 1 < 10 && mat[i][j] == 0) newVis(vis, mat, i - 1, j + 1);
    if (i - 1 > -1 && j - 1 > -1 && mat[i][j] == 0) newVis(vis, mat, i - 1, j - 1);
    if (i + 1 < 10 && j - 1 > -1 && mat[i][j] == 0) newVis(vis, mat, i + 1, j - 1);

    if (i + 1 < 10) vis[i + 1][j] = 1;
    if (i - 1 > -1) vis[i - 1][j] = 1;
    if (j - 1 > -1) vis[i][j - 1] = 1;
    if (j + 1 < 10) vis[i][j + 1] = 1;
    if (i + 1 < 10 && j + 1 < 10) vis[i + 1][j + 1] = 1;
    if (i - 1 > -1 && j + 1 < 10) vis[i - 1][j + 1] = 1;
    if (i - 1 > -1 && j - 1 > -1) vis[i - 1][j - 1] = 1;
    if (i + 1 < 10 && j - 1 > -1) vis[i + 1][j - 1] = 1;
    return vis;
}

export var visible = () => {
    var t = [];
    var vis = [];
    for (var i = 0; i < 10; i++) {
        t.push(0);
    }
    for (var i = 0; i < 10; i++) {
        vis.push(JSON.parse(JSON.stringify(t)));
    }
    return vis;
}

export var bombClicked = (vis, mat) => {
    for (var a = 0; a < 10; a++) {
        for (var b = 0; b < 10; b++) {
            if (mat[a][b] == -1) {
                // console.log(a +"  "+ b)
                vis[a][b] = 1;
            }
        }
    }
    return vis;
}

export var isWon = (vis, mat) => {
    for (var a = 0; a < 10; a++) {
        for (var b = 0; b < 10; b++) {
            if (mat[a][b] != -1 && vis[a][b] == 0) return false;
        }
    }
    return true;
}
export var allVis = (vis) => {
    for (var a = 0; a < 10; a++) {
        for (var b = 0; b < 10; b++) {
            vis[a][b] =1;
        }
    }
    return vis;
}

export default matrix;