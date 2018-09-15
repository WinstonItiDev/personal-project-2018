
let audioContext
let osc

function initAudioWebAPI(freq) {
  console.log('init web audio app')
  console.log(window.AudioContext = window.AudioContext || window.webkitAudioContext)

  // try {
  //   window.AudioContext = window.AudioContext || window.webkitAudioContext;
  //   audioContext = new AudioContext()
  //   osc = audioContext.createOscillator()
  //   osc.frequency.value = freq
  //   // osc.start(0)
  //   startOSC()
  //   osc.connect(audioContext.destination)
  //   console.log(osc)
  //   console.log("audio context running")
  // } catch (error) {
  //     alert('Web audio is not supported by the browser!')
  // }
}

function startOSC() {
    osc.start(0)
}



module.exports = initAudioWebAPI
