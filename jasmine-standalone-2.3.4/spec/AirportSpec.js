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

  it("airport can release a plane", function() {
    airport.dock(plane);
    airport.release_plane();
    expect(airport.planes.length).toEqual(0);
  })

  it("has default capacity", function() {

    expect(airport.defaultCapacity).toEqual(20);
  });

});
