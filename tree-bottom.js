//Quick and dirty method of finding the most distant nodes from the root in a binary tree represented as a string.
//(1 (2 (4 (8 () ()) (9 () ())) (5 (10 () ()) (11 () ()))) (3 (6 (12 () ()) (13 () ())) (7 (14 () ()) (15 () ()))))
//treeBottom parses and traverses simultaneously.
//Created for a timed code challenge.

function treeBottom(tree) {
    var bottom = [];
    var deepest = 0;
    var current = 0;
    var value = "";
    for (var i = 0; i < tree.length; i++){
        var here = tree[i];
        switch (here){
            case "(":
                value = "";
                current++;
                break;
            case ")":
                value = "";
                current--;
                break;
            case " ":
                value = parseInt(value);
                if (value) {
                    if (current>deepest) {
                        bottom = [];
                        deepest = current;
                    }
                    if (current >= deepest) bottom.push(value);
                }
                value = "";
                break;
            default:
                value += here;
        }
    }
    return bottom;
}
