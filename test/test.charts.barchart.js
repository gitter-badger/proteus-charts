describe('Barchart', function () {
  beforeEach(() => {
    //Append default chart div
    var div = document.createElement('div');
    div.innerHTML = '<div id="chart"></div>';
    document.body.appendChild(div);
  });

  afterEach(() => {
    var el = document.getElementById( 'chart' );
    el.parentNode.removeChild(el);
  });

  describe('constructor()', function () {
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
  });

  describe('chart functions ', function () {
    it('toPNG()', (done) => {
      var data = [{ x: 0, y: 1 }, { x: 1, y: 2 }];
      var chart = new Barchart(data);
      chart.draw();

      //wait for image creation
      setTimeout(function () {
        var result = chart.toPNG((uri) => {
          assert.equal(uri, 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iNjcwIiBoZWlnaHQ9IjMyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjcwIDMyMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsKCl1dPjwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLDIwKSI+PGcgY2xhc3M9InggYXhpcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyNTApIiBzdHlsZT0iZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zdHJldGNoOiBub3JtYWw7IGZvbnQtc2l6ZTogMTBweDsgbGluZS1oZWlnaHQ6IG5vcm1hbDsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7Ij48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU3LjUsMCkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeTI9IjYiIHgyPSIwIiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiByZ2IoMCwgMCwgMCk7IHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0Mi41LDApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHkyPSI2IiB4Mj0iMCIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogcmdiKDAsIDAsIDApOyBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7Ij48L2xpbmU+PHRleHQgZHk9Ii43MWVtIiB5PSI5IiB4PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjE8L3RleHQ+PC9nPjxwYXRoIGNsYXNzPSJkb21haW4iIGQ9Ik0wLDZWMEg2MDBWNiIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogcmdiKDAsIDAsIDApOyBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IGRpc3BsYXk6IG5vbmU7Ij48L3BhdGg+PC9nPjxnIGNsYXNzPSJ5IGF4aXMiIHN0cm9rZS1kYXNoYXJyYXk9IjUsIDUiIHN0eWxlPSJmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyBmb250LXdlaWdodDogbm9ybWFsOyBmb250LXN0cmV0Y2g6IG5vcm1hbDsgZm9udC1zaXplOiAxMHB4OyBsaW5lLWhlaWdodDogbm9ybWFsOyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsiPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDI1MCkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeDI9IjYwMCIgeTI9IjAiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IHJnYigwLCAwLCAwKTsgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyI+PC9saW5lPjx0ZXh0IGR5PSIuMzJlbSIgeD0iLTIwIiB5PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IGVuZDsiPjAuMDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTg3LjUpIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHgyPSI2MDAiIHkyPSIwIiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiByZ2IoMCwgMCwgMCk7IHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsiPjwvbGluZT48dGV4dCBkeT0iLjMyZW0iIHg9Ii0yMCIgeT0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBlbmQ7Ij4wLjU8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDEyNSkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeDI9IjYwMCIgeTI9IjAiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IHJnYigwLCAwLCAwKTsgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyI+PC9saW5lPjx0ZXh0IGR5PSIuMzJlbSIgeD0iLTIwIiB5PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IGVuZDsiPjEuMDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsNjIuNSkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeDI9IjYwMCIgeTI9IjAiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IHJnYigwLCAwLCAwKTsgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyI+PC9saW5lPjx0ZXh0IGR5PSIuMzJlbSIgeD0iLTIwIiB5PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IGVuZDsiPjEuNTwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeDI9IjYwMCIgeTI9IjAiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IHJnYigwLCAwLCAwKTsgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyI+PC9saW5lPjx0ZXh0IGR5PSIuMzJlbSIgeD0iLTIwIiB5PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IGVuZDsiPjIuMDwvdGV4dD48L2c+PHBhdGggY2xhc3M9ImRvbWFpbiIgZD0iTTAsMEgwVjI1MEgwIiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiByZ2IoMCwgMCwgMCk7IHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsiPjwvcGF0aD48dGV4dD48L3RleHQ+PC9nPjxyZWN0IGNsYXNzPSJiYXIiIGhlaWdodD0iMTI1IiBmaWxsPSIjMWY3N2I0IiB5PSIxMjUiIHdpZHRoPSIyNTciIHg9IjI5Ij48L3JlY3Q+PHJlY3QgY2xhc3M9ImJhciIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNhZWM3ZTgiIHk9IjAiIHdpZHRoPSIyNTciIHg9IjMxNCI+PC9yZWN0PjwvZz48L3N2Zz4=');
        });
        done();
      }, 1200);
    });
  });

});