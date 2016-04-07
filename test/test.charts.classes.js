describe('Charts', function () {

  describe('Chart(), Flow(), Basic()', function () {

    it('throws a "Missing constructor parameters" if the data parameter is missing',() => {
      assert.throws(() => {
        new Chart()
      }, Error);

      assert.throws(() => {
        new Basic()
      }, Error);

      assert.throws(() => {
        new Flow()
      }, Error);
      
    });

  });
});