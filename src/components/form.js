import React from 'react';
import { reduxForm, SubmissionError, Field} from 'redux-form';


import Input from './input';
import { required, nonEmpty, inputLength, mustBeNumber } from '../validators';

export class Form extends React.Component {
  onSubmit(values) {
    console.log('REQUEST',values);
    fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
      method: "POST",
      body: JSON.stringify(values),
      headers: {'content-type': 'application/json'}
    })
    .then(response => {
      if(!response.ok){
        if(
          response.headers.has('content-type') &&
          response.headers.get('content-type').startsWith('application/json')
        ){
          return response.json().then(err => Promise.reject(err));
        }

        return Promise.reject({
          code: response.status, 
          message: response.statusText
        })
      }

      //response status IS ok
      return;

    })
    .then( () => console.log('Submitted with values: ', values))
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
          // Convert ValidationErrors into SubmissionErrors for Redux Form
          return Promise.reject(
              new SubmissionError({
                  [location]: message
              })
          );
      }
      return Promise.reject(
          new SubmissionError({
              _error: 'Error submitting message'
          })
      );
    });
  }

  render(props) {
    let successMessage;
    if (this.props.submitSucceeded) {
        successMessage = (
            <div className="message message-success">
                Message submitted successfully
            </div>
        );
    }

    let errorMessage;
    if (this.props.error) {
        errorMessage = (
            <div className="message message-error">{this.props.error}</div>
        );
    }


    return (
      <main>
        <h1>Report a problem with your delivery</h1>
        {successMessage}
        {errorMessage}
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
            validate={[required, nonEmpty, inputLength, mustBeNumber]}
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