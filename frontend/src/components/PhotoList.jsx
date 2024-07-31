import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, fav, toggleFav, displayModal}) => {
  const photosMap = photos.map((item, index) => {
    return(
      <PhotoListItem key={item.id} singlePhoto={item} fav={fav} toggleFav={toggleFav} displayModal={displayModal} />
    );    
  });
  
  return (
    <ul className="photo-list">
      {/* Insert React */}
        {photosMap}
    </ul>
  );
};

export default PhotoList;
