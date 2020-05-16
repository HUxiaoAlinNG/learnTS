### 基本类型
#### 字符串
```javascript
const a: string = "abc";
```
#### 数字
```javascript
const b: number = 123; 
```
#### 布尔
```javascript
const c: boolean = true;
```

#### 枚举
##### 1.普通枚举
```javascript
//示例1
enum Color {
  Red,
  Blue,
  Yellow
};
// 编译结果如下
--------start-----------
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
--------end-------------
console.log(Color); // { '0': 'Red', '1': 'Blue', '2': 'Yellow', Red: 0, Blue: 1, Yellow: 2 }

//示例2
enum Any {
  HUMAN = "HUMAN",
  LANDMAN = "LANDMAN"
}
// 编译结果如下
--------start-----------
var Any;
(function (Any) {
    Any["HUMAN"] = "HUMAN";
    Any["LANDMAN"] = "LANDMAN";
})(Any || (Any = {}));
--------end-------------
console.log(Any); // { HUMAN: 'HUMAN', LANDMAN: 'LANDMAN' }
```

##### 2.常量枚举
```javascript
//示例1
const enum Human {
  MALE,
  FEMALE
}  
console.log(Human.FEMALE);
// 编译结果如下
--------start-----------
console.log(1 /* FEMALE */);
--------end-------------
//注，不可console.log(Human)console.log(Human);
//报错："const" 枚举仅可在属性、索引访问表达式、导入声明的右侧、导出分配或类型查询中使用。

//示例2
const enum Car {
  BMW = "BMW",
  TIGER = "TIGER"
}
console.log(Car.BMW);
// 编译结果如下
--------start-----------
console.log("BMW" /* BMW */);
--------end-------------
```

#### 数组
##### 1.普通数组
```javascript
// 类型确定
const arr1: number[] = [1, 2, 3];  // 写法一
const arr2: Array<number> = [1, 2, 3]; // 写法二
```
##### 2.元组类型
```javascript
// 类型和数量确定
const arr3: [number, string] = [1, "3"];
```

#### undefined/null
```javascript
// null/undefined为其他类型的子类型，可赋值给其他类型，但是tsconfig.json里 strictNullChecks 属性 需设置为false
let num: number = 1;
num = undefined;
num = null;
```

#### void
```javascript
// void 表示 没有任何类型
function Fn(name: string): void {
  // 但是可以和undefined兼容
  // return undefined;

  // 若设置 strictNullChecks 属性为 false，也可以和null兼容
  return null;
}
```

#### never
```javascript
// never 永远不会出现的值，为null/undefined的子类型
function err(msg: string): never {
  throw new Error("error");
}
const err1: never = err("111");
```

###### 衍生问题：never与void区别
```javascript
// 1. void可以赋值undefined/null，never则永远没有值
// 2. 定义void返回值的函数可以正常返回，never则无法正常返回，或者代表死循环，或者永远无法达到

// 示例：无法正常返回
function err(msg: string): never {
  throw new Error("error");
}
// 示例：死循环
function loop(): never {
  while (true) { }
}
// 示例：永远无法达到
function checkType(a: number | string) {
  if (typeof a === "number") {
    //(parameter) a: number
    console.log(a);
  } else if (typeof a === "string") {
    // (parameter) a: string
    console.log(a);
  } else {
    // (parameter) a: never
    console.log(a);
  }
}
```

#### 联合类型
```javascript
let abc: string | number;
```
###### 衍生用法:类型断言(将联合类型转为具体类型)
```javascript
// 写法一
(abc as string).length;
// 写法二
(<number>abc).toFixed();

// 非空断言(能确定非空则使用)
const ele: HTMLElement | null = document.getElementById("root");
//ele可能为空
//不能写ele.style.color = "red";需进行非空断言
ele!.style.color = "red";
```

#### 字面量类型
```javascript
type AType = 0 | "1" | true | [1];
const aType1: AType = [1];
const aType2: AType = 0;
const aType3: AType = true;
const aType4: AType = "1";
```

#### 函数表达式
##### 可选参数
```javascript
type FnType = (a: string, b?: number) => string;
```
##### 默认参数
```javascript
const aFn: FnType = (a = "GET", b) => {
  return "111";
}
// 编译结果如下
--------start-----------
var aFn = function (a, b) {
    if (a === void 0) { a = "GET"; }
    return "111";
};
--------end-------------
```
##### 剩余参数
```javascript
type FnType1 = (...num: number[]) => void;
// 编译结果如下
--------start-----------
var aFn1 = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
};
--------end-------------
```

###### 衍生用法:重载(多个方法名一样，但是参数类型不一样,返回值需一样)
```javascript
function fn(a: number): void;
function fn(a: string): void;
function fn(a: number | string): void { }
```
