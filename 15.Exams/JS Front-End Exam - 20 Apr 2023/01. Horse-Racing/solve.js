function solve(input) {
  const horses = input.shift().split("|");

  const commands = {
    Retake: (overtakingHorse, overtakenHorse) => {
      let indexOvertakingHorse = horses.indexOf(overtakingHorse);
      let indexOvertakenHorse = horses.indexOf(overtakenHorse);
      if (indexOvertakingHorse < indexOvertakenHorse) {
        horses[indexOvertakenHorse] = overtakingHorse;
        horses[indexOvertakingHorse] = overtakenHorse;
        console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
      }
    },
    Trouble: (horseName) => {
      let horseIndex = horses.indexOf(horseName);
      if (horseIndex > 0) {
        horses.splice(horseIndex, 1);
        horses.splice(horseIndex - 1, 0, horseName);
        console.log(`Trouble for ${horseName} - drops one position.`);
      }
    },

    Rage: (horseName) => {
      let first = horses.length - 1;
      let horseIndex = horses.indexOf(horseName);

      if (horseIndex === first) {
      } else if (horseIndex === first - 1) {
        horses.splice(horseIndex, 1);
        horses.splice(first, 0, horseName);
      } else {
        horses.splice(horseIndex, 1);
        horses.splice(horseIndex + 2, 0, horseName);
      }

      console.log(`${horseName} rages 2 positions ahead.`);
    },
    Miracle: (lastHorse) => {
      let first = horses.length - 1;
      horses.splice(0, 1);
      horses.splice(first, 0, lastHorse);

      console.log(`What a miracle - ${lastHorse} becomes first.`);
    },
  };

  let line = input.shift();

  while (line !== "Finish") {
    line = line.split(" ");

    const command = line.shift();
    commands[command](...line);
    line = input.shift();
  }

  console.log(horses.join("->"));
  console.log(`The winner is: ${horses[horses.length - 1]}`);
}

solve([
  "Bella|Alexia|Sugar",
  "Retake Alexia Sugar",
  "Rage Bella",
  "Trouble Bella",
  "Finish",
]);
solve(['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish'])
solve(['Fancy|Lilly',
  'Retake Lilly Fancy',
  'Trouble Lilly',
  'Trouble Lilly',
  'Finish',
  'Rage Lilly'])
