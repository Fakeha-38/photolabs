import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from "react";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favourites, setFavourites] = useState([]);
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
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setIsModelOpen(true);
    setSelectedPhoto(photo)
  }
  const closeModal = () => {
    setIsModelOpen(false);
    setSelectedPhoto(null);
  }
  return (
    <div className="App">
      {/* <div>{photos}</div> */}
      {/* <TopNavigation topics={topics} /> */}
      {/* <TopicList /> */}
      {/* <PhotoList photos={photos} /> */}
      <HomeRoute photos={photos} topics={topics} openModal={openModal} closeModal={closeModal} favourites={favourites} toggleFav={toggleFav} />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto} favourites={favourites} toggleFav={toggleFav} openModal={openModal} />}
    </div>
  );
};

export default App;
