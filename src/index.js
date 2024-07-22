import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'typeface-poppins';

const rootElement = document.getElementById('root');
// CSR
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }
// SSR
if (rootElement) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
