import React from 'react';
import Header from './Header';
import UploadForm from './UploadForm';

const App = () => {
  return (
    <div className="App">
      <Header />
      <UploadForm />
      {/* Add button and uploaded PDF section here (refer to previous explanation) */}
    </div>
  );
};

export default App;
