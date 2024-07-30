import React from 'react';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './components/HomeRoute';

// const photos = [...Array(3)].map((_, index) => 
//   <PhotoListItem sampleData={sampleDataForPhotoListItem} key={index} />
// );

// console.log("new array", photos);
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* <div>{photos}</div> */}
      {/* <TopNavigation /> */}
      {/* <TopicList /> */}
      {/* <PhotoList /> */}
      <HomeRoute />
    </div>
  );
};

export default App;
