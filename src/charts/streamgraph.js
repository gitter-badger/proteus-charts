'use strict';

/**
 * Streamgraph implementation. This charts belongs to 'Flow' family.
 * It is inherited on 'Flow'.
 */
class Streamgraph extends Flow {
  constructor(){
    super();

    if(!arguments.length){
      throw new Error('Missing constructor parameters');
    }
    
    this._inferDataSource(arguments[0]);

    switch(arguments.length){
      case 1:
        this.data = arguments[0];
        this.config = _default;
        break;
      case 2:
        this.data = arguments[0];
        this.config = arguments[1];
        break;
      default:
        throw Error('Unrecognized number of paremeters: ' + arguments);
    }
    this._svg = new SvgStreamGraph(this.data, this.config);
    this._svg.draw();
  }
} 