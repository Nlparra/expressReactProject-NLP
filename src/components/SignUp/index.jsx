import React, { Component } from 'react'

export default class SignUp extends Component {

    state = {
        email: '',
        password:'',
    }

    handleChange = event => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch('/users',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })

    }








    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                    type="email" 
                    className="form-control" aria-describedby="emailHelp" 
                    name="email"
                    onChange={this.handleChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    onChange={this.handleChange}/>
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
