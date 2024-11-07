Status
======

In the Original SculptGL repository, we want to add the following features:
  1. Ability to add a shape (say sphere) and then being able to apply transformations to the sphere and have an intuitive way to position the sphere on another object.
  2. Ability to add a prompt or a reference of a model to be created and then call an external API to load the generated model onto the interface.

SculptGL - WebGL sculpting
==========================

You can try it [**here**](http://stephaneginier.com/sculptgl).

Additional information can be found on the [website](http://stephaneginier.com/).

Tools
=====

Nodejs needs to be installed [nodejs](http://nodejs.org/).

Then for the browser build :
```
yarn # npm install
yarn dev # npm run dev (npm run release for final build, npm run website should not be used)
// visit app/index.html
```

For standalone :
```
yarn add electron
yarn add electron-packager
yarn standalone
```

Credits
=======

#### Environments

The raw environments are from https://hdrihaven.com/hdris
