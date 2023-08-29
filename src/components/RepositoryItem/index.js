// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {item} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = item
  return (
    <div className="item-div">
      <img src={avatarUrl} alt={name} className="image-avatar" />
      <h1>{name}</h1>
      <div>
        <div className="stars-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="icon-img"
          />
          <p>{starsCount}</p>
        </div>
        <div className="stars-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="icon-img"
          />
          <p>{forksCount}</p>
        </div>
        <div className="stars-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="icon-img"
          />
          <p>{issuesCount}</p>
        </div>
      </div>
    </div>
  )
}

export default RepositoryItem
