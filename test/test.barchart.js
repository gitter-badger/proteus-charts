
describe('Barchart', function () {
  describe('constructor()', function () {
    it('throws a "Missing constructor parameters" if the data parameter is missing', function () {
      (function () {
        new Barchart()
      }).should.fail;
    });
    it('will construct a bar chart given some data', function () {
      (function () {
        var testData = [{x: 0, y: 0}];
        new Barchart(testData);
      }).should.not.fail;
    });
  });
});
