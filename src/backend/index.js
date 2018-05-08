/*!
governify-cli 0.0.5, built on: 2018-05-08
Copyright (C) 2018 ISA group
http://www.isa.us.es/
https://github.com/isa-group/governify-cli

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.*/

'use strict'
const program = require('commander')
const test = require('./lib/test')
const cli = require('./lib/cli')

program.version('0.0.4')
if (process.argv.length === 2) {
  cli()
}

program
  .command('test')
  .description('read test from file')
  .on('--help', function () {
    console.log('  Examples:')
    console.log('')
    console.log('   - Read from file')
    console.log('    $ gov test --readFromFile /home/isa/lab/parallel-requests/src/configurations/config-exec.yaml')
    console.log('')
    console.log('   - Limit tests')
    console.log('    $ gov test --timeResquests -u http://google.es -c 5 -d 2 -m GET')
    console.log('')
    console.log('   - Infinite tests')
    console.log('    $ gov test --infiniteRequests -u http://google.es -c 5  -m GET')
    console.log('')
  })
  .option('-r, --readFromFile', 'Option for reading file of tests')
  .option('-t, --timeResquests', 'Option for testing with limit tests')
  .option('-i, --infiniteRequests', 'Option for testing infinite times')
  .option('-p, --path <directory>', 'put the filepath')
  .option('-c, --count <count>', 'put the count')
  .option('-u, --url <url>', 'put the url')
  .option('-d, --duration <duration>', 'put the duration')
  .option('-m, --method <method>', 'put the method')
  .option('-b, --body <body>', 'put the body')
  .action(test)

program
  .command('cli')
  .description('enter cli mode')
  .action(cli)

program.command('').action(function () {
  program.outputHelp()
})

program.parse(process.argv)

module.exports = program

// node command.js readFile /home/quique/lab/parallel-requests/src/configurations/config-exec.yaml

// node command.js timeResquests -u http://google.es -c 5 -d 2 -m GET
// node command.js infiniteRequests -u http://google.es -c 5  -m GET
