#### 类
```javascript
// 类1
class Person {
  public readonly A = 1
  name: string = ""
  constructor(name: string) {
    this.name = name
  }

  get pname() {
    return this.name;
  }

  set pname(name: string) {
    this.name = name;
  }
}
// 等价于
--------start-----------
// 类2
class Person {
  public readonly A = 1
  // 注意此处public
  constructor(public name: string) {

  }

  get pname() {
    return this.name;
  }

  set pname(name: string) {
    this.name = name;
  }
}
--------end-------------
// 编译结果如下
--------start-----------
var Person = /** @class */ (function () {
    function Person(name) {
        this.A = 1;
        //this.name = ""; 类1编译后多了这行
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
--------end-------------
```

#### 抽象类:只能被继承，无法被实例
```javascript
abstract class Animal {
  name: string = "Animal";
  abstract speak(): void
}

class Cat extends Animal {
  constructor() {
    super()
    this.name = "dddd"
  }
  speak() {
    console.log("cat")
  }
}
// 编译结果如下
--------start-----------
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
--------end-------------
```

###### 衍生问题1:public protected private区别
```javascript
// 类1
class Lin {
  // 可被父类/子类/其他类使用
  public name: string = ""
  // 可被父类/子类使用
  protected protectedName: string = ""
  // 只能父类使用
  private privateName: string = ""
  constructor(name: string, protectedName: string, privateName: string) {
    this.name = name;
    this.privateName = privateName;
    this.protectedName = protectedName;
  }
}
// 等价于
--------start-----------
// 类2
class Lin {
  constructor(public name: string, protected protectedName: string, private privateName: string) {
    this.name = name;
    this.privateName = privateName;
    this.protectedName = protectedName;
  }
}
--------end-------------
const lin = new Lin("1", "2", "3")
console.log(lin);  //Lin { name: '1', protectedName: '2', privateName: '3' }
//属性“protectedName”受保护，只能在类“Lin”及其子类中访问。
// console.log(lin.protectedName)
//属性“privateName”为私有属性，只能在类“Lin”中访问。
// console.log(lin.privateName)
```

#### 类装饰器(实验性属性，用来增加属性或替换类，需设置experimentalDecorators为true)
```javascript
interface Lin {
  name: string;
  getName: () => string;
}
interface Lin1 {
  name: string;
  getName: () => string;
}
// 参数类型有3种写法：typeof Lin / Function / new () => Lin / any
function enhancer(target: typeof Lin) {
  target.prototype.name = "lin";
  target.prototype.getName = function () {
    return this.name;
  }
}
// 带参数
function enhancerParam(name: string) {
  return function enhancer(target: typeof Lin1) {
    target.prototype.name = name;
    target.prototype.getName = function () {
      return this.name;
    }
  }
}
// 替换类
function enhanceReplaceClass(target: any) {
  return class {
    name: string = "hxl"
  }
}

@enhancer
class Lin { }
@enhancerParam("lin1")
class Lin1 { }
@enhanceReplaceClass
class Lin2 { }
```

#### 属性装饰器
```javascript
/* 
@param target 如果是静态成员，则表示类的构造函数；如果是实例成员，则为类的原型对象
@param property 方法或属性名称 
  */
function toUpper(target: any, property: string) {
  let value = target[property];
  const getter = () => value;
  const setter = (newVal: string) => {
    value = newVal.toUpperCase()
  }
  if (delete target[property]) {
    Object.defineProperty(target, property, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    })
  }
}
class Lin {
  @toUpper
  name: string = "hxl"
  getName() {
    return this.name;
  }
  setName(a: string, b: string) {
    console.log(a, b, this.name)
  }
}
```

#### 方法装饰器
```javascript
/* 
@param target 如果是静态成员，则表示类的构造函数；如果是实例成员，则为类的原型对象
@param property 方法名称   
@param descriptor
*/
function methodDecorator(target: any, property: string, descriptor: PropertyDescriptor) {
  descriptor.enumerable = false
}
class Lin {
  name: string = "hxl"
  @methodDecorator
  getName() {
    return this.name;
  }
  setName(a: string, b: string) {
    console.log(a, b, this.name)
  }
}
```

#### 参数装饰器
```javascript
/* 
@param target 如果是静态成员，则表示类的构造函数；如果是实例成员，则为类的原型对象
@param methodName 方法名称   
@param paramsIndex 参数索引
*/
function paramDecorator(target: any, methodName: string, paramsIndex: number) {
  target.name = "gogoggo"
}
class Lin {
  name: string = "hxl"
  getName() {
    return this.name;
  }
  setName(a: string, @paramDecorator b: string) {
    console.log(a, b, this.name)
  }

}
```

###### 衍生问题2:装饰器执行顺序
```javascript
/*
装饰器执行顺序:
- 多个同类装饰器时，由下往上执行
- 方法装饰器和属性装饰器，由上往下执行
- 一个方法里面的参数装饰器，先执行参数装饰器，再执行方法装饰器(由内到外)，参数装饰器由右往左执行(倒序)
*/

function classDecorator1() {
  return function (target: any) {
    console.log("classDecorator1")
  }
}
function classDecorator2() {
  return function (target: any) {
    console.log("classDecorator2")
  }
}
function propertyDecorator1() {
  return function (target: any, property: string) {
    console.log("propertyDecorator1")
  }
}
function propertyDecorator2() {
  return function (target: any, property: string) {
    console.log("propertyDecorator2")
  }
}
function methodDecorator1() {
  return function (target: any, property: string, descriptor: PropertyDescriptor) {
    console.log("methodDecorator1")
  }
}
function methodDecorator2() {
  return function (target: any, property: string, descriptor: PropertyDescriptor) {
    console.log("methodDecorator2")
  }
}
function paramDecorator1() {
  return function (target: any, methodName: string, paramIndex: number) {
    console.log("paramDecorator1")
  }
}
function paramDecorator2() {
  return function (target: any, methodName: string, paramIndex: number) {
    console.log("paramDecorator2")
  }
}

@classDecorator1()
@classDecorator2()
class Lin {
  @propertyDecorator1()
  name: string = "hxl"
  @methodDecorator1()
  getName() {
    return this.name;
  }
  @methodDecorator2()
  getAge(@paramDecorator1() age1: number, @paramDecorator2() age2: number): void {
    return undefined;
  }
  @propertyDecorator2()
  age: number = 20
}

const lin = new Lin()

/* 
输出：
- propertyDecorator1
- methodDecorator1
- paramDecorator2
- paramDecorator1
- methodDecorator2
- propertyDecorator2
- classDecorator2
- classDecorator1
*/
```