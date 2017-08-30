import React, { Component } from 'react'
import axios from 'axios'

class CharacterList extends Component {
  constructor(props) {
    super(props)
    this.url = '/api/characters'
    this.handleFetchCharacter = this.handleFetchCharacter.bind(this)
  }
  handleFetchCharacter = ()=> {
    const url = this.url
    const { onRequestData, onReceiveDataSuccess, onReceiveDataFailed } = this.props
    onRequestData()
    axios.get(url)
    .then( response => {
      const _characterArray = response.data
// console.log(_characterArray)
      onReceiveDataSuccess(_characterArray)
    })
    .catch ( err => {
      onReceiveDataFailed()
      console.error(new Error(err))
    })
  }

  render() {
    const { characterArray } = this.props
// console.log(this.props.characterArray)
    return (<div>
      <button onClick={ (e)=> this.handleFetchCharacter(e)}>Fetch data</button>
      <ul>
      {
        characterArray.map( (value)=> (
          <li key={value._id}>{ value.name } : { value.age }</li>
        ))
      }
      </ul>
    </div>)
  }
}

export default CharacterList
