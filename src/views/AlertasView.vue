<template>
  <div>
    <h1 class="text-center mt-5">Tipos de alertas</h1>
    <v-btn
      v-if="!success && !error"
      class="mt-5"
      color="primary"
      @click="changeVisibility"
      >Mostrar</v-btn
    >
    <div class="text-center mt-5">
      <appAlerta
        v-if="success"
        type="success"
        message="Esto es una alerta desde success de la view"
        @ocultar="success = $event"
      ></appAlerta>
      <appAlerta
        v-if="error"
        type="error"
        message="Esto es una alerta  error desde la view"
        @ocultar="error = $event"
      ></appAlerta>
      <appAlerta
        v-if="warning"
        type="warning"
        message="Esto es una alerta desde la vieww warning"
        @ocultar="warning = $event"
      ></appAlerta>
    </div>
  </div>
</template>

<script>
import appAlerta from "../components/alerts.vue";

export default {
  name: "usuarioInfo",
  components: {
    appAlerta,
  },
  data() {
    return {
      success: false,
      error: false,
      warning: false,
    };
  },
  methods: {
    changeVisibility() {
      this.error = true;
      this.success = true;
      this.warning = true;
      //this.visible == true ? (this.visible = false) : (this.visible = true);
    },
  },
};
</script>

<style>
</style>