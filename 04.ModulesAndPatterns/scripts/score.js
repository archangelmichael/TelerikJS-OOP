/// <reference path="libs/kinetic-v5.1.0.min.js" />
'use strict';

var Score = (function (width, height) {

    var resultKJS,
        levelKJS,
        gameOverKJS;

    (function setKJSContainers() {
        resultKJS = new Kinetic.Text({
            x: width * 3 / 5,
            y: 70,
            fontSize: 24,
            fontFamily: 'Times New Roman',
            fill: 'white'
        });

        levelKJS = new Kinetic.Text({
            x: width / 4,
            y: 70,
            fontSize: 24,
            fontFamily: 'Times New Roman',
            fill: 'white'
        });

        gameOverKJS = new Kinetic.Text({
            x: width / 10,
            y: height / 4,
            fontSize: 122,
            text: 'GAME OVER',
            fontFamily: 'Times New Roman',
            fill: 'red'
        });
    }());

    function gameOver(score, layer, stage) {
        layer.add(gameOverKJS);
        stage.add(layer);
    }

    function result(score, layer, stage) {
        resultKJS.setText('Score: ' + score);
        layer.add(resultKJS);
        stage.add(layer);
    }

    function level(level, layer, stage) {
        levelKJS.setText('Level: ' + level);
        layer.add(levelKJS);
        stage.add(layer);
    }

    return {
        result: result,
        level: level,
        gameOver: gameOver
    }
});
