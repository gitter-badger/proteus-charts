class SvgLinechartStrategy {
  constructor(data, config) {
    this._loadConfigOnContext(config);
    //Create range function
    this.xAxisName = 'x';
    this.yAxisName = 'y';

    this.x = d3.scale.linear().range([0, this.width]);
    this.y = d3.scale.linear().range([this.height, 0]);

    var width = this.width - this.margin.left - this.margin.right;
    var height = this.height - this.margin.top - this.margin.bottom;

    //Create scale
    this.xAxis = d3.svg.axis()
      .scale(this.x)
      .orient('bottom')
      .ticks(10);

    this.yAxis = d3.svg.axis()
      .scale(this.y)
      .orient('left')
      .innerTickSize(-this.width)
      .outerTickSize(0)
      .tickPadding(20)
      .ticks(this.ticks, this.tickLabel);

    this.colors = d3.scale.category20();

    this.keyFunction = (d => d.x);
  };

  _applyCSS() {
    var style = this.style;
    for (let key in style) {
      var value = style[key];
      d3.selectAll(key).style(value);
    }
  }
  
	/**
	 * Renders a linechart based on data object
	 * @param  {Object} data Data Object. Contains an array with x and y properties.
	 * 
	 */
  draw(data) {
    if (this._sortData) {
      utils.sortBy(data, {
        prop: this._sortData.prop,
        desc: this._sortData.descending
      });
    }

    if (!this._initialized) {
      this._initialize();
    }
    //Re-scale axis
    // this.x.domain([0, d3.max(data, function (d) { return d.x; })]);
    this.x.domain([d3.min(data, d => d.x), d3.max(data, d => d.x)]);
    this.y.domain([0, d3.max(data, d => d.y)]);

    //Create a transition effect for axis rescaling
    this.svg.select('.x.axis').transition().duration(this.transitionDuration).call(this.xAxis);
    this.svg.select('.y.axis').transition().duration(this.transitionDuration).call(this.yAxis);

    // Bind data
    var x = this.x
    var y = this.y
    var line = d3.svg.line()
      .x(function (d) { return x(d.x); })
      .y(function (d) { return y(d.y) });

    // Create path and bind data to it
    var path = this.svg.select('path')
      .datum(data, this.keyFunction)
      .attr('d', line);

    // Append markers to line
    if (this.markers) {
      switch (this.markers.shape) {
        case 'circle':
          this.svg.selectAll('circle')
            .data(data, this.keyFunction)
            .enter().append('circle')
            .attr('cx', function (d) { return x(d.x); })
            .attr('cy', function (d) { return y(d.y); })
            .attr('r', this.markers.size)
            .style({
              'fill': this.markers.color,
              'stroke': this.markers.outlineColor,
              'stroke-width': this.markers.outlineWidth
            });
          break;         
      }
    }

    // Add events to the line
    path
      .on('mousedown.user', this.events.down)
      .on('mouseup.user', this.events.up)
      .on('mouseleave.user', this.events.leave)
      .on('mouseover.user', this.events.over)
      .on('click.user', this.events.click);

    this._applyCSS();
  };


  _initialize() {
    var width = this.width + this.margin.left + this.margin.right;
    var height = this.height + this.margin.left + this.margin.right;

    //Create a global 'g' (group) element
    this.svg = d3
      .select(this.selector).append('svg')
      .attr({ 'width': width, 'height': height })
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    // Append the line path
    this.svg.append('path');

    //Append a new group with 'x' aXis
    this.svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(this.xAxis);

    //Append a new group with 'y' aXis
    this.svg.append('g')
      .attr('class', 'y axis')
      .attr('stroke-dasharray', '5, 5')
      .call(this.yAxis)
      .append('text');
    this._initialized = true;
  };

	/**
	 * This method adds config options to the chart context.
	 * @param  {Object} config Config object
	 */
  _loadConfigOnContext(config) {
    config = config || { events: {} };
    if (!config.events) {
      config.events = {};
    }
    this.margin = config.margin || _default.linechart.margin;
    this.width = config.width || _default.linechart.width;
    this.height = config.height || _default.linechart.height;
    this.ticks = config.ticks || _default.linechart.ticks;
    this.tickLabel = config.tickLabel || _default.linechart.tickLabel
    this.selector = config.selector || _default.linechart.selector;
    this.transitionDuration = config.transitionDuration || _default.linechart.transitionDuration;
    this.tooltip = config.tooltip || _default.linechart.tooltip;
    this.markers = config.markers || _default.linechart.markers;
    this.events = {};
    this.events.down = config.events.down || _default.linechart.events.down;
    this.events.up = config.events.up || _default.linechart.events.up;
    this.events.over = config.events.over || _default.linechart.events.over;
    this.events.click = config.events.click || _default.linechart.events.click;
    this.events.leave = config.events.leave || _default.linechart.events.leave;
    this._sortData = config.sortData || _default.linechart.sortData;
    this.style = config.style || _default.linechart.style;
  };
};