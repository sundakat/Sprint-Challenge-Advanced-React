import React from "react";
import Player from "./Player";
import Navbar from "./Navbar";
import axios from "axios";
import "../App.scss";

class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          players: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {

    const { players } = this.state

    return (
    <> 
      <Navbar />
      <div className="container">
        <div className="players">
        {players.map(player => {
            return <Player player={player} />
        })}
        </div>
      </div>
    </>
    )
  }
}

export default Players;