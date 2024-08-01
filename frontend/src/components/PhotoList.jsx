import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, favourites, toggleFav, openModal}) => {
  const photosMap = photos.map((item, index) => {
    // console.log("%%%%% Item in Photolist: ", item);
    return(
      <PhotoListItem key={item.id} singlePhoto={item} favourites={favourites} toggleFav={toggleFav} openModal={openModal} />
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