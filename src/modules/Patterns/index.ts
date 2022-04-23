import { zipObj } from "ramda";
import { guns } from "./Guns";
import { methuselahs } from "./Methuselahs";
import { oscillators } from "./Oscillators";
import { Density, randoms } from "./Randoms";
import { spaceShips } from "./SpaceShips";
import { stillLifes } from "./StillLifes";

type Gun = keyof typeof guns;
type Methuselah = keyof typeof methuselahs;
type Oscillator = keyof typeof oscillators;
type Random = keyof typeof randoms;
type SpaceShip = keyof typeof spaceShips;
type StillLife = keyof typeof stillLifes;

const keyOfGuns = Object.keys(guns).sort();
const keyOfMethuselahs = Object.keys(methuselahs).sort();
const keyOfOscillators = Object.keys(oscillators).sort();
const keyOfRandoms = Object.keys(randoms).sort();
const keyOfSpaceShips = Object.keys(spaceShips).sort();
const keyOfStillLifes = Object.keys(stillLifes).sort();

export type Pattern =
  | Random
  | StillLife
  | Oscillator
  | SpaceShip
  | Gun
  | Methuselah;

export const keyOfPatternGroup = zipObj(
  [
    "randoms",
    "still-lifes",
    "oscillators",
    "space-ships",
    "gun",
    "methuselahs",
  ],
  [
    keyOfRandoms,
    keyOfStillLifes,
    keyOfOscillators,
    keyOfSpaceShips,
    keyOfGuns,
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
    case includes(keyOfGuns): {
      return withPatternState(guns[pattern as Gun] as Cell[][]);
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
