import React from "react";

import Intro from "../../components/page/intro/intro";

import { Route } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Intro} />
      </div>
    );
  }
}

export default (Main);
