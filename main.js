const app = Vue.createApp({
    data(){
        return {
            'count': 0
        }
    },
    methods: {
        increment(){
            this.count += 1;
        },
        reset(){
            this.count = 0;
        }
    },
})

app.mount('#app')