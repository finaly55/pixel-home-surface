<template>
  <div class="pixel-art">
    <div v-for="(row, rowIndex) in matrix" :key="rowIndex" class="row">
      <span
        v-for="(pixel, pixelIndex) in row"
        :key="pixelIndex"
        :class="{'pixel-on': pixel === 1, 'pixel-off': pixel === 0}"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    matrix: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.pixel-art {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
}
.pixel-on {
  width: 10px;
  height: 10px;
  background-color: green;
}
.pixel-off {
  width: 10px;
  height: 10px;
  background-color: black;
}
</style>
