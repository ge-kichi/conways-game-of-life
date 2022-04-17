import { zipObj } from "ramda";
import {
  keyOfInfiniteGrowthes,
  infiniteGrowthes,
  InfiniteGrowth,
} from "./InfiniteGrowthes";
import { keyOfMethuselahs, methuselahs, Methuselah } from "./Methuselahs";
import { keyOfOscillators, oscillators, Oscillator } from "./Oscillators";
import { Density, keyOfRandoms, randoms, Random } from "./Randoms";
import { keyOfSpaceShips, spaceShips, SpaceShip } from "./SpaceShips";
import { keyOfStillLifes, stillLifes, StillLife } from "./StillLifes";

export type Pattern =
  | Random
  | StillLife
  | Oscillator
  | SpaceShip
  | InfiniteGrowth
  | Methuselah;

export const keyOfPatternGroup = zipObj(
  [
    "randoms",
    "still-lifes",
    "oscillators",
    "space-ships",
    "infinite-growthes",
    "methuselahs",
    "others",
  ],
  [
    keyOfRandoms,
    keyOfStillLifes,
    keyOfOscillators,
    keyOfSpaceShips,
    keyOfInfiniteGrowthes,
    keyOfMethuselahs,
  ]
);

export type Cell = 0 | 1;
export type CellArray = Array<Cell>;

export type PatternState = (length: number, i: number) => CellArray;
export type RandomPatternState = (length: number) => CellArray;

export const withPatternState: (pattern: CellArray[]) => PatternState =
  (pattern) => (length, i) => {
    const column: CellArray = [];
    for (let j = 0; j < length; j++) {
      column.push(pattern[i] && pattern[i][j] ? 1 : 0);
    }
    return column;
  };

export const withRandomPatternState: (density: Density) => RandomPatternState =
  (density) => (length) => {
    const column: CellArray = [];
    for (let j = 0; j < length; j++) {
      column.push(Number(Math.random() < density) as Cell);
    }
    return column;
  };

// eslint-disable-next-line
export const isPatternState = (arg: any): arg is PatternState =>
  arg !== undefined;

export const switchPattern = (
  pattern: Pattern
): PatternState | RandomPatternState => {
  const includes = (keys: string[]) => keys.includes(pattern);
  switch (true) {
    case includes(keyOfStillLifes): {
      return withPatternState(stillLifes[pattern as StillLife] as CellArray[]);
    }
    case includes(keyOfOscillators): {
      return withPatternState(
        oscillators[pattern as Oscillator] as CellArray[]
      );
    }
    case includes(keyOfSpaceShips): {
      return withPatternState(spaceShips[pattern as SpaceShip] as CellArray[]);
    }
    case includes(keyOfInfiniteGrowthes): {
      return withPatternState(
        infiniteGrowthes[pattern as InfiniteGrowth] as CellArray[]
      );
    }
    case includes(keyOfMethuselahs): {
      return withPatternState(
        methuselahs[pattern as Methuselah] as CellArray[]
      );
    }
    case includes(keyOfRandoms): {
      return withRandomPatternState(randoms[pattern as Random] as Density);
    }
    default: {
      return withRandomPatternState(randoms["random 0.5"]);
    }
  }
};
