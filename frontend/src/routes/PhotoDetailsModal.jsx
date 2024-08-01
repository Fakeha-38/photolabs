import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({closeModal, selectedPhoto, fav, toggleFav, openModal}) => {
  const {id, urls, user, profile, location, similar_photos} = selectedPhoto;
  const similarPhotosArr = Object.values(similar_photos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => closeModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__top-bar">
        <article className="photo-details-modal__item">
          <PhotoFavButton fav={fav} toggleFav={(toggleFav)}  selectedPhoto={selectedPhoto} />
          <img src={urls.full} alt={`image taken by ${user.username}`} className="photo-details-modal__image"/>
          <div className="photo-details-modal__photographer-info">
            <img src={user.profile} alt={`${user.username} profile img`} className="photo-details-modal__photographer-profile" />
            <div className="photo-details-modal__photographer-details">
              <p>{user.username}</p>
              <p className="photo-details-modal__photographer-location">{location.city}, {location.country}</p>
            </div>
          </div>
        </article>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList openModal={openModal} toggleFav={toggleFav} fav={fav} photos={similarPhotosArr} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
