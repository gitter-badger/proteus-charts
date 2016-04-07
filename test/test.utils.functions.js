describe('Utils', function () {

  describe('functions', function () {

    it('utils.isArray()', () => {
      assert.isOk(utils.isArray([]));
      assert.isOk(utils.isArray([1,2,3,4]));
      assert.isOk(utils.isArray([{"a": "b"}]));
      assert.isNotOk(utils.isArray(undefined));
      assert.isNotOk(utils.isArray(null));
      assert.isNotOk(utils.isArray(false));
      assert.isNotOk(utils.isArray(""));
      assert.isNotOk(utils.isArray(1000));
      assert.isNotOk(utils.isArray(0x0));
      assert.isNotOk(utils.isArray(new Object()));
      assert.isNotOk(utils.isArray({}));
    });

    it('utils.isArray()', () => {
      assert.isOk(utils.isObject({}));
      assert.isOk(utils.isObject({'a':'b'}));
      assert.isNotOk(utils.isObject([]));
      assert.isNotOk(utils.isObject([{}]));
      assert.isNotOk(utils.isObject([{},{}]));
    });
    
  });
});