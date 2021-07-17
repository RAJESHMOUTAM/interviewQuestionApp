// Write you Code here

import {Component} from 'react'

import './index.css'

const languages = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JAVASCRIPT',
}

const levels = {
  easy: 'EASY',
  medium: 'MEDIUM',
  hard: 'HARD',
}

class InterviewQuestion extends Component {
  state = {
    isAnswerShow: false,
  }

  onToggleAnswer = () => {
    this.setState(prevState => ({
      isAnswerShow: !prevState.isAnswerShow,
    }))
  }

  answerText = () => {
    const {question} = this.props
    const {answerText} = question
    const {isAnswerShow} = this.state

    if (isAnswerShow) {
      return <p className="answer-text">{answerText}</p>
    }
    return null
  }

  languageClassName = () => {
    const {question} = this.props
    const {language} = question

    let selectedLanguage

    if (language === languages.html) {
      selectedLanguage = 'html'
    } else if (language === languages.css) {
      selectedLanguage = 'css'
    } else {
      selectedLanguage = 'javascript'
    }
    return selectedLanguage
  }

  difficultyLevelClassName = () => {
    const {question} = this.props
    const {difficultyLevel} = question

    let selectedDifficultyLevel

    if (difficultyLevel === levels.easy) {
      selectedDifficultyLevel = 'easy-level'
    } else if (difficultyLevel === levels.medium) {
      selectedDifficultyLevel = 'medium-level'
    } else {
      selectedDifficultyLevel = 'hard-level'
    }
    return selectedDifficultyLevel
  }

  render() {
    const {isAnswerShow} = this.state
    const {question} = this.props
    const {questionText, language, difficultyLevel} = question
    const altText = isAnswerShow ? 'up arrow' : 'down arrow'
    const imageUrl = isAnswerShow
      ? 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
      : 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'

    return (
      <div className="question-container">
        <div className="filters">
          <span className={`${this.difficultyLevelClassName()} selected-item`}>
            {difficultyLevel}
          </span>
          <span className={`${this.languageClassName()} selected-item`}>
            {language}
          </span>
        </div>
        <h1 className="question">{questionText}</h1>
        <button className="button" type="button" onClick={this.onToggleAnswer}>
          {isAnswerShow ? 'Hide' : 'Show'}
          <img className="icon" alt={altText} src={imageUrl} />
        </button>
        {this.answerText()}
      </div>
    )
  }
}

export default InterviewQuestion
