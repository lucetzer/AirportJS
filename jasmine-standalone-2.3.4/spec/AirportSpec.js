describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
  });

  it("airport can dock a plane", function() {
    airport.dock(plane);
    expect(airport.planes.length).toEqual(1);
  });



});
