<template>
  <div class="pixel-art-clock">
    <PixelArtText :text="timeString" />
  </div>
</template>

<script>
import PixelArtText from '~/components/PixelArtText.vue';

export default {
  components: {
    PixelArtText
  },
  data() {
    return {
      time: new Date(),
    };
  },
  computed: {
    timeString() {
      const hours = this.time.getHours().toString().padStart(2, "0");
      const minutes = this.time.getMinutes().toString().padStart(2, "0");
      const seconds = this.time.getSeconds().toString().padStart(2, "0");
      return `${hours}:${minutes}:${seconds}`;
    },
  },
  mounted() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  },
};
</script>

<style scoped>
.pixel-art-clock {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black; /* Fond noir */
  margin: 0; /* Supprime les marges par défaut */
  padding: 0; /* Supprime les paddings par défaut */
  border: none; /* Assure qu'il n'y a pas de bordure */
}
</style>
