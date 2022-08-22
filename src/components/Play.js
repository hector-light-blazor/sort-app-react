import './Play.css';


function Play(props) {

 const onPlay = () => props.onPlay()

  return (
    <button onClick={onPlay} className="Play">Play</button>
  );
}

export default Play;
