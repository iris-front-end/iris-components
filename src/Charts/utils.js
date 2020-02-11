import { DateTime } from 'luxon';

import variables from 'styles/variables';
import colors from 'styles/colors';

export const charUtils = {
  getOptions: ({ graphicData, type, title, legends, hasLegends }) => {
    let labels = null;
    let values = null;
    let legendPadding = null;
    let valuePadding = null;
    if (type !== 'heatmap') {
      labels = graphicData.map(elem => elem.name);
      values = graphicData.map(elem => elem.value.toString());
      legendPadding = charUtils.getLongestWord(labels);
      valuePadding = charUtils.getLongestWord(values);
    }

    let options = {
      title: {
        text: title,
        fontStyle: variables.regular,
        color: '#333',
      },
      grid: {
        left: type === 'bar' ? legendPadding * 8 : valuePadding * 10,
      },
      legend: (hasLegends && legends) || [],
      ...charUtils.getTooltip(type, graphicData),
      toolbox: {
        feature: {
          saveAsImage: {
            show: true,
            title: 'save',
          },
        },
      },
      series: [
        {
          name: 'Sales',
          type: type === 'column' ? 'bar' : type,
          smooth: true,
          areaStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          data: [...charUtils.getData(type, graphicData)],
          color: charUtils.colors,
          hoverAnimation: false,
          symbolSize: 6,
          showSymbol: false,
        },
      ],
    };
    if (type !== 'pie') {
      options = { ...options, ...charUtils.getAxis(type, graphicData) };
    } else {
      options.series.forEach(elem => {
        elem.label = {
          show: true,
          formatter: function(p) {
            return p.data.name + ': ' + p.data.value;
          },
        };
      });
    }

    if (type === 'heatmap') {
      options.series.forEach(elem => {
        elem.coordinateSystem = 'calendar';
      });
    }
    return options;
  },
  getAxis: (type, graphicData) => {
    const labels = graphicData.map(elem => elem.name);
    return type === 'bar'
      ? {
          yAxis: {
            data: labels,
            type: 'category',
          },
          xAxis: {
            type: 'value',
          },
        }
      : type === 'column'
      ? {
          yAxis: {
            type: 'value',
          },
          xAxis: { data: labels, type: 'category' },
        }
      : type === 'heatmap'
      ? {
          visualMap: {
            min: Math.min(...graphicData.map(elem => elem[1])),
            max: Math.max(...graphicData.map(elem => elem[1])),
            type: 'piecewise',
            orient: 'horizontal',
            left: 'center',
            top: 65,
            textStyle: {
              color: colors.black,
            },
            inRange: {
              color: ['#CEEDE7', '#61cdbb', '#4DA395', '#3C6B73'],
            },
          },
          calendar: {
            top: 120,
            left: 30,
            right: 30,
            cellSize: ['auto', 13],
            range: '2016',
            itemStyle: {
              normal: { borderWidth: 0.5 },
            },
            yearLabel: { show: false },
            dayLabel: {
              show: false,
              nameMap: ['Do', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
              align: 'left',
            },
          },
        }
      : {
          xAxis: {
            data: labels,
            type: 'category',
            boundaryGap: false,
          },
          yAxis: {},
        };
  },
  getData: (type, graphicData) => {
    let i = 0;

    return graphicData.map(elem => {
      if (type === 'column') {
        if (i > charUtils.colors.length) {
          i = 0;
        }
        i++;
        elem.itemStyle = { color: charUtils.colors[i] };
      }
      return elem;
    });
  },
  getLongestWord: arr => {
    const longestWord = arr.reduce(
      (longest, currentWord) =>
        currentWord.length > longest.length ? currentWord : longest,
      ''
    );
    return longestWord.length;
  },
  getTooltip: (type, graphicData) =>
    type === 'heatmap'
      ? {
          tooltip: {
            position: 'top',
            formatter: function(p) {
              const dateFormatted = DateTime.fromISO(p.data[0]).toFormat(
                'dd/MM/yyyy'
              );

              return dateFormatted + ' : ' + p.marker + ' ' + p.data[1];
            },
          },
        }
      : {
          tooltip: {
            trigger: 'axis',
          },
        },
  colors: [
    '#eda54f',
    '#ea6f6f',
    '#b79bfb',
    '#4d93cc',
    '#3271a5',
    '#45a577',
    '#ff9655',
    '#E8DC32',
    '#65EBBA',
  ],
};
