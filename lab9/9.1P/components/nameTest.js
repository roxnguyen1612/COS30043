const NameTest = {
    data: function() {
        return {
            strName: ""
        }
    },
    template: `
    <div>
        <h1>Name Test</h1>
        <p>
            Please enter your name: <input type="text" v-model="strName">
        </p>
    </div>
    <br><br>
    <div v-show="strName.toLowerCase() == 'rox'">
            <p>Awesome name!</p>
    </div>
    <div v-show="strName.toLowerCase() != 'rox'">
            <p>{{strName}} is not my name!</p>
    </div>
    `
}