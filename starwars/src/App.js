import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }



  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
                        starwarsChars: data.results, 
                        next: data.next                        
                      });
        })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextItems = () => {
    this.getCharacters(this.state.next);
  }

  render() {
    return (
      <div className='App'>
        <h1 className='Header'>React Wars</h1>
        <button className='next-btn' onClick={this.nextItems}>Next you click</button>

        <CharacterList starwarsChars={this.state.starwarsChars} />
        
      </div>
    );
  }
}

export default App;
