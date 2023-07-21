<template>
  <div>
    <h1 class="text-center mt-5">Imagenes</h1>
    <div v-if="items.length > 0">
      <imageCard :data="items"></imageCard>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import imageCard from "../components/imageCard.vue";
export default {
  name: "Imagenes",
  data() {
    return {};
  },
  components: { imageCard },
  created() {
    this.cargarImagenes();
  },
  methods: {
    ...mapActions("imagenes", ["cargarImagenes"]),
  },
  computed: {
    ...mapGetters("imagenes", ["items"]),
  },
};
</script>

<style>
</style>