import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({ title, imageUrl, history, size, linkUrl, positionT, match}) => (
    <div className={`${size} menu-item`}  
          onClick={() => history.push(`${match.url}${linkUrl}`)}
          >
    <div
      className={`${positionT} background-image`}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title is-1 has-text-white'>{title.toUpperCase()}</h1>
        <button className="button button-color">
          <span className='subtitle is-2 has-text-white'>SHOP {title.toUpperCase()}</span>
        </button>
    </div>
  </div>
);

export default  withRouter(MenuItem);