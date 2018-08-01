import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';

export class Form extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render(props) {
    return (
      <main>
        <h1>Report a problem with your delivery</h1>
        <form
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <label htmlFor='number-input'>Tracking Number</label>
          <Field
            name="number-input"
            id="number-input"
            element="input"
            type="text"
            component={Input}
          />
          <label htmlFor='issue-dropdown'>What is your issue?</label>
          <Field
            name="issue-dropdown"
            id="issue-dropdown"
            element="select"
            component={Input}
          />
          
          <label htmlFor='detail-input'>Give more details (optional)</label>
          <Field
            name="detail-input"
            id="detail-input"
            element="textarea"
            component={Input}
          />    
          <button>Submit</button>
        </form>
      </main>
    )
  }
}

export default reduxForm({
  form: "complaint"
})(Form);