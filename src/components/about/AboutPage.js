import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component{
  render() {
    return(
      <div className="jumbotron">
        <h1>About</h1>
        <Link to="home" className="btn btn-primary btn-lg">Home</Link> 
      </div>
    );
  }
}

export default AboutPage;
