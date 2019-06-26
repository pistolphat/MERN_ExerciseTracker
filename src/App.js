import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar.js'
import ExercisesList from './components/exercises-list.js'
import EditExercise from './components/edit-exercise.js'
import CreateExercise from './components/create-exercise.js'
import CreateUser from './components/create-user.js'

import './App.css';


// React router maps specific URL paths to different components to load

function App() {
  return (
    <div className='container'>
      <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component={ExercisesList} />
      <Route path='/edit/:id' component={EditExercise} />
      <Route path='/create' component={CreateExercise} />
      <Route path='/user' component={CreateUser} />
      </Router>
    </div>
  );
}

export default App;
