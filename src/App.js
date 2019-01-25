import React, { Component } from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Exercises from './Exercises'
import { muscles, exercises } from './store';
class App extends Component {
  state = {
    exercises,
    category:'legs'
  }
  getExercisesByMuscles() {
    //  Object.entries() 메서드는 for...in와 같은 순서로 주어진 객체 자체의
    //  enumerable 속성 [key, value] 쌍의 배열을 반환합니다.
    return Object.entries(
      this.state.exercises.reduce((exercises,exercise)=>{
        const {muscles} = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
          return exercises
      },{})
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
  render() {
    const exercises = this.getExercisesByMuscles(),
    {category, exercise} = this.state
    return (
      <>
        <Header
        muscles={muscles}
        onExerciseCreate={this.handleExerciseCreate}/>
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}/>
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}/>
      </>
    );
  }
}

export default App;