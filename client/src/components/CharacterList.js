import React, { Component } from 'react'
import axios from 'axios'


class CharacterList extends Component {
  constructor(props) {
    super(props)
    this.url = '/api/characters'
    this.handleFetchCharacter = this.handleFetchCharacter.bind(this)
    this.handleIncAge = this.handleIncAge.bind(this)
    this.handleDeleteCharacter = this.handleDeleteCharacter.bind(this)
  }
  handleDeleteCharacter = (id)=> {
    const { onRequestData, onReceiveDataSuccess, onReceiveDataFailed } = this.props
    const url = this.url
    onRequestData()
    axios({
      method: 'delete',
      url: url,
      data: {
        id: id,
      }
    })
    .then( res => {
      const _characterArray = res.data
      onReceiveDataSuccess(_characterArray)
    })
    .catch( err => {
      console.error(new Error(err))
      onReceiveDataFailed()
    })
  }

  handleIncAge = (id)=> {
    const { onReceiveDataSuccess, onReceiveDataFailed, onRequestData } = this.props
    const url = this.url
    onRequestData()
    axios.put(url, {
      id,
    })
    .then( request => {
      const _characterArray = request.data
      onReceiveDataSuccess(_characterArray)
    })
    .catch( err => {
      console.log(new Error(err))
      onReceiveDataFailed()
    })
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
    const { characterArray, isFetching } = this.props
// console.log(this.props.characterArray)
    return (<div>
      {
        isFetching
        ? <h2>Now Loading...</h2>
        : <div>
         <button onClick={ (e)=> this.handleFetchCharacter(e)}>Fetch data</button>
          <ul>
            {
              characterArray.map( (value)=> (
                <li key={value._id}>
                  <span>{ value.name } : { value.age }</span>
                  <button onClick={e => this.handleIncAge(value._id)}>+</button>
                  <button onClick={e => this.handleDeleteCharacter(value._id)}>Delete</button>
                </li>
              ))
            }
          </ul>
        </div>
      }
    </div>)
  }
}

export default CharacterList
