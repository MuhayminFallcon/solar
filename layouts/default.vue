<script setup>
import Header from '~/components/layout/header.vue';
import Footer from '~/components/layout/footer.vue';

import { useDisplay } from 'vuetify';
const display = ref(useDisplay());
</script>

<template>
    <v-app >
    <Header />
    <v-main :style="{ paddingTop: display.mobile? '98px': '124px', paddingBottom: '180px' }"> 
      <NuxtPage />
    </v-main>
    <Footer />
  </v-app>
</template>
