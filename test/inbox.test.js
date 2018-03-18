const assert = require('assert');
const ganache = require('ganache-cli'); //local test-net
const Web3 = require('web3'); //note that the variable is not camel case, its a class

/* Web3 has two diffrent versions floating around
    v0.x.x primitive interface, no promises uglyier looking code
    (Ideal) v1.x.x supports promises and asynch/await
*/

/* |Ganache| -> |Provider| ()web3 <- |Web3|
   |Ganache| -> (|Provider|)web3 <- |Web3|
    think of provider as a comm device cell phone
*/

const web3 = new Web3(ganache.provider());

/* Mocha test dev cycle
                  (before each)          (it)                    (it)
  Mocha Start -> Deploy New Contract -> Manipulate Contract -> Make Assertion For Contract
                    ^________________________________________________|
*/

/* FINALLY note that ganache makes accounts for us!*/

/* Web3 is used to access unlocked accounts on a "Ganache Local Test Network*/

beforeEach(() => {
   // Get a list of all accounts
   web3.eth.getAccounts() // Returns a promise
     .then(fetchedAccounts => {
         console.log(fetchedAccounts);
     });
   
   // Use one of those accounts to deploy contract
});

describe('Inbox', () => {
    it("deploys a contract", () => {
        
    });
})