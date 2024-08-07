import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({topics, isFavPhotoExist, navigateTopic}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span><TopicList topics={topics} navigateTopic={navigateTopic} /></span>
      <span><FavBadge isFavPhotoExist={isFavPhotoExist} /></span>
    </div>
  )
}

export default TopNavigation;