<script setup>
import { useDisplay } from 'vuetify';
const display = ref(useDisplay());
</script>

<template>
  <div :class="['mt-12 bg-primary pt-12', display.mobile ? 'pb-6 px-4' : 'pb-6  xs:px-4 sm:px-6 md:px-16']">
    <div class="grid gap-10" >
      <div :class="['grid text-white', display.mobile ? 'gap-2 place-items-center' : 'place-items-center sm:place-items-start :w-[540px]']">
        <p :class="display.mobile? 'text-[22px] font-bold': 'xs:text-[24px] text-[32px] font-bold'">{{$t('What are you waiting for?')}}</p>
        <p class="text-[14px] xs:text-[16px] xs:text-center sm:text-left ">{{ $t('Register now to get the best delivery experience for you and your clients in Iraq!') }}</p>
      </div>
      <div :class="display.mobile?'grid w-fill place-items-cen' : 'grid grid-cols-2 sm:w-fit gap-4'">
        <v-text-field
          :class="display.mobile? 'w-auto': 'xs:w-auto sm:w-[250px] md:w-[200px]'"
          density="compact"
          bg-color="white" 
          clearable
          :placeholder="$t('your email')"
        ></v-text-field>
        <v-btn :class="display.mobile? 'w-auto': 'w-fit'" color="black" size="large" >{{$t('register now')}}</v-btn>
      </div>
    </div>
    <div :class="['grid place-items-start justify-between mt-12' , display.mobile ? 'gap-10 ' : 'xs:gap-10 xs:grid-cols-1 md:grid-cols-2']">
      <div :class="display.mobile? 'grid gap-8': 'flex xs:gap-10 gap-12  xs:flex-col sm:flex-row'">
        <NuxtLink class="w-fit" to="/">
            <NuxtImg class="border" src="/mainLogoC.png" width="auto" :height="display.mobile? '24': '34'" alt="logo" />
        </NuxtLink>
        <div class="flex gap-10 ">
          <div :class="['grid gap-4', display.mobile? 'justify-items-start text-xs':'xs:text-sm']"> 
            <NuxtLink to="/" class="font-bold hover:underline">{{ $t('the company') }}</NuxtLink>
            <NuxtLink to="/whoweare" class="hover:underline">{{ $t('who we are') }}</NuxtLink>
            <NuxtLink to="/services" class="hover:underline">{{ $t('services') }}</NuxtLink>
            <NuxtLink to="/jobs" class="hover:underline">{{ $t('jobs') }}</NuxtLink>
            <NuxtLink to="/branches" class="hover:underline">{{ $t('branches') }}</NuxtLink>
          </div>
          <div :class="['grid gap-4', display.mobile? 'justify-items-start text-xs':'xs:text-sm']"> 
            <p class="font-bold">{{ $t('help center') }}</p>
            <NuxtLink to="/questions" class="hover:underline">{{ $t('common questions') }}</NuxtLink>
            <NuxtLink to="/contactus" class="hover:underline">{{ $t('contact us') }}</NuxtLink>
            <NuxtLink to="/register" class="hover:underline">{{ $t('register as merchant') }}</NuxtLink>
          </div>
        </div>
      </div>
      <!-- socail media -->
      <div :class="['width-fit grid col-span-1 gap-4', display.mobile ? '' : 'sm:place-self-end']">
        <div class="flex w-48 p-1 items-center gap-2 rounded-full bg-white/20">
          <div class="p-1 rounded-full bg-white">
            <v-icon icon="PhFacebookLogo" weight="fill" class="text-primary"></v-icon>
          </div>
          <p>{{ $t('facebook') }}</p>
        </div>
        <div class="flex w-48 p-1 items-center gap-2 rounded-full bg-white/20">
          <div class="p-1 rounded-full bg-white">
            <v-icon icon="PhInstagramLogo" weight="fill" class="text-primary"></v-icon>
          </div>
          <p>{{ $t('instagram') }}</p>
        </div>
        <div class="flex w-48 p-1 items-center gap-2 rounded-full bg-white/20">
          <div class="p-1 rounded-full bg-white">
            <v-icon icon="PhLinkedinLogo" weight="fill" class="text-primary"></v-icon>
          </div>
          <p>{{ $t('linkedin') }}</p>
        </div>
      </div>
    </div> 
    <p :class="['text-center mt-24', display.mobile? 'text-[14px] font-light':'' ]">{{ $t('© 2024 Leader Express Delivery Company. All rights reserved.') }}</p>
  </div>
</template>

<style scoped>

</style>