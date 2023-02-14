<template>
  <div class="map">
    <div class="china" ref="china"></div>
    <div class="svg">
      <svg viewbox="0,0,60,10" width="100" height="80">
        <g>
          <polyline points="0,0 100,0 100,80 85,80 85,70 75,70 75,80 0,80 0,30 10,30 10,20 0,20 0,0"
            style="fill:none;stroke-width:2px;stroke:#4e9fd3">
          </polyline>
          <circle cx="100" cy="60" r="8" class="circle"> </circle>
          <text x="14" y="28" class="text" style="fill:#fff">违章情况 (份)</text>
          <text x="7" y="60" class="text" style="fill:#63c1ed;font-size:20px;">67</text>
          <text x="34" y="48" class="text" style="fill:#a82a7e;font-size:9px; font-weight:700;">日环比 +3%</text>
          <text x="34" y="63" class="text" style="fill:#2ad98f;font-size:9px;">周环比 -2%</text>
        </g>
      </svg>
      <svg viewbox="0,0,60,10" width="150" height="80">
        <polyline points="0,0 150,0 150,80 120,80 120,75 110,75 110,80 0,80 0,30 10,30 10,20 0,20 0,0"
          style="fill:none;stroke-width:2px;stroke:#4e9fd3">
        </polyline>
        <circle cx="150" cy="60" r="8" class="circle"> </circle>
        <text x="14" y="28" class="text" style="fill:#fff">本月增长指数</text>
        <text x="7" y="60" class="text" style="fill:#63c1ed;font-size:25px;">1.4</text>
        <text x="49" y="48" class="text" style="fill:#63c1ed;font-size:11px; font-weight:700;">上升</text>
        <text x="49" y="63" class="text" style="fill:#fff;font-size:9px;">平均数量：335份</text>
      </svg>
      <svg viewbox="0,0,60,10" width="100" height="80">
        <g>
          <polyline points="0,0 100,0 100,80 85,80 85,70 75,70 75,80 0,80 0,30 10,30 10,20 0,20 0,0"
            style="fill:none;stroke-width:2px;stroke:#4e9fd3">
          </polyline>
          <circle cx="100" cy="60" r="8" class="circle"> </circle>
          <text x="14" y="28" class="text" style="fill:#fff">拥堵分布</text>
          <text x="7" y="60" class="text" style="fill:#63c1ed;font-size:20px;">99</text>
          <text x="34" y="48" class="text" style="fill:#a82a7e;font-size:9px; font-weight:700;">日环比 +3%</text>
          <text x="34" y="63" class="text" style="fill:#2ad98f;font-size:9px;">周环比 -2%</text>
        </g>
      </svg>
      <svg viewbox="0,0,60,10" width="130" height="80">
        <polyline points="0,0 130,0 130,80 120,80 120,70 110,70 110,80 0,80 0,30 10,30 10,20 0,20 0,0"
          style="fill:none;stroke-width:2px;stroke:#4e9fd3">
        </polyline>
        <circle cx="130" cy="60" r="8" class="circle"> </circle>
        <text x="14" y="28" class="text" style="fill:#fff">当日出勤</text>
        <text x="7" y="60" class="text" style="fill:#63c1ed;font-size:25px;">1421</text>
        <text x="69" y="48" class="text" style="fill:#2ad98f;font-size:9px; font-weight:700;">日环比 +3%</text>
      </svg>
    </div>
    <div class="system">
      <brain>奈何桥路况分析系统</brain>
      <div class="line" ref="line">

      </div>
    </div>
    <div class="count">
      <div class="top">
        <p>当日处理 1276 件</p>
        <p>当日设备维护 2344万元</p>
      </div>
      <div class="top">
        <p>当日处理事故 2120 笔</p>
        <p>当日路政建设 2344万元</p>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import '../assets/china.js'
import * as echarts from 'echarts'
const china = ref<HTMLElement>()
const line = ref<HTMLElement>()

const initmap = () => {
  const mycharts = echarts.init(china.value as HTMLElement)
  let series = [];
  let data = [
    [
      {
        name: '黑龙江',
        value: 0,
      },
    ],
    [
      {
        name: '内蒙古',
        value: 0,
      },
    ],
    [
      {
        name: '吉林',
        value: 0,
      },
    ],
    [
      {
        name: '辽宁',
        value: 0,
      },
    ],
    [
      {
        name: '河北',
        value: 0,
      },
    ],
    [
      {
        name: '天津',
        value: 0,
      },
    ],
    [
      {
        name: '山西',
        value: 0,
      },
    ],
    [
      {
        name: '陕西',
        value: 0,
      },
    ],
    [
      {
        name: '甘肃',
        value: 0,
      },
    ],
    [
      {
        name: '宁夏',
        value: 0,
      },
    ],
    [
      {
        name: '青海',
        value: 0,
      },
    ],
    [
      {
        name: '新疆',
        value: 0,
      },
    ],
    [
      {
        name: '西藏',
        value: 0,
      },
    ],
    [
      {
        name: '四川',
        value: 0,
      },
    ],
    [
      {
        name: '重庆',
        value: 0,
      },
    ],
    [
      {
        name: '山东',
        value: 0,
      },
    ],
    [
      {
        name: '河南',
        value: 0,
      },
    ],
    [
      {
        name: '江苏',
        value: 0,
      },
    ],
    [
      {
        name: '安徽',
        value: 0,
      },
    ],
    [
      {
        name: '湖北',
        value: 0,
      },
    ],
    [
      {
        name: '浙江',
        value: 0,
      },
    ],
    [
      {
        name: '福建',
        value: 0,
      },
    ],
    [
      {
        name: '江西',
        value: 0,
      },
    ],
    [
      {
        name: '湖南',
        value: 0,
      },
    ],
    [
      {
        name: '贵州',
        value: 0,
      },
    ],
    [
      {
        name: '广西',
        value: 0,
      },
    ],
    [
      {
        name: '海南',
        value: 0,
      },
    ],
    [
      {
        name: '北京市',
        value: 1,
      },
    ],
  ];
  series.push(//设计移动曲线
      {
        type: 'lines',
        zlevel: 2,
        polyline: true,//开启多线段，线段可以通过lineStyle.curveness配置为曲线

        effect: {//特效显示
          show: true,
          period: 4, //箭头指向速度，值越小速度越快
          trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'arrow', //箭头图标
          symbolSize: 5, //图标大小
          color: '#d5ffff',
        },
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(136, 183, 236,0)',
            },
            {
              offset: 0.5,
              color: 'rgb(136, 183, 236,0.5)',
            },
            {
              offset: 1,
              color: 'rgb(136, 183, 236,1)',
            },
          ]),
          width: 1.5, //尾迹线条宽度
          opacity: 1, //尾迹线条透明度
          curveness: -0.3, //尾迹线条曲直度
        },
        data:
          [//黑龙江到各省市
            { coords: [[127.9688, 45.368], [101.4038, 36.8207]] },
            { coords: [[127.9688, 45.368], [102.9199, 25.4663]] },
            { coords: [[127.9688, 45.368], [117.1582, 36.8701]] },
            { coords: [[127.9688, 45.368], [119.4543, 25.9222]] },
            //山东到各省市
            { coords: [[117.1582, 36.8701], [101.4038, 36.8207]] },
            { coords: [[117.1582, 36.8701], [87.9236, 43.5883]] },
            { coords: [[117.1582, 36.8701], [116.0046, 28.6633], [113.12244, 23.009505]] },
            { coords: [[117.1582, 36.8701], [119.5313, 28.8773]] },
            //江西到各省市
            { coords: [[116.0046, 28.6633], [101.4038, 36.8207]] },
            { coords: [[116.0046, 28.6633], [102.9199, 25.4663]] },
            { coords: [[116.0046, 28.6633], [113.12244, 23.009505]] },
            { coords: [[116.0046, 28.6633], [119.4543, 25.9222]] },
            //浙江到各省市
            { coords: [[119.5313, 28.8773], [101.4038, 36.8207]] },
            { coords: [[119.5313, 28.8773], [116.0046, 28.6633]] },
            { coords: [[119.5313, 28.8773], [119.4543, 25.9222]] },
            //湖北
            { coords: [[112.3896, 30.6628], [87.9236, 43.5883]] },
            { coords: [[112.3896, 30.6628], [102.9199, 25.4663]] },
            // 广西
            { coords: [[108.9199, 23.8663], [102.9199, 25.4663]] },

          ]
      }
    );
  series.push(
    {//设计图形原点波纹显示
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 4,
      rippleEffect: {
        //涟漪特效
        period: 4, //动画时间，值越小速度越快
        brushType: 'stroke', //波纹绘制方式 stroke, fill
        scale: 3, //波纹圆环最大限制，值越大波纹越大
      },
      label: {
        show: false,
        position: 'right', //显示位置
        offset: [5, 0], //偏移设置
        formatter: function (params: any) {
          //圆环显示文字
          return params.data.name;
        },
        fontSize: 13,
      },
      emphasis: {
        show: true,
      },
      symbol: 'circle',
      symbolSize: 13,
      itemStyle: {
        show: false,
        color: '#22de99',
      },
      data: [
        { name: "新疆", value: [87.9236, 43.5883] },
        { name: "青海", value: [101.4038, 36.8207] },
        { name: "云南", value: [102.9199, 25.4663] },
        { name: "江西", value: [116.0046, 28.6633] },
      ]
    }, {
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 4,
    rippleEffect: {
      //涟漪特效
      period: 4, //动画时间，值越小速度越快
      brushType: 'stroke', //波纹绘制方式 stroke, fill
      scale: 3, //波纹圆环最大限制，值越大波纹越大
    },
    label: {
      show: false,
      position: 'right', //显示位置
      offset: [5, 0], //偏移设置
      formatter: function (params: any) {
        //圆环显示文字
        return params.data.name;
      },
      fontSize: 13,
    },
    emphasis: {
      show: true,
    },
    symbol: 'circle',
    symbolSize: 10,
    itemStyle: {
      show: false,
      color: '#dee759',
    },
    data: [
      { name: "广东", value: [113.12244, 23.009505] },
      { name: "福建", value: [119.4543, 25.9222] },
      { name: "山东", value: [117.1582, 36.8701] },
      { name: "黑龙江", value: [127.9688, 45.368] },
    ]
    },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 4,
      rippleEffect: {
        //涟漪特效
        period: 4, //动画时间，值越小速度越快
        brushType: 'stroke', //波纹绘制方式 stroke, fill
        scale: 3, //波纹圆环最大限制，值越大波纹越大
      },
      label: {
        show: false,
        position: 'right', //显示位置
        offset: [5, 0], //偏移设置
        formatter: function (params: any) {
          //圆环显示文字
          return params.data.name;
        },
        fontSize: 13,
      },
      emphasis: {
        show: true,
      },
      symbol: 'circle',
      symbolSize: 7,
      itemStyle: {
        show: false,
        color: '#6dcee4',
      },
      data: [
        { name: "云南", value: [108.9199, 23.8663] },
        { name: "湖北", value: [112.3896, 30.6628] },
        { name: "浙江", value: [119.5313, 28.8773] },
      ]
    },
  )
  series.push(//添加中国地图
    {
      name: "中国地图",
      type: "map",
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["65%", "49%"], //地图位置
      layoutSize: "108%",//设置地图显示大小
      zoom: 1, //当前视角的缩放比例
      scaleLimit: {
        //滚轮缩放的极限控制
        min: 1,
        max: 2,
      },
      // label: {
      //   show: true,//显示名称
      //   color: "#fff",
      //   fontSize: 12,//显示名称字体大小
      // },
      itemStyle: {
        areaColor: "#0c3178",
        borderColor: "#1cccff",
        borderWidth: 1.8,
      },
      emphasis: {
        areaColor: "#56b1da",
        focus: "self",
        label: {
          show: true,
          color: "#fff",
        },
        itemStyle: {
          areaColor: "skyblue"
        }
      },
      select: {
        itemStyle: {
          areaColor: "#56b1da"
        }
      },
      data: data,
    },
  )

  let option = {
    geo: {
      show: true,
      top: "top",
      left: "left",
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["64%", "49%"],//改变地图位置
      layoutSize: "100%",//设置后面阴影显示大小
      itemStyle: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0c3178", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
      },
      emphasis: {
        areaColor: "#0f5d9d",
      },
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: series
  }

  mycharts.setOption(option)
}
const initline = () => {
  const linechart = echarts.init(line.value as HTMLElement)
  let option = {
    title: [
      {
        top: "32",
        left: "35",
        name: "整体占比",
        text: "整体占比",
        textStyle: {
          color: "#fff",
          fontSize: "12px"
        }
      }, {
        name: "走势变化",
        top: "32",
        left: "200",
        text: "走势变化",
        textStyle: {
          color: "#fff",
          fontSize: "12px"
        }
      }
    ],
    xAxis: {
      name: "时间",
      nameGap: -6,
      type: "category",
      data: ['8', '10', '12', '14', '16', '18'],
      axisLine: {
        lineStyle: {
          color: "#fff"
        }
      },
      axisLabel: {
        show: true,
        fontSize: 10,
        align: 'right'
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      gridIndex: 0,
      splitNumber: 4,
      axisLine: {
        lineStyle: {
          color: "#fff"
        }
      },
      axisLabel: {
        show: true,
        fontSize: 10,
      }
    },
    tooltip: {
      trigger: "item",
      axisPointer: {
        type: "cross",
        label: {
          show: false
        }
      }
    },
    grid: { top: '60', left: "150", bottom: "30", right: "20" },
    series: [
      {
        id: "pie",
        name: "整体占比",
        type: "pie",
        top: "40",
        left: "-180",
        radius: ['30%', '45%'],
        label: {
          show: true,
          color: "#fff",
          position: 'outside'
        },
        labelLine: {
          length: 0,
          length2: -5,
        },
        data: [
          { value: 20, name: "A:20%" },
          { value: 40, name: "B:40%" },
          { value: 40, name: "C:40%" }
        ]
      },
      {
        showSymbol: false,

        smooth: true,
        name: "走势变化",
        type: "line",
        data: [300, 430, 700, 450, 580, 400],
        lineStyle: {
          color: "#fff",
          width: 0.5,
        },
        areaStyle: {
          opacity: 1,
          color: "#62a2d7"
        },
      }
    ]
  }
  linechart.setOption(option)
}
onMounted(() => {
  initmap()
  initline()
})

</script>
<style lang='less' scoped>
.map {
  width: 100%;
  height: 511px;
  border: 1px solid #d5ffff;
  position: relative;

  .china {
    width: 100%;
    height: 511px;
  }

  .svg {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 500px;
    height: 100px;
    display: flex;

    svg {
      margin-right: 5px;

      .circle {
        stroke: #4e9fd3;
        fill: #074b8c;
      }

      .text {
        font-size: 11px;
        letter-spacing: 1px;
      }
    }
  }

  .system {
    position: absolute;
    top: 220px;
    left: 15px;
    width: 310px;
    height: 180px;
    background-color: transparent;
    border: 1px solid #d5ffff;

    .line {
      width: 310px;
      height: 140px;
    }
  }

  .count {
    position: absolute;
    top: 410px;
    left: 15px;
    width: 310px;
    height: 60px;
    border: 1px solid #d5ffff;

    .top {
      margin-top: 3px;
      height: 25px;
      width: 310px;
      display: flex;
      font-size: 13px;
      color: #d5ffff;
      padding-left: 30px;

      &:nth-child(2) {
        &::before {
          top: 40px;
        }
      }

      &::before {
        content: "";
        position: absolute;
        left: 13px;
        top: 11px;
        display: block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: #43b2e5;
      }

      p {
        margin: 0 3px 0 3px;
        padding: 0;
        height: 25px;
        text-align: left;
        line-height: 25px;
      }
    }
  }
}
</style>