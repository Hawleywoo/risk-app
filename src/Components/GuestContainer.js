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


    changeStatus = (guestName) => {

        const newGuest = this.state.guests.map(guest => {
            
            if(guest.name === guestName.name){
                guest.status = !guest.status
            }
            return guest
        })
        this.setState({
            guests: newGuest
        })
    }

    render(){
        console.log(this.state)
    const guestList = this.state.guests.map( guest => {
        return <GuestCard key={guest.id} guest={guest} changeStatus={this.changeStatus}/>
    } )

        return(
            <>
            <header className='header'>
                <h1>Risky Bizzzness</h1>
                <NewGuestForm addGuest={this.addGuest} />
            </header>

            <div className='guest-container'>
                
                {guestList}
            </div>
            </>
        )
    }
}