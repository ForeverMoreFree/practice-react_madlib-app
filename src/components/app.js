import React, { Component } from 'react';
import MadlibForm from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">

          <div className="madlib-heading">
            <h1>ForevermoreFree's Mad Libs</h1>  
            <div className="madlib-subheading">
              Fill out the fields below and click the generate button<br/>to see the Mad Lib story.
            </div>
          </div>
          <MadlibForm />

        </div>
      </div>
    );
  }
}