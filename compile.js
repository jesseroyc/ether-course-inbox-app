const path = require('path'); //builds path from compile to inbox.sol
const fs = require('fs');     //makes this project more cross-platform
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];