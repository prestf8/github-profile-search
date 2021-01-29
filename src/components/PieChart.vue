<script>
import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Doughnut,
  mixins: [reactiveProp],

  props: {
    label: {
      type: String,
    },
    options: {
      type: Object,
    },
  },
  mounted() {
    console.log(this.chartData);
    this.renderChart(this.chartData, this.options);
  },
};
</script>
