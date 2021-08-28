const scene = document.getElementById("scene");

AFRAME.registerComponent('set-text', {
    init: function () {
        // This will be called after the entity has properly attached and loaded.
        this.el.object3D.position.set(0, 0, 1);
        this.el.object3D.scale.set(2, 2, 2);
        //this.el.setAttribute("text", 'value', this.data.value);
        this.el.setAttribute('gltf-model', '../models/arrow/scene.gltf');
    }
});

const points = ["A", "B", "C", "D"];
const directions = {
    A: {
        A: null,
        B: 'forward',
        C: "forward",
        D: "forward"
    },
    B: {
        A: 'backward',
        B: null,
        C: 'right',
        D: 'left',
    },
    C: {
        A: 'left',
        B: 'left',
        C: null,
        D: 'left',
    },
    D: {
        A: 'right',
        B: 'right',
        C: 'right',
        D: null,
    }
};
const pointsNodes = {};
const getArrow = (direction) => {
    const arrow = document.createElement("a-entity");
    arrow.setAttribute('position', "0 0 0");
    arrow.setAttribute('scale', "2 2 2");
    arrow.setAttribute("gltf-model", "../models/arrow/scene.gltf");
    /* switch(direction) {
        case "forward":

        default:
            return
    } */

    return arrow;
};

const getNameEntity = (point) => {
    const text = document.createElement("a-entity");
    text.setAttribute('set-text', 'value', point);
    return text;
};

points.forEach(point => {
    const pointNode = document.createElement("a-marker");
    pointNode.setAttribute('type', "pattern");
    pointNode.setAttribute('url', `markers/${point}.patt`);
    pointNode.id = point;
    const text = getNameEntity(point);
    //console.log(text);
    pointNode.appendChild(text);
    pointsNodes[point] = pointNode;
    scene.appendChild(pointNode);
});