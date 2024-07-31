import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
function PhotoFavButton({toggleFav, fav, singlePhoto}) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => toggleFav(singlePhoto)}>
        {/* Insert React */}
        <FavIcon fav={fav.includes(singlePhoto) ? true : false}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;