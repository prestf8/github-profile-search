<template>
  <div class="forks-repositories">
    <pie-chart
      :chartData="chartData"
      :options="options"
      label="Forks"
    ></pie-chart>
  </div>
</template>

<script>
import PieChart from "./PieChart.vue";

export default {
  name: "ForksRepositories",
  components: {
    PieChart,
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          labels: {
            fontColor: "rgb(255, 99, 132)",
          },
        },
      },
      chartData: {
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [3, 10, 5],
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
