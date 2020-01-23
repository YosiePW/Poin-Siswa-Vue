<template>
  <footer
    class="footer"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <div class="copyright">
        &copy; {{ year }}, Designed by
        SMK Telkom Malang
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
