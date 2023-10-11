import { useEffect, useState } from "react";
import YTPlayer from "yt-player";
import classes from "./style.module.scss";

export function Player() {
  const [player] = useState(new YTPlayer("#player"));
  
  useEffect(() => {
    player.load("lP26UCnoH9s");
    player.setVolume(20);
  });

  function onPlay() {
    player.play();
  }

  function onPause() {
    player.pause();
  }

  return (
    <div className={classes.player}>
      <div className={classes.controls}>
        <button onClick={onPlay}>▶️</button>
        <button onClick={onPause}>⏸️</button>
        <p>Coffee Shop Radio</p>
      </div>
    </div>
  );
}