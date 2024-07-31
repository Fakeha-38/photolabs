import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, fav, switchFav, photoClick}) => {
  const photosMap = photos.map((item, index) => {
    return(
      <PhotoListItem key={item.id} singlePhoto={item} fav={fav} switchFav={switchFav} photoClick={photoClick} />
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
