const fs = require('fs');
console.log(fs.readFileSync('node_modules/@tanstack/react-start/api.d.ts', 'utf8').substring(0, 500));
