import React, { Component } from 'react'
import axios from 'axios'


class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.url = '/api/characters'

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e)=> {
    const url = this.url
    const { name, age, onInitialForm } = this.props
    console.log(this.props)
    e.preventDefault()
    axios.post(url, {
      name,
      age,
    })
    .then( response => {
      onInitialForm()
      console.log(response.data)
    })
    .catch( err => {
      console.error(new Error(err))
    })

  }

  render() {
    const { name, age, onChangeName, onChangeAge, onInitialForm } = this.props
// console.log(this.props)
    return (<div>
        <form onSubmit={e=> this.handleSubmit(e)}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={ onChangeName }
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={ onChangeAge }
            />
          </label>
          <button>submit</button>
        </form>
      </div>)

  }

}
export default AddForm
