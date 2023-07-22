<template>
  <button type="submit" @click="flag = !flag">Toggle</button>
  <transition @befor-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave"
    @leave="leave" @after-leave="afterLeave" :css="true" name="fade">
    <h2 v-if="flag">Hey!</h2>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false
    }
  },
  methods: {
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



<style></style>
