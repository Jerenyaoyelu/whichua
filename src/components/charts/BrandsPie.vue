<template>
  <div id="brands-pie" style="width:600px"></div>
</template>

<script>
import { DataView } from "@antv/data-set";
import { Chart } from "@antv/g2";

const colorList = [
  "#5191FF",
  "#74A7FF",
  "#61DDAA",
  "#3DC88F",
  "#8596B4",

  "#7386A9",
  "#ECB20B",
  "#FBCE45",
  "#7262FD",
  "#8F82FF",

  "#5DC2EB",
  "#59B8DE",
  "#9661BC",
  "#CC8FF7",
  "#F6903D",

  "#F0BD93",
  "#11A2A1",
  "#66B9B9",
  "#F96986",
  "#FFACBD",
];

export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      // 通过 DataSet 计算百分比
      const dv = new DataView();
      dv.source(this.data).transform({
        type: "percent",
        field: "value",
        dimension: "type",
        as: "percent",
      });
      this.chart = new Chart({
        container: "brands-pie",
        autoFit: true,
        height: 400,
        padding: 0,
      });
      this.chart.data(dv.rows);
      this.chart.scale({
        percent: {
          formatter: (val) => {
            val = (val * 100).toFixed(2) + "%";
            return val;
          },
        },
      });
      this.chart.coordinate("theta", {
        radius: 0.5,
      });
      this.chart.tooltip({
        showTitle: false,
        showMarkers: false,
      });
      this.chart.legend(false);
      this.chart
        .interval()
        .adjust("stack")
        .position("percent")
        .color("type")
        .label("type", {
          offset: -10,
        })
        .tooltip("type*percent*nameValue*value", (item, percent, nv, v) => {
          percent = `${nv}个型号,${v}种浏览器,${(percent * 100).toFixed(2)}%`;
          return {
            name: item,
            value: percent,
          };
        })
        .style({
          lineWidth: 1,
          stroke: "#fff",
        });

      const outterView = this.chart.createView();
      const dv1 = new DataView();
      dv1.source(this.data).transform({
        type: "percent",
        field: "value",
        dimension: "name",
        as: "percent",
      });

      outterView.data(dv1.rows);
      outterView.scale({
        percent: {
          formatter: (val) => {
            val = (val * 100).toFixed(2) + "%";
            return val;
          },
        },
      });
      outterView.coordinate("theta", {
        innerRadius: 0.5 / 0.75,
        radius: 0.75,
      });
      outterView
        .interval()
        .adjust("stack")
        .position("percent")
        .color("name", colorList)
        .label("name")
        .tooltip("name*percent*value", (item, percent, value) => {
          percent = `${value}种浏览器, ${(percent * 100).toFixed(2)}%`;
          return {
            name: item,
            value: percent,
          };
        })
        .style({
          lineWidth: 1,
          stroke: "#fff",
        });

      this.chart.interaction("element-highlight");

      this.chart.render();
    },
  },
};
</script>
