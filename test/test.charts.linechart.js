describe('Linechart', function () {
  describe('constructor()', function () {
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
    it('toPNG()', () => {
      var data = [{ x: 0, y: 1 }, { x: 1, y: 2 }];
      var chart = new Linechart(data);
      chart.draw();

      //wait for image creation
      setTimeout(function () {
        var result = chart.toPNG((uri) => {
          assert.equal(uri, 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iNjcwIiBoZWlnaHQ9IjMyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjcwIDMyMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsKcGF0aCB7IHN0cm9rZTogc3RlZWxibHVlOyBzdHJva2Utd2lkdGg6IDI7IGZpbGw6IG5vbmU7IH0KLmF4aXMgeyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyBmb250LXdlaWdodDogbm9ybWFsOyBmb250LXN0cmV0Y2g6IG5vcm1hbDsgZm9udC1zaXplOiAxMHB4OyBsaW5lLWhlaWdodDogbm9ybWFsOyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgfQouYXhpcyBwYXRoLCAuYXhpcyBsaW5lIHsgZmlsbDogbm9uZTsgc3Ryb2tlOiByZ2IoMCwgMCwgMCk7IHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfQoueC5heGlzIHBhdGggeyBkaXNwbGF5OiBub25lOyB9CgpdXT48L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCwyMCkiPjxwYXRoIGQ9Ik0wLDEyNUw2MDAsMCI+PC9wYXRoPjxnIGNsYXNzPSJ4IGF4aXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMjUwKSI+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeTI9IjYiIHgyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii43MWVtIiB5PSI5IiB4PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjAuMDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwLDApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHkyPSI2IiB4Mj0iMCI+PC9saW5lPjx0ZXh0IGR5PSIuNzFlbSIgeT0iOSIgeD0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4wLjE8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAsMCkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeTI9IjYiIHgyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii43MWVtIiB5PSI5IiB4PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjAuMjwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4MCwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MC4zPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQwLDApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHkyPSI2IiB4Mj0iMCI+PC9saW5lPjx0ZXh0IGR5PSIuNzFlbSIgeT0iOSIgeD0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4wLjQ8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAsMCkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeTI9IjYiIHgyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii43MWVtIiB5PSI5IiB4PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjAuNTwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2MCwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MC42PC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDIwLDApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHkyPSI2IiB4Mj0iMCI+PC9saW5lPjx0ZXh0IGR5PSIuNzFlbSIgeT0iOSIgeD0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4wLjc8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0ODAsMCkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeTI9IjYiIHgyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii43MWVtIiB5PSI5IiB4PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjAuODwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0MCwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MC45PC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAwLDApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHkyPSI2IiB4Mj0iMCI+PC9saW5lPjx0ZXh0IGR5PSIuNzFlbSIgeT0iOSIgeD0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4xLjA8L3RleHQ+PC9nPjxwYXRoIGNsYXNzPSJkb21haW4iIGQ9Ik0wLDZWMEg2MDBWNiI+PC9wYXRoPjwvZz48ZyBjbGFzcz0ieSBheGlzIiBzdHJva2UtZGFzaGFycmF5PSI1LCA1Ij48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyNTApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHgyPSI2MDAiIHkyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii4zMmVtIiB4PSItMjAiIHk9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogZW5kOyI+MC4wPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxODcuNSkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeDI9IjYwMCIgeTI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjMyZW0iIHg9Ii0yMCIgeT0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBlbmQ7Ij4wLjU8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDEyNSkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeDI9IjYwMCIgeTI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjMyZW0iIHg9Ii0yMCIgeT0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBlbmQ7Ij4xLjA8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDYyLjUpIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHgyPSI2MDAiIHkyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii4zMmVtIiB4PSItMjAiIHk9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogZW5kOyI+MS41PC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB4Mj0iNjAwIiB5Mj0iMCI+PC9saW5lPjx0ZXh0IGR5PSIuMzJlbSIgeD0iLTIwIiB5PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IGVuZDsiPjIuMDwvdGV4dD48L2c+PHBhdGggY2xhc3M9ImRvbWFpbiIgZD0iTTAsMEgwVjI1MEgwIj48L3BhdGg+PHRleHQ+PC90ZXh0PjwvZz48L2c+PC9zdmc+');
        });
      }, 300);
    });

  });
});