import React from 'react';
import axios from 'axios';

 class DeleteFriend extends React.Component {
    constructor() {
        super();
        this.state = {
          friends: []
        };
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
        <div className="friends-delete">
            <h2>Delete Friends</h2>

        </div>

      )

     }
}

export default DeleteFriend;