<template>
<div style="margin: 30px;">
  <Button color-button="red" color-text="white" @click="greet">
    Execute
  </Button>
</div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button
  },
  methods: {
    greet() {
      alert("Hello world!");
    }
  }
};
</script>
