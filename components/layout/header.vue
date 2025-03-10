<script setup>
import { ref, watchEffect, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useTheme, useDisplay } from 'vuetify';
import ThemeSwitcher from './themeSwitcher.vue';
import langSwitcher from './langSwitcher.vue';

const theme = useTheme();
const display = useDisplay();
const islight = ref(false);
const drawer = ref(false);

watchEffect(() => {
  islight.value = theme.global.name.value === 'light';
});

const { locale } = useI18n();

const navItems = [
  { label: 'home', path: '/' },
  { label: 'about us', path: '/aboutus' },
  { label: 'services', path: '/services' },
  { label: 'branches', path: '/branches' },
  { label: 'jobs', path: '/jobs' },
];

const router = useRouter();
const currentRoute = computed(() => router.currentRoute.value.path);

const isVisibleDesktop = ref(true);
const isVisibleMobile = ref(true);

let lastScrollPosition = 0;

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;

  if (display.mobile.value) {
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
      isVisibleMobile.value = false;
    } else {
      isVisibleMobile.value = true;
    }
    drawer.value = false; 
  } else {
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
      isVisibleDesktop.value = false;
    } else {
      isVisibleDesktop.value = true;
    }
  }

  lastScrollPosition = currentScrollPosition;
};

const handleTouchMove = (e) => {
  const currentScrollPosition = window.scrollY;

  if (display.mobile.value) {
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
      isVisibleMobile.value = false;
    } else {
      isVisibleMobile.value = true;
    }
    drawer.value = false;
  }

  lastScrollPosition = currentScrollPosition;
};

const disableScroll = () => {
  isVisibleMobile.value = true;
  isVisibleDesktop.value = true;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: false });
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  disableScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('touchmove', handleTouchMove);
});
</script>

<template>
  <!-- Desktop Header -->
  <header
    v-if="!display.mobile.value && !display.sm.value && !display.xs.value"
    :class="[
      'z-[1000] will-change-transform flex justify-between items-center mob:px-4 xs:px-6 sm:px-12 md:px-14 reg:px-16 py-4 fixed top-0 left-0 w-full bg-background transition-transform duration-300',
      isVisibleDesktop ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <div>
      <NuxtLink to="/">
        <NuxtImg class="border" src="/mainLogoC.png" width="auto" :height="display.md.value || display.sm.value || display.xs.value? '14': '34'" alt="logo" />
      </NuxtLink>
    </div>
    <nav :class="display.md.value || display.sm.value || display.xs.value? 'flex gap-4 text-sm': 'flex gap-6'">
      <NuxtLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :class="[
          'hover:underline transition-all duration-200',
          currentRoute === item.path ? 'underline ' : ''
        ]"
      >
        {{ $t(item.label) }}
      </NuxtLink>
    </nav>
    <div :class="display.md.value || display.sm.value || display.xs.value? 'flex items-center gap-4': 'flex items-center gap-12'">
      <div class="flex items-center gap-4">
        <ThemeSwitcher 
        :size="display.md.value || display.sm.value || display.xs.value?'20': '24'"
        />
        <langSwitcher  
        :size="display.md.value || display.sm.value || display.xs.value?'20': '24'"
        />
      </div>
      <div class="flex items-center gap-4">
        <v-btn :size="display.md.value || display.sm.value || display.xs.value?'small': 'default'" to="/contactus" :class="islight ? 'text-black' : 'text-white'" variant="outlined">
          {{ $t('contact us') }}
        </v-btn>
        <v-btn :size="display.md.value || display.sm.value || display.xs.value?'small': 'default'" to="/register">{{ $t('join us') }}</v-btn>
      </div>
    </div>
  </header>

  <!-- tablet header -->
  <header
    v-if="display.sm.value"
    :class="[
      'z-[1000] will-change-transform flex justify-between items-center mob:px-4 xs:px-6 sm:px-12 md:px-14 reg:px-16 py-4 fixed top-0 left-0 w-full bg-background transition-transform duration-300',
      isVisibleDesktop ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <div>
      <NuxtLink to="/">
        <NuxtImg class="border" src="/mainLogoC.png" width="auto" :height="display.md.value || display.sm.value || display.xs.value? '14': '34'" alt="logo" />
      </NuxtLink>
    </div>
    <nav :class="display.md.value || display.sm.value || display.xs.value? 'flex gap-4 text-sm': 'flex gap-6'">
      <NuxtLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :class="[
          'hover:underline transition-all duration-200',
          currentRoute === item.path ? 'underline ' : ''
        ]"
      >
        {{ $t(item.label) }}
      </NuxtLink>
    </nav>
    <div :class="display.md.value || display.sm.value || display.xs.value? 'flex items-center gap-4': 'flex items-center gap-12'">
      <div class="flex items-center gap-4">
      </div>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-icon :size="iconSize" icon="PhGear" v-bind="props" />
        </template>
        <v-list dense>
          <div class="p-2 grid gap-2">
            <v-list-item>
              <div class="flex items-center gap-2">
                <p class="text-grey text-xs">{{ $t('theme:') }}</p>
                <ThemeSwitcher 
                :size="display.md.value || display.sm.value || display.xs.value?'24': '24'"
                />
              </div>
            </v-list-item>
            <v-list-item>
              <div class="flex items-center gap-2">
                <p class="text-grey text-xs">{{ $t('languages:') }}</p>
                <langSwitcher  
                  :size="display.md.value || display.sm.value || display.xs.value?'20': '24'"
                  :click="true"
                />
              </div>
            </v-list-item>
            <vlist-item class="grid gap-3">
              <v-btn to="/contactus" :class="islight ? 'text-black' : 'text-white'" variant="outlined">
                {{ $t('contact us') }}
              </v-btn>
              <v-btn to="/register">{{ $t('join us') }}</v-btn>
            </vlist-item>
          </div>
        
        </v-list>
      </v-menu>
      <div v-if="!display.sm.value" class="flex items-center gap-4">
        <v-btn :size="display.md.value || display.sm.value || display.xs.value?'small': 'default'" to="/contactus" :class="islight ? 'text-black' : 'text-white'" variant="outlined">
          {{ $t('contact us') }}
        </v-btn>
        <v-btn :size="display.md.value || display.sm.value || display.xs.value?'small': 'default'" to="/register">{{ $t('join us') }}</v-btn>
      </div>
    </div>
  </header>

  <!-- Mobile Header -->
  <v-main
    :class="[
      drawer ? 'z-[1000] sticky top-0 w-full bg-background':
      'z-[1000] will-change-transform fixed top-0 left-0 w-full bg-background transition-transform duration-300',
      isVisibleMobile ? 'translate-y-0' : '-translate-y-full'
    ]"
    v-if="display.mobile.value || display.xs.value"
  >
    <v-app-bar height="72" prominent color="background" elevation="0">
      <v-app-bar-nav-icon 
        icon="PhList" 
        color="base" 
        @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <div class="flex items-center gap-6">
          <ThemeSwitcher size="20" />
          <langSwitcher size="20" />
        </div>
      </v-toolbar-title>
    </v-app-bar>
  </v-main>

  <v-navigation-drawer
    :location="locale === 'ar' ? 'right' : 'left'"
    class="z-[1000] overflow-y-auto" 
    v-model="drawer"
    elevation="0"
    temporary
    app
    color="background"
  >
    <NuxtLink
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="block py-3 px-6"
    >
      <v-btn 
        variant="text" 
        :color="currentRoute === item.path ? 'primary' : 'base'"
      >
        {{ $t(item.label) }}
      </v-btn>
    </NuxtLink>
  </v-navigation-drawer>
</template>

<style scoped>
@media (max-width: 768px) {
  v-main {
    width: 100%;
  }
}
</style>