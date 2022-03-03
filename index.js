const yargs = require("yargs/yargs");
const { hideBin } = require('yargs/helpers')
const jwt = require('jsonwebtoken');

const argv = yargs(hideBin(process.argv)).argv

if (!argv.role || !argv.secret || !argv.issuer) {
  process.stdout.write('Missing role, issuer or secret\n')
  process.exit();
}

const token = jwt.sign({
  "role": argv.role,
  "iss": argv.issuer,
  "iat": Math.floor(new Date().getTime() / 1000),
  "exp": 4903804800
}, argv.secret);

process.stdout.write(`${token}\n`);