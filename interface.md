### 接口类型：interface
**用来描述对象的属性或抽象行为**

```javascript
// 描述对象属性
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
```

#### 可索引接口(约束对象或数组)
```javascript
interface IndexType {
  [index: number]: string
}
const obj1: IndexType = {
  0: "aaa",
  1: "bbb"
}
const arr1: IndexType = ["aaa", "bbb"]
```

#### 类接口
```javascript
interface PersonType {
  name: string;
  speak(): void;
}

// 实现接口
class Person implements PersonType {
  name: string;
  speak(): void {
    throw new Error("Method not implemented.");
  }
}
```

#### 交叉类型
```js
interface obj2 {
  age: string;
}
interface obj3 {
  name: string;
}
// 包含obj2和obj3所有属性
let obj4: obj2 & obj3
obj4.age = "age"
obj4.name = "name" 
```

###### 衍生问题1：type和interface区别
```javascript
type只是一个类型别名，interface才是真正的类型
```
###### 衍生问题2：class和interface区别
```javascript
- interface只是一个类型，用来修饰对象或抽象行为的，ts编译后消失
- class既是接口也是类（构造函数），可以被实例化，ts编译后还在
```
###### 衍生问题3：extends和implements区别
```javascript
- 类才能实现接口，implements
- 接口可以继承接口，extends
- 类可以继承类，extends
```

