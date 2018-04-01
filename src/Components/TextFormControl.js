import React from 'react';

export class TextFormControl extends React.Component {
  render() {
    let labelStyle = {
      marginRight: 15
    };

    return (
      <div className="row">
        <label style={labelStyle}>{this.props.title}</label>
        <input type="text" onChange={this.props.onChange} />
      </div>
    );
  }
}
