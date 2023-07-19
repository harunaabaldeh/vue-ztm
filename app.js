const vm = Vue.createApp({
    data(){
        return {
            firstName: "John",
            middleName: "",
            lastName: "Mikel",
            url: "https://www.google.com",
            raw_html: '<a href="https://google.com" target="_blank">Google</a>',
            age: 50,
        }
    },
    methods: {
        increaseAge(){
            this.age += 10;
        },
        decreaseAge(){
            this.age--;
        },
        updateLastName(msg, e){
            console.log(msg)
            this.lastName = e.target.value;
        },
        updateMiddleName(e){
            this.middleName = e.target.value
        }
    },
    computed: {
        fullName(){
            console.log('computed property was called!');
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        }
    },
    wtach: {
        age(newVal, oldVal){
            setTimeout(() => {
                this.age = 20;
            }, 3000)
        }
    }
});

vm.mount('#app')

// setTimeout(() => {
//     vm.firstName = "Ali"
// }, 3000);