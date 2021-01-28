<template>
  <main class="bio card mt-4">
    <div class="card-header">
      Bio
    </div>
    <div class="card-body">
      <div class="card-text" id="bio-text">
        {{ this.text }}
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "Bio",
  props: {
    text: String,
  },
};
</script>

<style scoped lang="scss">
#bio-text {
  font-size: 0.9rem;
}

@media screen and (min-width: 768px) {
  .card-header {
    font-size: 1.1rem;
  }
  #bio-text {
    font-size: 1.05rem;
  }
}
</style>
