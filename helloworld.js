/*
* @Author: Creepingman
* @Date:   2018-04-27 15:49:17
* @Last Modified by:   Creepingman
* @Last Modified time: 2018-04-27 16:27:48
*/
var san = require('./node_modules/san/dist/san.js');

var MyApp = san.defineComponent({
	template: '<p>Roy {{firstName}}:</p>',
	initData: function(){
		return {
			/*赋值等式中间用'：'号*/
			firstName : 'Zhang'
		};
	}
});

/*记得在前面加‘new’*/
var myApp = new MyApp();
myApp.attach(document.body);