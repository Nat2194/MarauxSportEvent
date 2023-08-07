<template>
    <div class="fixed flex flex-col top-0 w-screen bg-white z-10 shadow-md">
        <div class="header-div justify-between flex flex-wrap py-4">
            <router-link
                to="/"
                class="flex items-center gap-2 !text-black logo-font"
            >
                <div
                    class="title-size font-bold underline font-yanone-kaffeesatz p-3 logo-size overflow-hidden flex items-center justify-center"
                    style="top: -1rem"
                >
                    marauXsporTevenT
                </div>
            </router-link>
            <div class="flex gap-8 items-center">
                <ul id="header-menu" class="flex gap-4 button-header-size">
                    <li class="icon-slash">
                        <LanguageDropdown />
                    </li>
                    <li class="icon-slash">
                        <router-link to="/about">Qui sommes-nous ?</router-link>
                    </li>
                    <li class="icon-slash">
                        <RouterLink to="/conditions"
                            >Conditions Générales</RouterLink
                        >
                    </li>
                    <li class="icon-slash">
                        <RouterLink to="/contact">Contact</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import LanguageDropdown from './LanguageDropdown.vue'

export default {
    components: {
        LanguageDropdown,
    },
}
</script>

<style lang="scss">
.icon-slash {
    position: relative;
    display: flex;
    align-items: center;
}

.icon-slash::after {
    content: '|';
    margin-left: 10px;
    color: #666;
    font-family: Arial, Helvetica, sans-serif;
}

.icon-slash:last-child::after {
    content: none;
    /* Supprime l'icône slash pour le dernier élément */
}
</style>
