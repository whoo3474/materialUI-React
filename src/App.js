import React, { Component } from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Exercises from './Exercises'
import { muscles, exercises } from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from './context';
class App extends Component {
  state = {
    exercises,
    exercise:{}
  }
  getExercisesByMuscles() {
    const initExercises = muscles.reduce((exercises, category)=> ({
      ...exercises,
      [category]:[]
    }),{})
    
    //  Object.entries() 메서드는 for...in와 같은 순서로 주어진 객체 자체의
    //  enumerable 속성 [key, value] 쌍의 배열을 반환합니다.
    return Object.entries(
      this.state.exercises.reduce((exercises,exercise)=>{
        const {muscles} = exercise

        exercises[muscles] =[...exercises[muscles],exercise]
        return exercises
      },initExercises)
    )
  }
  handleCategorySelect = category => {
    this.setState({
      category
    })
  }
  handleExerciseSelected = id => {
    this.setState(({exercises})=>({
      exercise:exercises.find( ex => ex.id === id),
      editMode:false
    }))
  }
  handleExerciseCreate = exercise => {
    this.setState(({exercises}) => ({
      exercises : [
        ...exercises,
        exercise
      ]
    }))
  }
  handleExerciseDelete = id => {
    this.setState(({exercises, exercise, editMode}) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id == id ? false : editMode,
      exercise: exercise.id == id ? {} : exercise
    }))
  }
  handleExerciseSelectEdit = id => {
    this.setState(({exercises})=>({
      exercise:exercises.find( ex => ex.id === id),
      editMode: true
    }))
  }
  handleExerciseEdit = exercise => {
    this.setState(({ exercises}) => ({
      exercises: [
        ...exercises.filter( ex => ex.id !== exercises.id),
      exercise
    ],
    exercise}))
  }

  getContext = () => ({
    muscles,
    ...this.state,
    exercisesByMuscles : this.getExercisesByMuscles(),
    onCategorySelect : this.handleCategorySelect,
    onCreate: this.handleExerciseCreate,
    onEdit: this.handleExerciseEdit,
    onSelectEdit: this.handleExerciseSelectEdit,
    onDelete : this.handleExerciseDelete,
    onSelect : this.handleExerciseSelected
  })
  // redux의 store같은 느낌

  render() {
    return (
      <Provider value={this.getContext()}>
        <CssBaseline />
          <Header/>
          <Exercises/>
          <Footer/>
      </Provider>
    );
  }
}

export default App;