const density = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9] as const;

export type Density = typeof density[number];
export const randoms = {
  "random 0.1": density[0],
  "random 0.2": density[1],
  "random 0.3": density[2],
  "random 0.4": density[3],
  "random 0.5": density[4],
  "random 0.6": density[5],
  "random 0.7": density[6],
  "random 0.8": density[7],
  "random 0.9": density[8],
};
export type Random = keyof typeof randoms;
export const keyOfRandoms = Object.keys(randoms).sort();
