import { flatten } from "ramda";

class CGOL {
  // 状態
  private _state: Int8Array[];
  // 高さ
  private _height: number;
  // 幅
  private _width: number;
  // 世代
  private _gen: number;

  constructor(state: Int8Array[], gen: number) {
    this._state = state;
    this._height = state.length;
    this._width = state[0].length;
    this._gen = gen;
  }

  private north(y: number) {
    return y > 0 ? y - 1 : this._height - 1;
  }
  private sorth(y: number) {
    return (y + 1) % this._height;
  }
  private west(x: number) {
    return x > 0 ? x - 1 : this._width - 1;
  }
  private east(x: number) {
    return (x + 1) % this._width;
  }

  generate(): CGOL {
    const nextState: Int8Array[] = [];
    for (let y = 0; y < this._height; y++) {
      const nextColumn = new Int8Array(this._width);
      for (let x = 0; x < this._width; x++) {
        // 自分と近傍のセルの状態を取得
        // c: center (自分自身)
        // nw: north west, ne: north east, c: center ...
        const nw = this._state[this.north(y)][this.west(x)];
        const n = this._state[this.north(y)][x];
        const ne = this._state[this.north(y)][this.east(x)];
        const w = this._state[y][this.west(x)];
        const c = this._state[y][x];
        const e = this._state[y][this.east(x)];
        const sw = this._state[this.sorth(y)][this.west(x)];
        const s = this._state[this.sorth(y)][x];
        const se = this._state[this.sorth(y)][this.east(x)];
        const neighborCellSum = nw + n + ne + w + e + sw + s + se;
        if (c === 0 && neighborCellSum === 3) {
          nextColumn[x] = 1;
        } else if (
          c === 1 &&
          (neighborCellSum === 2 || neighborCellSum === 3)
        ) {
          nextColumn[x] = 1;
        } else {
          nextColumn[x] = 0;
        }
      }
      nextState[y] = nextColumn;
    }

    // 最後に入れ替え
    this._state = nextState;

    // 世代を更新
    this._gen++;

    return new CGOL(this._state, this._gen);
  }

  get state(): Int8Array[] {
    return this._state;
  }

  get gen(): number {
    return this._gen;
  }
}
export type { CGOL };

const updateState = (width: number, height: number, pattern?: number[][]) => {
  const state: Int8Array[] = [];
  const atRandom = (column: number[]) => {
    for (let j = 0; j < width; j++) {
      column.push(Math.floor(Math.random() * 2));
    }
  };
  const withPattern = (patternColumn: number[], column: number[]) => {
    for (let j = 0; j < width; j++) {
      column.push(patternColumn ? (patternColumn[j] ? 1 : 0) : 0);
    }
  };
  for (let i = 0; i < height; i++) {
    const column: number[] = [];
    pattern ? withPattern(pattern[i], column) : atRandom(column);
    state.push(new Int8Array(column));
  }
  return state;
};

const stillLifes = {
  block: [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  "bee-hive": [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  load: [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  boat: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  tub: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};
type StillLifes = keyof typeof stillLifes;
export const keyOfStillLifes = Object.keys(stillLifes) as StillLifes[];

const others = {
  static: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  ],
  oscillator: [
    [1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0],
  ],
  grider: [
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 1, 1],
  ],
  "grider-gun": [
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    ],
    [
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
  ],
};
type Others = keyof typeof others | "random";
export const keyOfOthers = [...Object.keys(others), "random"] as Others[];

export type Pattern = Others | StillLifes;
export const patterns = flatten([keyOfStillLifes, keyOfOthers]);
// export const patterns = [
//   "block",
//   "bee-hive",
//   "load",
//   "boat",
//   "tub",
//   "static",
//   "oscillator",
//   "grider",
//   "grider-gun",
//   "random",
// ] as const;

const patternState = {
  "still-lifes": stillLifes,
  // oscillators: {},
  // spaceships: {},
  others: others,
};
export const keyOfPatternState = Object.keys(patternState);

export const create = (
  width: number,
  height: number,
  pattern: Pattern
): CGOL => {
  let _patternState: number[][] | undefined = undefined;

  switch (pattern) {
    case "block":
    case "bee-hive":
    case "load":
    case "boat":
    case "tub": {
      _patternState = patternState["still-lifes"][pattern];
      break;
    }
    case "static":
    case "oscillator":
    case "grider":
    case "grider-gun": {
      _patternState = patternState.others[pattern];
      break;
    }
    case "random":
    default: {
      break;
    }
  }
  return new CGOL(updateState(width, height, _patternState), 1);
};
