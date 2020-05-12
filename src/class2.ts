// 类继承器(实验性属性，需设置experimentalDecorators为true)，用来增加属性或替换类
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