import React from 'react';
import Form from './Form';
const App = ({ _insertCss }) => {
  if (_insertCss) {
    _insertCss();
  }
  return (
    <>
      <Form />
    </>
  );
};
export default App;
