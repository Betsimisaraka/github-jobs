import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import {GithubJobsContext} from './pages/GithubJobsContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <GithubJobsContext>
        <Router>
            <App />
        </Router>
    </GithubJobsContext>,
    document.getElementById('root')
);