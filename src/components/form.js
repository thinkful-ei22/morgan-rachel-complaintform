import React from 'react';

export default function Form() {
  return (
    <main>
      <div>
        <h1>Report a problem with your delivery</h1>
      </div>
      <form>
        <div>
          <label for='number-input'>Tracking Number</label>
          <input type='text' id='number-input' />
        </div>
        <div>
          <label for='issue-dropdown'>What is your issue?</label>
          <select id='issue-dropdown'>
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damaged">Some of my order was damaged</option>
            <option value="other">Other (give details below)</option>
          </select>
        </div>
        <label for='detail-input'>Give more details (optional)</label>
        <div>
          <textarea id='detail-input'></textarea>
        </div>
        <button>Submit</button>
      </form>
    </main>
  )
}