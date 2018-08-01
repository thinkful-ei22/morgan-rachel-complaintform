import React from 'react';

export default class Input extends React.Component{

  render(props){
    const Element = this.props.element;

    return(
      <Element
        id={this.props.id}
      />
    )
  }

}