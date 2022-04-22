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

export type PatternState = (length: number, i: number) => Cell[];
export type RandomPatternState = (length: number) => Cell[];

export const withPatternState: (pattern: Cell[][]) => PatternState =
  (pattern) => (length, i) => {
    const column: Cell[] = [];
    for (let j = 0; j < length; j++) {
      column.push(pattern[i] && pattern[i][j] ? 1 : 0);
    }
    return column;
  };

export const withRandomPatternState: (density: Density) => RandomPatternState =
  (density) => (length) => {
    const column: Cell[] = [];
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
      return withPatternState(stillLifes[pattern as StillLife] as Cell[][]);
    }
    case includes(keyOfOscillators): {
      return withPatternState(oscillators[pattern as Oscillator] as Cell[][]);
    }
    case includes(keyOfSpaceShips): {
      return withPatternState(spaceShips[pattern as SpaceShip] as Cell[][]);
    }
    case includes(keyOfInfiniteGrowthes): {
      return withPatternState(
        infiniteGrowthes[pattern as InfiniteGrowth] as Cell[][]
      );
    }
    case includes(keyOfMethuselahs): {
      return withPatternState(methuselahs[pattern as Methuselah] as Cell[][]);
    }
    case includes(keyOfRandoms): {
      return withRandomPatternState(randoms[pattern as Random] as Density);
    }
    default: {
      return withRandomPatternState(randoms["random 0.5"]);
    }
  }
};
