import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Add code to send the form data to a backend or email service
    // Reset form fields after submitting
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1 className='text-center font-bold text-2xl mt-4'>Contact Us</h1>
      <form onSubmit={handleSubmit} className='gap-4 items-center md:flex justify-center mt-10 font-medium text-md'>
        <label htmlFor="name">Name:</label>
        <input className='outline-0 rounded border-2 w-28 h-10' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input className='outline-0 rounded border-2 w-28 h-10' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="message">Message:</label>
        <textarea className='outline-0 rounded border-2 w-28 h-10' id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

        <button className='bg-slate-500 text-white p-2 rounded hover:bg-slate-950 duration-500 font-semibold' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;