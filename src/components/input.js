import React from 'react';

export default class Input extends React.Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {
    const Element = this.props.element || 'input';

    return (
      <div>
        <label htmlFor={this.props.input.name}>
          {this.props.label}
        </label>

        <Element
          {...this.props.input}
          id={this.props.name}
          type={this.props.type}
          ref={input => (this.input = input)}>
        {this.props.children}
        </Element>
      </div>
    );
  }
}