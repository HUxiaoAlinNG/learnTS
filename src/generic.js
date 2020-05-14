"use strict";
// 泛型：在定义函数/接口/类等等时，不提前定义好具体的类型，而是使用时再指定
Object.defineProperty(exports, "__esModule", { value: true });
// 泛型函数
function test(a, b) {
    var res = [];
    for (var i = 0; i < a; i++) {
        res.push(b);
    }
    return res;
}
// 泛型类
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.speak = function (a) {
        return this.list.push(a);
    };
    return Person;
}());
var p = new Person();
var test1 = function (b, c) { return b; };
test1("1", 1);
var test11 = function (b, c) { return b; };
test11("1", "1");
function strLen(str) {
    return str.length;
}
strLen("11");
