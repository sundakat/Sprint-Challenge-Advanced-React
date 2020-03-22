import React from "react";
import "../App.scss";

export default function Player(props) {
  return (
    <div className="player-card">
        <h2>{props.player.name}</h2>
        <p>{`from ${props.player.country} was googled ${props.player.searches} times.`}</p>
    </div>
  )
}