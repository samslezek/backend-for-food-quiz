import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://testuser:password1@ds359118.mlab.com:59118/foodhighscores'); // insert your mlab `MongoDb URI`

// var HighScores = mongoose.model('Score', { name:Number })

class NameSubmitForm extends Component {
  state = {
    score : this.props.currentScore,
    inputValue : ''
  }

  componentWillReceiveProps(nextProps) {
    this.setState({score:this.props.currentScore})
  }

  render = (props) => {
    return (
      <React.Fragment>
        <form onSubmit={this.updateInputValue}>
          <input type="text" id="input1"></input>
          <input type='submit'></input>
          <button class='play-again' onClick={() => {this.props.resetfunc()}}>Play Again</button>
        </form>
      </React.Fragment>
    );
}


  updateInputValue = (evt) => {
    evt.preventDefault();
    this.setState({
      inputValue: evt.target[0].value
    });

    fetch('/react', {
      method: 'post',
      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
          name: evt.target[0].value,
          score: this.state.score
        })
    })
    this.props.submitscore();
  }
};

export default NameSubmitForm;