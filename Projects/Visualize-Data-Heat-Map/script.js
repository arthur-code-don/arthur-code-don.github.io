// Fetch the data
fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json')
  .then(response => response.json())
  .then(data => {
    // Process the data
    const dataset = data.monthlyVariance;
    const baseTemperature = data.baseTemperature;

    // Set up the chart dimensions
    const margin = { top: 100, right: 20, bottom: 100, left: 60 };
    const width = 1200 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Create the SVG container
    const svg = d3.select('#chart')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Define the x and y scales
    const xScale = d3.scaleBand()
      .domain(dataset.map(d => d.year))
      .range([0, width]);

    const yScale = d3.scaleBand()
      .domain(dataset.map(d => d.month))
      .range([0, height]);

    // Define the color scale
    const colorScale = d3.scaleLinear()
      .domain(d3.extent(dataset, d => d.variance))
      .range(['#4575b4', '#ffffbf', '#a50026']);

    // Create the x and y axes
    const xAxis = d3.axisBottom(xScale).tickValues(xScale.domain().filter(year => year % 10 === 0));
    const yAxis = d3.axisLeft(yScale)
    .tickFormat((monthIndex) => {
      const date = new Date(0);
      date.setUTCMonth(monthIndex);
      return d3.timeFormat('%B')(date);
    });
  
    // Append the axes to the chart
    svg.append('g')
      .attr('id', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    svg.append('g')
      .attr('id', 'y-axis')
      .call(yAxis);

    // Create the cells
    svg.selectAll('.cell')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('class', 'cell')
      .attr('x', d => xScale(d.year))
      .attr('y', d => yScale(d.month))
      .attr('width', xScale.bandwidth())
      .attr('height', yScale.bandwidth())
      .attr('fill', d => colorScale(d.variance))
      .attr('data-month', d => d.month - 1)
      .attr('data-year', d => d.year)
      .attr('data-temp', d => baseTemperature + d.variance)
      .on('mouseover', (event, d) => {
        const tooltip = d3.select('#tooltip');
        tooltip.select('#year').text(d.year);
        tooltip.select('#month').text(d3.timeFormat('%B')(new Date(0, d.month - 1)));
        tooltip.select('#temperature').text((baseTemperature + d.variance).toFixed(2));

        tooltip.style('left', event.pageX + 'px')
          .style('top', event.pageY - 100 + 'px')
          .classed('hidden', false);
      })
      .on('mouseout', () => {
        d3.select('#tooltip').classed('hidden', true);
      });

    // Create the legend
    const legendWidth = 300;
    const legendHeight = 20;
    const legendColors = ['#4575b4', '#ffffbf', '#a50026'];
    const legendValues = [-6, 0, 6];

    const legend = svg.append('g')
      .attr('id', 'legend')
      .attr('transform', `translate(${width / 2 - legendWidth / 2}, ${height + 50})`);

    legend.selectAll('.legend-rect')
      .data(legendColors)
      .enter()
      .append('rect')
      .attr('class', 'legend-rect')
      .attr('x', (d, i) => i * legendWidth / 3)
      .attr('y', 0)
      .attr('width', legendWidth / 3)
      .attr('height', legendHeight)
      .attr('fill', d => d);

    const legendScale = d3.scaleLinear()
      .domain(d3.extent(legendValues))
      .range([0, legendWidth]);

    const legendAxis = d3.axisBottom(legendScale)
      .tickValues(legendValues)
      .tickFormat(d3.format('.1f'));

    legend.append('g')
      .attr('transform', `translate(0, ${legendHeight})`)
      .call(legendAxis);

    // Set the base temperature
    d3.select('#base-temp').text(baseTemperature);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });



  