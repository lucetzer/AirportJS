function Airport() {
  this.planes = [];
  this.defaultCapacity = 20;
}

Airport.prototype.dock = function(plane) {
  if (this.isFull()) {
    throw "Airport unavailable";
  } else {
  this.planes.push(plane);
  }
};

Airport.prototype.release_plane = function() {
  if (this.isEmpty()) {
    throw "Airport empty";
  }
  this.planes.pop();
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

// function Song() {
// }
//
// Song.prototype.persistFavoriteStatus = function(value) {
//   // something complicated
//   throw new Error("not yet implemented");
// };
