<template>
  <div class="next-bus">
    <PixelArtText text="Prochain" />
    <div class="spacing"></div>
    <!-- Ajout d'un espace -->
    <div v-if="nextBus">
      <div v-if="nextBus.temps">
        <PixelArtText :text="nextBus.temps.replace('mn', '') + ' minutes'" />
      </div>
      <div v-else>
        <PixelArtText text="Pas de données en temps réel disponibles" />
      </div>
    </div>
    <div v-else>
      <PixelArtText text="Chargement..." />
    </div>
  </div>
</template>

<script>
import { getNextBus } from '~/api/naolib.js';
import PixelArtText from '~/components/PixelArtText.vue';

export default {
  components: {
    PixelArtText,
  },
  data() {
    return {
      nextBus: null,
      intervalId: null,
    };
  },
  methods: {
    async fetchNextBus() {
      const data = await getNextBus();
      if (data && data.length > 0) {
        // Filtrer pour obtenir uniquement les bus C6 à destination de Hermeland
        const hermelandBuses = data.filter(
          (bus) => bus.ligne.numLigne === 'C6' && bus.terminus === 'Hermeland'
        );
        console.log({ hermelandBuses });
        // Prendre le premier bus disponible
        this.nextBus = hermelandBuses[0];
      }
    },
  },
  async mounted() {
    await this.fetchNextBus();
    this.intervalId = setInterval(this.fetchNextBus, 60000); // Actualiser toutes les minutes
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

.spacing {
  margin: 20px 0; /* Ajoute un espace vertical entre les éléments */
}
</style>
