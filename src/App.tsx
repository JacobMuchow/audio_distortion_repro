import React from 'react'

class App extends React.Component {
  componentDidMount() {
    this.initProcessor()
  }

  async initProcessor() {
    const microphoneStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: 1
      },
      video: false
    })

    const audioCtx = new AudioContext()

    const inputNode = audioCtx.createMediaStreamSource(microphoneStream)

    await audioCtx.audioWorklet.addModule('worklet/bypassProcessor.js')
    const processorNode = new AudioWorkletNode(audioCtx, 'bypass-processor')

    inputNode.connect(processorNode).connect(audioCtx.destination)
  }

  render() {
    return (
      <div>
        <h1>Audio distortion repro</h1>
      </div>
    )
  }
}

export default App
