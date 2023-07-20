const vm = Vue.createApp({
    data(){
        return {
           birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
           people: [
            {name: 'Mike', age: 31},
            {name: "Che", age: 12},
            {name: "Haruna", age:26}
           ],
        }
    },
   
});

vm.mount('#app')
