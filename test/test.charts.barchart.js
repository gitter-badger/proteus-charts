describe('Barchart', function() {
  describe('constructor()', function() {
    //Append default chart div
    var div = document.createElement('div');
    div.innerHTML = '<div id="chart"></div>';
    document.body.appendChild(div);

    it('throws a "Missing constructor parameters" if the data parameter is missing', () => {
      assert.throws(() => {
        new Barchart()
      }, Error, 'Missing constructor parameters');
    });

    it('will construct a bar chart given some data', () => {
      var data = [{ x: 0, y: 1 }, { x: 0, y: 2 }];
      var chart = new Barchart(data);
      assert.isOk(chart);
    });

    it('throws a "Wrong data format" TypeError if data is not an object neither an array', () => {
      var data = 'wrong parameter';
      assert.throws(() => {
        new Barchart(data)
      }, TypeError, 'Wrong data format');
    });

    it('toPNG()', () => {
      var data = [{ x: 0, y: 1 }, { x: 0, y: 2 }];
      var chart = new Barchart(data);
      chart.draw();
      var result = chart.toPNG();
      assert.equal(result, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjcwIiBoZWlnaHQ9IjMyMCIgdmVyc2lvb…MuMjM1Mjk0MTE3NjQ3MDQiIHdpZHRoPSI0NCIgeD0iNTQ3Ij48L3JlY3Q+PC9nPjwvc3ZnPg==');
    });

  });
});