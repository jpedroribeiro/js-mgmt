import {myModule} from './myModule';
myModule.init();

// async, this works as expected 
$('body').on('click', function(){
	System.import('./js_jspm/asyncModule').then(function(myModule){
		myModule.asyncModule();
		console.log("after async");
	});
});



