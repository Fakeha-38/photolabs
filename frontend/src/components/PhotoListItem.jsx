import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";

const PhotoListItem = ({sampleData}) => {
  /* Insert React */
  const {id, urls, user, profile, location} = sampleData;
  const [fav, setFav] = useState(false);
  const switchFav = () => setFav(fav === true ? false : true);
  return (
    <div className="photo-list__item">
      <PhotoFavButton fav={fav} switchFav={switchFav} />
      <img src={urls.regular} alt={`image taken by ${user.username}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.username} profile img`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{user.username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
