import React from 'react'
import GuestCard from './GuestCard'


export default class GuestContainter extends React.Component{

    state = {
        guests: []
    }

    componentDidMount(){
        fetch('http://localhost:4000/guests')
            .then(response => response.json())
            .then(guests => this.setState({guests: guests}))
    }

    render(){

    const guestList = this.state.guests.map( guest => {
        return <GuestCard key={guest.id} guest={guest} />
    } )

        return(
            <div className='guest-container'>
                {guestList}
            </div>
        )
    }
}