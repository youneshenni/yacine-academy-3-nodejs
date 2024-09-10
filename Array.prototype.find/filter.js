const fs = require("fs");
const string = fs.readFileSync("persons.json", "utf8");
const data = JSON.parse(string);

const result = data.filter(({ gender }) => gender === "Male");

fs.writeFileSync("filteredPersons.json", JSON.stringify(result, null, 2));
