import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddForm from './AddForm'
import CharacterList from './CharacterList'
import { changeName, changeAge, initialForm, requestData, receiveDataSuccess, receiveDataFailed } from '../actions'

class App extends Component {
  render() {
// console.log(this.props)
    return (
      <div className="App">
        <AddForm {...this.props}/>
        <CharacterList {...this.props}/>
      </div>
    );
  }
}

// export default App;
export default connect(
  state => ({
    name: state.form.name,
    age: state.form.age,
    characterArray: state.characters.characterArray,
  }),
  dispatch => ({
    onChangeName(e) { dispatch(changeName(e.target.value)) },
    onChangeAge(e) { dispatch(changeAge(e.target.value)) },
    onInitialForm() { dispatch(initialForm()) },
    onRequestData() { dispatch(requestData()) },
    onReceiveDataSuccess(e) { dispatch(receiveDataSuccess(e))},
    onReceiveDataFailed() { dispatch(receiveDataFailed())},
  })
)(App)
