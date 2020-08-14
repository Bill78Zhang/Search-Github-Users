import React from 'react';
import { gitHubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const UserInfo = () => {

  const { mockUser } = React.useContext(gitHubContext);
  const { public_repos, followers, following, public_gists } = mockUser;
  const items = [{
    id: '1',
    icon: <GoRepo className='icon'></GoRepo>,
    number: public_repos,
    color: 'pink',
    type:'Repos'
  }, {
    id: '2',
    icon: <FiUsers className='icon'></FiUsers>,
    number: followers,
    color: 'green',
    type:'Followers'
  },{
    id: '3',
    icon: <FiUserPlus className='icon'></FiUserPlus>,
    number: following,
    color: 'purple',
    type:'Following'
    
  },{
    id: '4',
    icon: <GoGist className='icon'></GoGist>,
    number: public_gists,
    color: 'yellow',
    type:'Gists'
    }]
  const Item = ({icon, number, color,type }) => {
    return <article className='item'>
        <span className={color}>
        {icon}
        </span>
        <div>
        <h3>{number}</h3>
          <p>{type} </p>
          </div>
  
    </article>
  }

  return (
    <section className='section'>
    <Wrapper className='section-center'>
    {items.map((i) => {
      return <Item key={i.id} {...i} />
    })}
    </Wrapper>
  </section>)
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
