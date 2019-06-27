import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios'
import 'react-datepicker/dist/react-datepicker.css';

 // Date Picker react component, install and use. (react-datepicker)
 // Import DatePicker and styling

class CreateExercise extends Component {
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

  // Lifecycle to start before Loading.
  // Use Axios to get the data array, use Map array, first field
  componentDidMount() {
    // axios.get('http://localhost:3001/users/')
    axios.get('https://exercise-track.herokuapp.com/users/')
    .then(response => {
      if (response.data.length > 0 ) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        })
      }
    })
    .catch((error) => {
      console.log(error);
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

    //Axios post method request, 2nd argument as Object
    // axios.post('http://localhost:3001/exercises/add', exercise)
    axios.post('https://exercise-track.herokuapp.com/exercises/add', exercise)
    .then (res => console.log(res.data))

    //After User submit, return to List component
    // window.location = '/';
  }

  render() {
    return (
      <div className='container'>
        <h3>New exercise routine</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <select ref='userInput'
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}>
              { //Inside select box options, from User's array from MongoDB. Map thru array, return Option in Select Box.
                this.state.users.map(function(user) {
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
          <input type="submit" value="Add Exercise" className="btn btn-primary" />
        </div>
        
        </form>
      </div>
    );
  }
}

export default CreateExercise;