// 类型别名中的泛型
type Factory<T> = T | number | string;

type Partial<T> = {
  [P in keyof T]?: T[P];
};

interface IFoo {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: () => void;
}

type PartialIFoo = Partial<IFoo>;

// 条件类型工具

type IsEqual<T> = T extends true ? 1 : 2;

type A = IsEqual<true>;
type B = IsEqual<false>;
type C = IsEqual<"kevin">;

// 泛型约束与默认值

type Factory<T = boolean> = T | number | string;

const foo: Factory = false;
