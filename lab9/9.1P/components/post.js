const PostApp = {
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
        <h1>Post Status</h1>
        <lable for="userInput">Status: </lable>
        <input type="text" id="userInput" v-model="strStatus">
        <button type="button" class="btn btn-success" v-on:click="add(strStratus)">Post</button>

        <h1>Status Updates</h1>
        <ul>
            <li v-for="(post, index) in statPosts" :key="index">
                {{ post }} 
                <button type="button" class="btn btn-warning" v-on:click="remove(index)">Delete</button>
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