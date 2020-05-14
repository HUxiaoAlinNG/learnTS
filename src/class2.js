"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// 类装饰器(实验性属性，需设置experimentalDecorators为true)，用来增加属性或替换类
var Lin2;
(function (Lin2_1) {
    // 参数类型有3种写法：typeof Lin / Function / new () => Lin / any
    function enhancer(target) {
        target.prototype.name = "lin";
        target.prototype.getName = function () {
            return this.name;
        };
    }
    // 带参数
    function enhancerParam(name) {
        return function enhancer(target) {
            target.prototype.name = name;
            target.prototype.getName = function () {
                return this.name;
            };
        };
    }
    // 替换类
    function enhanceReplaceClass(target) {
        return /** @class */ (function () {
            function class_1() {
                this.name = "hxl";
            }
            return class_1;
        }());
    }
    var Lin = /** @class */ (function () {
        function Lin() {
        }
        Lin = __decorate([
            enhancer
        ], Lin);
        return Lin;
    }());
    var Lin1 = /** @class */ (function () {
        function Lin1() {
        }
        Lin1 = __decorate([
            enhancerParam("lin1")
        ], Lin1);
        return Lin1;
    }());
    var Lin2 = /** @class */ (function () {
        function Lin2() {
        }
        Lin2 = __decorate([
            enhanceReplaceClass
        ], Lin2);
        return Lin2;
    }());
})(Lin2 || (Lin2 = {}));
var aNamespace;
(function (aNamespace) {
    /*
    属性装饰器
    @param target 如果是静态成员，则表示类的构造函数；如果是实例成员，则为类的原型对象
    @param property 方法或属性名称
     */
    function toUpper(target, property) {
        var value = target[property];
        var getter = function () { return value; };
        var setter = function (newVal) {
            value = newVal.toUpperCase();
        };
        if (delete target[property]) {
            Object.defineProperty(target, property, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true,
            });
        }
    }
    /*
    方法装饰器
    @param target 如果是静态成员，则表示类的构造函数；如果是实例成员，则为类的原型对象
    @param property 方法名称
    @param descriptor
    */
    function methodDecorator(target, property, descriptor) {
        descriptor.enumerable = false;
    }
    /*
  参数装饰器
  @param target 如果是静态成员，则表示类的构造函数；如果是实例成员，则为类的原型对象
  @param methodName 方法名称
  @param paramsIndex 参数索引
  */
    function paramDecorator(target, methodName, paramsIndex) {
        target.name = "gogoggo";
    }
    var Lin = /** @class */ (function () {
        function Lin() {
            this.name = "hxl";
        }
        Lin.prototype.getName = function () {
            return this.name;
        };
        Lin.prototype.setName = function (a, b) {
            console.log(a, b, this.name);
        };
        __decorate([
            toUpper
        ], Lin.prototype, "name", void 0);
        __decorate([
            methodDecorator
        ], Lin.prototype, "getName", null);
        __decorate([
            __param(1, paramDecorator)
        ], Lin.prototype, "setName", null);
        return Lin;
    }());
})(aNamespace || (aNamespace = {}));
var bb;
(function (bb) {
    /*
    装饰器执行顺序:
    - 多个同类装饰器时，由下往上执行
    - 方法装饰器和属性装饰器，由上往下执行
    - 一个方法里面的参数装饰器，先执行参数装饰器，再执行方法装饰器(由内到外)，参数装饰器由右往左执行(倒序)
    */
    function classDecorator1() {
        return function (target) {
            console.log("classDecorator1");
        };
    }
    function classDecorator2() {
        return function (target) {
            console.log("classDecorator2");
        };
    }
    function propertyDecorator1() {
        return function (target, property) {
            console.log("propertyDecorator1");
        };
    }
    function propertyDecorator2() {
        return function (target, property) {
            console.log("propertyDecorator2");
        };
    }
    function methodDecorator1() {
        return function (target, property, descriptor) {
            console.log("methodDecorator1");
        };
    }
    function methodDecorator2() {
        return function (target, property, descriptor) {
            console.log("methodDecorator2");
        };
    }
    function paramDecorator1() {
        return function (target, methodName, paramIndex) {
            console.log("paramDecorator1");
        };
    }
    function paramDecorator2() {
        return function (target, methodName, paramIndex) {
            console.log("paramDecorator2");
        };
    }
    var Lin = /** @class */ (function () {
        function Lin() {
            this.name = "hxl";
            this.age = 20;
        }
        Lin.prototype.getName = function () {
            return this.name;
        };
        Lin.prototype.getAge = function (age1, age2) {
            return undefined;
        };
        __decorate([
            propertyDecorator1()
        ], Lin.prototype, "name", void 0);
        __decorate([
            methodDecorator1()
        ], Lin.prototype, "getName", null);
        __decorate([
            methodDecorator2(),
            __param(0, paramDecorator1()), __param(1, paramDecorator2())
        ], Lin.prototype, "getAge", null);
        __decorate([
            propertyDecorator2()
        ], Lin.prototype, "age", void 0);
        Lin = __decorate([
            classDecorator1(),
            classDecorator2()
        ], Lin);
        return Lin;
    }());
    var lin = new Lin();
    /*
    执行顺序为：
    - propertyDecorator1
    - methodDecorator1
    - paramDecorator2
    - paramDecorator1
    - methodDecorator2
    - propertyDecorator2
    - classDecorator2
    - classDecorator1
    */
})(bb || (bb = {}));
