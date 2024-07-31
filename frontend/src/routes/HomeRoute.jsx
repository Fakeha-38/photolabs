import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import { useState } from "react";
import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos, displayModal}) => {
  const [favourites, setFavourites] = useState([]);
  const toggleFav = (photo) => {
    setFavourites(favourites => {
      if(favourites.includes(photo)) {
        return favourites.filter(item => item !== photo);
      } else {
        return [...favourites, photo];
      }
    });
  };
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation topics={topics} isFavPhotoExist={favourites.length !== 0} />
      <PhotoList photos={photos} fav={favourites} toggleFav={toggleFav} displayModal={displayModal} />
    </div>
  );
};

export default HomeRoute;
