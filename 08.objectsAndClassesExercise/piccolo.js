function solve(arr) {
  let parking = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let [status, car] = arr[i].split(", ");
    if (status === "IN") {
      parking[car] = "IN";
    } else {
      parking[car] = "OUT";
    }
  }
  Object.entries(parking);
  parking = Object.entries(parking).filter(([carNumber, parkingStatus]) => {
    if (parkingStatus === "IN") {
      result.push(carNumber);
    }
  });

  if (result.length > 0) {
    result.sort((a, b) => a.localeCompare(b)).forEach((x) => console.log(x));
  } else {
    console.log(`Parking Lot is Empty`);
  }
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  ", CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

// solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
