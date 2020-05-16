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
// 类
var Person = /** @class */ (function () {
    function Person(name) {
        this.A = 1;
        this.name = "";
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "pname", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
//等价于
//Person用PersonAnother代替
var PersonAnother = /** @class */ (function () {
    function PersonAnother(name) {
        this.name = name;
        this.A = 1;
    }
    Object.defineProperty(PersonAnother.prototype, "pname", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return PersonAnother;
}());
// 抽象类:只能被继承，无法被实例
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "Animal";
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super.call(this) || this;
        _this.name = "dddd";
        return _this;
    }
    Cat.prototype.speak = function () {
        console.log("cat");
    };
    return Cat;
}(Animal));
// public protected private
var Lin = /** @class */ (function () {
    function Lin(name, protectedName, privateName) {
        // 可被父类/子类/其他类使用
        this.name = "";
        // 可被父类/子类使用
        this.protectedName = "";
        // 只能父类使用
        this.privateName = "";
        this.name = name;
        this.privateName = privateName;
        this.protectedName = protectedName;
    }
    return Lin;
}());
//等价于
//Lin用LinAnother代替
var LinAnother = /** @class */ (function () {
    function LinAnother(name, protectedName, privateName) {
        this.name = name;
        this.protectedName = protectedName;
        this.privateName = privateName;
        this.name = name;
        this.privateName = privateName;
        this.protectedName = protectedName;
    }
    return LinAnother;
}());
var lin = new LinAnother("1", "2", "3");
console.log(lin); //Lin { name: '1', protectedName: '2', privateName: '3' }
//属性“protectedName”受保护，只能在类“LinAnother”及其子类中访问。
// console.log(lin.protectedName)
//属性“privateName”为私有属性，只能在类“LinAnother”中访问。
// console.log(lin.privateName)
// 类和抽象类区别
// - 都能实现接口
// - 抽象类不能被实例化
// - 类可以被实例化
