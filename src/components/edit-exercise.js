import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios'
import 'react-datepicker/dist/react-datepicker.css';

 // Date Picker react component, install and use. (react-datepicker)
 // Import DatePicker and styling

class EditExercise extends Component {
  constructor(props) {
    super(props)

    //bind different methods to this Component
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [] // Empty Array, Dropdown menu to select users
    }
  }

  // Two Axios requests
  // Lifecyle to retrieve item to be Edit, ID from URL, convert correct date
  componentDidMount() {
    axios.get('http://localhost:3001/exercises/'+this.props.match.params.id)
    .then(res => {
      this.setState({
        username: res.data.username,
        description: res.data.description,
        duration: res.data.duration,
        date: new Date(res.data.date)
      })
    })
    .catch(function(error) {
      console.log(error);
    })

    // Use Axios to get the data array, use Map array, first field
    axios.get('http://localhost:3001/users/')
    .then(response => {
      if (response.data.length > 0 ) {
        this.setState ( {
          users: response.data.map(user => user.username),
        })
      }
       
    })
  }

  // OnChange Methods per text fields
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  // Calendar table to select
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();
    
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }
    
    //CLG to see submission
    console.log(exercise);

    //Axios post/update method request, 2nd argument as Object
    axios.post('http://localhost:3001/exercises/update/'+this.props.match.params.id, exercise)
    .then (res => console.log(res.data))

    //After User submit, return to List component
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise Router</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <select ref='userInput'
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}>
              { //Inside select box options, from User's array from MongoDB. Map thru array, return Option in Select Box.
                this.state.users.map(function (user) {
                  return <option
                  key={user}
                  value={user}>{user}
                  </option>
                })
              }
            </select>
          </div>

        <div className='form-group'>
          <label>Description: </label>
          <input type='text'
              required
              className='form-control'
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className='form-group'>
          <label>Durations (in minutes): </label>
          <input
            type='text'
            className='form-control'
            value={this.state.duration}
            onChange={this.onChangeDuration}
            />
        </div>

        <div className='form-group'> 
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise" className="btn btn-primary" />
        </div>

        </form>
      </div>
    );
  }
}

export default EditExercise;