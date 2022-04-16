import { zipObj } from "ramda";
import {
  keyOfInfiniteGrowthes,
  infiniteGrowthes,
  InfiniteGrowth,
} from "./InfiniteGrowthes";
import { keyOfMethuselahs, methuselahs, Methuselah } from "./Methuselahs";
import { keyOfOscillators, oscillators, Oscillator } from "./Oscillators";
import { keyOfSpaceShips, spaceShips, SpaceShip } from "./SpaceShips";
import { keyOfStillLifes, stillLifes, StillLife } from "./StillLifes";

export type Pattern =
  | StillLife
  | Oscillator
  | SpaceShip
  | InfiniteGrowth
  | Methuselah
  | "random";

export const keyOfPatternGroup = zipObj(
  [
    "still-lifes",
    "oscillators",
    "space-ships",
    "infinite-growthes",
    "methuselahs",
    "others",
  ],
  [
    keyOfStillLifes,
    keyOfOscillators,
    keyOfSpaceShips,
    keyOfInfiniteGrowthes,
    keyOfMethuselahs,
    ["random"],
  ]
);

export const switchPattern = (pattern: Pattern) => {
  const includes = (keys: string[]) => keys.includes(pattern);
  switch (true) {
    case includes(keyOfStillLifes): {
      return stillLifes[pattern as StillLife];
    }
    case includes(keyOfOscillators): {
      return oscillators[pattern as Oscillator];
    }
    case includes(keyOfSpaceShips): {
      return spaceShips[pattern as SpaceShip];
    }
    case includes(keyOfInfiniteGrowthes): {
      return infiniteGrowthes[pattern as InfiniteGrowth];
    }
    case includes(keyOfMethuselahs): {
      return methuselahs[pattern as Methuselah];
    }
    default: {
      return undefined;
    }
  }
};
