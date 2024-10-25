<template>
  <div class="prochain-depart">
    <PixelArtC6 />
    <NextBus />
  </div>
</template>

<script>
import NextBus from '~/components/NextBus.vue';
import PixelArt from '~/components/PixelArt.vue';
import naolibMatrix from '~/image-scripts/output/naolibMatrix.json';
import PixelArtC6 from '@/components/PixelArtC6.vue';

export default {
  components: {
    NextBus,
    PixelArt,
    PixelArtC6,
  },
  data() {
    return {
      naolibMatrix,
    };
  },
};
</script>

<style scoped>
.prochain-depart {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  margin: 0;
  padding: 0;
}
</style>
