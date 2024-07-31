import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import { useState } from "react";
import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos}) => {
  const [favourites, setFavourites] = useState([]);
  const switchFav = (photo) => {
    setFavourites(favourites => {
      // console.log("My fav array: ", favourites);
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
      <TopNavigation topics={topics} isFavPhotoExist={favourites.length !== 0 ? true : false} />
      <PhotoList photos={photos} fav={favourites} switchFav={switchFav} />
    </div>
  );
};

export default HomeRoute;
