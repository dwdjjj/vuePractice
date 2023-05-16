<template>
  <b-container class="bv-example-row">
    <b-row class="mt-1 text-center">
      <b-col> <h1>Todo it!</h1> </b-col>
    </b-row>
    <b-row class="mt-1 text-center">
      <b-col>
        <b-alert show variant="primary">할일 : 0</b-alert>
      </b-col>
      <b-col>
        <b-alert show variant="success">진행 : 0</b-alert>
      </b-col>
      <b-col>
        <b-alert show variant="danger">완료 : 0</b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TodoHeader",
  computed: {},
};
</script>

<style></style>
