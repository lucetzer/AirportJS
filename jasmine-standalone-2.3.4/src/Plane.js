function Plane() {
  this.isFlying = true;
}

Plane.prototype.land = function() {
  this.isFlying = false;
};

Plane.prototype.take_off = function() {
  this.isFlying = true;
};
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
