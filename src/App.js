import React from 'react';
import Courses from "./bd/courses";
import './App.css';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Login from './components/login'
import Home from './components/home'
import CourseList from './components/courses/courseList'
import AddFCourse from './components/courses/addCourse'
import EditCourse from './components/courses/editCourse'

function App() {
    return (
      <Router>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/home'} component={Home} />
        <Route exact path={'/CourseList'} component={CourseList} />
        <Route exact path={'/addCourse'} component={AddFCourse} />
        <Route exact path={'/editCourse/:id'} component={EditCourse} />
      </Router>
    );
  }

export default App;
