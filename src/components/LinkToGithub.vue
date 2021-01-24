<template>
  <ul class="link-to-github list-group bg-success">
    <li
      class="list-group-item position-absolute border-0"
      id="github-link"
      style="top:0; right:0;"
    >
      <a
        href="https://github.com/prestf8/github-user-profile-searcher"
        target="_blank"
        >(Icon) Link to Project</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "LinkToGithub",
};
</script>

<style lang="scss">
#github-link {
  background-color: transparent;
}
</style>
