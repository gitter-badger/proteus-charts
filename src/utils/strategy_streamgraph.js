class SvgStreamgraphStrategy {

	constructor(data, config){
		this._loadConfigOnContext(config);

		var datearray = [];
		//var colorrange = ["#045A8D", "#2B8CBE", "#74A9CF", "#A6BDDB", "#D0D1E6", "#F1EEF6"];

		//var strokecolor = colorrange[0];

		this.margin = {top: 20, right: 40, bottom: 30, left: 30};
		this.width = document.body.clientWidth - this.margin.left - this.margin.right;
		this.height = 400 - this.margin.top - this.margin.bottom;

		this.x = d3.time.scale().range([0, this.width]);
		this.y = d3.scale.linear().range([this.height-10, 0]);
		//this.z = d3.scale.ordinal().range(colorrange);

		this.format = d3.time.format("%m/%d/%y");
		this.tooltip = d3.select("body")
			.append("div")
    	.attr("class", "remove")
    	.style("position", "absolute")
    	.style("z-index", "20")
    	.style("visibility", "hidden")
    	.style("top", "30px")
    	.style("left", "55px");

		this.xAxis = d3.svg.axis()
			.scale(this.x)
    	.orient("bottom")
    	.ticks(d3.time.days);

		this.yAxis = d3.svg.axis().scale(this.y);
		this.yAxisr = d3.svg.axis();

		this.stack = d3.layout.stack()
    	.offset("silhouette")
    	.values(d =>d.values)
    	.x(d => d.date)
    	.y(d => d.value);

		this.nest = d3.nest()
    .key(d => d.key);

		this.area = d3.svg.area()
    	.interpolate("cardinal")
    	.x(d => this.x(d.date))
    	.y0(d => this.y(d.y0))
    	.y1(d => this.y(d.y0 + d.y));

	};

	/**
	 * Renders a barchart based on data object
	 * @param  {Object} data Data Object. Contains an array with x and y properties.
	 * 
	 */
	draw(data){

 this.svg = d3.select("#chart").append("svg")
    .attr("width", this.width + this.margin.left + this.margin.right)
    .attr("height", this.height + this.margin.top + this.margin.bottom)
  	.append("g")
    .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

  data.forEach( (d) => {
    d.date = this.format.parse(d.date);
    d.value = +d.value;
  });

  var layers = this.stack(this.nest.entries(data));

  this.x.domain(d3.extent(data,d => d.date));
  this.y.domain([0, d3.max(data,d => (d.y0 + d.y))]);
  
  var colorrange = chroma.scale(['gray', 'blue']).colors(6);

	this.z = d3.scale.ordinal().range(colorrange);
  
  this.svg.selectAll(".layer")
      .data(layers)
    .enter().append("path")
      .attr("class", "layer")
      .attr("d", d => this.area(d.values))
      .style("fill", (d, i) => this.z(i));


  this.svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + this.height + ")")
      .call(this.xAxis);

  this.svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + this.width + ", 0)")
      .call(this.yAxis.orient("right"));

  this.svg.append("g")
      .attr("class", "y axis")
      .call(this.yAxis.orient("left"));

  this.svg.selectAll(".layer").attr("opacity", 1)

		.on('mousedown.user', this.events.down)
	  .on('mouseup.user', this.events.up)
	  .on('mouseleave.user', this.events.leave)
	  .on('mouseover.user', this.events.over)
	  .on('click.user', this.events.click);

  var vertical = d3.select("#chart")
        .append("div")
        .attr("class", "remove")
        .style("position", "absolute")
        .style("z-index", "19")
        .style("width", "1px")
        .style("height", "380px")
        .style("top", "10px")
        .style("bottom", "30px")
        .style("left", "0px")
        .style("background", "#fff");
	};

	_initialize(){

	};

	/**
	 * This method adds config options to the chart context.
	 * @param  {Object} config Config object
	 */
	_loadConfigOnContext(config){
		config = config || {events:{}};
		this.margin = config.margin || _default.margin;
		this.width = config.width || _default.width;
		this.height = config.height || _default.height;
		this.ticks = config.ticks || _default.ticks;
		this.tickLabel = config.tickLabel || _default.tickLabel
		this.selector = config.selector || _default.selector;
		this.transitionDuration = config.transitionDuration || _default.transitionDuration;
		this.tooltip = config.tooltip || _default.tooltip;
		this.events = {};
		this.events.down = config.events.down || _default.events.down;
		this.events.up = config.events.up || _default.events.up;
		this.events.over = config.events.over || _default.events.over;
		this.events.click = config.events.click || _default.events.click;
		this.events.leave = config.events.leave || _default.events.leave;
	};
};