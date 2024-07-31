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
  const photoClick = () => {
    console.log("Image has been clicked");
    setIsModelOpen(true);
  }
  return (
    <div className="App">
      {/* <div>{photos}</div> */}
      {/* <TopNavigation topics={topics} /> */}
      {/* <TopicList /> */}
      {/* <PhotoList photos={photos} /> */}
      <HomeRoute photos={photos} topics={topics} isModalOpen={isModalOpen} photoClick={photoClick} />
      {isModalOpen && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
