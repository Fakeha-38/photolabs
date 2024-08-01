import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
function PhotoFavButton({toggleFav, favourites, singlePhoto}) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => toggleFav(singlePhoto)}>
        {/* Insert React */}
        <FavIcon favourites={favourites.includes(singlePhoto) ? true : false}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;