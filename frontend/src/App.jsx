import React from 'react';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* <div>{photos}</div> */}
      {/* <TopNavigation topics={topics} /> */}
      {/* <TopicList /> */}
      {/* <PhotoList photos={photos} /> */}
      <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
