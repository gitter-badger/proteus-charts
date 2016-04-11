'use strict';

/**
 * SvgStrategy wrapper class
 */
class SvgStrategy {
	constructor(strategy){
		this.strategy = strategy;
	}
	draw(data){
		this.strategy.draw(data);
	}
}