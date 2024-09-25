require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
//updated web3 and hdwallet-provider imports added for convenience

const { interface, bytecode } = require("./compile");
// deploy code will go here

const provider = new HDWalletProvider(
  process.env.MNEMONIC, // Use mnemonic from .env file
  process.env.INFURA_API // Use Infura API from .env file
);
const web3 = new Web3(provider);

// We need two asynchroneous calls:-
// 1. To get a list of all accounts
// 2. To deploy the contract

// A single mnemonic can generate multiple accounts
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface)) //
    .deploy({ data: bytecode, arguments: ["Hi there!"] }) //
    .send({ gas: "1000000", from: accounts[0] }); //
  console.log("Contract deployed to", result.options.address); // Contract deployed on which address
  provider.engine.stop(); // Stop the provider engine
};
deploy();
