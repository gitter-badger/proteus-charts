describe('Linechart', function() {
  describe('constructor()', function() {
    //Append default chart div
    var div = document.createElement('div');
    div.innerHTML = '<div id="chart"></div>';
    document.body.appendChild(div);

    it('throws a "Missing constructor parameters" if the data parameter is missing', () => {
      assert.throws(() => {
        new Linechart()
      }, Error, 'Missing constructor parameters');
    });

    it('will construct a line chart given some data', () => {
      var data = [{ x: 0, y: 1 }, { x: 0, y: 2 }];
      var chart = new Linechart(data);
      assert.isOk(chart);
    });

    it('throws a "Wrong data format" TypeError if data is not an object neither an array', () => {
      var data = 'wrong parameter';
      assert.throws(() => {
        new Linechart(data)
      }, TypeError, 'Wrong data format');
    });

    // Pending
    it('toPNG()');

  });
});