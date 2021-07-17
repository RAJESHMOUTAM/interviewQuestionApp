// Write you Code here
import {Component} from 'react'

import './index.css'

class Filters extends Component {
  renderDifficultyOption = () => {
    const {levelsData} = this.props

    return levelsData.map(({id, level}) => (
      <option key={id} className="option" value={level}>
        {level}
      </option>
    ))
  }

  onChangeDifficultyLevelOptions = event => {
    const {onChangeDifficultyLevel} = this.props
    const {value} = event.target

    return onChangeDifficultyLevel(value)
  }

  renderLanguageOption = () => {
    const {categoryData} = this.props

    return categoryData.map(({id, language}) => (
      <option key={id} className="option" value={language}>
        {language}
      </option>
    ))
  }

  onChangeLanguageOption = event => {
    const {onChangeLanguage} = this.props
    const {value} = event.target
    return onChangeLanguage(value)
  }

  render() {
    return (
      <div className="container">
        <div className="select-options">
          <label className="filter-name" htmlFor="language">
            Language
          </label>
          <select
            onChange={event => this.onChangeLanguageOption(event)}
            className="select-item"
          >
            {this.renderLanguageOption()}
          </select>
        </div>
        <div className="select-options">
          <label className="filter-name" htmlFor="Difficulty level">
            Difficulty level
          </label>
          <select
            onChange={event => this.onChangeDifficultyLevelOptions(event)}
            className="select-item"
          >
            {this.renderDifficultyOption()}
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
