var san = require('./node_modules/san/dist/san.js');

var style_control = san.defineComponent ({
    tempalte: `
    <div>
        <div on-click="styleChange(index)" style="background:{{color[active]}}; width: 100px; height: 100px; margin:0 auto;"></div>
        <div on-click="classChange(index)" class="{{color[active2]}}"></div>
    </div>
    `,

    initData: {
        return: {
            active: 0,
            active2: 0,
            color: ['black', 'yellow', 'green', 'Red']
        }
    },

    filter: {

    },

    styleChange: function (index){
        index ++;
        if(index > this.data.raw.backgroundColor.length){
            index = 0
        };
        this.data.set('active', index);
    },

    classChange: function(index){
        index ++ ;
        if (index > this.data.raw.backgroundColor.length){
            index = 0
        };
        this.data.set('active2', index)
    }
});

var sc = new style_control();
sc.attach(document.body);