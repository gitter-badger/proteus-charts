var utils = {
	isArray (d) {
		return d && d.constructor === Array && d instanceof Array;
	},
	isObject (d) {
		return d && d.constructor === Object && d instanceof Object;
	}
};