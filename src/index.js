import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apps from './Todos';
import {AppRegistor} from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='body'>
        <App />
        <Apps />
        <AppRegistor/>
    </div>
);