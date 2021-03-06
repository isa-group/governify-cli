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

var expect = require('chai').expect
var program = require('../../src/backend')

/*
 * USE MOCHA AND CHAI for testing your code
 */
describe('Can be executed command', function () {
  this.timeout(10000)
  it('Execute', (done) => {
    // program.runWith('--help');
    try {
      program.parse(['test', '-u', 'https://www.google.es'])
      expect(true)
    } catch (e) {
      expect(false)
    }
    done()
  })
})
