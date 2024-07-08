import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert('Registration form submitted successfully!');
  
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Registration Form</h2>
        <div style={styles.inputContainer}>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            style={styles.input}
            autoComplete="username"
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={styles.input}
            autoComplete="email"
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            style={styles.input}
            autoComplete="new-password"
            required
          />
        </div>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  form: {
    width: '300px',
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default RegistrationForm;
