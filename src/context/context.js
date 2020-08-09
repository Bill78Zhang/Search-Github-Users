import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const gitHubContext = React.createContext();
const { Provider } = gitHubContext;

const GitHubProvider = ({ children }) => {
    return <Provider value={{ mockUser, mockRepos, mockFollowers }}>{children}</Provider>
}

export { gitHubContext, GitHubProvider };
