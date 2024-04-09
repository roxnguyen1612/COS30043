const app = Vue.createApp({})
//populate menu with a variable
app.component('mymenu',
    {
        props: ['menu'], //defining the props
        template:
            `
        <ul>
            <li v-for="m in menu" :key="index">
                {{ m }} 
            </li>
        </ul>
        `,
        //defining template for the menu list
    }
);
app.mount('#app')
