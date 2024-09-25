const ganache = require("ganache"); // Ganache holds a local testnetwork, Ganache automatically generate some no of accounts, We can send transaction to this network, deploy
// The important thing abut ganache is that it always automatically completes our processes transaction almost instantaneously
const { Web3 } = require("web3"); // This is our portal to the ethereum world
// web3 library always has to be given a provider. The provider instructs web3 what network is connecting to and also contain some information about the different accounts available to web3
const assert = require("assert");
const { interface, bytecode } = require("../compile");
// Interface :- interface is our API, it is the translation layer that communicates data form the network over to the javascript world
// bytecode :- Bytecode is our compiled Network
// Why is Spell The Web3 with a capital W? :- because we are importing a class from the web3 library and classes are usually capitalized in JavaScript (convention)
const web3 = new Web3(ganache.provider());
// updated ganache and web3 imports added for convenience

let accounts;
let inbox;
// contract test code will go here
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // To deploy a contract, we need to get access to contract bytecode that is in the compile.js file
  // To deploy a contract, we need to do the following:
  // 1. Compile the contract
  // 2. Deploy the contract
  // 3. Use the contract

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    // console.log(inbox.options.address);
    assert.ok(inbox.options.address);
  });

  it("has a default message", async () => {
    const message = await inbox.methods.message().call(); // Calling a function is a read only instantaneous operation
    assert.equal(message, "Hi there!");
  });

  it("can change the message", async () => {
    await inbox.methods.setMessage("bye").send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, "bye");
  });
});
