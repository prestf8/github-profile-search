<template>
  <div class="stars-repositories">
    <pie-chart
      v-if="loaded && noZero"
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

  props: {
    stars: Array,
    names: Array,
    noZero: Boolean,
  },
  watch: {
    stars() {
      this.updateChartData();
    },
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
            fontSize: 10,
            boxWidth: 18,
            usePointStyle: true,
          },
          position: "left",
        },
        title: {
          display: true,
          text: "Top 10 Starred Repos",
          fontSize: 25,
          fontFamily: "Montserrat",
          align: "left",
          fontColor: "black",
        },
      },
      chartData: {},
      loaded: false,
    };
  },
  methods: {
    updateChartData() {
      this.chartData = {
        labels: this.names,
        datasets: [
          {
            label: "Data One",
            backgroundColor: [
              "rgba(255, 0, 0, 1)",
              "rgba(255, 154, 0, 1)",
              "rgba(208, 222, 33, 1)",
              "rgba(79, 220, 74, 1)",
              "rgba(63, 218, 216, 1)",
              "rgba(47, 201, 226, 1)",
              "rgba(28, 127, 238, 1)",
              "rgba(95, 21, 242, 1)",
              "rgba(186, 12, 248, 1)",
              "rgba(251, 7, 217, 1)",
            ],
            data: this.stars,
          },
        ],
      };
      this.loaded = true;
    },
  },
};
</script>

<style>
.small {
  max-width: 600px;
}
</style>
