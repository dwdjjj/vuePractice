<template>
  <b-container class="bv-example-row">
    <b-row class="text-center">
      <b-col>
        <b-input-group prepend="할일" class="mt-3">
          <b-form-input v-model.trim="todoTitle" @keypress.enter="registerTodo"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-success" @click="registerTodo">등록</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      todoTitle: "",
    };
  },
  methods: {
    registerTodo() {
      // const todoItem = {
      //   title: this.todoTitle,
      //   completed: false,
      // };
    },
  },
};
</script>

<style></style>
