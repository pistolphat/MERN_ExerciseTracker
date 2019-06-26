import React, { Component } from 'react';
import axios from 'axios'

class CreateUser extends Component {
  constructor(props){
    super(props)

    //bind different methods to this Component
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    
    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
    }

    //CLG to see submission
    console.log(user);

    // Axios post method to endpoint. 2nd Argument as Object.
  
    // axios.post('http://localhost:3001/users/add', user)
    axios.post('https://exercise-track.herokuapp.com/users/add', user)
    .then (res => console.log(res.data))

    //After User submit, reset and stay on page.
    this.setState ({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add new User</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <input type='text'
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
          </div>

          <div className='form-group'>
            <input type='submit' value='Add New User' className='btn btn-primary' />
          </div>

        </form>
      </div>
    );
  }
}

export default CreateUser;