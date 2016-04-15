const strategies = {
  Barchart(i, k) {
    return new SvgBarchartStrategy(i, k);
  },
  Linechart(i,k){
    return new SvgLinechartStrategy(i,k);
  },
  Streamgraph(i,k){
    return new SvgStreamgraphStrategy(i,k);
  }
};
