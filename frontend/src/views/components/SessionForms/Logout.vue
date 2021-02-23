<template>
  <div></div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("logout").then(() => {
      this.$router.push({ name: "home" });
    });
  },
};
</script>
