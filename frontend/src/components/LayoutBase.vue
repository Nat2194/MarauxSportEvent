<template>
	<div class="flex flex-col gap-2 relative">
		<Header />
		<div class="flex-grow min-h-[80vh] mt-44 w-4/5 mx-auto">
			<slot />
		</div>
	</div>
</template>

<script setup>
import Header from './Header.vue';
</script>
