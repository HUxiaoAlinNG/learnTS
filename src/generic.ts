// 泛型：在定义函数/接口/类等等时，不提前定义好具体的类型，而是使用时再指定

// 泛型函数
function test<T>(a: number, b: T): T[] {
  const res: T[] = [];
  for (let i = 0; i < a; i++) {
    res.push(b)
  }
  return res;
}

// 泛型类
class Person<T> {
  list: T[]
  speak(a: T) {
    return this.list.push(a)
  }
}
const p = new Person<string>()

// 泛型接口
interface TestType<A> {
  <B>(b: A, c: B): A,
}
const test1: TestType<string> = <B>(b: string, c: B) => b;
test1<number>("1", 1)

// 默认泛型
interface TestType1<A> {
  <B = string>(b: A, c: B): A,
}
const test11: TestType1<string> = (b, c) => b;
test11("1", "1")

// 泛型约束
interface LengthType {
  length: number
}

function strLen<T extends LengthType>(str: T) {
  return str.length;
}

strLen("11");


export { }