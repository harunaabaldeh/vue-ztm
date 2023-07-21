<template>
    <div>
        <button @click="onClickAge">Update age Event</button>
        <button @click="ageChangeFn(3)">Update Age</button>

        <p>The user is {{ age }} years old</p>

        <p>{{ ageDouble }}</p>
    </div>
</template>
<script>
export default {
    name: "User",
    props: {
        age: {
            type: Number,
            // required: true,
            // default: 20
            validator(value) {
                return value < 130
            }
        },
        ageChangeFn: Function
    },
    emits: ["age-change"],
    computed: {
        ageDouble() {
            return this.age * 2;
        }
    },
    data() {
        return {

        }
    },
    methods: {
        onClickAge() {
            this.$emit("age-change", 5)
        }
    }

}
</script>
