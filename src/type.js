"use strict";
var a = "abc";
var b = 123;
var c = true;
// 普通枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
;
console.log(Color);
console.log(1 /* FEMALE */);
var Any;
(function (Any) {
    Any["HUMAN"] = "HUMAN";
    Any["LANDMAN"] = "LANDMAN";
})(Any || (Any = {}));
console.log(Any);
console.log("BMW" /* BMW */);
