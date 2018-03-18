const path = require('path'); //builds path from compile to inbox.sol
const fs = require('fs');     //makes this project more cross-platform
const solc = require('solc');

const inboxPath = path.resolve(_dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source, 1));