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

const tagTeamIndices = BELTS.reduce((acc, belt, index) => {
  if (belt.includes("Tag Team Champions")) acc.push(index);
  return acc;
}, []);

const filteredChampionsWithoutTagTeam = CHAMPIONS.filter(
  (champion, index) => !tagTeamIndices.includes(index),
);

const sortedChampions = filteredChampionsWithoutTagTeam.sort((a, b) => {
  const lastNameA = a.split(" ")[1];
  const lastNameB = b.split(" ")[1];
  return lastNameA.localeCompare(lastNameB);
});

const CHAMPIONSHIPS = sortedChampions.map((champion, index) => {
  return {
    title: filteredBelts[index],
    champion: champion,
  };
});

console.log(CHAMPIONSHIPS);
