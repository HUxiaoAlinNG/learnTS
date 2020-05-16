"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//数组类型(类型确定)
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// 元组类型(类型和数量确定)
var arr3 = [1, "3"];
// null/undefined为其他类型的子类型，可赋值给其他类型，但是tsconfig.json里 strictNullChecks 属性 需设置为false
var num = 1;
num = undefined;
num = null;
// void 表示 没有任何类型
function Fn(name) {
    // 但是可以和undefined兼容
    // return undefined;
    // 若设置 strictNullChecks 属性为 false，也可以和null兼容
    return null;
}
// never 永远不会出现的值，为null/undefined的子类型
function err(msg) {
    throw new Error("error");
}
var err1 = err("111");
// never与void区别:
// 1. void可以赋值undefined/null，never则永远没有值
// 2. 定义void返回值的函数可以正常返回，never则无法正常返回，或者死循环，或者无法达到
function loop() {
    while (true) { }
}
function checkType(a) {
    if (typeof a === "number") {
        //(parameter) a: number
        console.log(a);
    }
    else if (typeof a === "string") {
        // (parameter) a: string
        console.log(a);
    }
    else {
        // (parameter) a: never
        console.log(a);
    }
}
// 联合类型
var abc;
// 类型断言(将联合类型转为具体类型)
// 写法一
abc.length;
// 写法二
abc.toFixed();
var ele = document.getElementById("root");
// 非空断言(能确定非空则使用)
ele.style.color = "red";
var aType1 = [1];
var aType2 = 0;
var aType3 = true;
var aType4 = "1";
// 默认参数
var aFn = function (a, b) {
    if (a === void 0) { a = "GET"; }
    return "111";
};
var aFn1 = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
};
