'use strict';
/* globals Svg, _default */

/**
 * Base class. This class is inherited in all charts implementations.
 * This is a non-instanciable chart.
 */
class Chart {
  constructor() {
    if(new.target === Chart || new.target === Basic || new.target === Flow){
      throw new Error(new.target + ' is non-instanciable');
    }
  }

  /**
   * @param  {Object} data Data object. This method infer the type of data, which could be:
   * Array: Data is an static object.
   * Object: Data is a data source we need to connect to, in order to receive a stream of data.
   */
  _inferDataSource(data) {
    if (utils.isObject(data)) {
      this._initializeWebsocketDataSource(data);
    }else if(!utils.isArray(data)) {
      throw new TypeError('Wrong data format');
    }
  }
  
  /**
   * Initialize a connecton between browser and server through a Websocket connections
   * @param  {Object} source Connection details.
   */
  _initializeWebsocketDataSource(source) {

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
    if(!utils.isArray(data)){
      throw new TypeError('draw method is only allowed with static data.');
    }
  }
  
  /**
   * Returns a PNG image of the current graph
   * @return {[String]} Image in data-url format
   */
  toPNG(){
    var selector, html, imgsrc;
    selector = this.config.selector;
    html = d3.select(selector + ' ' + 'svg')
      .attr('version', 1.1)
      .attr('xmlns', 'http://www.w3.org/2000/svg')
      .node()
      .parentNode.innerHTML;
    imgsrc = 'data:image/svg+xml;base64,'+ btoa(html);
    return imgsrc;
  }

  /**
   * on event
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

/**
 * Flow chart. This class in inherited in all basic charts implementatios.
 * This is a non-instanciable chart. Instanciable charts are: stremgraph and so on.
 */
class Flow extends Chart {
  constructor(){
    super();
  }
}