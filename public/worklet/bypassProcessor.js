// Copyright (c) 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// https://github.com/GoogleChromeLabs/web-audio-samples/blob/main/audio-worklet/basic/hello-audio-worklet/bypass-processor.js

/**
 * A simple bypass node demo.
 *
 * @class BypassProcessor
 * @extends AudioWorkletProcessor
 */
 class BypassProcessor extends AudioWorkletProcessor {

  constructor() {
    super()

    this.port.onmessage = (event) => {
      if (event.data === 'log') this.log = true
    }
  }

  log = true

  process(inputs, outputs) {
    if (this.log) {
      console.log('inputs', inputs)
      console.log('outputs', outputs)
      this.log = false
    }

    // By default, the node has single input and output.
    const input = inputs[0];
    const output = outputs[0];

    for (let channel = 0; channel < output.length; ++channel) {
      output[channel].set(input[channel]);
    }

    return true;
  }
}

registerProcessor('bypass-processor', BypassProcessor);