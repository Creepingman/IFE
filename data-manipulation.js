/*
* @Author: creepingman
* @Date:   2018-04-27 17:07:26
* @Last Modified by:   creepingman
* @Last Modified time: 2018-04-28 00:08:51
*/
var san = require('./node_modules/san/dist/san.js');

var DataMani = san.defineComponent({
	template: '<div>'
		+'	<input type="text" value= "{= user.name =}" placeholder="please sign your name here"></br>'
		+'	<input type="text" value= "{= user.age =}" placeholder="please tell me your age"></br>'
		+'	<input type="text" value= "{= user.des =}" placeholder="pls introduce yourself a bit"></br>'
		+'	<input type="button" class="button" value="Del message below" on-click="toggle"></br>'
		/* Employ element-'span' to add additional effects for the program */
		+'	<p>name: <span style= "text-decoration: underline">{{= user.name =}}</span></p>'
		+'	<p>Age: <span style= "text-decoration: underline">{{= user.age =}}</span></p>'
		+'	<p>Description: <span style= "text-decoration: underline">{{= user.des =}}</span></p>'
		+'	</div>',

			            /* Bad version */
	/* Initial letter should be capitalized to define the data type */
	/*initData: {
		return: {
			name: String,
			age: Number,
			des: String
		}
	},*/

	// better version (reference: https://github.com/Creepingman/IFE/blob/master/data-manipulation.js)
	initData: function() {
		return {
			user: {
				name: '',
				age: null,
				des: ''
			}
		}
	},

	/* pls pay more attention on the punctuation mark whenever to coding */
	toggle: function(){
		this.data.set('user', {name: '', age: null, des: ''})
	}
});

var dm = new DataMani();
dm.attach(document.body);