import {myModule} from './myModule';
import $ from 'jquery';
myModule.init();

// async, this works as expected 
//$('body').on('click', function(){
	System.import('./js_wp/asyncModule').then(function(){
		console.log("after async");
	});
//});



