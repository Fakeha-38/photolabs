import {useState} from 'react';

const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFav = (photo) => {
    setFavourites(favourites => {
      if(favourites.includes(photo)) {
        console.log("Favorites: ", favourites)
        return favourites.filter(item => item !== photo);
      } else {
        console.log("Favorites: ", favourites)
        return [...favourites, photo];
      }
    });
  };
  const openModal = (photo) => {
    setIsModelOpen(true);
    setSelectedPhoto(photo)
  }
  const closeModal = () => {
    setIsModelOpen(false);
    setSelectedPhoto(null);
  }
  return {
    favourites,
    toggleFav,
    openModal,
    closeModal,
    selectedPhoto,
    isModalOpen
  }
};

export default useApplicationData;