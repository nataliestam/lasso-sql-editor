import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const queryId = window.location.pathname.split('/')[2];

ReactDOM.render(<App queryId={queryId}/>, document.getElementById('app'));
