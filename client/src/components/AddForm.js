import React, { Component } from 'react'

class AddForm extends Component {
  render() {
    const { name, age, onChangeName, onChangeAge } = this.props
console.log(this.props)
    return (<div>
        <form>
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
        </form>
      </div>)

  }

}
export default AddForm
