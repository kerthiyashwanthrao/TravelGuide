import './App.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Card from './travelCard'

class App extends Component {
  state = {isLoading: true, travelGuideArray: []}

  componentDidMount() {
    this.getTravelArray()
  }

  getTravelArray = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const newData = data.packages.map(item => ({
      id: item.id,
      name: item.name,
      imageUrl: item.image_url,
      description: item.description,
    }))
    this.setState({isLoading: false, travelGuideArray: newData})
  }

  render() {
    const {travelGuideArray, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      <div className="container">
        <h1 className="heading">Travel Guide</h1>
        <ul className="cardsContainer">
          {travelGuideArray.map(item => (
            <Card item={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
