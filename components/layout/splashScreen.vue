<script setup>
import { ref, computed } from 'vue';
import { useTheme } from 'vuetify';

const isVisible = ref(true);
const theme = useTheme();

const bgColor = computed(() => {
  return theme.global.current.value.colors.background;
});

console.log(bgColor.value);
</script>

<template>
  <div v-if="isVisible" :style="{ backgroundColor: bgColor }" class="fixed inset-0 flex m-10 items-center justify-center z-50">
    <img src="/favicon.ico" width="80px" height="auto" alt="logo" class="animate-pulse" />
  </div>
</template>

<style scoped>
</style>