import React from 'react';

export default class Input extends React.Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }


  render() {
    const Element = this.props.element || 'input';

    let errorMessage;
    if (this.props.meta.touched && this.props.meta.error) {
      errorMessage = <div className="form-error">{this.props.meta.error}</div>;
    }

    let successMessage;
    if (this.props.meta.touched && this.props.meta.success) {
      successMessage = <div className="form-error">{this.props.meta.success}</div>;
    }

    return (
      <div>
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {errorMessage}
          {successMessage}
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