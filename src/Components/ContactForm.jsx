import React, { useState } from 'react';
import '../App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        // Construct the email body
        const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

        // Open the default email client with a pre-filled email
        window.open(`mailto:aleasaawan@gmail.com?subject=Contact Form Submission: Re: Whisker World &body=${emailBody}`);
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <br />
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <br />
        Message:
        <br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <br />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
