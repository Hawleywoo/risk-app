import React from 'react'

const initialState = {
    name: '',
    age: '',
    risk: '',
    status: false,
    image: ''
}

export default class NewGuestForm extends React.Component{
    
    state = {
        name: '',
        age: '',
        risk: 0,
        status: false,
        image: ''  
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addGuest(this.state)
        this.resetState()
    }

    handleChange = (event) => {
        const { name } = event.target
        let value = name === 'status' ? event.target.checked : event.target.value;
        this.setState({
            [name]: value
        })
    }

    resetState = () => {
        this.setState(initialState)
    }


    render(){
        return(
            <form className="new-guest-form" onSubmit={this.handleSubmit}>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='Enter Name:'/>
                <input type='number' name='age' value={this.state.age} onChange={this.handleChange} placeholder='Enter Guest Age:'/>
                <input type='number' name='risk' value={this.state.risk} onChange={this.handleChange} placeholder='Enter Risk Level (1-5):'/>
                <div>
                    <label>Living Status:</label>
                    <input type='checkbox' name='status' value={this.state.status} onChange={this.handleChange} />
                </div>
                <input type='text' name='image' value={this.state.image} onChange={this.handleChange} placeholder='Enter Image:'/>
                <input type='submit' />
            </form>
        )
    }
}