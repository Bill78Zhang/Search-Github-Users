import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const gitHubContext = React.createContext();
const { Provider } = gitHubContext;

const GitHubProvider = ({ children }) => {
  const [requests, setRequests] = useState(0);
  const [error, setError] = useState({ status: false, msg: '' });
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);

  const searchUser = async user => {
    toggleErrors(false, '');
    setLoading(true);
    try {
      const response = await axios(`${rootUrl}/users/${user}`);
      console.log(response);
      if (response) {
        setUser(response.data);
        // - [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
        // - [Followers](https://api.github.com/users/john-smilga/followers)
        await Promise.allSettled([
          axios(`${rootUrl}/users/${user}/repos?per_page=100`),
          axios(`${rootUrl}/users/${user}/followers`)
        ])
          .then(results => {
            const [repos, followers] = results;
            console.log(results);
            const status = 'fulfilled';
            if (repos.status === status) {
              setRepos(repos.value.data);
            }
            if (followers.status === status) {
              setFollowers(followers.value.data);
            }
          })
          .catch(error => console.log(error));
        setLoading(false);
      }
    } catch (err) {
      toggleErrors(true, 'We can not find the user. Please try again!');
      setLoading(false);
      console.log(err);
    }
  };

  const toggleErrors = (status = false, msg = '') => {
    setError({ status, msg });
  };
  const getRequestsLimit = async () => {
    const { data } = await axios(`${rootUrl}/rate_limit`);

    let {
      rate: { remaining }
    } = data;
    if (remaining > 0) {
      setRequests(remaining);
    } else {
      setRequests(remaining);
      toggleErrors(true, 'Your search times exceed the limit times');
    }
  };

  useEffect(() => {
    getRequestsLimit();
  });

  return (
    <Provider
      value={{ user, repos, followers, searchUser, error, requests, loading }}>
      {children}
    </Provider>
  );
};

export { gitHubContext, GitHubProvider };
