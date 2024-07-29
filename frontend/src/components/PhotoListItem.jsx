import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";

const PhotoListItem = ({sampleData}) => {
  /* Insert React */
  const {id, imageSource, username, profile, location} = sampleData;
  const [fav, setFav] = useState('not-fav');
  const switchFav = () => setFav(fav === "fav" ? "not-fav" : "fav");

  return (
    <div className="photo-list__item">
      <PhotoFavButton fav={fav} switchFav={switchFav} />
      <img src={imageSource} alt={`image taken by ${username}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username} profile img`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
