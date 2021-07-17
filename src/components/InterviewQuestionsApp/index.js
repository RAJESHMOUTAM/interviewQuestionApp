// Write you Code here
import {Component} from 'react'

import Filters from '../Filters'

import InterviewQuestion from '../InterviewQuestion'

import './index.css'

let filteredData

class InterviewQuestionsApp extends Component {
  state = {
    activeLanguage: 'ALL',
    activeDifficultyLevel: 'ALL',
  }

  onChangeLanguage = value => {
    this.setState({
      activeLanguage: value,
    })
  }

  onChangeDifficultyLevel = value => {
    this.setState({
      activeDifficultyLevel: value,
    })
  }

  getFilteredData = () => {
    const {activeDifficultyLevel, activeLanguage} = this.state
    const {questionsData} = this.props

    if (activeDifficultyLevel === 'ALL' && activeLanguage === 'ALL') {
      filteredData = questionsData
    } else if (activeDifficultyLevel === 'ALL' && activeLanguage !== 'ALL') {
      filteredData = questionsData.filter(
        eachQuestion => eachQuestion.language === activeLanguage,
      )
    } else if (activeDifficultyLevel !== 'ALL' && activeLanguage === 'ALL') {
      filteredData = questionsData.filter(
        eachQuestion => eachQuestion.difficultyLevel === activeDifficultyLevel,
      )
    } else {
      filteredData = questionsData.filter(
        eachQuestion =>
          eachQuestion.difficultyLevel === activeDifficultyLevel &&
          eachQuestion.language === activeLanguage,
      )
    }
    return filteredData
  }

  render() {
    const {levelsData, categoryData} = this.props
    const filteredQuestionData = this.getFilteredData()
    return (
      <div className="bg-container">
        <div className="interview-container">
          <h1 className="heading">30 Seconds of Interviews</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="img"
          />
        </div>
        <div className="filter-container">
          <Filters
            levelsData={levelsData}
            categoryData={categoryData}
            onChangeDifficultyLevel={this.onChangeDifficultyLevel}
            onChangeLanguage={this.onChangeLanguage}
          />
        </div>
        <div className="question-container">
          {filteredQuestionData.map(eachQuestion => (
            <InterviewQuestion key={eachQuestion.id} question={eachQuestion} />
          ))}
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
