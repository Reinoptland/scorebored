import React, { Component } from "react";
import Player from "./Player";

export default class Scoreboard extends Component {
    // we want to change the score of a player
    // we want to order players by how many points they have
    // we want to add players

    state = {
        players: [
            { id: 1, name: "Arien", score: 2 },
            { id: 2, name: "David", score: 5 },
            { id: 3, name: "Mimi",  score: 4 },
            { id: 4, name: "Rein",  score: 4 },
        ]
    }

    // define callback in scoreboard so we can use this.setState later
    incrementScore = (id) => {
        // console.log to check if we have the id
        console.log('call me maybe', id)

        // map over the players and change the score of the player
        // who matches the id
        const newplayers = this.state.players.map(player => {
            if(player.id === id){
                // change score by mutation :(
                // player.score = player.score + 1
                // return player

                // change score by return a new object 
                // no mutation :) 
                // { ...spreadObject, keyIWantToChange: value }
                return { ...player, score: player.score + 1 }
            }

            return player
        })

        // update the state with the new array
        this.setState({ players: newplayers })
    }

    render() {
        const playersCopy = [ ...this.state.players ]

        return (
            <div className="scoreboard">
                <h1>Scoreboard</h1>
                <ul>
                    { playersCopy
                        .sort((a, b) => b.score - a.score)
                        .map(player => {
                        return <Player 
                            key={player.id}
                            name={player.name} 
                            score={player.score} 
                            id={player.id}
                            // pass down out callback to the childe
                            // together with the other props
                            incrementScore={this.incrementScore}
                        />
                    }) }
                </ul>
            </div>
        )
    }
}