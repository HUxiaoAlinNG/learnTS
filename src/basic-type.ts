const a: string = "abc";
const b: number = 123;
const c: boolean = true;

// 普通枚举
enum Color {
  Red,
  Blue,
  Yellow
};
console.log(Color);

// 常量枚举
const enum Human {
  MALE,
  FEMALE
}
console.log(Human.FEMALE);

enum Any {
  HUMAN = "HUMAN",
  LANDMAN = "LANDMAN"
}
console.log(Any)

const enum Car {
  BMW = "BMW",
  TIGER = "TIGER"
}
console.log(Car.BMW);

//数组类型(类型确定)
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// 元组类型(类型和数量确定)
const arr3: [number, string] = [1, "3"];

const ele: HTMLElement | null = document.getElementById("root");
// 非空断言(能确定非空则使用)
ele!.style.color = "red";

// null/undefined为其他类型的子类型，可赋值给其他类型，但是tsconfig.json里 strictNullChecks 属性 需设置为false
let num: number = 1;
num = undefined;
num = null;

// void 表示 没有任何类型
function Fn(name: string): void {
  // 但是可以和undefined兼容
  // return undefined;
  // 若设置 strictNullChecks 属性为 false，也可以和null兼容
  return null;
}

// never 永远不会出现的值，为null/undefined的自类型
function err(msg: string): never {
  throw new Error("error");
}
const err1: never = err("111");

// never与void区别:
// 1. void可以赋值undefined/null，never则永远没有值
// 2. 定义void返回值的函数可以正常返回，never则无法正常返回，或者死循环，或者无法达到
function loop(): never {
  while (true) {

  }
}

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


// 联合类型
let abc: string | number;
// 类型断言(将联合类型转为具体类型)
// 写法一
(abc as string).length;
// 写法二
(<number>abc).toFixed();


// 字面量类型
type AType = 0 | "1" | true | [1];
const aType1: AType = [1];
const aType2: AType = 0;
const aType3: AType = true;
const aType4: AType = "1";

//函数表达式(可选参数)
type FnType = (a: string, b?: number) => string;

// 默认参数
const aFn: FnType = (a = "GET", b) => {
  return "111";
}

// 剩余参数
type FnType1 = (...num: number[]) => void;

export { }