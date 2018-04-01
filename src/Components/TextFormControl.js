import React from 'react';

export class TextFormControl extends React.Component {
  render() {
    return (
      <div className="row">
        <h4>{this.props.title}</h4>
        <input type="text" onChange={this.props.onChange} />
      </div>
    );
  }
}
