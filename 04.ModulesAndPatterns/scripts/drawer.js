'use strict';
var Drawer = (function () {

    var CELL_SIZE = 20;

    var appleImg = new Image();
    var borderImg = new Image();
    var stoneImg = new Image();
    var snakeImg = new Image();

    var appleKJS;
    var stoneKJS;
    var borderKJS;
    var snakeKJS;
    var snakeCells = [];

    (function setSources() {
        appleImg.src = 'images/Apple.png';
        snakeImg.src = 'images/Snake.png';
        stoneImg.src = 'images/Rock.png';
        borderImg.src = 'images/Brick.png';

        appleKJS = new Kinetic.Image({
            name: 'apple',
            image: appleImg,
            width: CELL_SIZE,
            height: CELL_SIZE
        });

        borderKJS = new Kinetic.Image({
            name: 'border',
            image: borderImg,
            width: CELL_SIZE,
            height: CELL_SIZE
        });

        stoneKJS = new Kinetic.Image({
            name: 'stone',
            image: stoneImg,
            width: CELL_SIZE,
            height: CELL_SIZE
        });

        snakeKJS = new Kinetic.Image({
            name: 'snake',
            image: snakeImg,
            width: CELL_SIZE,
            height: CELL_SIZE
        });
    }());

    function border(x, y, layer) {
        borderKJS.setX(x * CELL_SIZE);
        borderKJS.setY(y * CELL_SIZE);
        layer.add(borderKJS.clone());
    }

    function stone(x, y, layer) {
        stoneKJS.setX(x * CELL_SIZE);
        stoneKJS.setY(y * CELL_SIZE);
        layer.add(stoneKJS.clone());
    }

    function apple(x, y, layer) {
        appleKJS.setX(x * CELL_SIZE);
        appleKJS.setY(y * CELL_SIZE);
        layer.add(appleKJS);
    }

    function snake(cell, x, y, layer) {

        if (!snakeCells[cell]) {
            snakeCells[cell] = snakeKJS.clone();
        }

        snakeCells[cell].setX(x);
        snakeCells[cell].setY(y);
        layer.add(snakeCells[cell]);
    }

    function snakeDestroy() {
        for (var i = 1; i < snakeCells.length; i++) {
            snakeCells[i].destroy();
        }

        snakeCells = [];
    }

    return {
        apple: apple,
        border: border,
        stone: stone,
        snake: snake,
        snakeDestroy:snakeDestroy
    }
})();