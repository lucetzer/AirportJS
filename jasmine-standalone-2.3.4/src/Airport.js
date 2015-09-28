function Airport() {
  this.planes = [];
  this.defaultCapacity = 20;
}

Airport.prototype.dock = function(plane) {
  if (this.planes.length > 20) {
    throw new Error("Airport unavailable");
  }
  this.planes.push(plane);
};

Airport.prototype.release_plane = function() {
  if (this.planes.length == 0) {
    throw new Error("Airport empty")
  }
  this.planes.pop();
};



// function Song() {
// }
//
// Song.prototype.persistFavoriteStatus = function(value) {
//   // something complicated
//   throw new Error("not yet implemented");
// };
