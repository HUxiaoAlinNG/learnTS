// ts为结构类型系统，只会比较结构，不关心 类型
// 函数兼容性
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
AFn(bObj);

// 接口兼容性
let a: string | number;
const b = "1";
a = b;

let c: {
  toString(): string
}
const d = "1"
c = d;

namespace aa {
  // 不推荐，但是不报错
  class Ani {
    a: string
  }
  class Bni extends Ani {

  }
  const a: Ani = new Bni()
  const b: Bni = new Ani();
  const c: Bni = { a: "1" }
}

namespace bb {
  // 枚举与数字类型兼容性
  enum Color {
    Red,
    Yellow
  }
  let a: number;
  a = Color.Red;

  let b: Color
  b = 1;
}



export { }