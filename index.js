var Stats = require('./lib/stats.min.js')
var THREE = require('./lib/three.min.js')
var dat = require('./lib/dat.gui.min.js')
var DeviceOrientationControls = require('./lib/DeviceOrientationControls.js')
var DragControls = require('./lib/DragControls.js')
var EditorControls = require('./lib/EditorControls.js')
var FirstPersonControls = require('./lib/FirstPersonControls.js')
var FlyControls = require('./lib/FlyControls.js')
var MouseControls = require('./lib/MouseControls.js')
var OrbitControls = require('./lib/OrbitControls.js')
var OrthographicTrackballControls = require('./lib/OrthographicTrackballControls.js')
var PointerLockControls = require('./lib/PointerLockControls.js')
var TrackballControls = require('./lib/TrackballControls.js')
var TransformControls = require('./lib/TransformControls.js')
var VRControls = require('./lib/VRControls.js')

module.exports = {
  Stats: Stats,
  THREE: THREE,
  dat: dat,
  DeviceOrientationControls,
  DragControls,
  EditorControls,
  FirstPersonControls,
  FlyControls,
  MouseControls,
  OrbitControls,
  OrthographicTrackballControls,
  PointerLockControls,
  TrackballControls,
  TransformControls,
  VRControls,
}
