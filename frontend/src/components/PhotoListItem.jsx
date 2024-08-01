import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";

const PhotoListItem = ({singlePhoto, favourites, toggleFav, openModal}) => {
  /* Insert React */
  // console.log("******* singlePhoto in PhotoListItem: ", singlePhoto);
  const {id, urls, user, profile, location, similar_photos} = singlePhoto;
  return (
    <li className="photo-list__item">
      <PhotoFavButton favourites={favourites} toggleFav={toggleFav}  singlePhoto={singlePhoto} />
      <img src={urls.regular} alt={`image taken by ${user.username}`} className="photo-list__image" onClick={() => openModal(singlePhoto)} />
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.username} profile img`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{user.username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
