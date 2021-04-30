import React from 'react'

class App extends React.Component {
  componentDidMount() {
    this.initProcessor()
  }

  async initProcessor() {
    const microphoneStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: { exact: 1 }
      },
      video: false
    })

    const audioCtx = new AudioContext()

    const inputNode = audioCtx.createMediaStreamSource(microphoneStream)

    await audioCtx.audioWorklet.addModule('worklet/bypassProcessor.js')
    const processorNode = new AudioWorkletNode(audioCtx, 'bypass-processor')
    // const processorNode = audioCtx.createGain()

    inputNode.connect(processorNode).connect(audioCtx.destination)

    setInterval(() => {
      processorNode.port.postMessage('log')
    }, 5000)
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
