const fs = require("fs");

const buffer = fs.readFileSync("persons.json");

const string = buffer.toString("utf-8");

const data = JSON.parse(string);

const result = data.map(({ first_name, last_name, ...rest }) => ({
  first_name,
  last_name,
  full_name: `${first_name} ${last_name}`,
  ...rest,
}));
console.log(result);
