describe("Airport", function() {
  // var airport;
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
  });

  it("has default capacity", function() {
    expect(airport.defaultCapacity).toEqual(20);
  });

  it("raises an error when airport is full", function() {
    for(var i=0; i <= airport.defaultCapacity - 1; i++) {
      airport.dock(plane);
    }
    expect(function(){airport.dock(plane);}).toThrow("Airport unavailable");
  });

  it("cannot release a plane if airport is empty", function() {
    expect(function(){airport.release_plane();}).toThrow("Airport empty");
  });

  it("cannot dock a plane when weather is stormy", function() {
    var weather

    beforeEach(function() {
      weather = {
        weather: function() {
          return true;
        }
      }
    });

    spyOn(airport, 'weather').and.returnValue(true)
    expect(function(){airport.dock(plane);}).toThrow("Airport unavailable");
  });

  it("plane cannot take off when weather is stormy", function() {
    var weather

    beforeEach(function() {
      weather = {
        weather: function() {
          return true;
        }
      }
      isEmpty = {
        isEmpty: function() {
          return false;
        }
      }
    });

    spyOn(airport, 'weather').and.returnValue(true)
    spyOn(airport, 'isEmpty').and.returnValue(false)
    expect(function(){airport.release_plane(plane);}).toThrow
    ("Plane cannot take off due to stormy weather");
  });

});
