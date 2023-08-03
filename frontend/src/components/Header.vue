<template>
	<div class="fixed flex flex-col top-0 w-screen bg-white z-10 shadow-md">
        <div class="header-div justify-between flex py-4">
			<div class="flex gap-2">
				<router-link to="/" class="flex items-center gap-2 !text-black logo">
					<span class="z-10 bg-white title-size font-bold underline">marauXsporTevenT</span>
				</router-link>
			</div>
			<div class="flex gap-8 items-center">
				<div class="flex items-center gap-4 button-header-size">
					<LanguageDropdown />
					<router-link to="/about">About</router-link>
					<RouterLink to="/sell">Sell</RouterLink>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import LanguageDropdown from './LanguageDropdown.vue';

export default {
  components: {
    LanguageDropdown
  },
};
</script>
  
<style lang="scss">
  </style>