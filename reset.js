const fs = require('fs');

if (fs.existsSync('./dist/company-roster.html')) {
  fs.unlinkSync('./dist/company-roster.html');
  console.log('/dist/ folder reset!');
}
