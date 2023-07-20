let vm = Vue.createApp({
  data() {
    return {
      message: "Hello Vue",
    };
  },
  beforeCreate() {
    console.log("beforeCreate() funtion is called!", this.message);
  },
  created() {
    console.log("create() function is called!", this.message);
  },
  beforeMount() {
    console.log("beforeMount() function is called!", this.$el);
  },
  mounted() {
    console.log("mounted() function is called", this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate() function is called!");
  },
  updated() {
    console.log("updated() function is called!");
  },
  beforeUnmount() {
    console.log("beforeUmount() is called!");
  },
  unmounted() {
    console.log("unmounted() function is called!");
  },
});

vm.mount("#app");
