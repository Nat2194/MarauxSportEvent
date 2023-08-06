<template>
  <div>
    <LayoutBase>
      <ContactForm />
    </LayoutBase>
  </div>
</template>
  
<script>
import LayoutBase from '../components/LayoutBase.vue';
import ContactForm from '../components/ContactForm.vue';

export default {
  components: {
    LayoutBase,
    ContactForm
  },
};
</script>
  
<style lang="scss"></style>