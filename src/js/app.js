import Person from "./Person";
import Team from "./Team";

const player1 = new Person({
  name: "Bowy",
  type: "Bowman",
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const player2 = new Person({
  name: "Daemy",
  type: "Daemon",
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const player3 = new Person({
  name: "Magy",
  type: "Magician",
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const newTeam = new Team();

newTeam.add(player1);
newTeam.add(player2);
newTeam.add(player3);

for (const player of newTeam) {
  console.log(player);
}
