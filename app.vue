<script setup>


const loading = ref(true)

onMounted(() => {
  const isReloaded = localStorage.getItem('isReloaded')

  if (isReloaded) {
    loading.value = false
  } else {
    localStorage.setItem('isReloaded', 'true')
  }

  window.addEventListener('load', () => {
    loading.value = false
  })
})
</script>

<template>
  <div v-if="loading" class="fixed inset-0 flex items-center justify-center z-50">
    <NuxtImg src="/mainLogoC.png" width="120px" height="auto" alt="logo" class="animate-pulse" />
  </div>
  <nuxt-layout v-else>
    <NuxtPage />
  </nuxt-layout>
</template>
