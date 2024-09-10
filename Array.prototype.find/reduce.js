const fs = require("fs");

const string = fs.readFileSync("persons.json", "utf8");

const data = JSON.parse(string);

const result = data.reduce((acc, cur) => {
  return {
    ...acc,
    [cur.gender]: [...(acc[cur.gender] || []), cur].sort((a, b) =>
      a.first_name < b.first_name ? -1 : 1
    ),
  };
}, {});

const genders = Object.keys(result);
const sortedGenders = genders.sort();
const sortedResult = sortedGenders.reduce((acc, cur) => {
  return {
    ...acc,
    [cur]: result[cur],
  };
}, {});

console.log(sortedResult);
