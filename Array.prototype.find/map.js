const fs = require("fs");

const jsonContent = fs.readFileSync("./persons.json", "utf8");
const data = JSON.parse(jsonContent);

const result = data.map(({ first_name, last_name, ...person }) => ({
  fullName: `${first_name} ${last_name}`,
  ...person,
}));

fs.writeFileSync("persons2.json", JSON.stringify(result, null, 2));
console.log(result);
