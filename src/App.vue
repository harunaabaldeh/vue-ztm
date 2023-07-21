<template>
  <h3>Hey!</h3>
  <!-- call the kid component below -->
  <greeting :age="age" />
  <user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB" />
</template>

<script>
import Greeting from '../src/components/Greeting.vue';
import User from "../src/components/User.vue"
export default {
  name: "App",
  components: { Greeting, User },
  data() {
    return {
      age: 20
    }
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      this.age += num
    }
  }
}
</script>

