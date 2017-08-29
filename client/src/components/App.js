import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddForm from './AddForm'
import CharacterList from './CharacterList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddForm />
        <CharacterList />
      </div>
    );
  }
}

// export default App;
export default connect()(App)
