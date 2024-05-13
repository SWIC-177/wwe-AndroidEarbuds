import { BELTS, CHAMPIONS } from "./src/data";

console.log(BELTS, CHAMPIONS);

const filteredChampions = CHAMPIONS.filter(
  (champion) => champion !== "Vacant Title",
);
const filteredBelts = BELTS.filter(
  (belt) =>
    belt !== "World Tag Team Champions" &&
    belt !== "SmackDown Tag Team Champions",
);
