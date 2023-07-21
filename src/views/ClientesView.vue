<template>
  <div>
    <h1 class="text-center">Clientes</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Clientes",
  data() {},
  created() {
    this.cargarClientes();
  },
  methods: {
    ...mapGetters("clientes", ["cargarClientes"]),
  },
  mounted: {
    ...mapActions("clientes", ["items"]),
  },
};
</script>

