import React, { Component } from 'react';
import UserDetails from './components/userDetailsClass'

class App extends Component {
  render() {
    const user = {
      name: 'John Doe',
      city: 'san francisco'
    }
    return (
      <div>
        <UserDetails user={user} />
      </div>
    );
  }
}

export default App;
