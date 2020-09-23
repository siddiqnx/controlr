import React, { useEffect } from 'react'
import { DateTime } from 'luxon';
import Chart from 'react-apexcharts';
import { useState } from 'react';
import { ChartContainer } from 'components/SectionContainers/ChartContainer';

export const UsageAreaChart = ({ usageData, customOptions }) => {
  const [chartData, setChartData] = useState();
  const options = {
    chart: {
      fontFamily: 'inter',
      toolbar: {
        show: false
      }
    },
    tooltip: {
      style: {
        fontSize: '10px',
        fontFamily: 'inter',
        backgroundColor: 'black',
        color: 'black'
      },
    },
    stroke: {
      curve: 'smooth'
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      categories: Object.values(usageData).map((value) => DateTime.fromISO(value.timestamp).toLocaleString(DateTime.DATETIME_SHORT)),
      axisBorder: {
        show: false
      },
      labels: {
        datetimeUTC: false,
        style: {
          colors: '#818DBA'
        }
      }
    },
    yaxis: {
      labels: {
        formatter: function (val, index) {
          if (val < 1000)
            return `${val} Wh`;
          return `${val / 1000} U`
        },
        style: {
          colors: '#818DBA'
        }
      }
    },
    grid: {
      show: false,
    },
    ...customOptions
  }

  useEffect(() => {
    if (usageData) {
      setChartData({
        series: [{
          name: 'Date',
          data: Object.values(usageData).map((value) => value.usage.toFixed(0))
        }]
      })
    }
  }, [usageData])


  return (
    <ChartContainer>
      {chartData &&
        <Chart
          type='area'
          options={options}
          series={chartData.series}
        />
      }
    </ChartContainer>
  )
}
