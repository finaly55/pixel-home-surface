<template>
  <div class="next-bus">
    <!-- Ajout d'un espace -->
    <div v-if="nextBuses && nextBuses.length > 0" class="bus-list">
      <div v-for="(bus, index) in nextBuses" :key="index">
        <PixelArtText :text="formatNextBusTime(bus)" />
      </div>
    </div>
    <div v-else>
      <PixelArtText text="Pas de données en temps réel disponibles" />
    </div>
  </div>
</template>

<script>
import { getNextBus } from "~/api/naolib.js";
import PixelArtText from "~/components/PixelArtText.vue";

export default {
  components: {
    PixelArtText,
  },
  data() {
    return {
      nextBuses: [], // Changer de nextBus à nextBuses pour stocker un tableau
      intervalId: null,
    };
  },
  methods: {
    async fetchNextBus() {
      const data = await getNextBus();
      if (data && data.length > 0) {
        // Filtrer pour obtenir uniquement les bus C6 à destination de Hermeland
        this.nextBuses = data.filter(
          (bus) => bus.ligne.numLigne === "C6" && bus.terminus === "Hermeland"
        );
        console.log({ nextBuses: this.nextBuses });
      }
    },
    formatNextBusTime(bus) {
      if (bus.temps === "proche") {
        return "proche";
      }
      return bus.temps.replace("mn", "") + " minutes";
    },
  },
  async mounted() {
    await this.fetchNextBus();
    this.intervalId = setInterval(this.fetchNextBus, 30000); // Actualiser toutes les minutes
  },
  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
};
</script>

<style scoped>
.next-bus {
  color: white;
  background-color: black;
  padding: 20px;
  text-align: center;
}

.bus-list {
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: flex-end;
}

.spacing {
  margin: 20px;
}
</style>
