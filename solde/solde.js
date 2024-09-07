const fs = require("fs");
const string = fs.readFileSync("./soldes.json", "utf8");
const data = JSON.parse(string);
const solde2 = data.find((solde) => solde.name === "Solde 2");
solde2.solde += 500;
fs.writeFileSync("soldes.json", JSON.stringify(data, null, 2));
