function Airport() {
  this.planes = [];
  this.defaultCapacity = 20;
}

Airport.prototype.dock = function(plane) {
  if (this.isFull() || this.weather()) {
    throw "Airport unavailable";
  }
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.release_plane = function(plane) {
  if (this.isEmpty()) {
    throw "Airport empty";
  } else if (this.weather()) {
    throw "Plane cannot take off due to stormy weather";
  }
  plane.take_off();
  this.planes.pop(plane);
};

Airport.prototype.isFull = function() {
  if (this.planes.length >= this.defaultCapacity) {
    return true;
  }
  return false;
};

Airport.prototype.isEmpty = function() {
  if (this.planes.length == 0) {
    return true;
  }
  return false;
};

Airport.prototype.weather = function() {
  if (Math.floor(Math.random(40) == 6)) {
    return true;
  }
  return false;
};
