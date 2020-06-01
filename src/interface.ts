//interface:1.对象的属性 2.抽象行为
interface ObjType {
  a: string;
  b: number;
  [key: string]: any;  //任意属性
}

const obj: ObjType = {
  a: "111",
  b: 111,
  c: 111
}
// 抽象行为
interface Speakable {
  speak(): void;
}
interface Talkable {
  talk(): void;
}
class Animal implements Speakable, Talkable {
  speak(): void {
    throw new Error("Method not implemented.");
  }
  talk(): void {
    throw new Error("Method not implemented.");
  }

}

//重载：多个方法名一样，但是参数类型不一样(返回值需一样)
function fn(a: number): void;
function fn(a: string): void;
function fn(a: number | string): void { }

// 可索引接口(约束对象或数组)
interface IndexType {
  [index: number]: string
}
const obj1: IndexType = {
  0: "aaa",
  1: "bbb"
}
const arr1: IndexType = ["aaa", "bbb"]

// 类接口
interface PersonType {
  name: string;
  speak(): void;
}
class Person implements PersonType {
  name: string;
  speak(): void {
    throw new Error("Method not implemented.");
  }

}

// 交叉类型
interface obj2 {
  age: string;
}
interface obj3 {
  name: string;
}
let obj4: obj2 & obj3
obj4.age = "age"
obj4.name = "name"


// 避免Animal已经在别的模块定义，通过这个属性，将这个文件模块化
export { }

// type和interface区别
// - type只是一个类型别名，interface才是真正的类型

// class和interface区别
// - interface只是一个类型，用来修饰对象或抽象行为的，ts编译后消失
// - class既是接口也是类（构造函数），可以被实例化，ts编译后还在

// extends和implements区别
// 类才能实现接口，implements
// 接口可以继承接口，extends
// 类可以继承类，extends