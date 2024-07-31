import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({topics, fav}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span><TopicList topics={topics} /></span>
      <span><FavBadge isFavPhotoExist={fav.length !== 0 ? true : false} /></span>
    </div>
  )
}

export default TopNavigation;