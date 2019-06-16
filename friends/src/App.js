import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './Components/FriendList';
import AddFriend from './Components/AddFriend';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log('get response:', response);
        this.setState({friendsData: response.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then((response) => this.setState({ friends: response.data }))
      .catch((err) => {
        console.log(err);
      });
  };


  render() {
    return (
      <div className="App">
      <h1>List of Friends</h1>
      <AddFriend/>
      <FriendsList friends={this.state.friendsData} handleDelete={this.handleDelete}/>
      
      </div>
    );

    }
  }


export default App;
