import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from "react";


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const displayModal = () => {
    setIsModelOpen(true);
  }
  const closeModal = () => {
    setIsModelOpen(false);
  }
  return (
    <div className="App">
      {/* <div>{photos}</div> */}
      {/* <TopNavigation topics={topics} /> */}
      {/* <TopicList /> */}
      {/* <PhotoList photos={photos} /> */}
      <HomeRoute photos={photos} topics={topics} displayModal={displayModal} closeModal={closeModal} />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};

export default App;
