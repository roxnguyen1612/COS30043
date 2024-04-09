const app = Vue.createApp({})
app.component('app-mypost', // indicating the component tag
    {
        // defining data to be used in the component
        data: function () {
            return {
                statPosts: [],
                strStatus: ''
            }
        },
        // define the template for the component
        template:
        // your code here
        `
        <div>
            <lable for="userInput">Status: </lable>
            <input type="text" id="userInput" v-model="strStatus">
            <button v-on:click="add(strStratus)">Post</button>

            <ul>
                <li v-for="(post, index) in statPosts" :key="index">
                    {{ post }} 
                    <button v-on:click="remove(index)">Delete</button>
                </li>
            </ul>
        </div>
        `,

        methods:
        {
            add: function (status) {
                //push status into statPosts array
                if (this.strStatus.trim() !== '') {
                    this.statPosts.push(this.strStatus);
                    this.strStatus = ''; // Clear input after adding
                }
            },
            remove: function (index) {
                //delete status from statPost using index
                this.statPosts.splice(index, 1);
            }
        }
    }
);
app.mount('#app')