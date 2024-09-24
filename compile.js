// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");

// Get the path of the contract file
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
// Read the contract file
const source = fs.readFileSync(inboxPath, "utf8");

// Compile the contract
// Here we are compiling the contract and exporting it
// The 1 is the number of contracts we are compiling
// module.exports = solc.compile(source, 1);
module.exports = solc.compile(source, 1).contracts[":Inbox"];
