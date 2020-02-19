import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class HouseHistory extends React.Component {
  constructor() {
    super()
    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    axios.get('https://www.potterapi.com/v1/houses/?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW')
      .then(res => this.setState({ houses: res.data }))
  }

  

  render() {
    console.log(this.state.houses)
    return (
 
       
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {this.state.houses
            
            .filter(elem => {
              return elem.name.toLowerCase().includes(this.state.filter.toLowerCase())
            })
            .map((houses, i) => {
              return (
                <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                  <Link className="char-and-spells" to={`/houses/${houses._id}`}>
                    <div className="btn card has-background-black">
                      <div className="card-content">
                        <p className="has-text-white">{houses.name}</p>
                        {/* <p className="has-text-grey-darker">Type: {characters.house}</p> */}
                        {/* <p className="has-text-grey-darker">Effect: {characters.effect}</p> */}
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
      
    )
  }

}


export default HouseHistory