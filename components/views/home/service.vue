<script setup>
import { useTheme } from 'vuetify';
import { useDisplay } from 'vuetify';

const display = ref(useDisplay());
const theme = useTheme();
const islight = ref(false);

watchEffect(() => {
  islight.value = theme.global.name.value === 'light';
});

const props = defineProps({
  icon: '',
  title: '',
  description: '',
});
</script>

<template>
    <div class="grid place-items-center gap-2">
      <div :class="islight? ' w-fit border p-1 rounded-lg': 'bg-white w-fit p-1 rounded-lg'">
        <v-icon :class="islight? 'mob:p-4 sm:p-6 bg-primary rounded-full': 'bg-primary p-8 rounded-full'"  :size="display.xs||display.mobile? '100': '144'" :icon="props.icon" weight="regular" />
      </div>
      <p class="mob:text-sm md:text-lg">{{ $t(props.title) }}</p>
      <p class="mob:text-xs xs:text-md text-grey" >{{ $t(props.description) }}</p>
    </div>
</template>

<style scoped>

</style>