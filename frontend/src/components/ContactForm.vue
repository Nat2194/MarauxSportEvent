<template>
    <div class="w-full max-w-md mx-auto mt-8">
        <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                    Prénom
                </label>
                <input v-model="formData.firstname" :class="inputClasses" type="text" id="firstname"
                    placeholder="Votre prénom">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                    Nom
                </label>
                <input v-model="formData.lastname" :class="inputClasses" type="text" id="lastname" placeholder="Votre nom">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input v-model="formData.email" :class="inputClasses" type="email" id="email"
                    placeholder="Votre adresse email">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="subject">
                    Sujet
                </label>
                <input v-model="formData.subject" :class="inputClasses" type="text" id="subject"
                    placeholder="Le sujet de votre mail">
            </div>
            <div class="mb-8">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                    Message
                </label>
                <textarea v-model="formData.message" :class="textareaClasses" id="message" rows="6"
                    placeholder="Votre message"></textarea>
            </div>
            <div class="flex items-center justify-center">
                <button type="submit" :class="buttonClasses">Envoyer</button>
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            formData: {
                firstname: "",
                lastname: "",
                email: "",
                subject: "",
                message: "",
            },
        };
    },
    computed: {
        inputClasses() {
            return "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
        },
        textareaClasses() {
            return "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
        },
        buttonClasses() {
            return "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
        },
    },
    methods: {
        submitForm() {
            // TODO: script pour envoyer un mail
            console.log(this.formData);
            // Reset du formulaire après l'envoi (facultatif)
            this.formData = {
                firstname: "",
                lastname: "",
                email: "",
                subject: "",
                message: "",
            };
        },
    },
};
</script>
  
<style></style>
  