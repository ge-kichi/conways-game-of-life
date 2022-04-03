// 型定義
export type Pattern = "random";
export type { CGOL };

class CGOL {
  // 状態
  private _state: Array<Int8Array>;
  // 高さ
  private _height: number;
  // 幅
  private _width: number;
  // 世代
  private _gen: number;

  constructor(state: Array<Int8Array>, gen: number) {
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
    const nextState: Array<Int8Array> = [];
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

  get state(): Array<Int8Array> {
    return this._state;
  }

  get gen(): number {
    return this._gen;
  }
}

export const create = (
  pattern: Pattern,
  width: number,
  height: number
): CGOL => {
  // 最初の状態を初期化
  const state: Array<Int8Array> = [];
  for (let i = 0; i < height; i++) {
    state.push(new Int8Array(width));
  }

  switch (pattern) {
    // ランダムver.
    case "random": {
      for (let i = 0; i < state.length; i++) {
        const column = state[i];
        for (let j = 0; j < column.length; j++) {
          column[j] = Math.floor(Math.random() * 2);
        }
      }
      break;
    }
  }
  return new CGOL(state, 1);
};
