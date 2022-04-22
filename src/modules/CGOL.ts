import {
  Cell as _Cell,
  isPatternState,
  Pattern as _Pattern,
  PatternState,
  RandomPatternState,
  switchPattern,
} from "./Patterns";
export { keyOfPatternGroup } from "./Patterns";

export type Cell = _Cell;
export type Pattern = _Pattern;
export type { CGOL };

class CGOL {
  // 状態
  private _state: Cell[][];
  // 高さ
  private _height: number;
  // 幅
  private _width: number;
  // 世代
  private _gen: number;

  constructor(state: Cell[][], gen: number) {
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
    const nextState: Cell[][] = [];
    for (let y = 0; y < this._height; y++) {
      const nextColumn = new Array<Cell>(this._width);
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

  get state(): Cell[][] {
    return this._state;
  }

  get gen(): number {
    return this._gen;
  }
}

const updateState = (
  width: number,
  height: number,
  pState: PatternState | RandomPatternState
) => {
  const state: Cell[][] = [];
  for (let i = 0; i < height; i++) {
    state.push(
      isPatternState(pState)
        ? pState(width, i)
        : (pState as RandomPatternState)(width)
    );
  }
  return state;
};

export const create = (
  width: number,
  height: number,
  pattern: Pattern
): CGOL => {
  return new CGOL(updateState(width, height, switchPattern(pattern)), 1);
};
