import React, { useState } from 'react';
import "./style.css";

const App = () => {
  const [content, setContent] = useState('');
  const [l_userName, setl_UserName] = useState('');
  const [l_password, setl_Password] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://auto-server-yhw2.onrender.com/post-to-linkedin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, l_userName, l_password }),
      });
      if (response.ok) {
        const result = await response.text();
        console.log(result);
        alert('Posting Completed !!!!');
      } else {
        console.error('Failed to post:', response.statusText);
        alert('Failed to post. Please try again.');
      }
    } catch (error) {
      console.error('Error posting:', error);
      alert('Error posting to LinkedIn. Please try again.');
    }
  };

  return (
    <div id='main'>
      <h1>LinkedIn Post Automation</h1>
      <div id='container'>
        <form onSubmit={handlePost}>
          <label htmlFor="username">Enter LinkedIn Email or Username</label>
          <br />
          <input type="text" required placeholder='Email or Username' onChange={(e)=> setl_UserName(e.target.value)}/>
          <br />
          <label htmlFor="password">Enter LinkedIn Password</label>
          <br />
          <input type="password" required placeholder='Password' onChange={(e)=> setl_Password(e.target.value)}/>
          <textarea
            required
            rows="10"
            onChange={(e) => setContent(e.target.value)}
            placeholder='Write about your LinkedIn post...'
          />
          <div style={{ width: '100%', display: "flex", justifyContent: "center" }}>
            <button type='submit'>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
