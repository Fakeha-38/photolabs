import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const photoItem = props.sampleData;
  console.log("photo Item", photoItem);
  return (
    <div>
      <img src={photoItem.imageSource} alt="sample img 1" />
      <img src={photoItem.profile} alt="user profile img" />
      <p>{photoItem.username}</p>
      <p>{photoItem.location.city}, {photoItem.location.country}</p>
    </div>
    
  );
};

export default PhotoListItem;
