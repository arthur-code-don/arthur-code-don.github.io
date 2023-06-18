// Fetch the data
fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')
  .then(response => response.json())
  .then(data => {
    // Process the data
    const dataset = data.map(d => ({
      year: new Date(d.Year, 0),
      time: new Date(0, 0, 0, 0, d.Time.split(':')[0], d.Time.split(':')[1]),
      name: d.Name,
      nationality: d.Nationality,
      doping: d.Doping
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
      .domain(d3.extent(dataset, d => d.year))
      .range([0, width]);

    const yScale = d3.scaleTime()
      .domain(d3.extent(dataset, d => d.time))
      .range([height, 0]);

    // Create the axes
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat('%Y'));
    const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%M:%S'));

    // Append the axes to the chart
    svg.append('g')
      .attr('id', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    svg.append('g')
      .attr('id', 'y-axis')
      .call(yAxis);

    // Create the dots
    svg.selectAll('.dot')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', d => xScale(d.year))
      .attr('cy', d => yScale(d.time))
      .attr('r', 6)
      .attr('data-xvalue', d => d.year)
      .attr('data-yvalue', d => d.time)
      .on('mouseover', (event, d) => {
        // Show the tooltip
        const tooltip = d3.select('#tooltip');
        tooltip.select('#name').text(d.name);
        tooltip.select('#nationality').text(d.nationality);
        tooltip.select('#year').text(d3.timeFormat('%Y')(d.year));
        tooltip.select('#time').text(d3.timeFormat('%M:%S')(d.time));
        tooltip.select('#doping').text(d.doping);

        tooltip.style('left', event.pageX + 'px')
          .style('top', event.pageY - 100 + 'px')
          .classed('hidden', false);
      })
      .on('mouseout', () => {
        // Hide the tooltip
        d3.select('#tooltip').classed('hidden', true);
      });

    // Add a legend
    const legend = svg.append('g')
      .attr('id', 'legend')
      .attr('transform', `translate(${width - 180}, ${height - 80})`);

    legend.append('circle')
      .attr('class', 'dot')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 6);

    legend.append('text')
      .attr('x', 12)
      .attr('y', 4)
      .text('Riders with doping allegations');

    // Add the title
    d3.select('#title').text('Doping in Professional Bicycle Racing');
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
