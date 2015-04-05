define([
	'./myModule'
], function(
	myModule
){
	myModule.init();
});

// async, this works as expected 
$('body').on('click', function(){
	require(['asyncModule'], function(asyncModule){
		console.log("after async");
	});
});

