import React, { Component } from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Exercises from './Exercises'
import { muscles, exercises } from './store';
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
      exercise:exercises.find( ex => ex.id === id)
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
    this.setState(({exercises}) => ({
      exercises: exercises.filter(ex => ex.id !== id)
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
      exercises: exercises.filter( ex => ex.id !== exercises.id),
      exercise
    }))
  }
  render() {
    const exercises = this.getExercisesByMuscles(),
    {category, exercise, editMode} = this.state
    return (
      <>
        <Header
        muscles={muscles}
        onExerciseCreate={this.handleExerciseCreate}/>
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          editMode={editMode}
          muscles={muscles}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}/>
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}/>
      </>
    );
  }
}

export default App;