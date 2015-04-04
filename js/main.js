require([
	'myModule',
], function(
	myModule
){

	myModule.init();

	require(['asyncModule']);

});