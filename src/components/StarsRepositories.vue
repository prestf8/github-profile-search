<template>
  <div class="stars-repositories">
    <pie-chart
      :chartData="chartData"
      :options="options"
      label="Stars"
    ></pie-chart>
  </div>
</template>

<script>
import PieChart from "./PieChart.vue";

export default {
  name: "StarsRepositories",
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

<style>
.small {
  max-width: 600px;
}
</style>
