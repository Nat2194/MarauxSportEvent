<template>
    <div>
        <LayoutBase>
            <div class="flex flex-col gap-4 bg-yellow-400">
                <h1 class="font-yanone-kaffeesatz title-size font-bold">STAGES DE FOOTBALL</h1>
                <SliderBase :img-list="sliderImages" />
                <StagesList />
            </div>
        </LayoutBase>
    </div>
</template>
  
<script setup>
import LayoutBase from '../components/LayoutBase.vue';
import SliderBase from '../components/SliderBase.vue';
import StagesList from '../components/StagesList.vue';
import sliderImg1 from '../assets/img/slider/1.webp';
import sliderImg2 from '../assets/img/slider/2.webp';
import sliderImg3 from '../assets/img/slider/3.webp';

const sliderImages = [sliderImg1, sliderImg2, sliderImg3];

</script>
  
<style lang="scss"></style>