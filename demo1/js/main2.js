

console.log('main2.js');

require.ensure(['./plugins/a.js'], function(require) {
  var aModule = require('./plugins/a.js');
}, 'a');