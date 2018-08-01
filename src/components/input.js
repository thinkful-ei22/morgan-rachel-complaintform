import React from 'react';

export default class Input extends React.Component {

  render(props) {
    const Element = this.props.element;



    if (Element === 'select') {
      return (
        <select>
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some of my order was damaged</option>
          <option value="other">Other (give details below)</option>
        </select>
      )
    }
    return (
      <Element
        id={this.props.id}
        
      />
    )
  }

}