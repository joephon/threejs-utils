var Stats = require('./lib/stats.min.js')
var THREE = require('./lib/three.min.js')
var dat = require('./lib/dat.gui.min.js')
var TrackBallControls = require('./lib/TrackBallControls.js')
THREE.TrackBallControls = TrackBallControls

module.exports = {
  Stats: Stats,
  THREE: THREE,
  dat: dat
}
