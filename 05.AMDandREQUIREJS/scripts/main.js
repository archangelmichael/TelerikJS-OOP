/// <reference path="controls.js" />
(function () {
    require.config({
        paths: {
            "jquery": "libs/jquery.min",
            "handlebars": "libs/handlebars.min"
        }
    });

    require(['jquery', 'controls'], function ($, controls) {
        var people = [{
            id: 1, name: "Doncho Minkov", age: 18, avatarUrl: "imgs/doncho.jpg"
        }, {
            id: 2, name: "Geprge Georgiev", age: 19, avatarUrl: "imgs/george.jpg"
        }, {
            id: 3, name: "Ivaylo Kenov", age: 15, avatarUrl: "imgs/ivaylo.jpg"
        }];

        var container = $("#container");
        var comboBox = controls.ComboBox(people);
        var template = $("#person-template").html();
        var comboBoxHtml = comboBox.render(template);
        container.html(comboBoxHtml);
    });

}());