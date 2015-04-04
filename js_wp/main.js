// sync, had to change the syntx from requirejs to nodejs TODO learn why
var myModule = require('myModule');
myModule.init();

// async, this works as expected TODO: try on event
require(['asyncModule'], function(asyncModule){});
