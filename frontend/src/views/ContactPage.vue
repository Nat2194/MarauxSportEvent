<template>
    <div>
        <LayoutBase>
            <ContactForm />
            <div class="w-full max-w-md mx-auto mt-8">
                <!-- Informations de l'entreprise -->
                <div
                    class="flex flex-wrap bg-white shadow-md rounded px-8 pt-6 pb-8"
                >
                    <p class="text-gray-800 font-semibold text-lg mb-4">
                        marauXsporTevenT
                    </p>
                    <p class="flex flex-wrap text-gray-700 mb-2">
                        <span class="inline-block mr-2">
                            <img
                                src="../assets/img/icons/location.svg"
                                alt="location icon"
                                class="h-7 w-7 mr-2"
                            />
                        </span>
                        <a
                            href="https://www.google.com/maps?q=Rue+du+village+27,+1802+Corseaux"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Rue du village 27, 1802 Corseaux</a
                        >
                    </p>
                    <p class="flex flex-wrap text-gray-700 mb-2">
                        <span class="inline-block mr-2">
                            <img
                                src="../assets/img/icons/phone.svg"
                                alt="phone icon"
                                class="h-5 w-5 ml-1 mr-2"
                            />
                        </span>
                        <a href="tel:+41789216383">+41 (0) 78 921 63 83</a>
                    </p>
                    <p class="flex flex-wrap text-gray-700 mb-4">
                        <span class="inline-block mr-2">
                            <img
                                src="../assets/img/icons/mail.svg"
                                alt="email icon"
                                class="h-7 w-7 mr-2"
                            />
                        </span>
                        <a href="mailto:info@marauXsporTevenT.ch"
                            >info@marauXsporTevenT.ch</a
                        >
                    </p>
                </div>
            </div>
        </LayoutBase>
    </div>
</template>

<script>
import LayoutBase from '../components/LayoutBase.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
    components: {
        LayoutBase,
        ContactForm,
    },
}
</script>

<style lang="scss"></style>
