// 类型别名

type A = string;

// 抽离一组联合类型
type StatusCode = 100 | 200 | 300 | 400 | 500;

type PossibleDataTypes = string | number | (() => unknown);

const status: StatusCode = 100;

// 抽离一个函数类型
type Handler = (e: Event) => void;

const clickHandler: Handler = (e) => {};
const moveHandler: Handler = (e) => {};
const dragHandler: Handler = (e) => {};

// 声明一个对象类型
type ObjType = {
  name: string;
  age: number;
};

// 泛型工具
type Factory<T> = T | number | string;

type FactoryWithBool = Factory<boolean>;
const foo: FactoryWithBool = true;

// 声明一个简单有实际意义的的类型工具

type MaybeNull<T> = T | null;
function process(input: MaybeNull<{ handler: () => {} }>) {
  input?.handler();
}

type MaybeArray<T> = T | T[];
function ensureArray<T>(input: MaybeArray<T>): T[] {
  return Array.isArray(input) ? input : [input];
}

// 索引签名类型
interface AllStringTypes {
  [key: string]: string;
}

type AllStringTypes = {
  [key: string]: string;
};
type PropType1 = AllStringTypes["linbudu"];

// 索引类型查询
interface Foo {
  kevin: 1;
  599: 2;
}

type FooKeys = keyof Foo;

// 索引类型访问
interface NumberRecord {
  [key: string]: number;
}

type PropType = NumberRecord[string];

// 映射类型
type Stringify<T> = {
  [K in keyof T]: string;
};

interface Foo1 {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: () => {};
}

type StringifiedFoo = Stringify<Foo1>;

type Clone<T> = {
  [K in keyof T]: T[K];
};

type Foo2 = Clone<Foo1>;
