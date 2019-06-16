import React from "react";


class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    friends: [],
    name: '',
    email: '',
    age: ''

    };
  }
  render() {
     
    return (
      <div>
        {this.props.friend.name},
        {this.props.friend.age},
        {this.props.friend.email}
        <button className="delete" onClick={() => this.props.handleDelete(this.props.friend.id)}>Delete</button>
      </div>
    );
  }
}

export default Friend;