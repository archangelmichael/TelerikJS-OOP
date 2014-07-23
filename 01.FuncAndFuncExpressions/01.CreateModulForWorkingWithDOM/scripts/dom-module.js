var domModule = (function dom(){
    var buffer = [],
        len;

    function appendChild (childElement, parentSelector) {
        $(parentSelector).append(childElement);
    }

    function removeChild(parentSelector, childElement) {
        $(parentSelector).find(childElement).remove();
    }

    function addHandler(selector, eventType, eventHandler){
        $(selector).on(eventType, eventHandler);
    }

    function appendToBuffer(parentQuerySelector, elementToAppend) {
        var parent = document.querySelector(parentQuerySelector),
            docFragment,
            i;
        if (!buffer[parent]) {
            buffer[parent] = [];
        }

        buffer[parent].push(elementToAppend);
        len = buffer[parent].length;
        if (len >= bufferSize) {
            docFragment  = document.createDocumentFragment();
            for (i = 0; i < len; i += 1) {
                docFragment.appendChild(buffer[parent][i]);
            }

            buffer[parent] = [];
            parent.appendChild(docFragment);
        }
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        appendToBuffer: appendToBuffer
    }
}());


