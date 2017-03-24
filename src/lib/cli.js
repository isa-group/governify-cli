/*!
#!/usr/bin/env node
governify-cli 0.0.3, built on: 2017-03-24
Copyright (C) 2017 ISA group
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
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/


"use strict";

const cli = require('vorpal')();
const governifytester = require('governify-tester');
const chalk = require("chalk");
const exec = require('child_process').exec;



module.exports = function() {

    cli.command('testlimittime <url> <method> <count> <duration> [body]').action(function(data, cb) {
        governifytester.doParallelRequestWithDuration(data.url, data.method, data.count, data.duration, data.body).then(function() {
            cb();

        });
    });
    cli.command('testinfinite <url> <method> <count>  [body]').action(function(data, cb) {
        governifytester.doRequests(data.url, data.method, data.count, data.body).then(function() {
            cb();

        });
    });


    cli.command('testfromfile <path>')
        .action(function(args, cb) {
            governifytester.doParallelRequestFromfile(args.path).then(function() {
                cb();

            });
        });



    cli.command('ls [dir]').action(function(command, cb) {
        let char = command.dir ? " " + command.dir : "";
        exec('ls' + char, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ', error);
                cb(stderr);
            }
            cb(stdout);

        });
    });

    cli.command('mkdir [dir]').action(function(command, cb) {
        let char = command.dir ? " " + command.dir : "";
        exec('mkdir' + char, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ', error);
                cb(stderr);
            }
            cb(stdout);

        });
    });


    cli.command('pwd [dir]').action(function(command, cb) {
        let char = command.dir ? " " + command.dir : "";
        exec('pwd' + char, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ', error);
                cb(stderr);
            }
            cb(stdout);

        });
    });


    cli
        .delimiter(chalk.green('governify-cli$'))
        .show();


};
