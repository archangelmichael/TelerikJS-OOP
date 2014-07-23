var Creator = (function () {
    function Creator(canvasID) {
        // John Resig Constructor fix - if constructor not used with new
        if (!(this instanceof arguments.callee)) {
            return new Creator(canvasID);
        }

        var validID = validateID(canvasID);
        if (!validID) {
            throw new Error('No canvas element with such ID found!');
        }

        this.ctx = document.getElementById(canvasID).getContext('2d');
    }

    function validateID(id) {
        return id && document.getElementById(id) instanceof HTMLCanvasElement;
    }

    Creator.prototype.rect = function (x, y, width, height, lineWidth, strokeColor, fillColor) {
        this.ctx.beginPath();
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.rect(x, y, width, height);
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
        this.ctx.stroke();
    };

    Creator.prototype.circle = function (x, y, radius, lineWidth, strokeColor, fillColor) {
        this.ctx.beginPath();
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
        this.ctx.stroke();
    };

    Creator.prototype.line = function (x1, y1, x2, y2, lineWidth, strokeColor) {
        this.ctx.beginPath();
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    };

    return Creator;
}());