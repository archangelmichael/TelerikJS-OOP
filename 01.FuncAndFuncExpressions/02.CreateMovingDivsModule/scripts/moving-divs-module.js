var movingShapes = (function () {
    var div = document.createElement('div');
    div.style.width = 50 + 'px';
    div.style.height = 50 + 'px';
    div.style.borderRadius = 10 + 'px';
    div.style.textAlign = 'center';
    div.style.position = 'absolute';
    div.innerHTML = 'DIV';
    div.style.border = '5px solid black';

    var allShapes = [];
    var MOVE_SPEED = 2;
    var MOVE_RANGE = 5;
    var INITIAL_POSITION = 400;

    //Add new div to the shapes
    function add(shape, top, left, container) {
        div.style.backgroundColor = getRandomColor();
        div.style.color = getRandomColor();
        div.style.borderColor = getRandomColor();
        div.style.top = ((top || INITIAL_POSITION/2) - 25) + 'px';
        div.style.left = ((left || INITIAL_POSITION) - 25) + 'px';

        var currDiv = {
            element: div.cloneNode(true),
            angle: 0,
            shape: shape === 'rect' ? 'rect' : 'ellipse'
        };
        allShapes.push(currDiv);
        container.appendChild(currDiv.element);
        function getRandomColor() {
            return "#" + Math.random().toString(16).slice(2, 8);
        }
    }

    //Move shapes
    setInterval(function () {
        if (allShapes.length > 0) {
            for (var i = 0; i < allShapes.length; i+=1) {
                allShapes[i].angle += 1;
                if (allShapes[i].angle >= 360) {
                    allShapes[i].angle = 0;
                }

                if (allShapes[i].shape === 'rect') {
                    if (allShapes[i].angle < 90) {
                        allShapes[i].element.style.left = (parseInt(allShapes[i].element.style.left) + MOVE_SPEED) + 'px';
                    }
                    else if (allShapes[i].angle < 180) {
                        allShapes[i].element.style.top = (parseInt(allShapes[i].element.style.top) + MOVE_SPEED) + 'px';
                    }
                    else if (allShapes[i].angle < 270) {
                        allShapes[i].element.style.left = (parseInt(allShapes[i].element.style.left) - MOVE_SPEED) + 'px';
                    }
                    else {
                        allShapes[i].element.style.top = (parseInt(allShapes[i].element.style.top) - MOVE_SPEED) + 'px';
                    }
                }
                else {
                    var left = Math.cos((2 * 3.14 / 180) * allShapes[i].angle) * MOVE_RANGE;
                    var top = Math.sin((2 * 3.14 / 180) * allShapes[i].angle) * MOVE_RANGE;

                    allShapes[i].element.style.left = 2 * left + allShapes[i].element.offsetLeft + 'px';
                    allShapes[i].element.style.top = top + allShapes[i].element.offsetTop + 'px';
                }
            }
        }
    }, 20);

    return {
        add: add
    }
}());