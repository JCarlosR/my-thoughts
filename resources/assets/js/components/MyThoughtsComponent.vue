<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">

            <form-component @new="addThought"></form-component>

            <thought-component
                v-for="(thought, index) in thoughts"
                :key="thought.id"
                :thought="thought"
                @update="updateThought(index, ...arguments)"
                @delete="deleteThought(index)">
            </thought-component>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                thoughts: []
            }
        },

        mounted() {
            axios.get('/thoughts').then((response) => {
                this.thoughts = response.data;
            });
        },

        methods: {
            addThought(thought) {
                this.thoughts.push(thought);
            },
            updateThought(index, thought) {
                this.thoughts[index] = thought;
            },
            deleteThought(index) {
                this.thoughts.splice(index, 1);
            }
        }
    }
</script>
