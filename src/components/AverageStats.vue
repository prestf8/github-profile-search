<template>
  <div class="average-stats">
    <div class="card">
      <div class="card-header">
        Average Public Stats
      </div>
      <div class="card-body">
        <div class="list-group">
          <div class="list-group-item">
            <font-awesome-icon
              :icon="['fas', 'star']"
              class="d-inline-block"
              style="height: 16px; width: 16px"
            ></font-awesome-icon>
            00
          </div>
          <div class="list-group-item bg-primary">
            <font-awesome-icon
              :icon="['fas', 'code-branch']"
              class="d-inline-block"
              style="height: 16px; width: 16px"
            ></font-awesome-icon>
            01
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AverageStats",
};
</script>

<style scoped lang="scss"></style>
