<script lang="ts" setup>
/** 數組類型 */
// 1. 使用 Array 泛型
const array1: Array<number> = [1, 3, 5];
// 2. 使用元素的類型加 []。（更常見）
const array2: Number[] = [2, 4, 6];

// 案例：
const sum = (...numbers: number[]) => {
  return numbers.reduce((previous, current) => previous + current, 0);
};

const newNumber = sum(1, 3, 5);

// -----------------------------------------

/** 元組（Tuple）
 * 明確元素數量及每個元素類型的數組
 */
const tuple: [number, string] = [26, "hyoryu"];
const [age, userName] = tuple;

// ES2017 語法，以元組的方式獲取對象中的鍵值對
const tupleItem = Object.entries({ foo: 123, bar: 456 });
// console.log("entries", tupleItem); // [['foo', 123], ['bar', 567]]

// -----------------------------------------

/** 枚舉（Enum）
 * 枚舉編譯後會存在於運行時
 * （一個雙向的鍵值對對象，即可以通過鍵獲取值，也可以通過值獲取鍵）
 */
enum ReadStatus1 {
  NotStart = 0,
  Reading = 1,
  ReadOver = 2,
}

/**
 * 枚舉中的成員可以不指定值，默認從 0 開始累加。
 * 如果爲其中的某個成員指定了值，則後續成員在此基础上累加。
 * 值可以是字符串，但因其不可累加，成員必須全部手動賦值。
 */
enum ReadStatus2 {
  NotStart = 6,
  Reading,
  ReadOver,
}

// 定義常量枚舉可以使其不被編譯到運行時代碼中
const enum READ_STATUS {
  NOT_START,
  READING,
  READOVER,
}

const lightNovel = {
  title: "精霊幻想記",
  character: "小老師",
  readStatus: ReadStatus1.Reading,
};

// -----------------------------------------

/** 函數的類型約束 */
// 函數聲明
// 這裏的 string 爲返回值類型
function function1(a: number, b?: number): string {
  return "function1";
}

// 函數表逹式
const function2 = (a: number, b: number): string => {
  return "function2";
};

const function3: (a: number, b: number) => string = (
  a: number,
  b: number
): string => {
  return "function3";
};

// -----------------------------------------

/** 類型斷言 */
// 假定 numbers 來自於一個明確的接口
const numbers = [1, 2, 3];
// 如果不進行類型斷言，TypeScript 並不知道是否能找到一個值
const target = numbers.find((number) => number > 0);
// 則會報語法錯誤
// const square = target * target; // const target: number | undefined

// 進行斷言
const number1 = target as number;
// const number2 = <number>target; // 這種寫法在 JSX 中會和標簽衝突

// -----------------------------------------

/** 接口：用來約束對象的結構，並不會被編譯到實際的運行代碼中。 */
interface Socks {
  [key: string]: ThighHighs;
}

interface ThighHighs {
  name: string;
  readonly color: string; // 衹讀成員：定義後就不可修改
  denier: string;
  length: string;
  material?: string; // 加問號表示可選成員
}

const whiteThighHighs: ThighHighs = {
  name: "白絲",
  color: "white",
  denier: "120D",
  length: "90cm",
};

const socks: Socks = {};
socks.whiteThighHighs = whiteThighHighs;

// -----------------------------------------

/** 類 */
class Socks2 {
  // 聲明屬性，ES7（2016）語法
  public type: string;
  public color: string = "white"; // 可以賦初始值
  /**
   * 訪問修飾符
   * - private: 衹能在類中使用，外部（用該類新建的實例）無法訪問
   * - public: 默認值
   * - protected: 和 private 的區别在於子類可以訪問
   */
  private owner: string = "loli";
  // 衹讀屬性
  public readonly length: string = "90cm";

  constructor(type: string, color: string) {
    this.type = type;
    this.color = color; // 不能動態添加屬性，必須聲明
  }
}

// -----------------------------------------

/** 類與接口 */
interface WearSocks {
  // 注意接口不要做方法的具體實現
  wearSocks(socks: string): void;
}

interface TakeOffSocks {
  takeOffSocks(socks: string): void;
}

/**
 * 抽象類
 * - 衹能被繼承，無法創建實例
 */
abstract class Gril {
  wearSkirt(skirt: string): void {
    console.log(`wear ${skirt}`);
  }

  // 抽象方法
  abstract takeOffSkirt(skirt: string): void;
}

class Loli extends Gril implements WearSocks, TakeOffSocks {
  wearSocks(socks: string): void {
    console.log(`loli wear ${socks}`);
  }

  takeOffSocks(socks: string): void {
    console.log(`loli take off her ${socks}`);
  }

  // 子類必須實現抽象父類中的抽象方法
  takeOffSkirt(skirt: string): void {
    console.log(`loli take off her ${skirt}`);
  }
}

class JK implements WearSocks, TakeOffSocks {
  wearSocks(socks: string): void {
    console.log(`JK wear ${socks}`);
  }

  takeOffSocks(socks: string): void {
    console.log(`JK take off her ${socks}`);
  }
}

// -----------------------------------------

/**
 * 泛型
 * - 定義函數、接口、類時不指定具體的類型，在調用時指定
 */
// 聲明式爲： function getLoliSocks<T>(loli: T): string {}
const getLoliSocks = <T>(loli: T): string => {
  const socks = new Socks2("thighhighs", "white");
  return `${loli}'s socks is ${socks}`;
};

const result = getLoliSocks<Loli>(new Loli());

// -----------------------------------------

/** 類型聲明 */
// 有些 npm 模块並不是 TypeScript 寫的
import { ref } from "vue";

// declare function ref(value: Socks2): object;

const pantyhose = ref(new Socks2("pantyhose", "white"));

// -----------------------------------------
</script>

<template>
  <div id="StudyTypeScript" style="display: flex;">
    <section class="card">
      <h3>Socks</h3>

      <div v-for="(value, key, index) in socks.whiteThighHighs" :key="index">
        {{ key }} : {{ value }}
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Common Style */
.under-item {
  margin: 10px 0 0;
}

.card {
  border: 1px solid #000;
  margin: 10px 0 0 10px;
  padding: 10px;
}
</style>
