import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Func component, no state or lifecyle. Accepts props & jsx ONLY
// Date.substring to 10 chars
// Delete link/button, call on props deleteExercise comp (Axios req).

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td> 
    <td>
      <Link to={'/edit/'+props.exercise._id}>Edit</Link> | <a href='#' onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

class ExerciseList extends Component {
  constructor(props) {
    super(props);

    //Delete method via button
    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {exercises: []}
  }

  //Lifecyle before render method. Accept all fields from each object
  componentDidMount() {
    // axios.get('http://localhost:3001/exercises/')
    axios.get('https://exercise-track.herokuapp.com/exercises/')
    .then(res => {
      this.setState({ exercises: res.data})
    })
    .catch((error) => {console.log(error);
    })
  }
  
  //Delete method via Object ID request from DB. Also delete _id element from UI via filter method. 
  deleteExercise(id) {
    // axios.delete('http://localhost:3001/exercises/'+id)
    axios.delete('https://exercise-track.herokuapp.com/exercises/'+id)
    .then(res => { console.log(res.data)});
    
    // Filter Exercises array, return ONLY elements if element._id is not equal ID that is deleting
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }
  
  //New method - Maps exercise, then return a Component of the row from tables. Passed props down.
  exerciseList() {
    return this.state.exercises.map(currentexercise => {
       return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>
    })
  }
  render() {
    return (
      <div className='container'>
        <h3>Current Exercise List</h3>
        <br />
        <table className='table' >
          <thead className='thead-light'>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Duration (mins)</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ExerciseList;