// 类装饰器(实验性属性，需设置experimentalDecorators为true)，用来增加属性或替换类
namespace Lin2 {
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
}
namespace aNamespace {
  /* 
  属性装饰器
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

  /* 
  方法装饰器
  @param target 如果是静态成员，则表示类的构造函数；如果是实例成员，则为类的原型对象
  @param property 方法名称   
  @param descriptor
  */
  function methodDecorator(target: any, property: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = false
  }

  /* 
参数装饰器
@param target 如果是静态成员，则表示类的构造函数；如果是实例成员，则为类的原型对象
@param methodName 方法名称   
@param paramsIndex 参数索引
*/
  function paramDecorator(target: any, methodName: string, paramsIndex: number) {
    target.name = "gogoggo"
  }
  class Lin {
    @toUpper
    name: string = "hxl"
    @methodDecorator
    getName() {
      return this.name;
    }
    setName(a: string, @paramDecorator b: string) {
      console.log(a, b, this.name)
    }

  }
}

namespace bb {
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
  执行顺序为：
  - propertyDecorator1
  - methodDecorator1
  - paramDecorator2
  - paramDecorator1
  - methodDecorator2
  - propertyDecorator2
  - classDecorator2
  - classDecorator1
  */
}

export { }