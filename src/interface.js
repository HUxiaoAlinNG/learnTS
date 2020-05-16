"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    a: "111",
    b: 111,
    c: 111
};
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.speak = function () {
        throw new Error("Method not implemented.");
    };
    Animal.prototype.talk = function () {
        throw new Error("Method not implemented.");
    };
    return Animal;
}());
function fn(a) { }
var obj1 = {
    0: "aaa",
    1: "bbb"
};
var arr1 = ["aaa", "bbb"];
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.speak = function () {
        throw new Error("Method not implemented.");
    };
    return Person;
}());
// type和interface区别
// - type只是一个类型别名，interface才是真正的类型
// class和interface区别
// - interface只是一个类型，用来修饰对象或抽象行为的，ts编译后消失
// - class既是接口也是类（构造函数），可以被实例化，ts编译后还在
// extends和implements区别
// 类才能实现接口，implements
// 接口可以继承接口，extends
// 类可以继承类，extends
