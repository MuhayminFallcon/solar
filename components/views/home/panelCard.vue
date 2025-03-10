<script setup>
const isExpanded = ref(false)

const props = defineProps({
  title: {
    default: 'Title',
    required: true
  }
})
</script>

<template>
  <div class="mob:w-[300px] sm:w-[380px]">
    <v-expansion-panels elevation="0">
      <v-expansion-panel color="surface">
        <v-expansion-panel-title 
          :class="{'bg-primary': isExpanded , 'bg-surface': !isExpanded}" 
          @click="isExpanded = !isExpanded"
        >
          <template v-slot:actions>
            <v-icon
              :class="{'rotate-180 bg-grey': isExpanded, 'rotate-0 bg-primary': !isExpanded, 'p-1 rounded-full': true}"
              class="mr-2"
            >
              PhArrowDown
            </v-icon>
          </template>
          <div class="flex gap-2 items-center">
            <p class="text-xl">{{$t(props.title)}}</p>
            <v-chip v-if="isExpanded" color="grey-200" >{{$t('save 40$')}}</v-chip>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-primary" color="primary">
          <div class="flex flex-col gap-4">
            <p>{{$t('Pro account gives you freedom with uploading HD videos and can also meet all your business needs')}}</p>
            <div class="flex justify-between items-center">
              <p>132$<span class="text-grey">{{$t('/month')}}</span></p>
              <v-btn color="white">{{ $t('try one month') }}</v-btn>
            </div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out; 
}
.rotate-0 {
  transform: rotate(0deg);
  transition: transform 0.3s ease-in-out; 
}
.bg-primary, .bg-surface {
  transition: background-color 0.5s ease;
}
</style>
