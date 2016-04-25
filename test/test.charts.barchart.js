describe('Barchart', function () {
  describe('constructor()', function () {
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
      var data = [{ x: 0, y: 1 }, { x: 1, y: 2 }];
      var chart = new Barchart(data);
      chart.draw();

      //wait for image creation
      setTimeout(function () {
        var result = chart.toPNG((uri) => {
          assert.equal(uri, 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iNjcwIiBoZWlnaHQ9IjMyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjcwIDMyMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsKLmF4aXMgeyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyBmb250LXdlaWdodDogbm9ybWFsOyBmb250LXN0cmV0Y2g6IG5vcm1hbDsgZm9udC1zaXplOiAxMHB4OyBsaW5lLWhlaWdodDogbm9ybWFsOyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgfQouYXhpcyBwYXRoLCAuYXhpcyBsaW5lIHsgZmlsbDogbm9uZTsgc3Ryb2tlOiByZ2IoMCwgMCwgMCk7IHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfQoueC5heGlzIHBhdGggeyBkaXNwbGF5OiBub25lOyB9CgpdXT48L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCwyMCkiPjxnIGNsYXNzPSJ4IGF4aXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMjUwKSI+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1Ny41LDApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHkyPSI2IiB4Mj0iMCI+PC9saW5lPjx0ZXh0IGR5PSIuNzFlbSIgeT0iOSIgeD0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4wPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQyLjUsMCkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeTI9IjYiIHgyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii43MWVtIiB5PSI5IiB4PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjE8L3RleHQ+PC9nPjxwYXRoIGNsYXNzPSJkb21haW4iIGQ9Ik0wLDZWMEg2MDBWNiI+PC9wYXRoPjwvZz48ZyBjbGFzcz0ieSBheGlzIiBzdHJva2UtZGFzaGFycmF5PSI1LCA1Ij48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyNTApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHgyPSI2MDAiIHkyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii4zMmVtIiB4PSItMjAiIHk9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogZW5kOyI+MC4wPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxODcuNSkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeDI9IjYwMCIgeTI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjMyZW0iIHg9Ii0yMCIgeT0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBlbmQ7Ij4wLjU8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDEyNSkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeDI9IjYwMCIgeTI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjMyZW0iIHg9Ii0yMCIgeT0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBlbmQ7Ij4xLjA8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDYyLjUpIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHgyPSI2MDAiIHkyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii4zMmVtIiB4PSItMjAiIHk9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogZW5kOyI+MS41PC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB4Mj0iNjAwIiB5Mj0iMCI+PC9saW5lPjx0ZXh0IGR5PSIuMzJlbSIgeD0iLTIwIiB5PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IGVuZDsiPjIuMDwvdGV4dD48L2c+PHBhdGggY2xhc3M9ImRvbWFpbiIgZD0iTTAsMEgwVjI1MEgwIj48L3BhdGg+PHRleHQ+PC90ZXh0PjwvZz48cmVjdCBjbGFzcz0iYmFyIiBoZWlnaHQ9IjI1MCIgZmlsbD0iIzFmNzdiNCIgeT0iMCIgd2lkdGg9IjI1NyIgeD0iMzE0Ij48L3JlY3Q+PHJlY3QgY2xhc3M9ImJhciIgaGVpZ2h0PSIxMjUiIGZpbGw9IiMxZjc3YjQiIHk9IjEyNSIgd2lkdGg9IjI1NyIgeD0iMjkiPjwvcmVjdD48L2c+PC9zdmc+');
        });
      }, 300);
    });

  });
});