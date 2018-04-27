/*
* @Author: creepingman
* @Date:   2018-04-27 17:07:26
* @Last Modified by:   creepingman
* @Last Modified time: 2018-04-27 23:10:26
*/
var san = require('./node_modules/san/dist/san.js');

var DataMani = san.defineComponent({
	template: '<div>'
		+'	<input type="text" value= "{= name =}" placeholder="please sign your name here"></br>'
		+'	<input type="text" value= "{= age =}" placeholder="please tell me your age"></br>'
		+'	<input type="text" value= "{= des =}" placeholder="pls introduce yourself a bit"></br>'
		+'	<input type="button" class="button" value="Del message below" on-click="toggle"></br>'
		+'	<p>name: {{= name =}}</p>'
		+'	<p>Age: {{= age =}}</p>'
		+'	<p>Description: {{= des =}}</p>'
		+'	</div>',

	/* Initial letter should be capitalized to define the data type */
	initData: {
		return: {
			name: String,
			age: Number,
			des: String
		}
	},

	/* pls pay more attention on the punctuation mark whenever to coding */
	toggle: function(){
		this.data.set('name', '');
		this.data.set('age', '');
		this.data.set('des', '');
	}
});

var dm = new DataMani();
dm.attach(document.body);