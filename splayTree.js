
class treeObject {
    constructor(name) {
        this.name = name;
        let root = new node;
        this.root = root;
    }
}

class node {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.leftChild = this.leftChild;
        this.rightChild = this.rightChild;
    }
    value(x) {
        return this.value;
    }
}

function generateSplayTree() {
    alert("Hello");
    let tree = new treeObject;
}

function mOver(object) {
    object.innerHTML = "%_%_%";
}

function mOut(object) {
    object.innerHTML = "Mouse over";
}

var firstChild = document.CreateElement("leaf");
/*var fcTag = document.CreateTextNode("First child");
firstChild.appendChild(fcTag);*/

var root = document.getElementById("root");
root.appendChild(firstChild);

/*var x = document.getElementById("splayTreeClick");
x.addEventListener("click", generateSplayTree());*/
