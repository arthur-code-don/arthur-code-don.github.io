// Fetch the data
fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
  .then(response => response.json())
  .then(data => {
    // Process the data
    const dataset = data.data.map(d => ({
      date: new Date(d[0]),
      gdp: d[1]
    }));

    // Set up the chart dimensions
    const margin = { top: 20, right: 20, bottom: 50, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create the SVG container
    const svg = d3.select('#chart')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Define the scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(dataset, d => d.date))
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, d => d.gdp)])
      .range([height, 0]);

    // Create the axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // Append the axes to the chart
    svg.append('g')
      .attr('id', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    svg.append('g')
      .attr('id', 'y-axis')
      .call(yAxis);

    // Create the bars
    svg.selectAll('.bar')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('data-date', d => d.date.toISOString().substring(0, 7))
      .attr('data-gdp', d => d.gdp)
      .attr('x', d => xScale(d.date))
      .attr('y', d => yScale(d.gdp))
      .attr('width', width / dataset.length)
      .attr('height', d => height - yScale(d.gdp))
      .on('mouseover', (event, d) => {
        // Show the tooltip
        const tooltip = d3.select('#tooltip');
        tooltip.select('#date').text(formatDate(d.date));
        tooltip.select('#gdp').text(formatGDP(d.gdp));

        tooltip.style('left', event.pageX + 'px')
          .style('top', event.pageY - 50 + 'px')
          .classed('hidden', false);
      })
      .on('mouseout', () => {
        // Hide the tooltip
        d3.select('#tooltip').classed('hidden', true);
      });

    // Format the GDP values
    function formatGDP(gdp) {
      return (gdp / 1000).toFixed(1);
    }

    // Format the date
    const formatDate = d3.timeFormat('%Y-%m');

    // Add the title
    d3.select('#title').text(data.name);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
