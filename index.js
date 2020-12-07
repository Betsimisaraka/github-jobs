import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import {GithubJobsContext} from './pages/GithubJobsContext';

ReactDOM.render(
    <GithubJobsContext>
        <App />
    </GithubJobsContext>,
    document.getElementById('root')
);