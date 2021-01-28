<template>
  <div class="error vh-100 p-4">
    <div class="go-back-container text-center d-block mb-5">
      <router-link class="text-decoration-none" to="/"
        ><font-awesome-icon
          :icon="['fas', 'angle-left']"
          exact
        ></font-awesome-icon>
        Back</router-link
      >
    </div>
    <span class="loading-page-text m-auto d-block text-center">{{
      errorMessage
    }}</span>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Error",

  computed: {
    ...mapState(["errorMessage"]),
  },
};
</script>

<style scoped style="scss">
.go-back-container {
  font-size: 1.2rem;

  @media screen and (min-width: 976px) {
    font-size: 1.5rem;
  }
}
.loading-page-text {
  font-family: "Spartan", sans-serif;
  font-size: 1.5rem;

  @media screen and (min-width: 600px) {
    font-size: 1.8rem !important;
  }
}
</style>
