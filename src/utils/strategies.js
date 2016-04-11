const strategies = {
  Barchart(i,k){
    return new SvgBarchartStrategy(i,k);
  },
  Streamgraph(i,k){
    return new SvgStreamgraphStrategy(i,k);
  }
};
