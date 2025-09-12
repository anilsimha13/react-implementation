import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { twitter } = this.props;
    return (
      <div>
        <div className="user-card">
          <h1>Count ={this.state.count}</h1>
          <h2>Anil Simha</h2>
          <h3>Location: Kakinada</h3>
          <h4>Contact: @ursanilsimha {twitter}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
