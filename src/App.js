import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/Card-List/Card-List';
import './components/Card-List/cradlist.css';
import { SearchBox } from './components/Search-Box/Search-Box';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      seachFeild: ''
    }
  }
  async componentDidMount(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    this.setState({monsters: users});
  }

  handleChange = (e)=> {
    this.setState({seachFeild: e.target.value});
  }

  render(){
    const {monsters, seachFeild} = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(seachFeild.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
