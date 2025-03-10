<script setup>
import { useI18n } from 'vue-i18n';
import { ref, watch, onMounted } from 'vue';

const { locale } = useI18n();

const props = defineProps({
  size: {
    type: String,
    default: '24',
  },
  click: {
    type: Boolean,
    default: false,
  },
});

const iconSize = ref(props.size);

watch(
  () => props.size,
  (newSize) => {
    iconSize.value = newSize;
  }
);

const locales = [
  { lang: 'en', name: 'english' },
  { lang: 'ar', name: 'arabic' },
];

const updateHtmlAttributes = (lang) => {
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.classList.toggle('arabic-font', lang === 'ar');
  document.documentElement.classList.toggle('english-font', lang === 'en');
};

const switchLanguage = (lang) => {
  locale.value = lang;
  updateHtmlAttributes(lang);
};

onMounted(() => {
  updateHtmlAttributes(locale.value);
});
</script>

<template>
    <v-menu v-if="!props.click">
    <template v-slot:activator="{ props }">
      <v-icon :size="iconSize" icon="PhTranslate" v-bind="props" />
    </template>
    <v-list>
      <v-list-item
        @click="switchLanguage(item.lang)"
        v-for="(item, index) in locales"
        :key="index"
      >
        <v-list-item-title>{{ $t(item.name) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>

  <div v-if="props.click">
    <v-btn
      v-for="(item, index) in locales"
      :key="index"
      :pressed="locale.value === item.lang"
      @click="switchLanguage(item.lang)"
      outlined
      color="base"
    >
      {{ $t(item.name) }}
    </v-btn>
  </div>
</template>
