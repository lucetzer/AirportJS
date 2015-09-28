function Airport() {
  this.planes = [];
}

Airport.prototype.dock = function(plane) {
  this.planes.push(plane);
};



// function Song() {
// }
//
// Song.prototype.persistFavoriteStatus = function(value) {
//   // something complicated
//   throw new Error("not yet implemented");
// };
