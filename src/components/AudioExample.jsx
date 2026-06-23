import { useRef, useState } from "react";

function AudioExample({ src, label }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function handleClick() {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
      return;
    }

    audio.play();
    setPlaying(true);
  }

  function handleEnded() {
    setPlaying(false);
  }

  return (
    <div className="audio-example">
      <button
        className="audio-example__button"
        type="button"
        onClick={handleClick}
        aria-label={`${playing ? "Stop" : "Play"} ${label}`}
      >
        {playing ? "■" : "▶"}
      </button>

      <div className="audio-example__label">{label}</div>

      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onEnded={handleEnded}
      />
    </div>
  );
}

export default AudioExample;