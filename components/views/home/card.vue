<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isArabic = ref(false);

watchEffect(() => {
    isArabic.value = locale.value === 'ar';
});
const props = defineProps({
    vertical: false,
    img:'',
    chip1:'',
    chip2:'',
    title: '',
    description: {
        required: false,
        default: ''
    },
})
</script>

<template>
    <div :class="props.vertical? 'flex w-fit gap-3' : 'grid mob:w-full reg:w-[596px] gap-4'">
        <NuxtImg 
        v-if="props.img !== ''"
        :class="props.vertical? 'rounded-xl object-cover mob:w-[250px] mob:h-auto sm:w-[150px]  md:w-[150px] md:h-[full] lg:w-[180px] lg:h-[180px]' : 'rounded-xl object-cover w-full h-[320px]'"
        :src="props.img" alt="img"
        />
        <div class="flex flex-col gap-4 justify-between">
            <div v-if="!props.vertical" class="flex gap-4">
                <v-chip v-if="props.chip1 !== ''" color="base">{{ $t(props.chip1) }}</v-chip>
                <v-chip v-if="props.chip2 !== ''" color="base">{{ $t(props.chip2) }}</v-chip>
            </div>
            <div class="grid gap-4">
                <p v-if="props.title !== ''" :class="props.vertical? 'mob:text-sm mob:w-[] sm:w-72 sm:text-lg lg:w-[]' :isArabic?'text-[38px] font-bold' : 'text-2xl font-bold'">{{ $t(props.title) }}</p>
                <p v-if="props.description !== ''" class="text-grey">{{ $t(props.description) }}</p>
            </div>
            <div v-if="props.vertical" class="flex gap-4">
                <v-chip v-if="props.chip1 !== ''" color="base">{{ $t(props.chip1) }}</v-chip>
                <v-chip v-if="props.chip2 !== ''" color="base">{{ $t(props.chip2) }}</v-chip>
            </div>
        </div>
    </div>
</template>