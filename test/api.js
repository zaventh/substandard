var substandard = require('../');
var test = require('tape');

test('api usage', function (t) {
	t.plan(3);
	substandard.lintFiles([], { cwd: 'bin' }, function (err, result) {
		t.error(err, 'no error while linting');
		t.equal(typeof result, 'object', 'result is an object');
		t.equal(result.errorCount, 0, 'error count 0');
	});
});
