import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { gitHubContext } from '../context/context';
const Dashboard = () => {

  const { loading } = React.useContext(gitHubContext)

  
  return (
    <main>
      <Navbar/>
      <Search />
      {
        loading ? <img src={loadingImage}  className = "loading-img" alt='loading' /> :
        <div>
        <Info />
        <User />
        <Repos />
        </div>  
      }
    
    </main>
  );
};

export default Dashboard;
