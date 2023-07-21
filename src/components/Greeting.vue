<template>
    <div>
        <p v-if="age > 25">{{ msg }}</p>
        <p v-else>You must be more than 25 years to view this</p>
    </div>
</template>
<script>
export default {
    name: "Greeting",
    props: ["age"],
    data() {
        return {
            msg: "Hello, World!"
        }
    }
}
</script>
<style scoped lang="scss">
p {
    color: red;

    &:hover {
        color: darken($color: rgb(2, 237, 115), $amount: 15);
    }
}
</style>
