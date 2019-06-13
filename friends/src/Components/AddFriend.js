import React, { Component } from 'react';
import axios from 'axios';
import OriginalFriends from './OriginalFriends';

export default class AddFriend extends Component {
   constructor() {
      super();
      this.state = {
         name: '',
         age: '',
         email: ''
      };
   }

   buttonSubmit = () => {
      const newFriend = {
         name: this.state.name,
         age: this.state.age,
         email: this.state.email
      };
      axios
         .post('http://localhost:5000/friends', newFriend)
         .then(() => {
            this.setState({ name: '', age: null, email: '' });
         })
         .catch(error => console.log(error));
   };

   inputChange = e => this.setState({ [e.target.name]: e.target.value });

   render() {
      return (
         <div>
            <h3>Add Friend</h3>
            <form onSubmit={this.buttonSubmit}>
               <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={this.inputChange}
                  value={this.state.name}
               />
               <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  onChange={this.inputChange}
                  value={this.state.age}
               />
               <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={this.inputChange}
                  value={this.state.email}
               />
               <input type="submit" value="Add" />
            </form>

            <OriginalFriends/>
         </div>
      );
   }
}