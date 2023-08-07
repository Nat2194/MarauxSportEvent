<template>
    <div class="relative">
        <button
            @click="toggleDropdown"
            class="bg-white text-gray-800 px-3 py-2 rounded-md shadow-sm focus:outline-none"
        >
            {{ selectedLanguage }}
        </button>
        <ul
            v-if="showDropdown"
            class="absolute right-0 mt-2 bg-white border rounded-md shadow-lg"
        >
            <li
                v-for="(language, index) in languages"
                :key="index"
                @click="selectLanguage(language)"
                class="cursor-pointer px-4 py-2 hover:bg-blue-500 hover:text-white"
            >
                {{ language }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDropdown: false,
            selectedLanguage: 'FR',
            languages: ['FR', 'EN', 'ES', 'DE'],
        }
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown
        },
        selectLanguage(language) {
            this.selectedLanguage = language
            this.showDropdown = false
        },
    },
}
</script>
