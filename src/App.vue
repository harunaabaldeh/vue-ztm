<template>
  <button type="submit" @click="flag = !flag">Toggle</button>
  <!-- <transition @befor-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave"
    @leave="leave" @after-leave="afterLeave" :css="true" name="fade">
    <h2 v-if="flag">Hey!</h2>
  </transition> -->
  <button @click="addItem">Add</button>
  <ul>
    <transition-group name="fade" enter-active-class="animate__animated animate__flipInX"
      enter-leave-class="animated__animated animate__flipOutX">
      <li v-for="(number, index) in numbers" :key="number" @click="removeItem(index)">
        {{ number }}
      </li>
    </transition-group>
  </ul>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
      numbers: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    addItem() {
      const num = Math.floor(Math.random() * 100 + 1)
      const index = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(index, 0, num)
    },
    removeItem(index) {
      this.numbers.splice(index, 1)
    },
    beforEnter(e) {
      console.log("befor-enter event triggered", e)
    },
    enter(e) {
      console.log("enter event triggered", e)
      // const animation = e.animate([{ transform: "scale3d(0,0,0)" }, {}], {
      //   duration: 1000
      // })

      // animation.onfinish = () => {
      //   done()
      // };

    },
    afterEnter(e) {
      console.log("after-event triggered", e)
    },
    beforeLeave(e) {
      console.log("befor-leave event triggere", e)
    },
    leave(e) {
      console.log("leave event triggered", e)
      // const animation = e.animate([{}, { transform: "scale3d(0,0,0)" }], {
      //   duration: 1000
      // })

      // animation.onfinish = () => {
      //   done()
      // };

    },
    afterLeave(e) {
      console.log("after-leave event triggered", e)
    }
  },
}
</script>

<style>
.animate__flipOutX {
  position: absolute;
}

.animate__animated {
  animation-duration: 1.5s;
}

li {
  font-size: 20px;
  cursor: pointer;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.fade-move {
  transition: all 1s linear;
}

.fade-leave-active {
  position: absolute;
}
</style>
