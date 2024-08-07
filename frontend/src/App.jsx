import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
// import photos from './mocks/photos';
// import topics from './mocks/topics';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {favourites, toggleFav, openModal, closeModal, selectedPhoto, isModalOpen, photos, topics} = useApplicationData();
  
  return (
    <div className="App">

      <HomeRoute photos={photos} topics={topics} openModal={openModal} closeModal={closeModal} favourites={favourites} toggleFav={toggleFav} />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto} favourites={favourites} toggleFav={toggleFav} openModal={openModal} />}

    </div>
  );
};

export default App;
