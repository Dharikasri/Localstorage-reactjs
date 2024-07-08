import React, { useState } from 'react';

const LocalStorageExample = () => {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');

  const handleSave = () => {
    const data = { string1, string2 };
    localStorage.setItem('data', JSON.stringify(data));
    alert('Strings saved to local storage');
  };

  const handleClear = () => {
    localStorage.removeItem('data');
    setString1('');
    setString2('');
    alert('Local storage data cleared');
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2>Local Storage Example</h2>
        <div style={styles.inputContainer}>
          <label htmlFor="string1" style={styles.label}>String 1:</label>
          <input
            type="text"
            id="string1"
            value={string1}
            onChange={(e) => setString1(e.target.value)}
            style={styles.input}
            placeholder="Enter String 1"
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="string2" style={styles.label}>String 2:</label>
          <input
            type="text"
            id="string2"
            value={string2}
            onChange={(e) => setString2(e.target.value)}
            style={styles.input}
            placeholder="Enter String 2"
          />
        </div>
        <div>
          <button onClick={handleSave} style={styles.button}>Save Strings</button>
          <button onClick={handleClear} style={styles.button}>Clear Local Storage</button>
        </div>
      </div>
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
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    margin: '0 10px 0 0',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default LocalStorageExample;
