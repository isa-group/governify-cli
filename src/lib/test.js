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


'use strict';
const governifytester = require('governify-tester');
const chalk = require("chalk");



module.exports = (data) => {
    if (data.readFromFile) {
        if (!data.path) {
            console.error(make_red('--path required'));
            //process.exit(1);
        }else{
          governifytester.doParallelRequestFromfile(data.path);

        }




    } else if (data.timeResquests) {
        if (!data.url || !data.method || !data.count || !data.duration) {
            console.error(make_red('--count --url --duration and --method are required for this option'));
        }
        governifytester.doParallelRequestWithDuration(data.url, data.method, data.count, data.duration, data.body);

    } else if (data.infiniteRequests) {
        if (!data.url || !data.method || !data.count) {
          console.error(make_red('--count --url and --method are required for this option'));
        }
        governifytester.doRequests(data.url, data.method, data.count, data.body);

    }
};


function make_red(txt) {
    return chalk.red(txt); //display the help text in red on the console
}
