import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserApp from './App';

ReactDOM.render(<UserApp />, document.getElementById('root'));
registerServiceWorker();
