import React from 'react';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;