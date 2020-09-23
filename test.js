const getRndInteger = () => {
  return Math.round(Math.random().toFixed(5) * 1000);
};

let newKeyList = [0, 1, 2, 3];

let newKey = 2;
let differentNumber = 15;

let filter = newKeyList.filter((key) => key === newKey);

while (newKeyList.includes(newKey)) {
  newKey = differentNumber;
}

newKeyList.push(newKey);

console.log(newKeyList);
