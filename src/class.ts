// 存取器
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
//Person用Person1代替
namespace Person1 {
  class Person {
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
//Lin用Lin1代替
namespace Lin1 {
  class Lin {
    constructor(public name: string, protected protectedName: string, private privateName: string) {

    }
  }
}
const lin = new Lin("1", "2", "3")
console.log(lin.name);
//属性“protectedName”受保护，只能在类“Lin1”及其子类中访问。
//console.log(lin.protectedName)

//属性“privateName”为私有属性，只能在类“Lin1”中访问。
//console.log(lin.privateName)

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