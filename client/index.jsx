import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router.jsx';

const queryId = window.location.pathname.split('/')[2];

ReactDOM.render(<Router queryId={queryId}/>, document.getElementById('app'));
