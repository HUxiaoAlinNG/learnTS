"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类继承器(实验性属性，需设置experimentalDecorators为true)，用来增加属性或替换类
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
