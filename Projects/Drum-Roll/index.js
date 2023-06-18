const bankOne = [
  {
    keyCode: 75,
    keyTrigger: 'K',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 73,
    keyTrigger: 'I',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 78,
    keyTrigger: 'N',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 71,
    keyTrigger: 'G',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 82,
    keyTrigger: 'R',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 84,
    keyTrigger: 'T',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 72,
    keyTrigger: 'H',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 85,
    keyTrigger: 'U',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 82,
    keyTrigger: 'R',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 79,
    keyTrigger: 'O',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 173,
    keyTrigger: '-',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 79,
    keyTrigger: 'O',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 78,
    keyTrigger: 'N',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const audioClips = bankOne.concat(bankTwo); // Combine both banks into a single array

function App() {
  const [volume, setVolume] = React.useState(1);
  const [recording, setRecording] = React.useState("");
  const [speed, setSpeed] = React.useState(0.5);

  const playRecording = () => {
    let index = 0;

    let recordArray = recording.split(" ");
    const interval = setInterval(() =>{
    const audioTag = document.getElementById(recordArray[index]);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
    index++;
  }, speed * 600);
  setTimeout(() => clearInterval(interval), 600 * speed * recordArray.length - 1);
  };
  return (
    <div className="bg-info min-vh-100 text-white">
      <div className="text-center">
        <h2>Beat Machine</h2>
        {audioClips.map((clip) => (
          <Pad key={clip.id} clip={clip} volume={volume} setRecording={setRecording}/>
        ))}
        <br />
        <h4>Volume</h4>
        <input type="range" 
        step="0.01" 
        onChange={(e) => setVolume(e.target.value)} 
        value={volume} 
        max="1" 
        min="0" 
        className="w-50"/>
        <h3>{recording}</h3>
        {recording && (
          <>
          <button onClick={playRecording} className="btn btn-success">play</button>
          <button onClick={() => setRecording("")} className="btn btn-warning">clear</button>
          
          
          <h4 className="speedy">Speed</h4>
          <h4 className="max-slide">MAX</h4>
          <h4 className="min-slide">MIN</h4>
          <input type="range" 
          step="0.01" 
          onChange={(e) => setSpeed(e.target.value)} 
          value={speed} 
          max="1.2" 
          min="0.1" 
          className="w-50"/>
        </>
        )}
      </div>
    </div>
  );
}

function Pad({ clip, volume, setRecording }) {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [])

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };



  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
    setRecording((prev) => prev + clip.keyTrigger + " ");

  }

  return (
    <div onClick={playSound} className={`btn btn-secondary p-4 m-3 ${active && 'btn-danger'}`}>
      <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
