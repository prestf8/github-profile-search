<template>
  <div class="stars-repositories">
    <pie-chart
      :chartData="chartData"
      :options="options"
      label="Stars"
    ></pie-chart>
    {{ this.stars }}

    {{ this.names }}
  </div>
</template>

<script>
import PieChart from "./PieChart.vue";

export default {
  name: "StarsRepositories",
  components: {
    PieChart,
  },
  props: {
    stars: Array,
    names: Array,
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
        labels: [],
        // labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            // backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [],
            // data: [1, 2, 3],
          },
        ],
      },
    };
  },
  mounted() {
    this.chartData.labels = this.names;
    this.chartData.datasets[0].data = this.stars;
  },
};
</script>

<style>
.small {
  max-width: 600px;
}
</style>
