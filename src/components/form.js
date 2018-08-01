import React from 'react';
import { reduxForm, Field} from 'redux-form';


import Input from './input';
//import { required } from './validators';

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
          <Field
            name="trackingNumber"
            id="number-input"
            element="input"
            type="text"
            component={Input}
            label="Tracking Number"
            //validate={required}
          />
          <Field
            name="issue"
            id="issue-dropdown"
            element="select"
            component={Input}
            label="What is your issue?"
            //validate=""
          >
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damaged">Some of my order was damaged</option>
            <option value="other">Other (give details below)</option>
          </Field>

          <Field
            name="details"
            id="detail-input"
            element="textarea"
            component={Input}
            label="Give more details (optional)"
            //validate=""
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