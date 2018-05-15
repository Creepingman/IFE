var san = require('./node_modules/san/dist/san.js');

var Condition_loops = san.defineComponent({
    template:`<div>
        <input type="text" placeholder="Pls type your name here" value="{=user.name=}" required="required"><br>
        <button on-click="submit">Submit</button>
        <table border="2">
            <thead>
                <tr>
                    <td>Name</td><td>State</td><td>To Do</td>
                </tr>
            </thead>
            <tbody>
                <!--  the line below is to distinct a new data collection with the old version -->
                <tr s-for="p,index in users">
                    <td>{{p.name}}</td>
                    <td>{{p.state}}</td>
                    <td>
                        <!-- if the attribute of elment-u.checked turns to True, then this line will disappear -->
                        <button s-if="!p.checked" on-click="mark(index,p.mark)" class="btn">Mark</button>
                        <!-- index can be used as a cue to locate a certain data -->
                        <button s-else on-click="delete(index)" class="btn">Delete</button>
                    </td>
                    <td s-if="!p.checked">
                        <select value="{= p.mark =}" >
                          <option value ="Fail">Fail</option>
                          <option value ="Pass">Pass</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>`,

    initData:function(){
        return{
            users:[],
            user:{
                name: "",
                state: "Pending",
                checked: false,
                mark: "Fail"
            },   
        }
    },

    submit: function() {
        /* u in this line is to define where the data stems from */
        let p=this.data.get("user");
        /* this is kind of tricky, a good combination of get and push */
        this.data.push("users",p);
    },

    delete: function(index) {
        /* index now assure function removing the right collection */
        this.data.removeAt("users",index);
    },

    mark: function(index,mark) {
        /* to hide the button of 'Pend' */
        this.data.set("users["+index+"].checked", true);
        // to mark someone you typed into and replace the value in 'state'
        this.data.set("users["+index+"].state", mark);
    },
});

var cl = new Condition_loops();
cl.attach(document.body);