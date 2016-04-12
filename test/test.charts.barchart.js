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
      assert.equal(result, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjcwIiBoZWlnaHQ9IjMyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLDIwKSI+PGcgY2xhc3M9InggYXhpcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyNTApIj48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAwLjUsMCkiIHN0eWxlPSJvcGFjaXR5OiAxZS0wNjsiPjxsaW5lIHkyPSI2Ij48L2xpbmU+PHRleHQgZHk9Ii43MWVtIiB5PSI5IiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjA8L3RleHQ+PC9nPjxwYXRoIGNsYXNzPSJkb21haW4iIGQ9Ik0wLDZWMEg2MDBWNiI+PC9wYXRoPjwvZz48ZyBjbGFzcz0ieSBheGlzIiBzdHJva2UtZGFzaGFycmF5PSI1LCA1Ij48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyMDApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHgyPSI1MzAiIHkyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii4zMmVtIiB4PSItMjAiIHk9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogZW5kOyI+MjAlPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxNTApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHgyPSI1MzAiIHkyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii4zMmVtIiB4PSItMjAiIHk9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogZW5kOyI+NDAlPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxMDApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHgyPSI1MzAiIHkyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii4zMmVtIiB4PSItMjAiIHk9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogZW5kOyI+NjAlPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw0OS45OTk5OTk5OTk5OTk5ODYpIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHgyPSI1MzAiIHkyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii4zMmVtIiB4PSItMjAiIHk9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogZW5kOyI+ODAlPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyNTApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHgyPSI1MzAiIHkyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii4zMmVtIiB4PSItMjAiIHk9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogZW5kOyI+MCU8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDEyNSkiIHN0eWxlPSJvcGFjaXR5OiAxZS0wNjsiPjxsaW5lIHgyPSI1MzAiPjwvbGluZT48dGV4dCBkeT0iLjMyZW0iIHg9Ii0yMCIgc3R5bGU9InRleHQtYW5jaG9yOiBlbmQ7Ij41MCU8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHgyPSI1MzAiIHkyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii4zMmVtIiB4PSItMjAiIHk9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogZW5kOyI+MTAwJTwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTEyNSkiIHN0eWxlPSJvcGFjaXR5OiAxZS0wNjsiPjxsaW5lIHgyPSI1MzAiPjwvbGluZT48dGV4dCBkeT0iLjMyZW0iIHg9Ii0yMCIgc3R5bGU9InRleHQtYW5jaG9yOiBlbmQ7Ij4xNTAlPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMjUwKSIgc3R5bGU9Im9wYWNpdHk6IDFlLTA2OyI+PGxpbmUgeDI9IjUzMCI+PC9saW5lPjx0ZXh0IGR5PSIuMzJlbSIgeD0iLTIwIiBzdHlsZT0idGV4dC1hbmNob3I6IGVuZDsiPjIwMCU8L3RleHQ+PC9nPjxwYXRoIGNsYXNzPSJkb21haW4iIGQ9Ik0wLDBIMFYyNTBIMCI+PC9wYXRoPjx0ZXh0PjwvdGV4dD48L2c+PHJlY3QgY2xhc3M9ImJhciIgeT0iMjUwIiBoZWlnaHQ9IjAiIGZpbGw9IiMxZjc3YjQiPjwvcmVjdD48L2c+PC9zdmc+');
    });

  });
});