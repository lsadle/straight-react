import React from 'react';

export class SubmitButton extends React.Component {
  render() {
    let btnStyle = {
      margin: 10 
    };

    return <button className="btn btn-primary" style={btnStyle} onClick={this.props.onClick}>{this.props.btnText}</button>
  }
}
