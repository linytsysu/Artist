# <p align="center"> Artist </p>

<p align="center">
  <img alt="icon" src="http://cdn.linyt.xyz/artist-icon.png" width="120" height="120"> 
</p>

<p align="center">An image style transfer App built with TensorFlow and React Native.</p>

## Overview

Artist is an App built with TensorFlow and React Native, which can transfer the style of your pictures.

<p>
  <img alt="screenshot_1" src="http://cdn.linyt.xyz/screenshot_1.png" style="margin-left: 10px">
  <img alt="screenshot_2" src="http://cdn.linyt.xyz/screenshot_2.png" style="margin-left: 10px">
  <img alt="screenshot_3" src="http://cdn.linyt.xyz/screenshot_3.png" style="margin-left: 10px">
  <img alt="screenshot_4" src="http://cdn.linyt.xyz/screenshot_4.png" style="margin-left: 10px">
</p>

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
