// 类
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

//等价于
//Person用PersonAnother代替
class PersonAnother {
  public readonly A = 1
  constructor(public name: string) {

  }

  get pname() {
    return this.name;
  }

  set pname(name: string) {
    this.name = name;
  }
}

// 抽象类:只能被继承，无法被实例
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


// public protected private
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
//等价于
//Lin用LinAnother代替
class LinAnother {
  constructor(public name: string, protected protectedName: string, private privateName: string) {
    this.name = name;
    this.privateName = privateName;
    this.protectedName = protectedName;
  }
}
const lin = new LinAnother("1", "2", "3")
console.log(lin);  //Lin { name: '1', protectedName: '2', privateName: '3' }
//属性“protectedName”受保护，只能在类“LinAnother”及其子类中访问。
// console.log(lin.protectedName)
//属性“privateName”为私有属性，只能在类“LinAnother”中访问。
// console.log(lin.privateName)

// 类和抽象类区别
// - 都能实现接口
// - 抽象类不能被实例化
// - 类可以被实例化