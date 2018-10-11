var Car = /** @class */ (function () {
    function Car(color, doors) {
        if (color === void 0) { color = 'Red'; }
        if (doors === void 0) { doors = 4; }
        this.doors = doors;
        this.color = color;
    }
    return Car;
}());
var c = new Car();
console.log(c);
//# sourceMappingURL=4.js.map