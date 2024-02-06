import { ChartConfiguration, ChartType } from 'chart.js';

//Area Chart
export let AreaChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      titleColor: '#6b6f80',
      bodyColor: '#6b6f80',
      backgroundColor: '#fff',
      cornerRadius: 3,
      intersect: false,
    },

    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: 'transparent',
        borderColor: 'transparent',
      },
      ticks: {
        // fontSize: 2,
        color: 'transparent',
      },
    },
    y: {
      display: false,
      ticks: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};
export let AreaChartType: ChartType = 'line';
export let AreaChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Market value',
      data: [30, 70, 30, 100, 50, 130, 100, 140],
      backgroundColor: 'transparent',
      borderColor: '#0774f8',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: '#0774f8',
      pointBorderColor: '#0774f8',
      pointHoverBorderColor: '#0774f8',
      pointBorderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 2,
      borderWidth: 4,
      tension:0.4
    },
  ],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};

export let AreaChartData1: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Market value',
      data: [24, 18, 28, 21, 32, 28, 30],
      backgroundColor: 'transparent',
      borderColor: '#1fc874',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: '#1fc874',
      pointBorderColor: '#1fc874',
      pointHoverBorderColor: '#1fc874',
      pointBorderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 2,
      borderWidth: 4,
      tension:0.4
    },
  ],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};
export let AreaChartData2: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Market value',
      data: [30, 70, 30, 100, 50, 130, 100, 140],
      backgroundColor: 'transparent',
      borderColor: '#f7b731',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: '#f7b731',
      pointBorderColor: '#f7b731',
      pointHoverBorderColor: '#f7b731',
      pointBorderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 2,
      borderWidth: 4,
      tension:0.4
    },
  ],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};
export let AreaChartData3: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Market value',
      data: [24, 18, 28, 21, 32, 28, 30],
      backgroundColor: 'transparent',
      borderColor: '#f5334f',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: '#f5334f',
      pointBorderColor: '#f5334f',
      pointHoverBorderColor: '#f5334f',
      pointBorderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 2,
      borderWidth: 4,
      tension:0.4
    },
  ],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};
