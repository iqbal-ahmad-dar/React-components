// mocks/mui-tel-input.js

import React from 'react';
const MockMuiTelInput = ({ value, onChange }) => (
  <input
    data-testid="mock-mui-tel-input"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default MockMuiTelInput;
