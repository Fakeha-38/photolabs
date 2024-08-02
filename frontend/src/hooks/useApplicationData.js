import {useState} from 'react';

const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]);
  const [modal, setModal] = useState({isModalOpen: false, photo: null});
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFav = (photo) => {
    setFavourites(favourites => {
      if(favourites.includes(photo)) {
        return favourites.filter(item => item !== photo);
      } else {
        return [...favourites, photo];
      }
    });
  };
  const openModal = (photo) => {
    setModal({isModalOpen: true, photo});
  }
  const closeModal = () => {
    setModal({isModalOpen: false, photo: null});
  }
  return {
    favourites,
    toggleFav,
    openModal,
    closeModal,
    selectedPhoto: modal.photo,
    isModalOpen: modal.isModalOpen
  }
};

export default useApplicationData;