import {Component} from 'react'
import Loader from 'react-loader-spinner'
// import Cookies from 'js-cookie'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    langItemList: [],
    activeTabId: languageFiltersData[0].id,
    isLoading: true,
  }

  componentDidMount() {
    this.getLangItem()
  }

  failureview = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something Went Wrong</h1>
    </div>
  )

  getLangItem = async () => {
    this.setState({isLoading: true})
    const {activeTabId} = this.state
    // const jwtToken = Cookies.get('jwt_token')
    // const url = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`
    // const options = {
    //   headers: {
    //     Authorization: `Bearer ${jwtToken}`,
    //   },
    //   method: 'GET',
    // }

    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeTabId}`,
    )

    if (response.ok) {
      const data = await response.json()
      const fetchedData = data.popular_repos.map(each => ({
        id: each.id,
        name: each.name,
        starsCount: each.stars_count,
        forksCount: each.forks_count,
        issuesCount: each.issues_count,
        avatarUrl: each.avatar_url,
      }))

      this.setState({langItemList: fetchedData, isLoading: false})
    }
    return this.failureview()
  }

  onClickButtonLang = id => {
    this.setState({activeTabId: id}, this.getLangItem)
  }

  render() {
    const {isLoading, langItemList, activeTabId} = this.state
    return (
      <div className="github-page">
        <h1>Popular</h1>
        <ul className="lang-tabs">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              lang={each}
              activeTabId={activeTabId}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="repo-item">
            {langItemList.map(each => (
              <RepositoryItem key={each.id} item={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
