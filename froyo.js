// create prompt
const froyoFlavors = prompt(  "Please enter a lits of comma separated froyo flavors- without spaces.",  );

let flavorNoSpaces = '';

for (let i = 0; i < froyoFlavors.length; i++) {
  if (froyoFlavors[i] !== ' ') {
    flavorNoSpaces += froyoFlavors[i];
  }
}

const flavorArray = [];
let flavor = '';

for (let i = 0; i < flavorNoSpaces.length; i++) {
  const char = flavorNoSpaces[i];
  if (char === ',') {
    flavorArray.push(flavor);
    flavor = '';
  } else {
    flavor += char;
  }
}
if (flavor) {
  flavorArray.push(flavor);
}

const flavorCount = {};
for (let i = 0; i < flavorArray.length; i++) {
  const currentFlavor = flavorArray[i];

  if (flavorCount[currentFlavor]) {
    flavorCount[currentFlavor]++;
  } else {
    flavorCount[currentFlavor] = 1
  }
}

console.table(flavorCount);

//update flavors as needed.