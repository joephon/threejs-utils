# threejs-utils
Hi there~

This is the utils repo for three.js which including :

- three.min.js,

- dat.gui.min.js,

- stats.min.js,

- TrackballControls,

- DeviceOrientationControls,

- DragControls,

- EditorControls,

- FirstPersonControls,

- FlyControls,

- MouseControls,

- OrbitControls,

- OrthographicTrackballControls,

- PointerLockControls,

- TrackballControls,

- TransformControls,

- and VRControls

Still adding......

# Why I made this

As you know, threejs is awesome! especially when you are not good at WebGL. but it dosent go with npm, that makes me upset~ which means I have to attached many scripts tag into the head tag, that's not funny!

So, I Did nothing for those libs, just added some tiny codes to make them better used for npm modules

At least, I think it's better : )

# Install

```
npm i --save-dev threejs-utils
```

# Useage

```javascript
const THREE = require('threejs-utils').THREE
...
...
```

# Controls Useage

```javascript
const THREE = require('threejs-utils').THREE
const TrackballControls = require('threejs-utils').TrackballControls
TrackballControls(THREE)
```

remember you have to include THREE first then use any controls to bind up! or there might be an error thrown out.

# Description

This package includes 1 basic lib (three.js) and 2 useful tools for developping (Stats and dat-gui) you can exactly initialize these as well as waht you usualy do 

Also it includes all the controls tiny libs for three.js which you can find them out in three.js's reposetory. but, keep in mind that you have to do as the Controls Useage said.

Happy coding! : )




