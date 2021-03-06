import React from "react";

const Listado = (props) => {
  return (
    <>
      <ul>
        <h3 className="titulo">Reproductor</h3>
        {props.songs.map((el, index) => {
          return (
            <li
              key={"key-" + index}
              className={
                "songList " +
                (props.songOn === index && props.isPlaying ? "activeSong" : "")
              }
              onClick={(e) => {
                if (props.currentSong.current.src !== el.url) {
                  props.pickSong(index);
                  props.setSongOn(index);
                }
                if (props.currentSong.current.paused) {
                  props.playStop();
                  props.setIsPlaying(true);
                } else {
                  props.pauseSong();
                  props.setIsPlaying(false);
                }
              }}
            >
              <span
                className="songId"
                onClick={() => {
                  props.pickSong(index);
                }}
              >
                {el.id}
              </span>
              <span className="songName">{el.name}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Listado;
