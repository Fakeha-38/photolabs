import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import { useState } from "react";
import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos, openModal, favourites, toggleFav}) => {
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation topics={topics} isFavPhotoExist={favourites.length !== 0} />
      <PhotoList photos={photos} favourites={favourites} toggleFav={toggleFav} openModal={openModal} />
    </div>
  );
};

export default HomeRoute;
