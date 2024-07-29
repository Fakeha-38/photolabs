import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
function PhotoFavButton({switchFav, fav}) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={switchFav}>
        {/* Insert React */}
        <FavIcon fav={fav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;