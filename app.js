const vm = Vue.createApp({
    data(){
        return {
            firstName: "John",
            lastName: "Doe",
            url: "https://www.google.com",
            raw_html: '<a href="https://google.com" target="_blank">Google</a>'
        }
    },
    methods: {
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
});

vm.mount('#app')

// setTimeout(() => {
//     vm.firstName = "Ali"
// }, 3000);