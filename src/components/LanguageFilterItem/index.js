// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {lang, onClickButtonLang, activeTabId} = props
  const {id, language} = lang

  const onClickLangButton = () => {
    onClickButtonLang(id)
  }

  return (
    <div>
      <button
        type="button"
        className="none-border"
        onClick={onClickLangButton}
        value={activeTabId}
      >
        {language}
      </button>
    </div>
  )
}

export default LanguageFilterItem
