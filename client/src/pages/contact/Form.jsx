import React, { useState } from 'react';
import './Form.css'; // Import the CSS file

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedContent, setSubmittedContent] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine the name and email content and set it to the paragraph
    const content = `Name: ${name}, Email: ${email}`;
    setSubmittedContent(content);
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Form with Events</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input type="text" value={name} onChange={handleNameChange} className="form-input" />
        </label>
        <label className="form-label">
          Email:
          <input type="text" value={email} onChange={handleEmailChange} className="form-input" />
        </label>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
      {/* Display the submitted content in a paragraph */}
      <p className="submitted-content">Submitted Content: {submittedContent}</p>
    </div>
  );
}

export default Form;
