/* globals Svg, _default */

/**
 * Base class. This class is inherited in all charts implementations.
 * This is a non-instanciable chart.
 */

class Chart{
  constructor(){
    if(new.target === Chart || new.target === Basic || new.target === Flow){
      throw new TypeError(new.target + ' is non-instanciable');
    }
  }

  /**
   * @param  {Object} data Data object. This method infer the type of data, which could be:
   * Array: Data is an static object.
   * Object: Data is a data source we need to connect to, in order to receive a stream of data.
   */
  _inferDataSource(data){
    if (isObject(data)){
      this._initializeWebsocketDataSource(data);
    }
  }
  /**
   * Initialize a connecton between browser and server through a Websocket connections
   * @param  {Object} source Connection details.
   */
  _initializeWebsocketDataSource(source){

      this.ws = new WebSocket(source.endpoint);

      this.ws.onopen = () => {
      };

      this.ws.onerror = (e) => {
        throw new Error('Error with websocket connection', e);
      };
      
      this.ws.onmessage = (event) => {
        var data = JSON.parse(event.data.substr(2))[1];
        setTimeout(() => {
          this.keepDrawing(data);
          }, 50);
      };
  }

  /**
   * Renders data on barchart. Only allowed when data is an array of static data.
   * @param  {Array} data Array of data
   */
  draw(data = this.data){
    if(!isArray(data)){
      throw new TypeError('draw method is only allowed with static data.');
    }
  }

  /**
   * on evemt
   */
  on(eventName, action) {
    console.log(eventName, action);
  }

}

/**
 * Basic chart. This class in inherited in all basic charts implementatios.
 * This is a non-instanciable chart. Instanciable charts are: bar, line, point.
 */
class Basic extends Chart {
  constructor(){
    super();
  }
}

class Flow extends Chart {
  constructor(){
    super();
  }

}

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



/**
 * Barchart implementation. This charts belongs to 'Basic' family.
 * It is inherited on 'Basic'.
 */
class Barchart extends Basic {
  
  /**
   * Barchart constructor. It needs (at least) one argument to start: data.
   * Optionally, you can indicate a second argument that includes all the chart options. If you 
   * do not specify this, '_default' object is used by default.
   */
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
    this._svg = new Svg(this.data, this.config);
  }

  /**
   * Renders a data object on the chart.
   * @param  {Object} data This object contains the data that will be rendered on chart. If you do not
   * specify this param, this.data will be used instead.
   */
  draw(data = this.data){
    super.draw(data);
    this._svg.draw(data);
  }

  keepDrawing(datum){
    if(!this.datum){
      this.datum = [];
    }
    this.datum = this.datum.concat(datum);
    if(this.datum.length > 50){
      for(var i = 0; i < datum.length; i++){
        this.datum.shift();
      }
    }
    this._svg.draw(this.datum);
  }
}


var isArray = function(d){
return d.constructor === Array && d instanceof Array;
};

var isObject = function(d){
return d.constructor === Object && d instanceof Object;
};
