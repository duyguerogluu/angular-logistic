import { ChartConfiguration, ChartType } from "chart.js";
import { ApexChart, ApexFill, ApexNonAxisChartSeries, ApexPlotOptions, ApexStroke } from "ng-apexcharts";

//Chart js
export let lineChartOptions: ChartConfiguration['options'] = {
    
    maintainAspectRatio: false,
    responsive: true,
    plugins:{
        legend: {
            position: "top",
            display:true
        },
        tooltip: {
            enabled: true,
        },
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    

    scales: {
        x: {
            ticks: {
                color: '#8492a6',
            },
            display: true,
            grid: {
                color: 'transparent',
                borderColor: 'transparent'
            }
        },
        'y-axis-0':{ position: 'left' },
    },
    
}

export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
export let lineChartData: ChartConfiguration['data'] = {datasets: [
    {
        label: 'TOTAL BUDGET',
        data: [0, 45, 30, 75, 15, 94, 40, 115, 30, 105, 65, 110],
        borderWidth: 3,
        backgroundColor: 'transparent',
        borderColor: '#6259ca',
        pointBackgroundColor: '#ffffff',
        pointRadius: 0,
        tension: 0.5,
        
    },
    {
        label: 'Total Sales',
        data: [0, 60, 20, 130, 75, 130, 75, 140, 64, 130, 85, 120],
        borderWidth: 3,
        backgroundColor: 'transparent',
        borderColor: '#f99433',
        pointBackgroundColor: '#ffffff',
        pointRadius: 0,
        borderDash: [7,3],
        tension: 0.5
    },
    {
        label: 'area',
        data: [0, 105, 70, 175, 85, 154, 90, 185, 120, 145, 185, 130],
        borderWidth: 0,
        backgroundColor: 'rgba(119, 119, 142, 0.05)',
        borderColor: 'rgba(119, 119, 142, 0.05)',
        pointBackgroundColor: '#ffffff',
        pointRadius: 0,
        borderDash: [7,3],
        tension: 0.5,
        fill: 'origin'
    },

],
labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
}
type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
    stroke: ApexStroke;
  };
  
export let OrderData:ChartOptions = {

    chart: {
        type: 'radialBar',
        offsetX: 0,
        offsetY: 10,
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            
            hollow: {
                size: '60%',
                imageWidth: 150,
                imageHeight: 150,
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5
                },
            },
            track: {
                strokeWidth: "80%",
                background: '#ecf0fa',
            },
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 30,
                },
                value: {
                    offsetY: -10,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val:any) {
                        return val + "%";
                    }
                }
            }
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "gradient",
            type: "horizontal",
            shadeIntensity: .5,
            gradientToColors: ['#6259ca'],
            inverseColors: !0,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    stroke: {
        dashArray: 4
    },
    series: [83],
    labels: [""]

};
