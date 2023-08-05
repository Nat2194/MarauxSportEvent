<!-- Carrousel d'images -->
<template>
	<section class="bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: 'url(' + imgList[currentImg] + ')' }">
	  <div class="flex-wrap h-96 pt-12 flex flex-col justify-end">
		<div class="content-wrap w-full text-center mt-10 mb-10">
		  <h1 class="font-yanone-kaffeesatz font-bold text-white">
			<span class="inline-block bg-red-900 text-white px-4 py-2">Texte ici</span>
		  </h1>
		  <p class="font-yanone-kaffeesatz text-black">
			<span class="inline-block bg-white p-4">Texte là</span>
		  </p>
		</div>
	  </div>
	</section>
  </template>
  
  
<script setup>
import { ref } from 'vue';

const props = defineProps({
	imgList: {
		type: Array,
		required: true,
	},
});

const currentImg = ref(0);

setInterval(() => {
	currentImg.value = (currentImg.value + 1) % props.imgList.length;
}, 5000);
</script>
