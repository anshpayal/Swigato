import React from "react";

class AboutInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "dummy location",
        avatar_url: "upload",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anshpayal");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="info-card">
        <h2>{name}</h2>
        <h2>{location}</h2>
        <img src={avatar_url}/>
      </div>
    );
  }
}

export default AboutInfo;
