var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.createUserEvents = function () {
            _this.canvas.addEventListener("mousedown", _this.pressEventHandler);
            window.addEventListener("resize", _this.resizeCanvas);
        };
        this.pressEventHandler = function (event) { return _this.click = [event.clientX, event.clientY]; };
        this.clearCanvas = function () { return _this.context.clearRect(0, 0, _this.canvas.width, _this.canvas.height); };
        this.resizeCanvas = function () {
            _this.canvas.width = window.innerWidth - 20;
            _this.canvas.height = window.innerHeight - 30;
        };
        this.anim = function () {
            _this.clearCanvas();
            requestAnimationFrame(_this.anim);
            var width = (_this.canvas.width / _this.widthRatio);
            var height = (_this.canvas.height / _this.heightRatio);
            var posx = _this.canvas.width / 2 - Number(width) / 2;
            var posy = _this.canvas.height / 2 - Number(height) / 2;
            _this.context.drawImage(_this.circuit, posx, posy, width, height);
            _this.context.stroke();
        };
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext("2d");
        this.canvas = canvas;
        this.context = context;
        var circuit = new Image();
        circuit.src = "./assets/images/circuit-A.png";
        circuit.onload = function () {
            _this.circuit = circuit;
            _this.widthRatio = (Number(_this.circuit.width) / _this.canvas.width) / 2;
            _this.heightRatio = (Number(_this.circuit.height) / _this.canvas.height) / 2;
            _this.resizeCanvas();
            _this.createUserEvents();
            _this.anim();
        };
    }
    return App;
}());
new App();
//# sourceMappingURL=app.js.map