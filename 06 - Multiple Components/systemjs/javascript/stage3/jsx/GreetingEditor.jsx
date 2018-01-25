/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

export default class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  onChange = (name) => {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <EditBox onChange={this.onChange} value={this.state.name} />
        <Greeting name={this.state.name} />
      </div>
    );
  }
}
