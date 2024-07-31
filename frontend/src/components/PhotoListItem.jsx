import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";

const PhotoListItem = ({singlePhoto, fav, toggleFav, openModal}) => {
  /* Insert React */
  const {id, urls, user, profile, location} = singlePhoto;
  return (
    <li className="photo-list__item">
      <PhotoFavButton fav={fav} toggleFav={(toggleFav)}  singlePhoto={singlePhoto} />
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
