'use strict';

const globalScope = (typeof WorkerNavigator !== 'undefined' ? WorkerNavigator : global);
const Assert = globalScope.Assert = require('chai').assert;
const Submission = require('../solution/hof');

describe('repeat', () => {

  it('Debería exportar una función', () => {
    Assert.equal(typeof Submission, 'function');
  });

  it('Debería invocar la operación num veces', () => {

    let count = 0;
    Submission( _ => count++, 3);
    Assert.equal(count, 3);
  });

});
