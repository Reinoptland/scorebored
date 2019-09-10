import React from 'react'

export default class AddPlayer extends React.Component {
    state = {
        newPlayer: {
            name: ''
        }
    }

    // onChange handler, take the event, take the target (the inputfield)
    // take the value from the inputfield, set the State with the new name

    handleChange = (event) => {
        this.setState({ newPlayer: {
            name: event.target.value
        }})
    }

    handleSubmit = (event) => {
        // stop form from resfreshing
        event.preventDefault()

        // use callback prop to add player
        this.props.addPlayer(this.state.newPlayer.name)
    }


    // TODO: 
    // - Submit handler X
    // - Use callback prop

    render(){
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                </label>
                {/* 
                    A controlled input field: 
                    1.) Gets it's value from the state 
                    2.) When the input changes it updates the state   
                */}
                <input onChange={this.handleChange} name="name" value={this.state.newPlayer.name}/>
                <input type="submit" />
            </form>
        )
    }
}