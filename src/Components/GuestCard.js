import React from 'react'

export default function GuestCard( { guest } ) {

    return (
        <div className="guest-card">
            <h2>{guest.name}</h2>
            <img src={guest.image} alt={guest.name} />
            <ul>
                <li>Age: {guest.age}</li>
                <li>Risk: {guest.risk}</li>
                <li>Status: {guest.status}</li>
            </ul>
        </div>
    )
}
