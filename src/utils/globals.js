/**
 * This object is used as a default one for those charts that do not have any user configuration.
 * @type {Object}
 */
const _default = {
  Barchart: {
    style:{
      '.axis':{
        'font': '10px sans-serif'
      },
      '.axis path,.axis line':{
        'fill': 'none',
        'stroke': '#000',
        'shape-rendering': 'crispEdges'
      },
      '.x.axis path': {
        'display': 'none'
      }
    },
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
    },
    width: 600,
    height: 250,
    ticks: 5, // ticks for y axis.
    tooltip(object) {
      return 'Info: ' + JSON.stringify(object);
    },
    tickLabel: '',
    selector: '#chart',
    events: {
      down() {
        d3.select(this).classed('hover', false);
      },
      over() {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('fill-opacity', 0.4);
      },
      leave() {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('fill-opacity', 1);
      },
      click(d, i) {
        console.log(d, i);
      }
    },
    transitionDuration: 300,
    maxNumberOfElements: 0, // used by keepDrawing to reduce the number of elements in the current chart
    sortData: {
      descending: false,
      prop: 'x'
    }
  },
  Linechart: {
    style:{
      'path': {
        'stroke': 'steelblue',
        'stroke-width': 2,
        'fill':  'none'
      },
      '.axis': {
         'font': '10px sans-serif'
      },
      '.axis path,.axis line': {
        'fill': 'none',
        'stroke': '#000',
        'shape-rendering': 'crispEdge'
      },
      '.x.axis path': {
        'display': 'none'
      }
    },
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
    },
    width: 600,
    height: 250,
    ticks: 5, // ticks for y axis.
    tooltip(object) {
      return 'Info: ' + JSON.stringify(object);
    },
    tickLabel: '',
    selector: '#chart',
    events: {
      down() {
        d3.select(this).classed('hover', false);
      },
      over() {
        d3.select(this)
          .transition()
          .duration(50)
          .style('stroke-width', 2);
      },
      leave() {
        d3.select(this)
          .transition()
          .duration(50)
          .style('stroke-width', 1);
      },
      click(d, i) {
        console.log(d, i);
      }
    },
    transitionDuration: 300,
    maxNumberOfElements: 0, // used by keepDrawing to reduce the number of elements in the current chart
    sortData: {
      descending: false,
      prop: 'x'
    }
  },
  streamgraph: {
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
    },
    width: 600,
    height: 250,
    ticks: 5, // ticks for y axis.
    tooltip(object) {
      return 'Info: ' + JSON.stringify(object);
    },
    tickLabel: '',
    selector: '#chart',
    events: {
      down() {
        d3.select(this).classed('hover', false);
      },
      over() {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('fill-opacity', 0.4);
      },
      leave() {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('fill-opacity', 1);
      },
      click(d, i) {
        console.log(d, i);
      }
    },
    transitionDuration: 300,
    maxNumberOfElements: 0, // used by keepDrawing to reduce the number of elements in the current chart
    sortData: {
      descending: false,
      prop: 'x'
    }
  }
};