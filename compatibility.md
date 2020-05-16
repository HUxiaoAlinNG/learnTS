**ts为结构类型系统，只会比较结构，不关心 类型**

#### 函数兼容性
```javascript
interface AType {
  a: string,
  b: number,
}

interface BType {
  a: string,
  b: number,
  c: string
}

function AFn(type: AType) {
  return type.a;
}
const bObj: BType = {
  a: "1",
  b: 2,
  c: "3"
};
AFn(bObj);  // 不报错
```


#### 接口兼容性
```javascript
let a: string | number;
const b = "1";
a = b;

let c: {
  toString(): string
}
const d = "1"
c = d; // 不报错
```

#### 类兼容性
```javascript
class Ani {
  a: string
}
class Bni extends Ani {

}
const a: Ani = new Bni(); // 不报错
const b: Bni = new Ani(); // 不报错
const c: Bni = { a: "1" }; // 不报错
```

#### 枚举与数字类型兼容性
```javascript
enum Color {
  Red,
  Yellow
}
let a: number;
a = Color.Red; // 不报错

let b: Color // 不报错
```