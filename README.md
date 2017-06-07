# <p align="center"> Artist </p>

<p align="center">
  <img alt="icon" src="http://7u2fpc.com1.z0.glb.clouddn.com/artist-icon.png" width="120" height="120"> 
</p>

<p align="center">An image style transfer App built with TensorFlow and React Native.</p>

## Overview

Artist is an App built with TensorFlow and React Native, which can transfer the style of your pictures.

## Dependencies and References

+ TensorFlow Version: 1.2.0-rc0
+ stylize_v1 model: [Download](https://storage.googleapis.com/download.tensorflow.org/models/stylize_v1.zip)
+ Use some Java code of the TensorFlow Anrdroid demo: [TensorFlow Android Demo](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/examples/android/src/org/tensorflow/demo)

You can change the TensorFlow Version by editing the file `android/app/build.gradle`:
```
dependencies {
    ...
    compile 'org.tensorflow:tensorflow-android:1.2.0-rc0'
    ...
}
```

More information about the [stylize_v1 model](https://research.googleblog.com/2016/10/supercharging-style-transfer.html)
