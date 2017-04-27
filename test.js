var assert = require('assert');
var parseVersion = require('.');
parseVersion('2.5.6.7', function(err,version) {
    if(err) throw err;
    assert.deepEqual(version, { major: 2, minor: 5, patch: 6, build: 7 });
});
