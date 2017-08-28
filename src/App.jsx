import 'babel-polyfill';
import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <hr />
          <h5><small>
            This is App.jsx demo.
          </small></h5>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

App.contextTypes = {
  initialState: React.PropTypes.object,
};
