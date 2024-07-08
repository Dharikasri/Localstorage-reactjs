import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Login from './Login';
import LocalStorageExample from './LocalStorageExample';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/local" element={<LocalStorageExample />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
