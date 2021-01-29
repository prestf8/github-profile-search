<template>
  <div class="average-stats">
    <div class="card">
      <div class="card-header">
        Average Public Stats
      </div>
      <div class="card-body">
        <div class="list-group">
          <div
            class="list-group-item list-group-item-warning list-group-item-action"
          >
            <font-awesome-icon
              :icon="['fas', 'star']"
              class="d-inline-block"
              style="height: 16px; width: 16px"
            ></font-awesome-icon>
            {{ this.stars }}
          </div>
          <div
            class="list-group-item list-group-item-info list-group-item-action"
          >
            <font-awesome-icon
              :icon="['fas', 'code-branch']"
              class="d-inline-block"
              style="height: 16px; width: 16px"
            ></font-awesome-icon>
            {{ this.forks }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AverageStats",
  props: {
    stars: String,
    forks: String,
  },
};
</script>

<style scoped lang="scss"></style>
