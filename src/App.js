import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Login from './Login';
import LocalStorageExample from './LocalStorageExample';

function App() {
  return (
    <Router>
      <div>
        <Routes> <Route path="/login" element={<Login />} />
        <Route path="/local" element={<LocalStorageExample />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
