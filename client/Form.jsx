import React, { useState } from 'react';

function FormWithEvents() {
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
    <div>
      <h1>Form with Events</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* Display the submitted content in a paragraph */}
      <p>Submitted Content: {submittedContent}</p>
    </div>
  );
}

export default FormWithEvents;
