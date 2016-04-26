const strategies = {
  Barchart(data, config) {
    return new SvgBarchartStrategy(data, config, 'Barchart');
  },
  Linechart(data, config) {
    return new SvgLinechartStrategy(data, config, 'Linechart');
  },
  Streamgraph(data, k) {
    return new SvgStreamgraphStrategy(data, config, 'Streamgraph');
  }
};
