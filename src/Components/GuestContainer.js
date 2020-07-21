import React from 'react'
import GuestCard from './GuestCard'
import NewGuestForm from './NewGuestForm'


export default class GuestContainter extends React.Component{

    state = {
        guests: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/guests')
            .then(response => response.json())
            .then(guests => this.setState({guests: guests}))
    }

    addGuest = (newGuest) => 
    { this.setState({ guests: [...this.state.guests, {...newGuest}]})  }

    render(){

    const guestList = this.state.guests.map( guest => {
        return <GuestCard key={guest.id} guest={guest} />
    } )

        return(
            <>
            <header className='header'>
                <h1>Risk App</h1>
            </header>

                <NewGuestForm addGuest={this.addGuest} />
            <div className='guest-container'>
                
                {guestList}
            </div>
            </>
        )
    }
}