<template>
  <div class="mt-5">
    <v-alert :type="type"> {{ message }}</v-alert>
    <v-btn class="ml-4" color="error" @click="changeVisibility()">
      Cerrar alerta</v-btn
    >
  </div>
</template>
<script>
export default {
  props: ["type", "message"],
  methods: {
    changeVisibility() {
      this.$emit("ocultar", false);
    },
  },
};
</script>
