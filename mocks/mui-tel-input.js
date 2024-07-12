import React from 'react';

export const MuiTelInput = ({ value, onChange, defaultCountry }) => (
  <input
    data-testid="mock-mui-tel-input"
    value={value}
    placeholder={defaultCountry}
    onChange={(e) => onChange(e.target.value)}
  />
);
