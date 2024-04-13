import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import classes from './PopulationGraph.module.css';

const PopulationChart = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const labels = data.data.map(entry => entry.Year).sort();
        const values = data.data.map(entry => entry.Population).reverse();

        const ctx = document.getElementById('bar-chart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Population (millions)',
              borderColor: '#4a5ad9',
              data: values
            }]
          },
          options: {
            plugins: {
              legend: { display: true },
              title: {
                display: true,
                text: 'U.S Population'
              }
            }
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div className={classes['population-header']}>
        <h2>Graph population data</h2>
      </div>
      <div className='p-3'>
        <p className={`${classes['population-text']}`}><span className='text-danger fw-bold'>IMPORTANT!</span> In the document it was asked to plot the graph between population and different nations. But the value of nations was same in all objects so graph has been plotted between population and different years</p>
      </div>
      <div className={classes.chartContainer}>
        <canvas id="bar-chart" className={classes['bar-chart']}></canvas>
      </div>
    </div>
  );
};

export default PopulationChart;
