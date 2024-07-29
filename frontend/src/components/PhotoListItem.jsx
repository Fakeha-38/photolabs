import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({sampleData}) => {
  /* Insert React */
  const {id, imageSource, username, profile, location} = sampleData;
  return (
    <div className="photo-list__item">
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
