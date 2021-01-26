<template>
  <div class="search vh-100 text-center" style="padding: 8rem;">
    <LinkToGithub></LinkToGithub>
    <main class="search-main-content mx-auto w-100" style="maxWidth: 400px;">
      <h3 class="search-title mb-4">Enter Github Username</h3>
      <form class="d-flex justify-content-center">
        <input type="text" class="form-control w-100" style="maxWidth: 200px" />
        <button type="submit" class="btn btn-primary">Search</button>
      </form>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import LinkToGithub from "@/components/LinkToGithub.vue";

export default {
  components: { LinkToGithub },
  name: "Search",
};
</script>

<style lang="scss">
.search-title {
  font-size: 1.2rem !important;
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 600px) {
    font-size: 1.4rem !important;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.8rem !important;
  }
}
</style>
