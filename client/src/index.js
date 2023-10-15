import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './pages/Auth/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

// console log the Auth provider details

root.render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
);
