<template>
	<div class="fixed flex flex-col top-0 w-screen bg-white z-10 shadow-md">
		<div class="header-div justify-between flex flex-wrap py-4">
			<div class="flex gap-2">
				<router-link to="/" class="flex items-center gap-2 !text-black logo">
					<span
						class="z-10 bg-white title-size font-bold underline font-yanone-kaffeesatz">marauXsporTevenT</span>
				</router-link>
			</div>
			<div class="flex gap-8 items-center">
				<ul id="header-menu" class="flex gap-4 button-header-size">
					<li class="icon-slash">
						<LanguageDropdown />
					</li>
					<li class="icon-slash">
						<router-link to="/about">Qui sommes-nous ?</router-link>
					</li>
					<li class="icon-slash">
						<RouterLink to="/conditions">Conditions Générales</RouterLink>
					</li>
					<li class="flex items-center"> <!-- Ajout de la classe "flex items-center" -->
						<RouterLink to="/contact">Contact</RouterLink>
					</li>
				</ul>
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
.icon-slash {
	position: relative;
	display: flex;
	align-items: center;
}

.icon-slash::after {
	content: "|";
	margin-left: 10px;
	/* Ajustez cette valeur pour contrôler l'espace entre l'icône et le texte */
	color: #666;
	font-family: Arial, Helvetica, sans-serif;
}

.icon-slash:last-child::after {
	content: none;
	/* Supprime l'icône slash pour le dernier élément */
}
</style>
