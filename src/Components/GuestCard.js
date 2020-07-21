import React from 'react'

export default function GuestCard( { guest, changeStatus } ) {

    const handleClick = () => {
        changeStatus(guest)
    }

    return (
        <div className={guest.status ? 'guest-card' : 'guest-card dead-status'} >
            <h2>{guest.name}</h2>
            <img src={guest.image} alt={guest.name} />
            <ul>
                <li>Age: {guest.age}</li>
                <li>Risk: {guest.risk}</li>
                <li>Status: {guest.status ? 'Alive' : 'Dead' }</li>
            </ul>
            <button onClick={handleClick}>Change Living Status</button>
        </div>
    )
}
