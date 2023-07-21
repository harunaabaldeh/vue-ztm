<template>
    <app-form>
        <template v-slot:help>
            <p>{{ helpText }}</p>
        </template>
        <template v-slot:fields>
            <input type="text" placeholder="Email">
            <input type="email" placeholder="Username">
            <input type="password" placeholder="Password">
        </template>
        <template v-slot:buttons></template>
    </app-form>
    <p>Dummy text!</p>
    <app-form>
        <template v-slot:help>
            <p>This is some help text</p>
        </template>
        <template v-slot:fields>
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Message">
        </template>
        <template v-slot:buttons>
            <button type="submit">Submit</button>
        </template>
    </app-form>
</template>

<script>
import AppForm from './components/Form.vue';

export default {
    name: "App",
    components: { AppForm },
    data() {
        return {
            helpText: "This is some help text"
        }
    }
}
</script>

