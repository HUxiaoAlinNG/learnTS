"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function AFn(type) {
    return type.a;
}
var bObj = {
    a: "1",
    b: 2,
    c: "3"
};
AFn(bObj);
// 接口兼容性
var a;
var b = "1";
a = b;
var c;
var d = "1";
c = d;
var aa;
(function (aa) {
    // 不推荐，但是不报错
    var Ani = /** @class */ (function () {
        function Ani() {
        }
        return Ani;
    }());
    var Bni = /** @class */ (function (_super) {
        __extends(Bni, _super);
        function Bni() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bni;
    }(Ani));
    var a = new Bni();
    var b = new Ani();
    var c = { a: "1" };
})(aa || (aa = {}));
var bb;
(function (bb) {
    // 枚举与数字类型兼容性
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Yellow"] = 1] = "Yellow";
    })(Color || (Color = {}));
    var a;
    a = Color.Red;
    var b;
    b = 1;
})(bb || (bb = {}));
