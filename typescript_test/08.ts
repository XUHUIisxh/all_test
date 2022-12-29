// 类型查询操作符
const str = "kevin";

const obj = { name: "kevin" };

const nullVar = null;

const undefinedVar = undefined;

const func = (input: string) => {
  return input.length > 10;
};

type Str = typeof str;
type Obj = typeof obj;
type Null = typeof nullVar;
type Undefined = typeof undefined;
type Func = typeof func;

// 守卫类型
declare const strOrNumOrBool: string | number | boolean;

if (typeof strOrNumOrBool === "string") {
  strOrNumOrBool.charAt(1);
} else if (typeof strOrNumOrBool === "number") {
  strOrNumOrBool.toFixed();
} else if (typeof strOrNumOrBool === "boolean") {
  strOrNumOrBool === true;
} else {
  const _exhaustiveCheck: never = strOrNumOrBool;
  throw new Error(`Unknown input type:${_exhaustiveCheck}`);
}
