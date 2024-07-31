import React from 'react';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import { useState } from "react";

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
      <TopNavigation topics={topics} fav={favourites} />
      <PhotoList photos={photos} fav={favourites} switchFav={switchFav} />
    </div>
  );
};

export default HomeRoute;