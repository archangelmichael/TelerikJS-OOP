/// <reference path="libs/require.js" />
/// <reference path="libs/jquery.min.js" />
/// <reference path="libs/handlebars.min.js" />
define(['jquery', 'handlebars'], function ($, handlebars) {
    var ComboBox = function (people) {
        var render = function (templateString) {
            var $resultElement,
                template,
                i;

            $resultElement = $('<div />');
            template = Handlebars.compile(templateString);

            for (i = 0; i < people.length; i++) {
                var person = template(people[i]);
                $(person).appendTo($resultElement);
            }

            // make first item selected by default
            $resultElement.children().first().addClass('selected');

            var collapsed = true;
            $resultElement.on('click', '.person-item', function () {
                if (collapsed) {
                    $resultElement.children().show();
                    collapsed = false;
                }
                else {
                    $resultElement.children().hide();
                    $oldSelected = $resultElement.find('.selected').removeClass('selected');
                    $(this).addClass('selected');
                    collapsed = true;
                }
            });

            return $resultElement;
        };

        return {
            render: render
        }
    };

    return {
        ComboBox: ComboBox
    }
});