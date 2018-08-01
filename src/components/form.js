import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './input';

export class Form extends React.Component {
  onSubmit(values){
    console.log(values);
  }

  render(props){
    return (
      <main>
        <div>
          <h1>Report a problem with your delivery</h1>
        </div>
        <form 
          onSubmit={this.props.handleSubmit(values => {
          this.onSubmit(values)
        })}
        >
          <div>
            <label htmlFor='number-input'>Tracking Number</label>
            <Field name="number-input" id="number-input" element="input" type="text" component={Input} />
            {/* <input type='text' id='number-input' /> */}
          </div>
          <div>
            <label htmlFor='issue-dropdown'>What is your issue?</label>
            <Field name="issue-dropdown" id="issue-dropdown" element="select" component={Input}/>

             {/* <select id='issue-dropdown'>
               <option value="not-delivered">My delivery hasn't arrived</option>
               <option value="wrong-item">The wrong item was delivered</option>
               <option value="missing-part">Part of my order was missing</option>
               <option value="damaged">Some of my order was damaged</option>
               <option value="other">Other (give details below)</option>
            </select> */}
          </div>
          <label htmlFor='detail-input'>Give more details (optional)</label>
          {/* <Field name="detail-input" id="detail-input" element="textarea" component={Input}/> */}
           <div>
             <textarea id='detail-input'></textarea>
           </div>
          <button>Submit</button>
        </form>
      </main>
    )
  }
}

export default reduxForm({
  form: "complaint"
})(Form);