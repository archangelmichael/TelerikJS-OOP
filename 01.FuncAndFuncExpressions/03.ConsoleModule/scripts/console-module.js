var specialConsole = ( function specialConsole() {

    function writeOnConsole(method, args) {
        var result = args[0];
        //check if using a format
        if (args && args.length > 1) {
            for (var i = 0; i < args.length; i += 1) {
                var regEx = new RegExp('\\{' + (i) + '\\}', 'gi');
                result = result.replace(regEx, args[i+1]);
            }
        }

        console[method](result);
    }

    return {
        writeLine: function () { writeOnConsole('log', arguments)},
        writeError: function () { writeOnConsole('error', arguments)},
        writeWarning: function () { writeOnConsole('warn', arguments)}
    }
}());
